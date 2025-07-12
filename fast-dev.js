// Fast development server starter with optimizations
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// Configuration
const DISABLE_API_CALLS = true; // Set to true to use mock data for faster development
const DISABLE_TYPE_CHECKING = true; // Skip TypeScript checking during development
const MEMORY_LIMIT = 4096; // Increase Node memory limit

console.log('🚀 Starting optimized development server...');

// Step 1: Cleanup and preparation
console.log('\n📁 Cleaning up build artifacts...');
try {
  // Remove .next directory if it exists
  const nextDir = path.join(__dirname, '.next');
  if (fs.existsSync(nextDir)) {
    if (process.platform === 'win32') {
      try {
        execSync('powershell.exe -Command "Remove-Item -Path .next -Recurse -Force -ErrorAction SilentlyContinue"');
      } catch (err) {
        // Try with regular cmd as fallback
        execSync('rd /s /q .next');
      }
    } else {
      execSync('rm -rf .next');
    }
  }
  console.log('✅ .next directory removed');
} catch (error) {
  console.log('⚠️ Could not remove .next directory, continuing anyway');
}

// Step 2: Create temporary fast-dev environment settings
console.log('\n⚙️ Creating optimized development environment...');
const tempEnvPath = path.join(__dirname, '.env.fast-dev');
let envContent = '';

// Read existing .env.local if it exists
const envLocalPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envLocalPath)) {
  envContent = fs.readFileSync(envLocalPath, 'utf8');
}

// Add or modify optimization settings
if (DISABLE_API_CALLS) {
  envContent += '\n# Fast-dev settings\nUSE_MOCK_DATA=true\n';
  console.log('✅ Using mock data for APIs');
}

// Write the temporary env file
fs.writeFileSync(tempEnvPath, envContent);
console.log('✅ Temporary environment configured');

// Step 3: Start the optimized dev server
console.log('\n🔥 Launching development server with optimizations...');

// Set environment variables for the child process
const env = { ...process.env };
env.NODE_OPTIONS = `--max-old-space-size=${MEMORY_LIMIT}`;
if (DISABLE_TYPE_CHECKING) {
  env.DISABLE_TYPE_CHECK = 'true';
  console.log('✅ TypeScript checking disabled for speed');
}

// Copy the temporary env file to .env.local.temp
fs.copyFileSync(tempEnvPath, path.join(__dirname, '.env.local.temp'));

console.log(`\n🌐 Starting Next.js with ${MEMORY_LIMIT}MB memory limit`);
console.log('\n⏳ Please wait, this may take a moment to start up...');

// Run the process directly on Windows
if (process.platform === 'win32') {
  try {
    // Use execSync for Windows to avoid spawn issues
    execSync('npm run dev', {
      env,
      stdio: 'inherit'
    });
  } catch (error) {
    console.error('Error starting dev server:', error);
    process.exit(1);
  }
} else {
  // On non-Windows platforms, use spawn
  const cmd = 'npm';
  const args = ['run', 'dev'];
  
  // Launch the dev server with the new settings
  const devServer = spawn(cmd, args, { 
    env,
    stdio: 'inherit'
  });
}

// Clean up function
function cleanup() {
  console.log('\n🧹 Cleaning up temporary files...');
  try {
    if (fs.existsSync(tempEnvPath)) {
      fs.unlinkSync(tempEnvPath);
    }
    const localTempPath = path.join(__dirname, '.env.local.temp');
    if (fs.existsSync(localTempPath)) {
      fs.unlinkSync(localTempPath);
    }
  } catch (err) {
    // Ignore cleanup errors
  }
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  cleanup();
  process.exit();
});

// Clean up on exit
process.on('exit', () => {
  cleanup();
});
