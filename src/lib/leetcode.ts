// LeetCode API utilities with robust error handling and fallbacks
const LEETCODE_API_URL = process.env.LEETCODE_API_URL || 'https://leetcode.com/graphql';
const LEETCODE_STATS_API = process.env.LEETCODE_STATS_API || 'https://leetcode-stats-api.herokuapp.com';
const LEETCODE_PROFILE_URL = 'https://leetcode.com';
export const LEETCODE_USERNAME = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'harshitj183';
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';
const USE_MOCK_DATA = process.env.USE_MOCK_DATA === 'true';
const FORCE_REAL_DATA = process.env.FORCE_REAL_DATA === 'true';
const USE_PUBLIC_STATS_API = process.env.USE_PUBLIC_STATS_API !== 'false';

// Type Definitions
export interface LeetCodeUser {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  reputation: number;
  gitHubUrl?: string;
  twitterUrl?: string;
  linkedInUrl?: string;
  profile: {
    realName: string;
    aboutMe: string;
    userAvatar: string;
    location: string;
    skillTags: string[];
    postViewCount: number;
    solutionCount: number;
    reputation: number;
  };
}

export interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

// Cache management
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: any; timestamp: number }>();

function isCacheValid(key: string): boolean {
  const cached = cache.get(key);
  if (!cached) return false;
  return Date.now() - cached.timestamp < CACHE_DURATION;
}

function getCachedData<T>(key: string): T | null {
  if (isCacheValid(key)) {
    return cache.get(key)?.data || null;
  }
  return null;
}

function setCachedData<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// GraphQL queries
const GET_USER_PROFILE = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      githubUrl
      twitterUrl
      linkedinUrl
      profile {
        realName
        aboutMe
        userAvatar
        location
        skillTags
        postViewCount
        solutionCount
        reputation
        ranking
      }
    }
  }
`;

const GET_USER_STATS = `
  query getUserStats($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      profile {
        ranking
        reputation
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

/**
 * Helper function to handle LeetCode API requests with retry and fallback logic
 */
async function makeLeetCodeRequest(query: string, variables: any = {}): Promise<any> {
  const cacheKey = `leetcode_${JSON.stringify({ query, variables })}`;
  
  if (DEBUG_MODE) {
    console.log('LeetCode API Request:', {
      query: query.split(' ')[1],
      username: variables.username || LEETCODE_USERNAME,
      forceRealData: FORCE_REAL_DATA,
      usePublicAPI: USE_PUBLIC_STATS_API
    });
  }
  
  // Check cache unless forcing real data
  if (!FORCE_REAL_DATA) {
    const cached = getCachedData(cacheKey);
    if (cached) return cached;
  }

  // If configured to use public API and it's a stats request, try that first
  if (USE_PUBLIC_STATS_API && query.includes('getUserStats')) {
    try {
      const publicStats = await fetchLeetCodeStatsFromAPI();
      if (publicStats) {
        setCachedData(cacheKey, publicStats);
        return publicStats;
      }
    } catch (err) {
      console.warn('Failed to fetch from public stats API, falling back to GraphQL:', err);
    }
  }

  // Try the GraphQL API with retries
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      // For client-side requests, use the public stats API or fail gracefully
      if (typeof window !== 'undefined' && !process.env.LEETCODE_SESSION) {
        throw new Error('LeetCode session required for GraphQL API on client-side');
      }

      const response = await fetch(LEETCODE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': LEETCODE_PROFILE_URL,
          'Referer': LEETCODE_PROFILE_URL,
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          ...(process.env.LEETCODE_SESSION ? { 'Cookie': `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}` } : {})
        },
        credentials: 'include',
        body: JSON.stringify({
          query,
          variables,
          operationName: query.split(' ')[1]?.replace(/[^a-zA-Z0-9]/g, '') || 'leetCodeQuery'
        }),
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors?.length > 0) {
        throw new Error(`LeetCode API error: ${data.errors[0]?.message}`);
      }

      if (!data.data) {
        throw new Error('LeetCode API returned no data');
      }

      // Cache successful response
      setCachedData(cacheKey, data.data);
      return data.data;
    } catch (err) {
      if (DEBUG_MODE) {
        console.warn(`LeetCode API request failed (attempt ${attempt + 1}/3):`, err);
      }
      
      if (attempt === 2) {
        // On final attempt, try the public API again for stats if we haven't already
        if (!USE_PUBLIC_STATS_API && query.includes('getUserStats')) {
          try {
            const publicStats = await fetchLeetCodeStatsFromAPI();
            if (publicStats) {
              setCachedData(cacheKey, publicStats);
              return publicStats;
            }
          } catch (finalErr) {
            throw err; // Throw the original error if public API also fails
          }
        } else {
          throw err;
        }
      }

      // Backoff before retry
      await new Promise(resolve => setTimeout(resolve, Math.min(1000 * Math.pow(2, attempt), 8000)));
    }
  }

  throw new Error('Failed to fetch LeetCode data after retries');
}

