// Detailed build test script
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Detailed Build Test');
console.log('=====================');

// Environment setup
process.env.NEXT_DISABLE_ESLINT = '1';
process.env.EXPORT_MODE = 'true';

// Step 1: Clean previous build artifacts
console.log('\n🧹 Cleaning previous build artifacts...');
try {
  if (fs.existsSync('.next')) {
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

  if (fs.existsSync('out')) {
    if (process.platform === 'win32') {
      try {
        execSync('powershell.exe -Command "Remove-Item -Path out -Recurse -Force -ErrorAction SilentlyContinue"');
      } catch (err) {
        // Try with regular cmd as fallback
        execSync('rd /s /q out');
      }
    } else {
      execSync('rm -rf out');
    }
  }
  
  console.log('✅ Build directories cleaned successfully');
} catch (err) {
  console.error('❌ Error during cleanup:', err.message);
  // Continue anyway
}

// Step 2: Verify next.config.js settings
console.log('\n🔧 Verifying Next.js configuration...');
try {
  const nextConfig = require('./next.config.js');
  console.log('   Output mode:', nextConfig.output);
  console.log('   ESLint during build:', nextConfig.eslint?.ignoreDuringBuilds ? 'Disabled' : 'Enabled');
  console.log('   TypeScript checking:', nextConfig.typescript?.ignoreBuildErrors ? 'Disabled' : 'Enabled');
  console.log('   Image optimization:', nextConfig.images?.unoptimized ? 'Disabled' : 'Enabled');
  console.log('   Trailing slashes:', nextConfig.trailingSlash ? 'Enabled' : 'Disabled');
  console.log('✅ Configuration verified');
} catch (err) {
  console.error('❌ Error verifying Next.js config:', err.message);
}

// Step 3: Run the build
console.log('\n🏗️ Running Next.js build...');
console.log('   This may take a few minutes...');

const buildProcess = spawn('npm', ['run', 'build'], {
  env: {
    ...process.env,
    NEXT_DISABLE_ESLINT: '1',
    EXPORT_MODE: 'true'
  },
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('\n✅ Build completed successfully!');
    
    // Check build output
    console.log('\n📦 Checking build output...');
    if (fs.existsSync('.next')) {
      const nextStats = fs.statSync('.next');
      console.log(`   .next directory size: ${(nextStats.size / 1024 / 1024).toFixed(2)} MB`);
    }
    
    if (fs.existsSync('out')) {
      const outStats = fs.statSync('out');
      console.log(`   out directory size: ${(outStats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log('   Checking for important static files:');
      
      // Check critical files
      const criticalFiles = [
        'index.html',
        '_next/static/chunks/main.js'
      ];
      
      criticalFiles.forEach(file => {
        if (fs.existsSync(path.join('out', file))) {
          console.log(`   ✅ ${file} exists`);
        } else {
          console.log(`   ❌ ${file} is missing!`);
        }
      });
    } else {
      console.log('   ❌ No "out" directory found. Static export may have failed.');
    }
    
    console.log('\n🎉 Build test completed! Your site should be ready for deployment.');
    console.log('   To test locally: npx serve out');
  } else {
    console.error(`\n❌ Build failed with exit code ${code}`);
    console.log('   Review the errors above and fix them before deploying.');
  }
});
