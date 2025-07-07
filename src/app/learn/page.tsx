import Link from "next/link";

export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 hidden lg:block">
        <div className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">HJ</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Harshit Jaiswal</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer | Student</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <Link href="/" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
              Home
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Dashboard
            </Link>
            <Link href="/projects" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projects
            </Link>
            <Link href="/blog" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Blog
            </Link>
            <Link href="/learn" className="flex items-center gap-3 px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learn
            </Link>
            <Link href="/about" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </Link>
            <Link href="/contact" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">Apps</p>
              <div className="mt-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JS</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">JS Playground</p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400">Theme</p>
                <button className="mt-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Light Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Harshit Jain</span>
            </div>
            <button className="p-2" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 lg:pl-0 pt-20 lg:pt-0">
        <section className="p-6 lg:p-8">
          <div className="max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Learn</h1>
            
            {/* Learning Paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Frontend Development",
                  description: "Master modern frontend technologies including React, Next.js, TypeScript, and advanced CSS techniques.",
                  courses: 12,
                  duration: "40 hours",
                  level: "Beginner to Advanced",
                  color: "from-blue-500 to-cyan-500",
                  icon: "🎨"
                },
                {
                  title: "Backend Development",
                  description: "Learn server-side development with Node.js, Express, databases, and API design principles.",
                  courses: 10,
                  duration: "35 hours",
                  level: "Intermediate",
                  color: "from-green-500 to-teal-500",
                  icon: "⚙️"
                },
                {
                  title: "Full Stack Development",
                  description: "Complete guide to building end-to-end applications with modern tech stacks and best practices.",
                  courses: 15,
                  duration: "60 hours",
                  level: "Advanced",
                  color: "from-purple-500 to-pink-500",
                  icon: "🚀"
                }
              ].map((path, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-32 bg-gradient-to-br ${path.color} relative flex items-center justify-center`}>
                    <span className="text-6xl">{path.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{path.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{path.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Courses:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{path.courses}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{path.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Level:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{path.level}</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                      Start Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Tutorials */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Building a React Todo App with TypeScript",
                    description: "Learn React fundamentals by building a complete todo application with TypeScript, state management, and local storage.",
                    duration: "45 mins",
                    difficulty: "Beginner",
                    topics: ["React", "TypeScript", "Hooks", "State Management"],
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    title: "Next.js API Routes and Database Integration",
                    description: "Master backend development with Next.js API routes, database connections, and building RESTful APIs.",
                    duration: "1.5 hours",
                    difficulty: "Intermediate",
                    topics: ["Next.js", "API Routes", "Database", "REST API"],
                    color: "from-green-400 to-green-600"
                  },
                  {
                    title: "Advanced CSS Grid and Flexbox Layouts",
                    description: "Deep dive into modern CSS layout techniques with practical examples and responsive design patterns.",
                    duration: "2 hours",
                    difficulty: "Intermediate",
                    topics: ["CSS Grid", "Flexbox", "Responsive Design", "Layout"],
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    title: "Building a Real-time Chat App with Socket.io",
                    description: "Create a full-featured chat application with real-time messaging, user authentication, and room management.",
                    duration: "3 hours",
                    difficulty: "Advanced",
                    topics: ["Socket.io", "Real-time", "Authentication", "Node.js"],
                    color: "from-orange-400 to-orange-600"
                  }
                ].map((tutorial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className={`w-full h-2 bg-gradient-to-r ${tutorial.color} rounded-full mb-4`}></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{tutorial.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{tutorial.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {tutorial.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {tutorial.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white py-2 rounded-lg font-medium transition-colors">
                      Watch Tutorial
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Documentation", description: "Official docs and guides", icon: "📚", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" },
                  { name: "Code Examples", description: "Practical code snippets", icon: "💻", color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" },
                  { name: "Video Tutorials", description: "Step-by-step videos", icon: "🎥", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" },
                  { name: "Interactive Demos", description: "Hands-on practice", icon: "🎮", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400" }
                ].map((resource, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${resource.color} rounded-xl mx-auto mb-3 flex items-center justify-center text-xl`}>
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{resource.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
