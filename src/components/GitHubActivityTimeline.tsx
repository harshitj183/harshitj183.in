'use client'

import { useState, useEffect } from 'react';
import { 
  fetchGitHubActivity, 
  getActivityIcon, 
  getActivityDescription,
  formatDate,
  GitHubActivity,
} from '@/lib/github';
import { LoadingCard } from '@/components/LoadingSpinner';
import { ErrorFallback } from '@/components/ErrorBoundary';
import RefreshButton from '@/components/RefreshButton';

interface ActivityTimelineProps {
  maxItems?: number;
  className?: string;
}

export default function GitHubActivityTimeline({ 
  maxItems = 10,
  className = ''
}: ActivityTimelineProps) {
  const [activities, setActivities] = useState<GitHubActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadActivities = async () => {
    try {
      setLoading(true);
      setError(null);

      const githubActivities = await fetchGitHubActivity();
      
      // Take only the most recent activities up to maxItems
      setActivities(githubActivities.slice(0, maxItems));
    } catch (err) {
      console.error('Error loading GitHub activities:', err);
      setError(err instanceof Error ? err : new Error('Failed to load GitHub activities'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, [maxItems]);

  if (loading) {
    return <LoadingCard className={className} />;
  }

  if (error) {
    return (
      <ErrorFallback 
        error={error}
        resetError={loadActivities}
        className={className}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">GitHub Activity</h2>
        <div className="flex items-center gap-2">
          <RefreshButton 
            onRefresh={loadActivities}
            size="sm"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No recent GitHub activity to show.</p>
        ) : (
          activities.map(activity => (
            <a
              key={activity.id}
              href={activity.repo.url.replace('api.github.com/repos', 'github.com')}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-500">
                  {getActivityIcon(activity.type)}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                    {activity.repo.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {getActivityDescription(activity)}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {formatDate(activity.created_at)}
                  </p>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
