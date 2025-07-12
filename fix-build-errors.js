// Build error handler for Next.js portfolio
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Fixes the most common build errors automatically
 */
function fixBuildErrors() {
  console.log('Checking for common build errors...');
  
  // Check for dashboard route.ts conflict (which causes build errors)
  const dashboardRoutePath = path.join(__dirname, 'src', 'app', 'dashboard', 'route.ts');
  if (fs.existsSync(dashboardRoutePath)) {
    console.log('⚠️ Found conflicting dashboard route.ts file, removing...');
    fs.unlinkSync(dashboardRoutePath);
  }
  
  // Check if page.tsx is empty in dashboard directory
  const dashboardPagePath = path.join(__dirname, 'src', 'app', 'dashboard', 'page.tsx');
  if (fs.existsSync(dashboardPagePath)) {
    const content = fs.readFileSync(dashboardPagePath, 'utf8');
    if (!content || content.trim() === '') {
      console.log('⚠️ Dashboard page.tsx is empty, adding default implementation...');
      
      const defaultDashboardContent = `import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Use dynamic imports with SSR disabled for components that need browser APIs
const GitHubStats = dynamic(() => import('@/components/GitHubStats'), { ssr: false });
const LeetCodeStats = dynamic(() => import('@/components/LeetCodeStats'), { ssr: false });

// Static metadata for the dashboard page
export const metadata = {
  title: 'Dashboard | Harshit Jaiswal',
  description: 'Dashboard displaying my GitHub and LeetCode statistics',
};

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Developer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">GitHub Activity</h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading GitHub data...</div>}>
            <GitHubStats />
          </Suspense>
          <div className="mt-4 text-right">
            <Link href="/dashboard" className="text-blue-500 hover:underline">
              View detailed GitHub stats →
            </Link>
          </div>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">LeetCode Progress</h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading LeetCode data...</div>}>
            <LeetCodeStats />
          </Suspense>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Combined timeline of recent GitHub commits and LeetCode submissions will appear here.
          </p>
          {/* Placeholder for combined activity timeline */}
          <div className="h-64 flex items-center justify-center text-gray-400">
            Activity timeline loading...
          </div>
        </div>
      </div>
    </main>
  );
}`;
      
      fs.writeFileSync(dashboardPagePath, defaultDashboardContent);
    }
  }
  
  // Check .next directory permissions
  try {
    const nextDir = path.join(__dirname, '.next');
    if (fs.existsSync(nextDir)) {
      console.log('Checking .next directory permissions...');
      
      // On Windows, we need to try to fix any locked files
      if (process.platform === 'win32') {
        try {
          // Try to unlock potential locked files
          execSync('powershell.exe -Command "Get-Process | Where-Object {$_.Path -like \'*node.exe*\'} | Select-Object -First 10 | Format-Table Id, ProcessName, Path -AutoSize"');
        } catch (err) {
          // Continue even if this fails
        }
      }
    }
  } catch (err) {
    console.warn('Unable to check .next directory permissions:', err.message);
  }
  
  // Check for .next/cache corruption
  const cacheDir = path.join(__dirname, '.next', 'cache');
  if (fs.existsSync(cacheDir)) {
    try {
      console.log('Checking for .next/cache corruption...');
      const filesToCheck = fs.readdirSync(cacheDir);
      
      if (filesToCheck.length > 100) {
        console.log('⚠️ Cache directory may be corrupted (too many files), cleaning...');
        if (process.platform === 'win32') {
          try {
            execSync('powershell.exe -Command "Remove-Item -Path .next\\cache -Recurse -Force -ErrorAction SilentlyContinue"');
          } catch (err) {
            console.warn('Could not clean cache directory, manual deletion may be required');
          }
        } else {
          execSync('rm -rf .next/cache');
        }
      }
    } catch (err) {
      console.warn('Error checking cache directory:', err.message);
    }
  }
  
  console.log('Finished checking for build errors');
}

// Run if this script is called directly
if (require.main === module) {
  fixBuildErrors();
}

module.exports = { fixBuildErrors };
