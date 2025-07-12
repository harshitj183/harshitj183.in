import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Simplified API route for fetching GitHub repository social preview images
 * Falls back to direct repository image URLs if Microlink fails
 */
export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url');
    
    if (!url) {
      return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }
    
    // Only allow GitHub URLs for security
    if (!url.startsWith('https://github.com/')) {
      return NextResponse.json({ error: 'Only GitHub URLs are allowed' }, { status: 403 });
    }
    
    console.log(`Processing GitHub URL: ${url}`);
    
    // Extract repo owner and name from URL
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      return NextResponse.json({ error: 'Invalid GitHub URL format' }, { status: 400 });
    }
    
    const [, owner, repo] = match;
    console.log(`Extracted repo: ${owner}/${repo}`);
    
    // Try Microlink API first
    let twitterImageUrl = null;
    
    try {
      const microlinkUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}`;
      console.log(`Trying Microlink: ${microlinkUrl}`);
      
      const response = await fetch(microlinkUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        cache: 'no-store',
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Microlink response status:', data.status);
        
        if (data.status === 'success' && data.data?.image?.url) {
          twitterImageUrl = data.data.image.url;
          console.log('Found image via Microlink:', twitterImageUrl);
        }
      } else {
        console.log('Microlink API returned error:', response.status);
      }
    } catch (microlinkError) {
      console.log('Microlink API failed:', microlinkError);
    }
    
    // If Microlink didn't work, try to get repository ID from GitHub API
    if (!twitterImageUrl) {
      try {
        console.log('Trying GitHub API as fallback...');
        const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}`;
        
        const githubResponse = await fetch(githubApiUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          },
          cache: 'no-store',
        });
        
        if (githubResponse.ok) {
          const repoData = await githubResponse.json();
          if (repoData.id) {
            twitterImageUrl = `https://repository-images.githubusercontent.com/${repoData.id}`;
            console.log('Using GitHub repository image:', twitterImageUrl);
          }
        }
      } catch (githubError) {
        console.log('GitHub API fallback failed:', githubError);
      }
    }
    
    // Final fallback to OpenGraph
    if (!twitterImageUrl) {
      twitterImageUrl = `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      console.log('Using OpenGraph fallback:', twitterImageUrl);
    }
    
    return NextResponse.json({
      twitterImageUrl,
      status: 'success',
      message: twitterImageUrl ? 'Image URL found' : 'No image found',
      source: twitterImageUrl?.includes('repository-images') ? 'github-api' : 
              twitterImageUrl?.includes('opengraph') ? 'opengraph' : 'microlink'
    });
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
      status: 'error' 
    }, { status: 500 });
  }
}
