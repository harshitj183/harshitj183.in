'use client'

import { useState, useEffect } from 'react';
import { 
  fetchGitHubActivity, 
  formatDate, 
  getActivityIcon, 
  getActivityDescription,
  GitHubActivity 
} from '@/lib/github';

interface GitHubActivityProps {
  maxItems?: number;
  className?: string;
}

export default function GitHubActivityFeed({ maxItems = 10, className = '' }: GitHubActivityProps) {
  const [activity, setActivity] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadActivity() {
      try {
        setLoading(true);
        setError(null);
        const activityData = await fetchGitHubActivity();
        setActivity(activityData.slice(0, maxItems));
      } catch (err) {
        setError('Failed to load GitHub activity');
        console.error('GitHub activity error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadActivity();
    
    // Refresh activity every 5 minutes
    const interval = setInterval(loadActivity, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [maxItems]);

  if (loading) {
    return (
      <div className={className}>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
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
          <p className="text-sm mt-2">Unable to fetch GitHub activity</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="space-y-4">
        {activity.map((item) => (
          <div 
            key={item.id} 
            className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="text-xl flex-shrink-0">
              {getActivityIcon(item.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <span className="font-medium">@{item.actor.login}</span> {getActivityDescription(item)}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <a 
                  href={`https://github.com/${item.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium"
                >
                  {item.repo.name}
                </a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm">
                  {formatDate(item.created_at)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <a 
          href="https://github.com/harshitj183"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium"
        >
          View Full Activity on GitHub →
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Live GitHub Activity • Auto-refreshes every 5 minutes</span>
      </div>
    </div>
  );
}
