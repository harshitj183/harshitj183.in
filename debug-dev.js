// Debug development server with detailed logging
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Clear console
console.clear();
console.log('🔍 Next.js Debug Development Server');
console.log('=================================');

// Environment checks
console.log('\n🔎 Environment Check:');
console.log(`Node version: ${process.version}`);
console.log(`Current directory: ${process.cwd()}`);

// Check if running from the correct directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ Error: package.json not found. Make sure to run this script from the project root.');
  process.exit(1);
}

// Check next.config.js
const nextConfigPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('✅ next.config.js found');
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  if (nextConfig.includes('output:') && nextConfig.includes('export')) {
    console.log('ℹ️ Note: next.config.js contains output: "export" which is for static site generation');
  }
} else {
  console.log('⚠️ Warning: next.config.js not found');
}

// Check src/app directory structure
const appDir = path.join(process.cwd(), 'src', 'app');
if (fs.existsSync(appDir)) {
  console.log('✅ src/app directory found');
  const files = fs.readdirSync(appDir);
  console.log(`📂 App directory contents: ${files.join(', ')}`);
} else {
  console.log('❌ src/app directory not found. App router setup may be incorrect.');
}

// Start Next.js in development mode with diagnostic info
console.log('\n🚀 Starting Next.js in development mode with DEBUG=true...');

// Set environment variables
process.env.DEBUG = 'true';
process.env.NODE_ENV = 'development';
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Run the development server
const nextDev = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

// Handle process events
nextDev.on('error', (err) => {
  console.error('❌ Failed to start development server:', err);
});

nextDev.on('close', (code) => {
  console.log(`\n🛑 Development server exited with code ${code}`);
});

// Display helpful information
console.log('\n📋 Troubleshooting Tips:');
console.log('- If you see 404 errors, check your route files in src/app');
console.log('- For API errors, check handlers in src/app/api');
console.log('- For static export issues, remove "output: export" from next.config.js during development');
console.log('- Press Ctrl+C to stop the server');
