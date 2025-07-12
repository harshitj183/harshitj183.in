'use client'

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-red-600 dark:text-red-400 text-xl">⚠️</div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
              Something went wrong
            </h3>
          </div>
          <p className="text-red-700 dark:text-red-300 mb-4">
            We encountered an error while loading this content. Please try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple error fallback component
export function ErrorFallback({ 
  error, 
  resetError, 
  title = "Failed to load",
  className = ""
}: { 
  error?: Error;
  resetError?: () => void;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-red-600 dark:text-red-400 text-lg">⚠️</div>
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
          {title}
        </h3>
      </div>
      <p className="text-red-700 dark:text-red-300 text-sm mb-4">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      {resetError && (
        <button
          onClick={resetError}
          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}
