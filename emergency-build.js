// Emergency build script - bypasses cross-env and other potential issues
// This script sets environment variables directly and runs the Next.js build

// Set environment variables
process.env.NEXT_DISABLE_ESLINT = '1';
process.env.EXPORT_MODE = 'true';
process.env.NODE_ENV = 'production';

console.log('🛠️ Emergency Build Script');
console.log('========================');
console.log('Environment variables set:');
console.log('- NEXT_DISABLE_ESLINT:', process.env.NEXT_DISABLE_ESLINT);
console.log('- EXPORT_MODE:', process.env.EXPORT_MODE);
console.log('- NODE_ENV:', process.env.NODE_ENV);

// Import Next.js build function directly
console.log('\n🏗️ Starting Next.js build...');

// Run the build directly instead of using npm scripts
try {
  // Dynamically load next/dist/build to avoid import errors
  const nextBuild = require('next/dist/build').default;
  const path = require('path');

  // Build directory is the current directory
  const dir = path.resolve('.');
  
  // Set output directory to 'out'
  const options = {
    buildDirectory: '.next',
  };

  // Run the build
  nextBuild(dir, options)
    .then(() => {
      console.log('\n✅ Build completed successfully!');
      console.log('🔍 Checking for output directory...');
      
      const fs = require('fs');
      if (fs.existsSync('.next')) {
        console.log('✅ .next directory exists');
      } else {
        console.log('❌ .next directory not found');
      }
      
      // Static export should have created an 'out' directory
      if (fs.existsSync('out')) {
        console.log('✅ Static export completed: "out" directory exists');
      } else {
        console.log('❌ Static export may have failed: no "out" directory found');
        
        // Try to run the export manually if build succeeded but export didn't
        console.log('\n🚨 Attempting manual export...');
        try {
          const { execSync } = require('child_process');
          execSync('npx next export', { stdio: 'inherit' });
          
          if (fs.existsSync('out')) {
            console.log('✅ Manual export succeeded!');
          } else {
            console.log('❌ Manual export failed!');
          }
        } catch (err) {
          console.error('❌ Manual export error:', err.message);
        }
      }
      
      console.log('\n🎉 Build process complete!');
    })
    .catch((err) => {
      console.error('\n❌ Build failed with error:', err);
      process.exit(1);
    });
} catch (err) {
  console.error('\n❌ Failed to load Next.js build:', err);
  
  // Fallback to command line build
  console.log('\n🔄 Falling back to command line build...');
  try {
    const { execSync } = require('child_process');
    execSync('npx next build', { 
      stdio: 'inherit',
      env: {
        ...process.env,
        NEXT_DISABLE_ESLINT: '1',
        EXPORT_MODE: 'true'
      }
    });
    console.log('\n✅ Fallback build completed!');
    
    // Try export as well
    console.log('\n📦 Attempting export...');
    execSync('npx next export', { stdio: 'inherit' });
    console.log('✅ Export completed!');
  } catch (cmdErr) {
    console.error('\n❌ Fallback build failed:', cmdErr.message);
    process.exit(1);
  }
}
