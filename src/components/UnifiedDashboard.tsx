'use client'

import { useState, Suspense } from 'react';
import GitHubStats from './GitHubStats';
import GitHubRepos from './GitHubRepos';
import GitHubActivityTimeline from './GitHubActivityTimeline';
import LeetCodeStats from './LeetCodeStats';
import { LoadingCard } from './LoadingSpinner';

interface UnifiedDashboardProps {
  className?: string;
}

export default function UnifiedDashboard({ className = '' }: UnifiedDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity'>('overview');

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Dashboard header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'overview'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'activity'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Activity
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid gap-6">
        {activeTab === 'overview' ? (
          <>
            {/* Stats overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Suspense fallback={<LoadingCard />}>
                <GitHubStats />
              </Suspense>
              <Suspense fallback={<LoadingCard />}>
                <LeetCodeStats />
              </Suspense>
            </div>

            {/* Top repositories */}
            <Suspense fallback={<LoadingCard />}>
              <GitHubRepos maxRepos={6} />
            </Suspense>
          </>
        ) : (
          <>
            {/* Activity feed */}
            <Suspense fallback={<LoadingCard />}>
              <GitHubActivityTimeline maxItems={8} />
            </Suspense>
          </>
        )}
      </div>
    </div>
  );
}
