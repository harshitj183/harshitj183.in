'use client'

import { useState, useEffect } from 'react';
import { fetchGitHubRepos, formatDate, getLanguageColor, GitHubRepo } from '@/lib/github';

interface GitHubReposProps {
  maxRepos?: number;
  featured?: boolean;
  className?: string;
}

export default function GitHubRepos({ maxRepos = 6, featured = false, className = '' }: GitHubReposProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        setLoading(true);
        setError(null);
        const reposData = await fetchGitHubRepos();
        
        let filteredRepos = reposData;
        if (featured) {
          // Show only repos with stars or recent activity
          filteredRepos = reposData.filter(repo => 
            repo.stargazers_count > 0 || 
            repo.description !== null ||
            repo.topics.length > 0
          );
        }
        
        setRepos(filteredRepos.slice(0, maxRepos));
      } catch (err) {
        setError('Failed to load repositories');
        console.error('GitHub repos error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, [maxRepos, featured]);

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <div className="text-red-500 dark:text-red-400 text-center py-8">
          <p>{error}</p>
          <p className="text-sm mt-2">Unable to fetch GitHub repositories</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div 
            key={repo.id} 
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {repo.name}
                </a>
              </h3>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}
                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <span>🍴</span>
                    <span>{repo.forks_count}</span>
                  </div>
                )}
              </div>
            </div>
            
            {repo.description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center justify-between mb-4">
              {repo.language && (
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full bg-blue-500"
                  ></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
                </div>
              )}
              <span className="text-xs text-gray-500">
                Updated {formatDate(repo.updated_at)}
              </span>
            </div>
            
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span 
                    key={topic}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="text-xs text-gray-500 px-2 py-1">+{repo.topics.length - 3}</span>
                )}
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium"
              >
                View Code →
              </a>
              {repo.homepage && (
                <a 
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 dark:text-green-400 text-sm font-medium"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a 
          href="https://github.com/harshitj183?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          <span>📚</span>
          View All Repositories on GitHub
        </a>
      </div>
    </div>
  );
}
