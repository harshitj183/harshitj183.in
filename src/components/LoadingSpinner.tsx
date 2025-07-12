import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-gray-600 dark:text-gray-400',
    white: 'text-white'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg 
        className="animate-spin w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function LoadingCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-2/3" />
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12" />
        </div>
      </div>
    </div>
  );
}

export function LoadingStats({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto" />
          </div>
          <div className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
}
