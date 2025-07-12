'use client'

import { useState, useEffect } from 'react';
import { 
  fetchLeetCodeUser, 
  fetchLeetCodeStats,
  fetchLeetCodeStatsFromAPI,
  LeetCodeUser,
  LeetCodeStats as LeetCodeStatsType,
} from '@/lib/leetcode';
import { LoadingStats } from '@/components/LoadingSpinner';
import { ErrorFallback } from '@/components/ErrorBoundary';
import RefreshButton from '@/components/RefreshButton';

interface LeetCodeStatsProps {
  className?: string;
}

export default function LeetCodeStats({ className = '' }: LeetCodeStatsProps) {
  const [user, setUser] = useState<LeetCodeUser | null>(null);
  const [stats, setStats] = useState<LeetCodeStatsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadLeetCodeData = async () => {
    try {
      setLoading(true);
      setError(null);

      let statsData = null;

      // Try the public stats API first
      try {
        statsData = await fetchLeetCodeStatsFromAPI();
        if (statsData) {
          setStats({
            totalSolved: statsData.totalSolved || 0,
            totalQuestions: statsData.totalQuestions || 2000,
            easySolved: statsData.easySolved || 0,
            mediumSolved: statsData.mediumSolved || 0,
            hardSolved: statsData.hardSolved || 0,
            acceptanceRate: statsData.acceptanceRate || 0,
            ranking: statsData.ranking || 100000,
            contributionPoints: 0,
            reputation: 0
          });
        }
      } catch (apiError) {
        console.warn('Failed to fetch from public stats API:', apiError);
      }

      // Only try GraphQL API if we don't have stats yet
      if (!statsData) {
        try {
          const [userData, graphqlStats] = await Promise.all([
            fetchLeetCodeUser(),
            fetchLeetCodeStats()
          ]);
          setUser(userData);
          setStats(graphqlStats);
        } catch (graphqlError) {
          throw graphqlError;
        }
      }
    } catch (err) {
      console.error('Error loading LeetCode data:', err);
      setError(err instanceof Error ? err : new Error('Failed to load LeetCode data'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeetCodeData();
  }, []);

  if (loading && !stats) {
    return <LoadingStats className={className} />;
  }

  if (error && !stats) {
    return (
      <ErrorFallback 
        error={error}
        resetError={loadLeetCodeData}
        className={className}
      />
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {user?.avatar && (
            <img 
              src={user.avatar} 
              alt={user.name || 'User avatar'} 
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span>🏆</span> LeetCode Stats
            </h2>
            {user?.name && (
              <p className="text-sm text-gray-600 dark:text-gray-400">{user.name}</p>
            )}
          </div>
        </div>
        <RefreshButton onRefresh={loadLeetCodeData} size="sm" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.totalSolved}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-500">
            {stats.easySolved}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Easy</div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <div className="text-2xl font-bold text-yellow-500">
            {stats.mediumSolved}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Medium</div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <div className="text-2xl font-bold text-red-500">
            {stats.hardSolved}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Hard</div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">Acceptance Rate:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {stats.acceptanceRate.toFixed(1)}%
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-400">Global Ranking:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {stats.ranking.toLocaleString()}
          </span>
        </div>
      </div>

      {/* View Profile Link */}
      <div className="mt-6 flex justify-end">
        <a
          href={`https://leetcode.com/${user?.username || 'harshitj183'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}
