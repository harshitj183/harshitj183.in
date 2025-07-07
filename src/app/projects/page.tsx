import Link from "next/link";

export default function Projects() {
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
            <Link href="/projects" className="flex items-center gap-3 px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors">
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
            <Link href="/learn" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "KRMU Search Engine",
                  description: "A custom-built search engine specifically designed for KR Mangalam University. This project leverages HTML, CSS, and JavaScript to provide a seamless and efficient way for students and faculty to search for information related to the university.",
                  tech: ["HTML", "CSS", "JavaScript", "API Integration"],
                  status: "Live",
                  image: "from-blue-500 to-purple-600",
                  link: "https://github.com/harshitj183/krmu-search",
                  github: "https://github.com/harshitj183/krmu-search"
                },
                {
                  title: "Interactive Tic-Tac-Toe Game",
                  description: "Modern web-based Tic-Tac-Toe game with Google UI/UX design, smooth animations, vibration feedback for mobile devices, score tracking, and alternate starting player feature.",
                  tech: ["HTML", "CSS", "JavaScript", "PWA", "Mobile UX"],
                  status: "Live",
                  image: "from-green-500 to-blue-500",
                  link: "https://harshitj183.github.io/tic-tac-toe",
                  github: "https://github.com/harshitj183/tic-tac-toe"
                },
                {
                  title: "Portfolio Website",
                  description: "Personal portfolio website showcasing projects, skills, and blog posts. Built with Next.js and Tailwind CSS for optimal performance and design.",
                  tech: ["Next.js", "TailwindCSS", "TypeScript", "React"],
                  status: "Live",
                  image: "from-purple-500 to-pink-500",
                  link: "https://harshitj183.in",
                  github: "https://github.com/harshitj183/portfolio"
                },
                {
                  title: "WordPress Projects (24+ Completed)",
                  description: "Over 24 freelance projects in web development, including full-stack solutions and customizations. Managed client communications, delivered tailored solutions, and ensured high satisfaction levels.",
                  tech: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS", "HTML"],
                  status: "Multiple Live Sites",
                  image: "from-cyan-500 to-blue-500",
                  link: "https://www.linkedin.com/in/harshitj183/",
                  github: "https://github.com/harshitj183"
                },
                {
                  title: "SenpaiHost Projects",
                  description: "WordPress development projects completed during internship at SenpaiHost LLP. Involved developing and maintaining WordPress sites, coding new features, and collaborating with team members.",
                  tech: ["WordPress", "PHP", "JavaScript", "WordPress Design", "Team Collaboration"],
                  status: "Completed",
                  image: "from-orange-500 to-red-500",
                  link: "https://senpaihost.com",
                  github: "https://github.com/harshitj183"
                },
                {
                  title: "LeetCode Problem Solving",
                  description: "Completed 100+ coding problems as part of #100DaysOfCode challenge. Covers data structures, algorithms, SQL queries, and problem-solving techniques. Earned 100 Days Badge 2025.",
                  tech: ["Python", "SQL", "DSA", "Algorithms", "Problem Solving"],
                  status: "Ongoing",
                  image: "from-yellow-500 to-green-500",
                  link: "https://leetcode.com/u/harshitj183",
                  github: "https://github.com/harshitj183"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-48 bg-gradient-to-br ${project.image} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.link} 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </a>
                      <a 
                        href={project.github} 
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-colors text-center text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
