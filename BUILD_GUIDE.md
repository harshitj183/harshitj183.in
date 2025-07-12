# Portfolio Website Build Guide

## Overview
This document provides instructions for building, running, and troubleshooting the portfolio website that integrates with GitHub and LeetCode APIs.

## Quick Start (Windows)

For Windows users, we've created a simple batch file to make running common commands easier:

```cmd
# Start development server
build.bat dev

# Start fast development server (uses mock data, skips type checking)
build.bat fast-dev

# Start minimal development server (fastest startup, mock data only)
build.bat minimal-dev

# Fix Server Components SSR errors
build.bat fix-ssr

# Build for production
build.bat build

# Clean build directories
build.bat clean

# Create static export
build.bat export

# Fix common build errors
build.bat fix

# Fix _document.js errors
build.bat fix-doc
```

### Development Server
To start the development server with automatic reloading:

```bash
# Using npm scripts
npm run dev

# Using helper script (recommended)
node run.js dev
```

### Fast Development Mode
If the standard development server is slow to start or you're experiencing long reload times, use one of these options:

```bash
# Option 1: Use the fast development mode with optimizations
build.bat fast-dev

# Option 2: Use minimal development server for fastest startup
build.bat minimal-dev

# Option 3: Run the dedicated batch file (RECOMMENDED FOR WINDOWS)
fast-start.bat
```

#### Fast Development Mode (build.bat fast-dev)
- Uses mock data instead of real API calls
- Skips TypeScript checking during development
- Allocates more memory to Node.js
- Cleans build artifacts before starting

#### Minimal Development Mode (build.bat minimal-dev)
- Fastest possible startup time
- Bypasses most Next.js initialization processes
- Uses mock data for all API calls
- Disables TypeScript and ESLint checking completely

#### Quick Start Batch File (fast-start.bat) - RECOMMENDED
- Simple one-click solution for Windows
- Automatically kills existing Node processes that might block ports
- Cleans build directories to prevent stale cache issues
- Sets optimal environment variables for speed
- Uses the standard Next.js CLI with performance optimizations

These modes are ideal for UI/UX development when you don't need real API data.

### Building the Project
To build the project with proper cleaning of previous build artifacts:

```bash
# Clean build (recommended for CI/CD)
npm run build:clean

# Quick build helper
node run.js build

# Static export (for hosting on GitHub Pages, etc.)
node run.js export
```

## Troubleshooting Build Issues

### Development Server Taking Too Long to Start

If your development server is stuck at "Starting..." for an extended period:

```bash
# Option 1: Use the emergency development starter (Windows)
emergency-dev.bat

# Option 2: Clean everything and start fresh
build.bat clean
build.bat fix
build.bat dev

# Option 3: Quick build test (checks for common issues)
node quick-build-test.js
```

The emergency development script:
- Kills all Node.js processes
- Performs aggressive cache cleaning
- Uses mock data instead of API calls
- Disables TypeScript and ESLint checks
- Allocates extra memory to Node.js

### Quick Build Options

If regular build commands are taking too long:

```bash
# Quick build test (fast, no long operations)
quick-build.bat

# Quick syntax and SSR error check
node quick-build-test.js
```

### Common Issues and Solutions

#### ENOENT/EPERM Errors During Build
These errors often occur due to file locks on Windows or file permission issues:

1. **Use our automatic error fixer:**
   ```bash
   # Windows
   build.bat fix
   
   # Other platforms
   node fix-build-errors.js
   ```

2. **Clean the build directories:**
   ```bash
   # Windows
   build.bat clean
   
   # Other platforms
   npm run clean
   # or for a deeper clean
   npm run clean-all
   ```

3. **Close any processes that might be locking files** like:
   - VS Code terminal sessions running Next.js
   - Other terminal windows
   - Other development servers

### Analytics Troubleshooting

If you're having issues with Microsoft Clarity or Google AdSense:

1. **Environment Variables**: 
   - Check that the variables are properly set in `.env.local` and `.env.production`
   - Verify the format of your IDs: 
     - Clarity: typically a string like `sdeu9zdpft`
     - AdSense: should start with `ca-pub-`

2. **Script Loading**:
   - Check browser console for script loading errors
   - Verify no ad blockers or privacy extensions are blocking the scripts
   - For Clarity: check Network tab in dev tools for requests to `clarity.ms`
   - For AdSense: check for requests to `pagead2.googlesyndication.com`

3. **Components Not Initializing**:
   - Both `GoogleAdsense` and `ClarityAnalytics` components only load in production or when environment variables are set
   - Try setting `NODE_ENV=production` to test them locally

