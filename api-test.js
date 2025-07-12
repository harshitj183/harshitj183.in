/**
 * API Integration Test Script
 * 
 * This script tests the GitHub and LeetCode API integrations without
 * having to run the full Next.js development server.
 * 
 * Usage:
 *   node api-test.js github
 *   node api-test.js leetcode
 *   node api-test.js all
 */

const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');

// Load environment variables
try {
  const envContent = fs.readFileSync('.env.local');
  dotenv.config({ path: '.env.local' });
  console.log('✅ Loaded environment variables from .env.local');
} catch (err) {
  console.log('⚠️ No .env.local file found, using default values');
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'harshitj183';
const LEETCODE_USERNAME = process.env.LEETCODE_USERNAME || process.env.NEXT_PUBLIC_LEETCODE_USERNAME || 'harshitj183';

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            resolve(data);
          }
        } else {
          reject({
            statusCode: res.statusCode,
            data
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// Test GitHub API
async function testGitHubAPI() {
  console.log('🔍 Testing GitHub API...');
  
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
    console.log('✅ Using GitHub token for authentication');
  } else {
    console.log('⚠️ No GitHub token found, rate limits may apply');
  }
  
  try {
    console.log(`🔗 Fetching GitHub profile for ${GITHUB_USERNAME}...`);
    const userProfile = await makeRequest(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers }
    );
    
    console.log('✅ GitHub profile retrieved successfully');
    console.log('------------------------------------');
    console.log(`Username: ${userProfile.login}`);
    console.log(`Name: ${userProfile.name}`);
    console.log(`Bio: ${userProfile.bio}`);
    console.log(`Public repos: ${userProfile.public_repos}`);
    console.log(`Followers: ${userProfile.followers}`);
    console.log('------------------------------------');
    
    console.log(`🔗 Fetching recent GitHub activity...`);
    const activities = await makeRequest(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`,
      { headers }
    );
    
    console.log('✅ GitHub activities retrieved successfully');
    console.log('------------------------------------');
    activities.forEach((activity, index) => {
      console.log(`${index + 1}. [${activity.type}] ${activity.repo.name} - ${new Date(activity.created_at).toLocaleString()}`);
    });
    console.log('------------------------------------');
    
    return true;
  } catch (error) {
    console.error('❌ Error testing GitHub API:', error);
    return false;
  }
}

// Test LeetCode API
async function testLeetCodeAPI() {
  console.log('🔍 Testing LeetCode API...');
  
  try {
    // Try the public stats API first (more reliable)
    console.log(`🔗 Fetching LeetCode stats from public API for ${LEETCODE_USERNAME}...`);
    const statsUrl = `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`;
    
    const leetCodeStats = await makeRequest(statsUrl);
    
    console.log('✅ LeetCode stats retrieved successfully');
    console.log('------------------------------------');
    console.log(`Status: ${leetCodeStats.status}`);
    console.log(`Username: ${leetCodeStats.username}`);
    console.log(`Total solved: ${leetCodeStats.totalSolved}`);
    console.log(`Easy: ${leetCodeStats.easySolved}/${leetCodeStats.totalEasy}`);
    console.log(`Medium: ${leetCodeStats.mediumSolved}/${leetCodeStats.totalMedium}`);
    console.log(`Hard: ${leetCodeStats.hardSolved}/${leetCodeStats.totalHard}`);
    console.log(`Acceptance rate: ${leetCodeStats.acceptanceRate}%`);
    console.log('------------------------------------');
    
    return true;
  } catch (error) {
    console.error('❌ Error testing LeetCode API:', error);
    
    // Try to test if the GraphQL API is accessible
    console.log('🔄 Attempting to check LeetCode GraphQL API accessibility...');
    
    try {
      // Just check if the endpoint responds
      await makeRequest('https://leetcode.com/graphql', {
        method: 'HEAD',
      });
      console.log('✅ LeetCode GraphQL API seems to be accessible');
      console.log('⚠️ The API might need authentication or proper GraphQL query structure');
    } catch (gqlError) {
      console.error('❌ LeetCode GraphQL API is not accessible:', gqlError);
    }
    
    return false;
  }
}

// Main function
async function main() {
  const arg = process.argv[2]?.toLowerCase() || 'all';
  
  console.log('🚀 Starting API integration test');
  console.log('====================================');
  
  let githubSuccess = false;
  let leetcodeSuccess = false;
  
  if (arg === 'github' || arg === 'all') {
    githubSuccess = await testGitHubAPI();
    console.log('\n');
  }
  
  if (arg === 'leetcode' || arg === 'all') {
    leetcodeSuccess = await testLeetCodeAPI();
  }
  
  console.log('\n====================================');
  console.log('📊 Test Summary');
  
  if (arg === 'github' || arg === 'all') {
    console.log(`GitHub API: ${githubSuccess ? '✅ Working' : '❌ Failed'}`);
  }
  
  if (arg === 'leetcode' || arg === 'all') {
    console.log(`LeetCode API: ${leetcodeSuccess ? '✅ Working' : '❌ Failed'}`);
  }
  
  if (arg === 'all') {
    console.log(`Overall Integration: ${(githubSuccess && leetcodeSuccess) ? '✅ Working' : '⚠️ Partial or not working'}`);
  }
  
  console.log('\n📝 For troubleshooting, check the BUILD_GUIDE.md file');
}

main().catch(error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});
