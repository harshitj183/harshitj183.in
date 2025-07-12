// LeetCode API Debug Tool
// Run with: node leetcode-debug.js

require('dotenv').config({ path: '.env.local' });

// Using native fetch instead of node-fetch (for newer Node.js versions)
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || 'harshitj183';
const LEETCODE_API_URL = 'https://leetcode.com/graphql';

// GraphQL query to test
const testQuery = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
        ranking
      }
    }
  }
`;

async function testLeetCodeAPI() {
  console.log(`Testing LeetCode API for username: ${LEETCODE_USERNAME}`);
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
    
    console.log('Making API request...');
    
    const response = await fetch(LEETCODE_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: testQuery,
        variables: { username: LEETCODE_USERNAME },
        operationName: 'getUserProfile'
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
      console.log('\n✅ Success! Found user profile for', data.data.matchedUser.username);
    } else {
      console.log('\n❌ Error: User profile not found');
    }
    
  } catch (error) {
    console.error('Error testing LeetCode API:', error);
  }
}

testLeetCodeAPI();
