import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn - Harshit Jaiswal | Web Development Resources & Tutorials',
  description: 'Comprehensive learning resources, tutorials, and courses for web development, React, full-stack development, and modern programming practices.',
  keywords: 'web development tutorials, React learning, programming courses, full-stack development, coding resources, tech education',
};

export default function Learn() {
  const learningPaths = [
    {
      id: 1,
      title: "Frontend Development Mastery",
      description: "Complete guide to modern frontend development with React, TypeScript, and Next.js",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      modules: 8,
      students: 2500,
      rating: 4.9,
      topics: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS"],
      featured: true
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Build complete web applications from frontend to backend with modern tools",
      level: "Intermediate",
      duration: "16 weeks",
      modules: 12,
      students: 1800,
      rating: 4.8,
      topics: ["React", "Node.js", "Express", "PostgreSQL", "AWS", "Docker"],
      featured: true
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description: "Master JavaScript from basics to advanced concepts and ES6+ features",
      level: "Beginner",
      duration: "8 weeks",
      modules: 6,
      students: 3200,
      rating: 4.7,
      topics: ["ES6+", "Async/Await", "DOM", "APIs", "Testing", "Modules"]
    },
    {
      id: 4,
      title: "React Advanced Patterns",
      description: "Learn advanced React patterns, performance optimization, and best practices",
      level: "Advanced",
      duration: "10 weeks",
      modules: 8,
      students: 1200,
      rating: 4.9,
      topics: ["Hooks", "Context", "Performance", "Testing", "State Management", "Patterns"]
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Building a Real-time Chat App with Next.js",
      type: "Video Tutorial",
      duration: "45 min",
      difficulty: "Intermediate",
      views: "12.5K",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      type: "Article",
      duration: "15 min read",
      difficulty: "Advanced",
      views: "8.2K",
      category: "React"
    },
    {
      id: 3,
      title: "Complete Guide to TypeScript for Beginners",
      type: "Video Series",
      duration: "2h 30min",
      difficulty: "Beginner",
      views: "25.1K",
      category: "TypeScript"
    },
    {
      id: 4,
      title: "Deploying Next.js Apps to AWS",
      type: "Tutorial",
      duration: "30 min",
      difficulty: "Intermediate",
      views: "6.8K",
      category: "DevOps"
    },
    {
      id: 5,
      title: "Modern CSS Grid and Flexbox Layouts",
      type: "Interactive",
      duration: "1h 15min",
      difficulty: "Beginner",
      views: "15.3K",
      category: "CSS"
    },
    {
      id: 6,
      title: "API Design Best Practices",
      type: "Workshop",
      duration: "90 min",
      difficulty: "Intermediate",
      views: "9.7K",
      category: "Backend"
    }
  ];

  const resources = [
    {
      category: "Documentation",
      items: [
        { name: "React Official Docs", url: "#", description: "Comprehensive React documentation" },
        { name: "Next.js Documentation", url: "#", description: "Complete Next.js guide" },
        { name: "TypeScript Handbook", url: "#", description: "Official TypeScript documentation" },
        { name: "MDN Web Docs", url: "#", description: "Web development reference" }
      ]
    },
    {
      category: "Tools & Libraries",
      items: [
        { name: "VS Code Extensions", url: "#", description: "Essential extensions for development" },
        { name: "npm Packages", url: "#", description: "Curated list of useful packages" },
        { name: "Dev Tools", url: "#", description: "Browser development tools guide" },
        { name: "Testing Libraries", url: "#", description: "Jest, Testing Library, Cypress" }
      ]
    },
    {
      category: "Practice",
      items: [
        { name: "Coding Challenges", url: "#", description: "Algorithm and data structure problems" },
        { name: "Project Ideas", url: "#", description: "Hands-on project suggestions" },
        { name: "Code Reviews", url: "#", description: "Learn from real code examples" },
        { name: "Interview Prep", url: "#", description: "Technical interview preparation" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
      case "Intermediate":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
      case "Advanced":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video Tutorial":
      case "Video Series":
        return "🎥";
      case "Article":
        return "📄";
      case "Interactive":
        return "🖱️";
      case "Workshop":
        return "🎪";
      default:
        return "📚";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn & Grow
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive resources, tutorials, and learning paths to master web development and advance your career.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Tutorials</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-300">Students</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-300">Hours Content</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.8</div>
            <div className="text-gray-600 dark:text-gray-300">Avg Rating</div>
          </div>
        </div>

        {/* Featured Learning Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Learning Paths</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningPaths.filter(path => path.featured).map((path) => (
              <div
                key={path.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(path.level)}`}>
                      {path.level}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <span className="mr-1">⭐</span>
                      <span className="text-sm">{path.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {path.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📅 {path.duration}</span>
                    <span>📚 {path.modules} modules</span>
                    <span>👥 {path.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {path.topics.slice(0, 4).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {path.topics.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{path.topics.length - 4} more
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Learning Paths */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(path.level)}`}>
                    {path.level}
                  </span>
                  <div className="flex items-center text-yellow-500 text-sm">
                    <span className="mr-1">⭐</span>
                    <span>{path.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {path.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {path.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span>{path.duration}</span>
                  <span>{path.modules} modules</span>
                  <span>{path.students.toLocaleString()} students</span>
                </div>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{getTypeIcon(tutorial.type)}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tutorial.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {tutorial.title}
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{tutorial.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>⏱️ {tutorial.duration}</span>
                  <span>👀 {tutorial.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="border-b dark:border-gray-700 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of developers who are advancing their careers with our comprehensive learning resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Download Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
