'use client'

import { useState, useEffect } from 'react';
import { 
  fetchGitHubUser, 
  fetchGitHubRepos, 
  fetchGitHubActivity, 
  formatDate, 
  getActivityIcon, 
  getActivityDescription,
  GitHubUser,
  GitHubRepo,
  GitHubActivity 
} from '@/lib/github';
import { LoadingStats } from '@/components/LoadingSpinner';
import { ErrorFallback } from '@/components/ErrorBoundary';
import RefreshButton from '@/components/RefreshButton';

interface GitHubStatsProps {
  showRepos?: boolean;
  showActivity?: boolean;
  maxRepos?: number;
  maxActivity?: number;
  className?: string;
}

export default function GitHubStats({ 
  showRepos = true, 
  showActivity = true, 
  maxRepos = 6, 
  maxActivity = 5,
  className = ''
}: GitHubStatsProps) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [activity, setActivity] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch user data
      const userData = await fetchGitHubUser();
      setUser(userData);

      // Fetch repos if needed
      if (showRepos) {
        const reposData = await fetchGitHubRepos();
        setRepos(reposData.slice(0, maxRepos));
      }

      // Fetch activity if needed
      if (showActivity) {
        const activityData = await fetchGitHubActivity();
        setActivity(activityData.slice(0, maxActivity));
      }
    } catch (err) {
      setError('Failed to load GitHub data');
      console.error('GitHub API error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGitHubData();
  }, [showRepos, showActivity, maxRepos, maxActivity]);

  if (loading) {
    return <LoadingStats className={className} />;
  }

  if (error) {
    return (
      <ErrorFallback 
        error={new Error(error)} 
        resetError={loadGitHubData}
        title="Failed to load GitHub data"
        className={className}
      />
    );
  }

  return (
    <div className={`${className}`}>
      {/* GitHub User Stats */}
      {user && (
        <div className="mb-8">            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>📊</span> GitHub Stats
              </h3>
              <div className="flex items-center gap-2">
                <RefreshButton onRefresh={loadGitHubData} />
                <a 
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Profile →
                </a>
              </div>
            </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.public_repos}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{user.followers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{user.following}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{user.public_gists}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gists</div>
            </div>
          </div>
        </div>
      )}

      {/* Latest Repositories */}
      {showRepos && repos.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>📚</span> Latest Repositories
            </h3>
            <a 
              href={`https://github.com/harshitj183?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {repo.name}
                    </a>
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>⭐</span>
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
                
                {repo.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-3 h-3 rounded-full"
                          data-language={repo.language}
                        ></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="text-xs text-gray-500">+{repo.topics.length - 3} more</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {showActivity && activity.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>⚡</span> Recent Activity
            </h3>
            <a 
              href={`https://github.com/harshitj183`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View Profile →
            </a>
          </div>
          
          <div className="space-y-3">
            {activity.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">{getActivityIcon(item.type)}</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {getActivityDescription(item)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <a 
                        href={`https://github.com/${item.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400"
                      >
                        {item.repo.name}
                      </a>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">
                        {formatDate(item.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Live Update Indicator */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live data from GitHub API • Updates every 5 minutes
        </p>
      </div>
    </div>
  );
}
