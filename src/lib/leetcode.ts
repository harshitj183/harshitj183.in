// LeetCode API utilities with robust error handling and fallbacks
const LEETCODE_API_URL = process.env.LEETCODE_API_URL || 'https://leetcode.com/graphql';
const LEETCODE_STATS_API = process.env.LEETCODE_STATS_API || 'https://leetcode-stats-api.herokuapp.com';
const LEETCODE_PROFILE_URL = 'https://leetcode.com';
export const LEETCODE_USERNAME = process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'harshitj183';
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';
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

export interface LeetCodePublicStats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
}

interface LeetCodeResponse {
  data?: {
    matchedUser?: {
      username?: string;
      githubUrl?: string;
      twitterUrl?: string;
      linkedinUrl?: string;
      submitStats?: {
        acSubmissionNum?: Array<{
          difficulty?: string;
          count: number;
          submissions?: number;
        }>;
        totalSubmissionNum?: Array<{
          difficulty?: string;
          count: number;
          submissions?: number;
        }>;
      };
      profile?: {
        realName?: string;
        aboutMe?: string;
        userAvatar?: string;
        location?: string;
        skillTags?: string[];
        postViewCount?: number;
        solutionCount?: number;
        reputation?: number;
        ranking?: number;
      };
    };
    allQuestionsCount?: Array<{
      difficulty: string;
      count: number;
    }>;
  };
  errors?: Array<{ message: string }>;
}

// Cache management
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: unknown; timestamp: number }>();

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
interface LeetCodeResponse {
  data?: {
    matchedUser?: {
      username?: string;
      githubUrl?: string;
      twitterUrl?: string;
      linkedinUrl?: string;
      submitStats?: {
        acSubmissionNum?: Array<{
          difficulty?: string;
          count: number;
          submissions?: number;
        }>;
        totalSubmissionNum?: Array<{
          difficulty?: string;
          count: number;
          submissions?: number;
        }>;
      };
      profile?: {
        realName?: string;
        aboutMe?: string;
        userAvatar?: string;
        location?: string;
        skillTags?: string[];
        postViewCount?: number;
        solutionCount?: number;
        reputation?: number;
        ranking?: number;
      };
    };
    allQuestionsCount?: Array<{
      difficulty: string;
      count: number;
    }>;
  };
  errors?: Array<{ message: string }>;
}

interface RequestVariables {
  username?: string;
  [key: string]: unknown;
}

async function makeLeetCodeRequest(query: string, variables: RequestVariables = {}): Promise<LeetCodeResponse> {
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
    const cached = getCachedData<LeetCodeResponse>(cacheKey);
    if (cached) return cached;
  }

  // If configured to use public API and it's a stats request, try that first
  if (USE_PUBLIC_STATS_API && query.includes('getUserStats')) {
    try {
      const convertedStats = await fetchAndConvertPublicStats();
      if (convertedStats?.data) {
        setCachedData<LeetCodeResponse>(cacheKey, convertedStats);
        return convertedStats;
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
        throw new Error(`LeetCode API error: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      
      // Validate the response structure
      if (!responseData || typeof responseData !== 'object') {
        throw new Error('Invalid response format from LeetCode API');
      }

      const typedResponse: LeetCodeResponse = responseData;

      if (typedResponse.errors && typedResponse.errors.length > 0) {
        throw new Error(`LeetCode API error: ${typedResponse.errors[0].message}`);
      }

      setCachedData<LeetCodeResponse>(cacheKey, typedResponse);
      return typedResponse;

    } catch (error) {
      if (attempt === 2) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }

  throw new Error('Failed to fetch data from LeetCode API after multiple attempts');
}

// Internal function to fetch and convert stats from the public API
async function fetchAndConvertPublicStats(): Promise<LeetCodeResponse> {
  const response = await fetch(`${LEETCODE_STATS_API}/${LEETCODE_USERNAME}`);
  
  if (!response.ok) {
    throw new Error(`Stats API error: ${response.status} ${response.statusText}`);
  }

  const stats: LeetCodePublicStats = await response.json();

  // Convert public API format to GraphQL response format
  return {
    data: {
      matchedUser: {
        submitStats: {
          acSubmissionNum: [
            { count: stats.totalSolved || 0 },
            { count: stats.easySolved || 0 },
            { count: stats.mediumSolved || 0 },
            { count: stats.hardSolved || 0 }
          ]
        },
        profile: {
          ranking: stats.ranking,
          reputation: stats.reputation
        }
      },
      allQuestionsCount: [
        { difficulty: 'Easy', count: stats.totalEasy || 0 },
        { difficulty: 'Medium', count: stats.totalMedium || 0 },
        { difficulty: 'Hard', count: stats.totalHard || 0 }
      ]
    }
  };
}

// Exported API functions
export async function fetchLeetCodeUser(username: string = LEETCODE_USERNAME): Promise<LeetCodeUser> {
  try {
    const response = await makeLeetCodeRequest(GET_USER_PROFILE, { username });

    if (!response?.data?.matchedUser) {
      throw new Error('No user data returned');
    }

    const user = response.data.matchedUser;
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
    const response = await makeLeetCodeRequest(GET_USER_STATS, { username });

    if (!response?.data?.matchedUser || !response.data.allQuestionsCount) {
      throw new Error('Invalid stats data returned');
    }

    const stats = response.data.matchedUser.submitStats;
    const totalStats = stats?.acSubmissionNum?.find(s => s.difficulty === 'All') || { count: 0, submissions: 0 };
    const easyStats = stats?.acSubmissionNum?.find(s => s.difficulty === 'Easy') || { count: 0 };
    const mediumStats = stats?.acSubmissionNum?.find(s => s.difficulty === 'Medium') || { count: 0 };
    const hardStats = stats?.acSubmissionNum?.find(s => s.difficulty === 'Hard') || { count: 0 };

    const totalQuestions = response.data.allQuestionsCount.reduce((sum, q) => 
      sum + (q.difficulty !== 'All' ? q.count : 0), 0);

    const acceptanceRate = totalStats.submissions && totalStats.submissions > 0 
      ? (totalStats.count / totalStats.submissions) * 100 
      : 0;

    return {
      totalSolved: totalStats.count,
      totalQuestions,
      easySolved: easyStats.count,
      mediumSolved: mediumStats.count,
      hardSolved: hardStats.count,
      acceptanceRate: Math.round(acceptanceRate * 100) / 100,
      ranking: response.data.matchedUser.profile?.ranking || 100000,
      contributionPoints: 0,
      reputation: response.data.matchedUser.profile?.reputation || 0
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    throw error;
  }
}

// Export the typed version for external use
export async function fetchLeetCodeStatsFromAPI(username: string = LEETCODE_USERNAME): Promise<LeetCodePublicStats> {
  try {
    const response = await fetch(`${LEETCODE_STATS_API}/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch from LeetCode Stats API: ${response.status}`);
    }
    const data: LeetCodePublicStats = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from LeetCode Stats API:', error);
    throw error;
  }
}
