// Advanced LeetCode API Debug Tool
// Run with: node leetcode-advanced-debug.js

require('dotenv').config({ path: '.env.local' });

// Using native fetch instead of node-fetch (for newer Node.js versions)
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || 'harshitj183';
const LEETCODE_API_URL = 'https://leetcode.com/graphql';

// GraphQL query for comprehensive user stats
const userStatsQuery = `
  query getUserStats($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      submitStats: submitStatsGlobal {
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
      profile {
        realName
        userAvatar
        ranking
      }
      userCalendar {
        activeYears
        streak
        totalActiveDays
        submissionCalendar
      }
    }
  }
`;

// GraphQL query for recent submissions
const recentSubmissionsQuery = `
  query getRecentSubmissions($username: String!, $limit: Int!) {
    recentSubmissionList(username: $username, limit: $limit) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
  }
`;

async function fetchWithTimeout(url, options, timeout = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function testLeetCodeUserStats() {
  console.log(`Testing LeetCode API for user stats: ${LEETCODE_USERNAME}`);
  console.log('-----------------------------------------');
  
  try {
    const startTime = Date.now();
    
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json',
      'Origin': 'https://leetcode.com',
      'Referer': 'https://leetcode.com/',
      'Cache-Control': 'no-cache',
    };
    
    if (process.env.LEETCODE_COOKIE) {
      console.log('Using provided cookie for authenticated request');
      headers['Cookie'] = process.env.LEETCODE_COOKIE;
    } else {
      console.log('No cookie provided, using unauthenticated request');
    }
    
    console.log('Making User Stats API request...');
    
    const response = await fetchWithTimeout(LEETCODE_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: userStatsQuery,
        variables: { username: LEETCODE_USERNAME },
        operationName: 'getUserStats'
      }),
    });
    
    const responseTime = Date.now() - startTime;
    
    console.log(`Response Status: ${response.status} ${response.statusText}`);
    console.log(`Response Time: ${responseTime}ms`);
    
    if (!response.ok) {
      console.error('API request failed');
      try {
        const errorText = await response.text();
        console.error('Error details:', errorText);
      } catch (err) {
        console.error('Could not read error details');
      }
      return;
    }
    
    const data = await response.json();
    
    if (data.errors) {
      console.error('API returned errors:', data.errors);
      return;
    }
    
    console.log('\nAPI Response:');
    console.log(JSON.stringify(data.data, null, 2));
    
    if (data.data?.matchedUser) {
      console.log('\n✅ Success! Found user stats for', data.data.matchedUser.username);
      
      // Process and display key statistics
      const user = data.data.matchedUser;
      const submitStats = user.submitStats;
      const allQuestions = data.data.allQuestionsCount;
      
      if (submitStats && submitStats.acSubmissionNum) {
        const acSubmissions = submitStats.acSubmissionNum;
        
        const totalSolved = acSubmissions.find(s => s.difficulty === "All")?.count || 0;
        const easySolved = acSubmissions.find(s => s.difficulty === "Easy")?.count || 0;
        const mediumSolved = acSubmissions.find(s => s.difficulty === "Medium")?.count || 0;
        const hardSolved = acSubmissions.find(s => s.difficulty === "Hard")?.count || 0;
        
        const totalQuestions = allQuestions.find(q => q.difficulty === "All")?.count || 0;
        const easyQuestions = allQuestions.find(q => q.difficulty === "Easy")?.count || 0;
        const mediumQuestions = allQuestions.find(q => q.difficulty === "Medium")?.count || 0;
        const hardQuestions = allQuestions.find(q => q.difficulty === "Hard")?.count || 0;
        
        console.log('\n📊 LeetCode Statistics Summary:');
        console.log('---------------------------');
        console.log(`Total Solved: ${totalSolved} / ${totalQuestions}`);
        console.log(`Easy: ${easySolved} / ${easyQuestions}`);
        console.log(`Medium: ${mediumSolved} / ${mediumQuestions}`);
        console.log(`Hard: ${hardSolved} / ${hardQuestions}`);
        console.log(`Ranking: ${user.profile.ranking}`);
        
        if (user.userCalendar) {
          console.log(`Active Days: ${user.userCalendar.totalActiveDays}`);
          console.log(`Current Streak: ${user.userCalendar.streak}`);
        }
      } else {
        console.log('❌ No submission stats available');
      }
      
      // Compare with what's shown in the portfolio
      console.log('\n🔄 Comparison with Portfolio Data:');
      console.log('--------------------------------');
      console.log('Portfolio shows: 150 problems solved');
      console.log('Portfolio shows: 75 Easy, 60 Medium, 15 Hard');
      console.log('Portfolio shows: Ranking 100000');
      console.log('Portfolio shows: 50 Active Days');
    } else {
      console.log('\n❌ Error: User not found');
    }
    
  } catch (error) {
    console.error('Error testing LeetCode API:', error);
  }
}

async function testRecentSubmissions() {
  console.log(`\nTesting Recent Submissions for: ${LEETCODE_USERNAME}`);
  console.log('-----------------------------------------');
  
  try {
    const startTime = Date.now();
    
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json',
      'Origin': 'https://leetcode.com',
      'Referer': 'https://leetcode.com/',
      'Cache-Control': 'no-cache',
    };
    
    if (process.env.LEETCODE_COOKIE) {
      headers['Cookie'] = process.env.LEETCODE_COOKIE;
    }
    
    console.log('Making Recent Submissions API request...');
    
    const response = await fetchWithTimeout(LEETCODE_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: recentSubmissionsQuery,
        variables: { username: LEETCODE_USERNAME, limit: 5 },
        operationName: 'getRecentSubmissions'
      }),
    });
    
    const responseTime = Date.now() - startTime;
    
    console.log(`Response Status: ${response.status} ${response.statusText}`);
    console.log(`Response Time: ${responseTime}ms`);
    
    if (!response.ok) {
      console.error('API request failed');
      return;
    }
    
    const data = await response.json();
    
    if (data.errors) {
      console.error('API returned errors:', data.errors);
      return;
    }
    
    console.log('\nRecent Submissions:');
    if (data.data?.recentSubmissionList) {
      data.data.recentSubmissionList.forEach((submission, index) => {
        console.log(`${index + 1}. ${submission.title} (${submission.statusDisplay}) - ${submission.lang}`);
      });
    } else {
      console.log('No recent submissions found');
    }
    
  } catch (error) {
    console.error('Error testing recent submissions:', error);
  }
}

async function runAllTests() {
  await testLeetCodeUserStats();
  await testRecentSubmissions();
}

runAllTests();
