import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * API route for fetching GitHub repository social preview images
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
    
    // Skip Microlink for now and use GitHub API directly
    let twitterImageUrl = null;
    
    // Try to get repository ID from GitHub API first
    try {
      console.log('Trying GitHub API...');
      const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}`;
      
      const githubResponse = await fetch(githubApiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });
      
      if (githubResponse.ok) {
        const repoData = await githubResponse.json();
        if (repoData.id) {
          twitterImageUrl = `https://repository-images.githubusercontent.com/${repoData.id}`;
          console.log('Using GitHub repository image:', twitterImageUrl);
        }
      } else {
        console.log('GitHub API returned error:', githubResponse.status);
      }
    } catch (githubError) {
      console.log('GitHub API failed:', githubError);
    }
    
    // If GitHub API didn't work, try OpenGraph
    if (!twitterImageUrl) {
      twitterImageUrl = `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      console.log('Using OpenGraph fallback:', twitterImageUrl);
    }
    
    return NextResponse.json({
      twitterImageUrl,
      status: 'success',
      message: twitterImageUrl ? 'Image URL found' : 'No image found',
      source: twitterImageUrl?.includes('repository-images') ? 'github-api' : 'opengraph'
    });
    
  } catch (error) {
    console.error('API route error:', error);
    
    // Return a more specific error response
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('Error details:', errorMessage);
    console.error('Error stack:', errorStack);
    
    return NextResponse.json({ 
      error: 'Internal server error',
      message: errorMessage,
      status: 'error' 
    }, { status: 500 });
  }
}