// Exported API functions
export async function fetchLeetCodeUser(username: string = LEETCODE_USERNAME): Promise<LeetCodeUser> {
  try {
    const data = await makeLeetCodeRequest(GET_USER_PROFILE, { username });

    if (!data?.matchedUser) {
      throw new Error('No user data returned');
    }

    const user = data.matchedUser;
    return {
      username: user.username || username,
      name: user.profile?.realName || username,
      avatar: user.profile?.userAvatar || '/default-avatar.png',
      ranking: user.profile?.ranking || 100000,
      reputation: user.profile?.reputation || 0,
      gitHubUrl: user.githubUrl || `https://github.com/${username}`,
      twitterUrl: user.twitterUrl || '',
      linkedInUrl: user.linkedinUrl || '',
      profile: {
        realName: user.profile?.realName || username,
        aboutMe: user.profile?.aboutMe || '',
        userAvatar: user.profile?.userAvatar || '/default-avatar.png',
        location: user.profile?.location || '',
        skillTags: user.profile?.skillTags || [],
        postViewCount: user.profile?.postViewCount || 0,
        solutionCount: user.profile?.solutionCount || 0,
        reputation: user.profile?.reputation || 0,
      },
    };
  } catch (error) {
    console.error('Error fetching LeetCode user:', error);
    throw error;
  }
}

export async function fetchLeetCodeStats(username: string = LEETCODE_USERNAME): Promise<LeetCodeStats> {
  try {
    const data = await makeLeetCodeRequest(GET_USER_STATS, { username });

    if (!data?.matchedUser || !data.allQuestionsCount) {
      throw new Error('Invalid stats data returned');
    }

    const stats = data.matchedUser.submitStats;
    const totalStats = stats?.acSubmissionNum?.find((s: any) => s.difficulty === 'All') || { count: 0, submissions: 0 };
    const easyStats = stats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Easy') || { count: 0 };
    const mediumStats = stats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Medium') || { count: 0 };
    const hardStats = stats?.acSubmissionNum?.find((s: any) => s.difficulty === 'Hard') || { count: 0 };

    const totalQuestions = data.allQuestionsCount.reduce((sum: number, q: any) => 
      sum + (q.difficulty !== 'All' ? q.count : 0), 0);

    const acceptanceRate = totalStats.submissions > 0 
      ? (totalStats.count / totalStats.submissions) * 100 
      : 0;

    return {
      totalSolved: totalStats.count,
      totalQuestions,
      easySolved: easyStats.count,
      mediumSolved: mediumStats.count,
      hardSolved: hardStats.count,
      acceptanceRate: Math.round(acceptanceRate * 100) / 100,
      ranking: data.matchedUser.profile?.ranking || 100000,
      contributionPoints: 0,
      reputation: data.matchedUser.profile?.reputation || 0
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    throw error;
  }
}

export async function fetchLeetCodeStatsFromAPI(username: string = LEETCODE_USERNAME): Promise<any> {
  try {
    const response = await fetch(`${LEETCODE_STATS_API}/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch from LeetCode Stats API: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from LeetCode Stats API:', error);
    throw error;
  }
}
