'use client'

import { useState, useEffect } from 'react';
import { fetchGitHubUser, fetchGitHubRepos } from '@/lib/github';
import { fetchLeetCodeStats } from '@/lib/leetcode';
import { LoadingStats } from '@/components/LoadingSpinner';
import { ErrorFallback } from '@/components/ErrorBoundary';
import RefreshButton from '@/components/RefreshButton';

interface AnalyticsData {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  languageDistribution: { [key: string]: number };
  problemsSolved: number;
  acceptanceRate: number;
  ranking: number;
  streak: number;
  weeklyActivity: number[];
  monthlyActivity: number[];
  popularRepos: Array<{
    name: string;
    stars: number;
    forks: number;
    language: string;
  }>;
  recentAchievements: Array<{
    title: string;
    date: string;
    type: 'github' | 'leetcode' | 'general';
  }>;
}

export default function CodingAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadAnalyticsData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch GitHub data
      const [githubUser, githubRepos] = await Promise.all([
        fetchGitHubUser(),
        fetchGitHubRepos()
      ]);

      // Fetch LeetCode data
      const leetcodeStats = await fetchLeetCodeStats();

      // Process language distribution
      const languageDistribution: { [key: string]: number } = {};
      githubRepos.forEach(repo => {
        if (repo.language) {
          languageDistribution[repo.language] = (languageDistribution[repo.language] || 0) + 1;
        }
      });

      // Process popular repos
      const popularRepos = githubRepos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)
        .map(repo => ({
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || 'Unknown'
        }));

      // Generate weekly activity (mock data for now)
      const weeklyActivity = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));
      const monthlyActivity = Array.from({ length: 30 }, () => Math.floor(Math.random() * 15));

      // Recent achievements (mock data)
      const recentAchievements = [
        {
          title: "50-day LeetCode streak completed",
          date: "2025-01-10",
          type: "leetcode" as const
        },
        {
          title: "Published research paper",
          date: "2025-01-05",
          type: "general" as const
        },
        {
          title: "Reached 100+ GitHub stars",
          date: "2024-12-20",
          type: "github" as const
        }
      ];

      const analyticsData: AnalyticsData = {
        totalCommits: githubUser.public_repos * 15, // Estimate
        totalRepos: githubUser.public_repos,
        totalStars: githubRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        totalForks: githubRepos.reduce((sum, repo) => sum + repo.forks_count, 0),
        languageDistribution,
        problemsSolved: leetcodeStats.totalSolved,
        acceptanceRate: leetcodeStats.acceptanceRate,
        ranking: leetcodeStats.ranking,
        streak: 50, // Mock data
        weeklyActivity,
        monthlyActivity,
        popularRepos,
        recentAchievements
      };

      setData(analyticsData);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Analytics error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalyticsData();
  }, []);

  if (loading) {
    return <LoadingStats className="w-full" />;
  }

  if (error) {
    return (
      <ErrorFallback
        error={new Error(error)}
        resetError={loadAnalyticsData}
        title="Failed to load analytics"
      />
    );
  }

  if (!data) return null;

  const topLanguages = Object.entries(data.languageDistribution)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span>📊</span> Coding Analytics
        </h2>
        <RefreshButton onRefresh={loadAnalyticsData} />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 counter-animate">
            {data.totalCommits.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Commits</div>
        </div>
        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 counter-animate">
            {data.problemsSolved}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
        </div>
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 counter-animate">
            {data.totalStars}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
        </div>
        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 counter-animate">
            {data.streak}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Day Streak</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Language Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Languages
          </h3>
          <div className="space-y-3">
            {topLanguages.map(([language, count]) => (
              <div key={language} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{language}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full relative overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full absolute top-0 left-0 transition-all duration-1000"
                      data-progress={Math.round((count / Math.max(...Object.values(data.languageDistribution))) * 100)}
                    />
                  </div>
                  <span className="text-sm text-gray-900 dark:text-white w-8 text-right">
                    {count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Repositories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Repositories
          </h3>
          <div className="space-y-3">
            {data.popularRepos.map((repo, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{repo.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span>⭐</span>
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>🍴</span>
                    {repo.forks}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.recentAchievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {achievement.type === 'github' ? '🐙' : 
                     achievement.type === 'leetcode' ? '🧩' : '🏆'}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(achievement.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lastUpdated && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Last updated: {lastUpdated.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
}
