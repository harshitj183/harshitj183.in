'use client'

import { useState } from 'react';
import GitHubStats from './GitHubStats';
import LeetCodeStats from './LeetCodeStats';

export default function CodingPlatforms() {
  const [activeTab, setActiveTab] = useState<'github' | 'leetcode' | 'combined'>('combined');

  return (
    <div className="max-w-6xl">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Coding Platforms</h2>
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('combined')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'combined'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Combined
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'github'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            GitHub
          </button>
          <button
            onClick={() => setActiveTab('leetcode')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'leetcode'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            LeetCode
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'combined' && (
        <div className="space-y-12">
          {/* Quick Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🐙</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub Activity</h3>
              </div>
              <GitHubStats 
                showRepos={true}
                showActivity={false}
                maxRepos={3}
                className=""
              />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🧩</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LeetCode Progress</h3>
              </div>
              <LeetCodeStats 
                showSubmissions={false}
                showBadges={false}
                className=""
              />
            </div>
          </div>

          {/* Recent Activity Combined */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>⚡</span> Recent Activity Across Platforms
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">GitHub</h4>
                <GitHubStats 
                  showRepos={false}
                  showActivity={true}
                  maxActivity={3}
                  className=""
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">LeetCode</h4>
                <LeetCodeStats 
                  showSubmissions={true}
                  showBadges={false}
                  maxSubmissions={3}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'github' && (
        <GitHubStats 
          showRepos={true}
          showActivity={true}
          maxRepos={6}
          maxActivity={10}
          className=""
        />
      )}

      {activeTab === 'leetcode' && (
        <LeetCodeStats 
          showSubmissions={true}
          showBadges={true}
          maxSubmissions={10}
          maxBadges={6}
          className=""
        />
      )}
    </div>
  );
}
