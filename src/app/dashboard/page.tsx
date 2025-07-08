import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Harshit Jaiswal | Project Analytics & Insights',
  description: 'View detailed analytics, project metrics, and professional insights from Harshit Jaiswal\'s development portfolio and activities.',
  keywords: 'developer dashboard, project analytics, GitHub stats, portfolio metrics, development insights',
};

export default function Dashboard() {
  const projectStats = [
    { name: "Active Projects", value: "8", change: "+2", changeType: "increase" },
    { name: "Completed Projects", value: "25", change: "+3", changeType: "increase" },
    { name: "GitHub Commits", value: "1,250", change: "+45", changeType: "increase" },
    { name: "Code Reviews", value: "85", change: "+12", changeType: "increase" },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "commit",
      message: "Implemented responsive dashboard layout",
      project: "Portfolio Website",
      time: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      type: "deploy",
      message: "Deployed v2.1.0 to production",
      project: "E-commerce Platform",
      time: "5 hours ago",
      status: "success"
    },
    {
      id: 3,
      type: "review",
      message: "Code review for authentication module",
      project: "User Management System",
      time: "1 day ago",
      status: "pending"
    },
    {
      id: 4,
      type: "merge",
      message: "Merged feature branch: payment-integration",
      project: "E-commerce Platform",
      time: "2 days ago",
      status: "completed"
    },
    {
      id: 5,
      type: "issue",
      message: "Fixed responsive design issues on mobile",
      project: "Portfolio Website",
      time: "3 days ago",
      status: "resolved"
    }
  ];

  const technologies = [
    { name: "React/Next.js", usage: 85, projects: 12 },
    { name: "TypeScript", usage: 80, projects: 10 },
    { name: "Node.js", usage: 75, projects: 8 },
    { name: "Python", usage: 70, projects: 6 },
    { name: "AWS/Cloud", usage: 65, projects: 5 },
    { name: "PostgreSQL", usage: 60, projects: 7 },
  ];

  const currentProjects = [
    {
      name: "E-commerce Platform",
      progress: 85,
      status: "In Progress",
      deadline: "2024-02-15",
      team: 4,
      priority: "High"
    },
    {
      name: "Portfolio Website",
      progress: 95,
      status: "Near Completion",
      deadline: "2024-01-30",
      team: 1,
      priority: "Medium"
    },
    {
      name: "Learning Management System",
      progress: 60,
      status: "Development",
      deadline: "2024-03-20",
      team: 3,
      priority: "High"
    },
    {
      name: "Mobile App Backend",
      progress: 40,
      status: "Planning",
      deadline: "2024-04-10",
      team: 2,
      priority: "Medium"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "success":
      case "resolved":
        return "text-green-600 dark:text-green-400";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400";
      case "In Progress":
        return "text-blue-600 dark:text-blue-400";
      case "Near Completion":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "commit":
        return "📝";
      case "deploy":
        return "🚀";
      case "review":
        return "👀";
      case "merge":
        return "🔀";
      case "issue":
        return "🐛";
      default:
        return "📋";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Developer Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Overview of projects, activities, and development metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projectStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`flex items-center text-sm ${
                  stat.changeType === 'increase' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  <span className="mr-1">
                    {stat.changeType === 'increase' ? '↗' : '↘'}
                  </span>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Current Projects
              </h2>
              <div className="space-y-4">
                {currentProjects.map((project, index) => (
                  <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.priority === 'High' 
                          ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {project.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Team: {project.team} members
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Due: {new Date(project.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {project.progress}% complete
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Usage */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technology Stack
              </h2>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.projects} projects
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${tech.usage}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {tech.usage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  📊 Generate Report
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  🚀 Deploy Project
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                  📝 Create Task
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                  📧 Send Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {activity.message}
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.project}
                      </span>
                      <span className={`text-sm font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
