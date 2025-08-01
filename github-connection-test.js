#!/usr/bin/env node

/**
 * GitHub Repository Connection Test
 * Tests connection to the harshitj183.in repository
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n📋 ${description}`, 'cyan');
  try {
    const output = execSync(command, { encoding: 'utf8', cwd: __dirname });
    log(`✅ Success: ${output.trim()}`, 'green');
    return { success: true, output: output.trim() };
  } catch (error) {
    log(`❌ Error: ${error.message}`, 'red');
    return { success: false, error: error.message };
  }
}

function checkFileExists(filePath, description) {
  log(`\n📁 ${description}`, 'cyan');
  if (fs.existsSync(filePath)) {
    log(`✅ Found: ${filePath}`, 'green');
    return true;
  } else {
    log(`❌ Missing: ${filePath}`, 'red');
    return false;
  }
}

async function main() {
  log('🚀 GitHub Repository Connection Test', 'bright');
  log('=====================================', 'bright');
  
  const results = {};
  
  // Check if we're in a git repository
  results.gitRepo = runCommand('git rev-parse --is-inside-work-tree', 'Checking if directory is a Git repository');
  
  // Check remote origin
  results.remoteOrigin = runCommand('git remote get-url origin', 'Checking remote origin URL');
  
  // Check current branch
  results.currentBranch = runCommand('git branch --show-current', 'Checking current branch');
  
  // Check git status
  results.gitStatus = runCommand('git status --porcelain', 'Checking git status (uncommitted changes)');
  
  // Check last commit
  results.lastCommit = runCommand('git log -1 --oneline', 'Checking last commit');
  
  // Check remote branches
  results.remoteBranches = runCommand('git branch -r', 'Checking remote branches');
  
  // Check GitHub CLI authentication
  results.githubAuth = runCommand('gh auth status', 'Checking GitHub CLI authentication');
  
  // Test connection to GitHub
  results.githubConnection = runCommand('git ls-remote origin', 'Testing connection to GitHub repository');
  
  // Check if we can fetch from remote
  results.fetchTest = runCommand('git fetch --dry-run', 'Testing fetch from remote (dry run)');
  
  // Check package.json for repository info
  results.packageJson = checkFileExists('./package.json', 'Checking for package.json');
  
  if (results.packageJson) {
    try {
      const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
      if (packageData.repository) {
        log(`✅ Repository in package.json: ${JSON.stringify(packageData.repository)}`, 'green');
      } else {
        log(`⚠️  No repository field in package.json`, 'yellow');
      }
    } catch (error) {
      log(`❌ Error reading package.json: ${error.message}`, 'red');
    }
  }
  
  // Summary
  log('\n📊 CONNECTION SUMMARY', 'bright');
  log('====================', 'bright');
  
  const successCount = Object.values(results).filter(r => r.success).length;
  const totalTests = Object.keys(results).length - 1; // Exclude packageJson check
  
  if (results.gitRepo.success && results.remoteOrigin.success) {
    log(`🟢 Git Repository: Connected`, 'green');
    log(`🟢 Remote Origin: ${results.remoteOrigin.output}`, 'green');
  } else {
    log(`🔴 Git Repository: Not properly configured`, 'red');
  }
  
  if (results.githubConnection.success) {
    log(`🟢 GitHub Connection: Working`, 'green');
  } else {
    log(`🔴 GitHub Connection: Failed`, 'red');
  }
  
  if (results.currentBranch.success) {
    log(`🟢 Current Branch: ${results.currentBranch.output}`, 'green');
  }
  
  if (results.gitStatus.success) {
    if (results.gitStatus.output === '') {
      log(`🟢 Working Directory: Clean`, 'green');
    } else {
      log(`🟡 Working Directory: Has uncommitted changes`, 'yellow');
    }
  }
  
  log(`\n📈 Test Results: ${successCount}/${totalTests} tests passed`, successCount === totalTests ? 'green' : 'yellow');
  
  if (successCount === totalTests) {
    log('\n🎉 All tests passed! Your GitHub repository connection is working perfectly.', 'green');
  } else {
    log('\n⚠️  Some tests failed. Check the errors above for details.', 'yellow');
  }
}

// Run the test
if (require.main === module) {
  main().catch(error => {
    log(`\n💥 Unexpected error: ${error.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { main, runCommand, checkFileExists };