4. **Console Output**:
   - Both components log initialization status to console
   - Check for messages like "Google AdSense initialized with ID:" or "Microsoft Clarity initialized with ID:"

4. **Use the run helper script** which handles cleaning automatically:
   ```bash
   # Windows
   build.bat build
   
   # Other platforms
   node run.js build
   ```

The scripts we've added automatically handle many common issues:
- Clean up corrupted or locked cache files
- Fix dashboard page issues
- Remove conflicting route files
- Restore missing implementations
- Handle file permission problems

#### Next.js Config Issues
The `next.config.ts` file has been updated to conditionally use static export only when needed. This prevents conflicts between dynamic API routes and static export requirements.

#### API Integration Features
- Both GitHub and LeetCode API integrations have robust fallback mechanisms
- LeetCode integration now uses the public LeetCode Stats API (https://leetcode-stats-api.herokuapp.com)
- If API calls fail, we fall back to the GraphQL API and finally to mock data
- Stale-while-revalidate caching improves performance and reliability
- Combined activity timeline merges events from both platforms with visual indicators
- Responsive timeline with hover effects and platform-specific styling

## Customization

### Environment Variables
Create a `.env.local` file with these variables:

```
# GitHub API Integration
GITHUB_TOKEN=your_github_token

# LeetCode Integration
LEETCODE_USERNAME=yourusername
NEXT_PUBLIC_LEETCODE_USERNAME=yourusername  # Also needed for client-side
FORCE_REAL_DATA=true                        # Bypass cache and mock data
DEBUG_LEETCODE=true                         # Enable detailed logging
# LEETCODE_COOKIE=your_leetcode_cookie      # Optional: For authenticated requests

# Build Configuration
EXPORT_MODE=false
USE_MOCK_DATA=false

# Analytics
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id
NEXT_PUBLIC_ADSENSE_ID=your_adsense_publisher_id
```

#### Troubleshooting LeetCode Integration

If your LeetCode profile data is not displaying correctly:

1. **Verify username**: Make sure your LeetCode username is correct in `.env.local`
2. **Force real data**: Set `FORCE_REAL_DATA=true` to bypass caching
3. **Debug mode**: Set `DEBUG_LEETCODE=true` to see detailed API logs
4. **Check the Public API**: The site now uses https://leetcode-stats-api.herokuapp.com/USERNAME for better reliability
5. **API fallbacks**: If the public API fails, it falls back to direct GraphQL API
6. **Network issues**: Ensure there are no firewall or network restrictions blocking API calls

#### Web Analytics Configuration

The portfolio supports Microsoft Clarity and Google AdSense for analytics and monetization:

1. **Microsoft Clarity**: 
   - Get your Clarity Project ID from [clarity.microsoft.com](https://clarity.microsoft.com/)
   - Add to `.env.local` as `NEXT_PUBLIC_CLARITY_ID`
   - Will only be loaded in production or when ID is present

2. **Google AdSense**:
   - Get your AdSense Publisher ID from [adsense.google.com](https://adsense.google.com/)
   - Add to `.env.local` as `NEXT_PUBLIC_ADSENSE_ID`
   - Format: ca-pub-XXXXXXXXXXXXXXXX
   - Will only be loaded in production or when ID is present

You can test the LeetCode Stats API directly in your browser by visiting:
```
https://leetcode-stats-api.herokuapp.com/YOUR_USERNAME
```

## Component Structure

The dashboard page integrates these key components:

- `UnifiedDashboard` - Main container with tab-based navigation between views
- `GithubDashboard` - GitHub-focused version of the unified dashboard
- `GitHubStats` - Shows GitHub profile, activity, and repository data
- `LeetCodeStats` - Shows LeetCode progress, submissions, and badges
- `CodingAnalytics` - Displays coding statistics and platform activity
- `GitHubActivityTimeline` - Timeline showing recent GitHub activities
- `LoadingSpinner` - Provides loading states
- `ErrorBoundary` - Handles component errors gracefully
- `RefreshButton` - Allows manual data refresh

### Dashboard Sections

The unified dashboard includes:

1. **Overview Tab** - Summary of all platforms with:
   - Coding analytics overview
   - GitHub activity highlights
   - LeetCode progress summary
   - Combined activity timeline from all platforms

2. **GitHub Tab** - Detailed GitHub statistics with:
   - Profile information
   - Repository listing
   - Recent activity

3. **LeetCode Tab** - Detailed LeetCode statistics with:
   - Solving progress by difficulty
   - Recent submissions
   - Achievement badges

## Production Deployment

### Final Production Checklist

Before deploying to production, ensure the following are checked:

1. **Environment Variables**: Verify all necessary variables are set in your production environment
   - GitHub token
   - LeetCode username
   - Analytics IDs (Clarity and AdSense)
2. **API Keys**: Ensure GitHub token has appropriate permissions
3. **Error Handling**: Confirm fallback mechanisms work when APIs are unavailable
4. **Performance**: Check that the combined timeline loads efficiently with larger datasets
5. **Mobile Responsiveness**: Test the dashboard on various screen sizes
6. **Analytics Setup**: Verify Clarity and AdSense are properly configured
   - Check developer tools to confirm scripts are loading
   - Verify in respective analytics dashboards

### Deployment Options

For production builds with static export (for GitHub Pages, etc.):

```bash
# Create static build
npm run build:static

# The output will be in the 'out' directory
```

For server-side rendering deployment (Vercel, etc.):

```bash
# Regular build
npm run build

# Test the production build locally
npm run start
```

### Verifying the Build

Once deployed, navigate to the `/dashboard` route to confirm:

1. All tabs (Overview, GitHub, LeetCode) load correctly
2. The combined activity timeline shows events from both platforms
3. Real-time data is being fetched and displayed properly
4. Refresh functionality works for all components
5. Fallback behavior displays appropriate messages if APIs are unavailable

## Performance Optimization

To ensure the dashboard loads quickly and provides a smooth user experience, the following optimizations have been implemented:

### API Fetching Optimizations
- **Intelligent Caching**: Data is cached for 5 minutes to reduce API calls
- **Staggered Loading**: Components load in sequence rather than all at once
- **Parallel Data Fetching**: GitHub and LeetCode data are fetched simultaneously
- **Minimal Payloads**: Only necessary data is requested from APIs

### Component Optimizations
- **Dynamic Imports**: Heavy components are loaded only when needed
- **Suspense and Lazy Loading**: UI shows placeholders while data loads
- **Error Boundaries**: Each component has isolated error handling
- **Conditional Rendering**: Components only render when their data is ready

### Build Performance
If your build process is slow, try these options:

```bash
# Speed up builds by disabling source maps
npm run build -- --no-source-maps

# Use the production build helper with clean cache
node run.js build-prod

# For very large projects, increase Node memory
set NODE_OPTIONS=--max-old-space-size=4096 && npm run build
```

## Project Completion Checklist

✅ Integrated GitHub and LeetCode APIs with fallback mechanisms  
✅ Created unified dashboard with tab navigation  
✅ Implemented combined activity timeline  
✅ Added robust error handling and loading states  
✅ Enhanced UI with responsive design  
✅ Optimized performance with caching and lazy loading  
✅ Updated documentation with troubleshooting guides  

## Mobile Responsiveness

The dashboard has been optimized for various screen sizes:

### Mobile View (< 640px)
- Single column layout
- Stacked cards
- Simplified timeline
- Condensed statistics display
- Collapsible sections for better scrolling experience

### Tablet View (640px - 1024px)
- Two-column grid for cards
- Semi-condensed timeline
- Adaptive navigation tabs
- Responsive data visualizations

### Desktop View (> 1024px)
- Multi-column layout
- Full-width timeline with hover effects
- Enhanced data visualizations
- Side-by-side comparison of platforms

All interactive elements (buttons, links, cards) have appropriate touch targets for mobile use, and the UI adapts smoothly between breakpoints using Tailwind's responsive utilities.

## Quick API Testing

For quickly testing the API integrations without running the full development server, use the included API test script:

```bash
# Test both GitHub and LeetCode integrations
node api-test.js all

# Test only GitHub integration
node api-test.js github

# Test only LeetCode integration
node api-test.js leetcode
```

This script provides a simple way to:
- Verify your API credentials are working correctly
- Check that both APIs are accessible from your environment
- See sample data that will be used in the dashboard
- Diagnose connectivity issues separately from the Next.js application

Example output:
```
🚀 Starting API integration test
====================================
🔍 Testing GitHub API...
✅ Using GitHub token for authentication
🔗 Fetching GitHub profile for harshitj183...
✅ GitHub profile retrieved successfully
------------------------------------
Username: harshitj183
Name: Harshit Jaiswal
Bio: Full Stack Developer | React | Node.js | Next.js
Public repos: 27
Followers: 42
------------------------------------

📊 Test Summary
GitHub API: ✅ Working
LeetCode API: ✅ Working
Overall Integration: ✅ Working
```

## Error Handling & Refresh Functionality

The dashboard implements a comprehensive error handling strategy to ensure a smooth user experience even when API calls fail.

### Error Components

1. **ErrorBoundary Component**
   - Wraps each major component to catch and handle rendering errors
   - Displays user-friendly error messages with retry options
   - Prevents cascading failures when one section encounters problems

2. **API-Specific Error States**
   - GitHub API failures show specific troubleshooting messages
   - LeetCode API failures trigger the multi-level fallback system
   - Network errors display connection suggestions

3. **Error Recovery Patterns**
   - Automatic retry with exponential backoff for transient errors
   - Cache invalidation options for stale data errors
   - Manual refresh buttons on all data components

### Refresh Functionality

The dashboard includes several ways to refresh data:

1. **RefreshButton Component**
   - Each data section has its own refresh button
   - Visual feedback during refresh operations
   - Cooldown period to prevent API rate limiting

2. **Auto-Refresh**
   - Data automatically refreshes when tab is returned to focus
   - Configurable refresh intervals (default: 5 minutes)
   - Respects user preferences for data usage

3. **Force Refresh**
   - Press Ctrl+Shift+R or click the browser's refresh button while holding Shift
   - Clears the cache and forces new API requests
   - Use when experiencing stale data issues

4. **Implementation Example**
   ```tsx
   // RefreshButton component usage example
   <RefreshButton 
     onRefresh={loadData} 
     lastUpdated={lastUpdated}
     isLoading={loading}
   />

   // Manual refresh implementation
   const loadData = async (forceRefresh = false) => {
     setLoading(true);
     setError(null);
     
     try {
       // Set cache-busting headers if forceRefresh is true
       const data = await fetchData(forceRefresh);
       setData(data);
       setLastUpdated(new Date());
     } catch (err) {
       setError('Failed to load data');
       console.error('API error:', err);
     } finally {
       setLoading(false);
     }
   };
   ```

## Common Runtime Errors

### Missing _document.js Error

If you encounter this error:

```
Error: ENOENT: no such file or directory, open '[path]\.next\server\pages\_document.js'
```

This is caused by an incomplete build or corrupted cache. We've created a specialized fix script:

```bash
# Run the document error fix script
node fix-document-error.js

# Then rebuild
npm run build
```

### Next.js Server Components Error

If you encounter this error during build:

```
Error: `ssr: false` is not allowed with `next/dynamic` in Server Components. Please move it into a client component.
```

This is a Next.js 15.x error related to using dynamic imports with `ssr: false` in Server Components. You can fix it automatically using:

```bash
# Run the Server Components error fix script
build.bat fix-ssr

# Then rebuild
npm run build
```

The `fix-server-components.js` script:
- Creates client component wrappers if they don't exist
- Updates page components to use the client wrappers
- Checks for other pages with potential SSR issues
- Provides detailed instructions for any remaining fixes

If you prefer to fix it manually:

1. Create client component wrappers in the components directory:
   - `ClientDashboardWrapper.tsx` - For dashboard dynamic imports


2. Add the `'use client'` directive at the top of these wrapper components:

   ```tsx
   'use client';

   import { Suspense } from 'react';
   import dynamic from 'next/dynamic';

   // Move the dynamic import to the client wrapper
   const UnifiedDashboard = dynamic(() => import('./UnifiedDashboard'), { 
     ssr: false 
   });

   export default function ClientDashboardWrapper() {
     return (
       <Suspense fallback={<div>Loading...</div>}>
         <UnifiedDashboard />
       </Suspense>
     );
   }
   ```

3. Update the page components to use the client wrappers:

   ```tsx
   // No dynamic imports or ssr: false here
   import ClientDashboardWrapper from '@/components/ClientDashboardWrapper';

   export default function DashboardPage() {
     return (
       <main>
         <ClientDashboardWrapper />
       </main>
     );
   }
   ```

This architecture properly separates Server Components (pages) from Client Components (dynamic imports with `ssr: false`).

The `fix-document-error.js` script performs these steps automatically:
- Cleans the `.next` directory with robust error handling
- Clears the Node.js module cache
- Checks and creates necessary page files if missing
- Verifies Next.js configuration files
- Provides clear next steps

If you prefer a manual approach, try these steps:

1. **Complete Cache Clean**:
   ```bash
   # Windows
   rmdir /s /q .next
   # OR using the helper
   build.bat clean
   ```

2. **Check for Missing Dependencies**:
   ```bash
   npm install
   ```

3. **Use the Forced Clean Build**:
   ```bash
   # Windows
   build.bat fix
   build.bat build
   
   # Other platforms
   node fix-build-errors.js
   npm run build:clean
   ```

4. **Check Node.js Version**:
   Ensure you're using a compatible Node.js version with Next.js 15.3.4:
   ```bash
   node -v
   # Should be v20.x or higher
   ```

These steps should resolve the missing _document.js error and allow the application to build correctly.

Your portfolio site is now complete with a modern, real-time dashboard that showcases your GitHub repositories and LeetCode problem-solving skills!
