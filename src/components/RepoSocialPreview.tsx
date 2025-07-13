'use client';

import { GitHubRepo } from '@/lib/github';
import { useEffect, useRef, useState } from 'react';
import '@/styles/repo-preview.css';

interface RepoSocialPreviewProps {
  repo: GitHubRepo;
  className?: string;
}

export default function RepoSocialPreview({ repo, className = '' }: RepoSocialPreviewProps) {
  // Function to get a CSS class based on language
  const getLanguageClass = (language: string | null): string => {
    if (!language) return 'lang-default';
    
    const langMap: Record<string, string> = {
      JavaScript: 'javascript',
      TypeScript: 'typescript',
      HTML: 'html',
      CSS: 'css',
      Python: 'python',
      Java: 'java',
      'C++': 'cpp',
      C: 'c',
      'C#': 'csharp',
      PHP: 'php',
      Ruby: 'ruby',
      Go: 'go',
      Rust: 'rust',
      Swift: 'swift',
      Kotlin: 'kotlin',
      Dart: 'dart',
      Shell: 'shell',
    };
    
    return `lang-${langMap[language] || 'default'}`;
  };
  
  // Format date to display in a friendly way
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };
  
  // State to store the actual Twitter image URL
  const [twitterImageUrl, setTwitterImageUrl] = useState<string | null>(null);
  
  // Function to fetch the Twitter image URL from the repository page metadata
  const fetchTwitterImageUrl = async () => {
    try {
      // Use our API route to fetch the Twitter image URL
      const response = await fetch(`/api/proxy?url=${encodeURIComponent(`https://github.com/${repo.full_name}`)}`);
      
      if (!response.ok) {
        console.warn(`API returned ${response.status} for ${repo.name}, will use fallback`);
        return null; // Return null instead of throwing, so fallback works
      }
      
      const data = await response.json();
      
      if (data.status === 'success' && data.twitterImageUrl) {
        console.log(`Found social preview image for ${repo.name}:`, data.twitterImageUrl);
        
        // Validate that we got a proper GitHub repository image
        if (data.twitterImageUrl.includes('repository-images.githubusercontent.com')) {
          console.log(`✅ Valid GitHub repository social preview for ${repo.name}`);
        } else {
          console.log(`⚠️  Got image but not repository preview for ${repo.name}`);
        }
        
        setTwitterImageUrl(data.twitterImageUrl);
        return data.twitterImageUrl;
      } else {
        console.log(`No social preview image found for ${repo.name}, API returned:`, data);
        return null; // Return null instead of throwing
      }
    } catch (error) {
      console.warn(`Error fetching social preview image for ${repo.name}:`, error);
      return null; // Return null instead of throwing, so fallback works
    }
  };
  
  // Fallback to a generated image if no social preview is available
  const generateFallbackImageUrl = () => {
    const userName = repo.full_name.split('/')[0];
    return `https://og-image.vercel.app/**${encodeURIComponent(repo.name)}**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fgithub.com%2F${userName}.png&widths=350&heights=350`;
  };
  
  // Use a ref to access the background div
  const bgImageRef = useRef<HTMLDivElement>(null);
  
  // Set the background image with JavaScript after component mounts
  useEffect(() => {
    const loadImage = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
        img.src = url;
      });
    };

    async function loadRepoImage() {
      if (!bgImageRef.current) return;
      
      // Array of image sources to try in order
      const imageSources = [
        // 1. Try to get the social preview image via Microlink API
        async () => {
          const socialPreviewUrl = await fetchTwitterImageUrl();
          if (!socialPreviewUrl) throw new Error('No social preview image URL found');
          return socialPreviewUrl;
        },
        // 2. Try the direct repository-images URL
        async () => {
          const repoImageUrl = `https://repository-images.githubusercontent.com/${repo.id}`;
          return repoImageUrl;
        },
        // 3. Try the OpenGraph image
        async () => {
          const openGraphUrl = `https://opengraph.githubassets.com/1/${repo.full_name}`;
          return openGraphUrl;
        },
        // 4. Final fallback to generated image
        async () => {
          return generateFallbackImageUrl();
        }
      ];
      
      const sourceNames = [
        'API Route (GitHub/OpenGraph)',
        'Direct Repository Images',
        'OpenGraph Image',
        'Generated Fallback'
      ];
      
      // Try each source in order until one works
      for (let i = 0; i < imageSources.length; i++) {
        try {
          const imageUrl = await imageSources[i]();
          if (!imageUrl) {
            console.log(`⚠️  ${sourceNames[i]} returned null for ${repo.name}, trying next source...`);
            continue;
          }
          
          // Test if the image actually loads
          await loadImage(imageUrl);
          
          if (bgImageRef.current) {
            bgImageRef.current.style.backgroundImage = `url(${imageUrl})`;
            console.log(`✅ Loaded ${sourceNames[i]} for ${repo.name}`);
            return; // Exit once we've successfully loaded an image
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          console.log(`❌ ${sourceNames[i]} failed for ${repo.name}:`, errorMessage);
          // Continue to the next source
        }
      }
      
      // If we've exhausted all options, log an error
      console.error(`Failed to load any image for ${repo.name}`);
    }
    
    loadRepoImage();
  }, [repo.id, repo.name, repo.full_name]);
  
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {/* Twitter Card Header - Repository Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {/* Background Image - GitHub Social Preview */}
        <div 
          ref={bgImageRef}
          className="repo-preview-image"
        ></div>
        
        {/* Repository Name and Owner */}
        <div className="absolute bottom-0 left-0 p-4 w-full z-10">
          <h3 className="text-xl font-bold text-white truncate">{repo.name}</h3>
          <p className="text-sm text-gray-200">by {repo.full_name.split('/')[0]}</p>
        </div>
        
        {/* Stats */}
        <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center">
            <span className="mr-1">⭐</span> {repo.stargazers_count}
          </div>
          <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center">
            <span className="mr-1">🍴</span> {repo.forks_count}
          </div>
        </div>
      </div>
      
      {/* Twitter Card Body */}
      <div className="p-4 bg-white dark:bg-gray-800">
        {/* Description */}
        {repo.description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 min-h-[3rem] mb-3">
            {repo.description}
          </p>
        )}
        
        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
              >
                #{topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">+{repo.topics.length - 3}</span>
            )}
          </div>
        )}
        
        {/* Footer with language and last updated */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          {repo.language && (
            <div className="flex items-center gap-2">
              <div 
                className={`language-dot ${getLanguageClass(repo.language)}`}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
            </div>
          )}
          <span className="text-xs text-gray-500">
            Updated {formatDate(repo.updated_at)}
          </span>
        </div>
        
        {/* Call to action */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <a 
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium"
          >
            View Repository
          </a>
          {repo.homepage && (
            <a 
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-300 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
