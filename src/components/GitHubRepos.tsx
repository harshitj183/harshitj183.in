'use client'

import { useState, useEffect } from 'react';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/github';
import RepoSocialPreview from './RepoSocialPreview';

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
          <RepoSocialPreview key={repo.id} repo={repo} />
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
