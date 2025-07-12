'use client'

import { useState } from 'react';

interface RefreshButtonProps {
  onRefresh: () => Promise<void>;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function RefreshButton({ 
  onRefresh, 
  disabled = false, 
  size = 'md',
  className = ''
}: RefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (isRefreshing || disabled) return;
    
    setIsRefreshing(true);
    try {
      await onRefresh();
      // Could add toast notification here if needed
    } catch (error) {
      console.error('Refresh failed:', error);
      // Could add error toast here if needed
    } finally {
      setIsRefreshing(false);
    }
  };

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing || disabled}
      className={`inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      title="Refresh data"
    >
      <svg 
        className={`${sizeClasses[size]} ${isRefreshing ? 'animate-spin' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
        />
      </svg>
    </button>
  );
}

export function RefreshCard({ 
  onRefresh, 
  lastUpdated,
  className = ''
}: { 
  onRefresh: () => Promise<void>;
  lastUpdated?: Date;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      <span>
        {lastUpdated ? `Updated ${formatTimeAgo(lastUpdated)}` : 'Live data'}
      </span>
      <RefreshButton onRefresh={onRefresh} size="sm" />
    </div>
  );
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}
