// Build helpers for Next.js portfolio
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Helper function to clean up .next directory to avoid file lock issues
 */
function cleanNextDirectory() {
  console.log('Cleaning up .next directory...');
  try {
    const nextDir = path.join(__dirname, '.next');
    
    // Check if .next directory exists before attempting to clean it
    if (fs.existsSync(nextDir)) {
      // Force remove .next directory
      if (process.platform === 'win32') {
        // Use PowerShell on Windows for better handling of locked files
        execSync('powershell.exe -Command "Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue"');
      } else {
        // Use rm on Unix-like systems
        execSync('rm -rf .next');
      }
      console.log('.next directory cleaned successfully');
    } else {
      console.log('.next directory does not exist, skipping cleanup');
    }
    return true;
  } catch (error) {
    console.error('Error cleaning .next directory:', error);
    // Continue anyway
    return false;
  }
}

/**
 * Helper function to clean up build-related files
 */
function cleanBuildArtifacts() {
  console.log('Cleaning build artifacts...');
  try {
    // Array of directories and files to clean
    const toClean = [
      '.next',
      'out',
      'node_modules/.cache',
      'tsconfig.tsbuildinfo'
    ];
    
    for (const item of toClean) {
      const itemPath = path.join(__dirname, item);
      if (fs.existsSync(itemPath)) {
        if (process.platform === 'win32') {
          try {
            execSync(`powershell.exe -Command "Remove-Item -Path ${item.replace(/\//g, '\\')} -Recurse -Force -ErrorAction SilentlyContinue"`);
          } catch (err) {
            console.warn(`Warning: Could not clean ${item}, may be in use`);
          }
        } else {
          execSync(`rm -rf ${item}`);
        }
      }
    }
    console.log('Build artifacts cleaned successfully');
    return true;
  } catch (error) {
    console.error('Error cleaning build artifacts:', error);
    return false;
  }
}

// Export helper functions
module.exports = {
  cleanNextDirectory,
  cleanBuildArtifacts
};

// If called directly from command line
if (require.main === module) {
  const arg = process.argv[2];
  
  if (arg === 'clean') {
    cleanNextDirectory();
  } else if (arg === 'clean-all') {
    cleanBuildArtifacts();
  } else {
    console.log('Available commands:');
    console.log('  node build-helpers.js clean     - Clean only .next directory');
    console.log('  node build-helpers.js clean-all - Clean all build artifacts');
  }
}
