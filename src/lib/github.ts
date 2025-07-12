// GitHub API utilities for real-time data fetching
const GITHUB_USERNAME = 'harshitj183';
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

// Helper function to get GitHub API headers
function getGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  }
  
  return headers;
}

// GitHub API interfaces
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  private: boolean;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  name: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    url: string;
  };
  html_url: string;
  repository: {
    name: string;
    full_name: string;
    html_url: string;
  };
}

export interface GitHubActivity {
  id: string;
  type: string;
  actor: {
    login: string;
    display_login: string;
    avatar_url: string;
    url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: any;
  public: boolean;
  created_at: string;
}

export interface GitHubLanguages {
  [key: string]: number;
}

// Cache implementation
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// GitHub API functions
export async function fetchGitHubUser(): Promise<GitHubUser> {
  const cacheKey = `user_${GITHUB_USERNAME}`;
  const cached = getCachedData<GitHubUser>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: getGitHubHeaders(),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const userData = await response.json();
    setCachedData(cacheKey, userData);
    return userData;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const cacheKey = `repos_${GITHUB_USERNAME}`;
  const cached = getCachedData<GitHubRepo[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`,
      {
        headers: getGitHubHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    // Filter out forked repos and sort by stars/activity
    const filteredRepos = repos
      .filter((repo: GitHubRepo) => !repo.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => {
        // Sort by stars first, then by last updated
        const starDiff = b.stargazers_count - a.stargazers_count;
        if (starDiff !== 0) return starDiff;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });

    setCachedData(cacheKey, filteredRepos);
    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

export async function fetchGitHubActivity(): Promise<GitHubActivity[]> {
  const cacheKey = `activity_${GITHUB_USERNAME}`;
  const cached = getCachedData<GitHubActivity[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/events/public?per_page=30`,
      {
        headers: getGitHubHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const activity = await response.json();
    setCachedData(cacheKey, activity);
    return activity;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    throw error;
  }
}

export async function fetchRepoLanguages(repoName: string): Promise<GitHubLanguages> {
  const cacheKey = `languages_${repoName}`;
  const cached = getCachedData<GitHubLanguages>(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`,
      {
        headers: getGitHubHeaders(),
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const languages = await response.json();
    setCachedData(cacheKey, languages);
    return languages;
  } catch (error) {
    console.error('Error fetching repo languages:', error);
    return {};
  }
}

// Helper functions
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours === 0) {
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      return `${diffMinutes} minutes ago`;
    }
    return `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return '1 day ago';
  } else if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
}

export function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#1572B6',
    Vue: '#41b883',
    React: '#61dafb',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
    Dockerfile: '#384d54',
    Jupyter: '#DA5B0B',
    Default: '#858585',
  };
  return colors[language] || colors.Default;
}

export function getActivityIcon(type: string): string {
  const icons: { [key: string]: string } = {
    PushEvent: '📝',
    CreateEvent: '🆕',
    DeleteEvent: '🗑️',
    ForkEvent: '🍴',
    WatchEvent: '⭐',
    IssuesEvent: '🐛',
    PullRequestEvent: '🔄',
    ReleaseEvent: '🚀',
    PublicEvent: '🔓',
    Default: '📋',
  };
  return icons[type] || icons.Default;
}

export function getActivityDescription(activity: GitHubActivity): string {
  const { type, payload, repo } = activity;
  const repoName = repo.name.split('/')[1];
  
  switch (type) {
    case 'PushEvent':
      const commitCount = payload.commits?.length || 0;
      return `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''} to ${repoName}`;
    case 'CreateEvent':
      return `Created ${payload.ref_type} ${payload.ref || ''} in ${repoName}`;
    case 'DeleteEvent':
      return `Deleted ${payload.ref_type} ${payload.ref} in ${repoName}`;
    case 'ForkEvent':
      return `Forked ${repoName}`;
    case 'WatchEvent':
      return `Starred ${repoName}`;
    case 'IssuesEvent':
      return `${payload.action} issue in ${repoName}`;
    case 'PullRequestEvent':
      return `${payload.action} pull request in ${repoName}`;
    case 'ReleaseEvent':
      return `${payload.action} release in ${repoName}`;
    case 'PublicEvent':
      return `Made ${repoName} public`;
    default:
      return `${type} in ${repoName}`;
  }
}
