import Image from "next/image";

export default function About() {
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
            <a href="/" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
              Home
            </a>
            <a href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Dashboard
            </a>
            <a href="/projects" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projects
            </a>
            <a href="/blog" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Blog
            </a>
            <a href="/learn" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learn
            </a>
            <a href="/about" className="flex items-center gap-3 px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </a>
            <a href="/contact" className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
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
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">HJ</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Harshit Jaiswal
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Web Developer | Programmer | Lifelong Learner | Author | Student
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    As a freelance web developer, I have completed over 24 projects in web development, including full-stack solutions and customizations. 
                    I have managed client communications, delivered tailored solutions, and ensured high satisfaction levels. I am currently pursuing my 
                    degree in Computer Science at K.R. Mangalam University, where I am expected to graduate in 2027. I have also gained valuable experience 
                    as a WordPress Developer Intern at SenpaiHost LLP, where I developed and maintained WordPress sites, coded new features, and collaborated 
                    with team members on various web projects. I am passionate about creating high-quality user experiences and solving complex problems 
                    through innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Frontend Development",
                    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
                    icon: "🎨",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    category: "Backend Development",
                    skills: ["Node.js", "Express.js", "Python", "PHP", "Laravel", "REST APIs", "GraphQL", "Database Design"],
                    icon: "⚙️",
                    color: "from-green-500 to-teal-500"
                  },
                  {
                    category: "Tools & Technologies",
                    skills: ["Git", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL", "Redis", "Jest"],
                    icon: "🛠️",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((skillGroup, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    role: "Senior Frontend Developer",
                    company: "Tech Solutions Inc.",
                    duration: "2022 - Present",
                    description: "Leading frontend development initiatives, mentoring junior developers, and implementing modern React-based solutions for enterprise clients.",
                    technologies: ["React", "Next.js", "TypeScript", "GraphQL"]
                  },
                  {
                    role: "Full Stack Developer",
                    company: "Digital Agency Pro",
                    duration: "2020 - 2022",
                    description: "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks and backend technologies.",
                    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"]
                  },
                  {
                    role: "Frontend Developer",
                    company: "StartupXYZ",
                    duration: "2019 - 2020",
                    description: "Built responsive web applications and collaborated with design teams to create engaging user interfaces for startup products.",
                    technologies: ["React", "JavaScript", "CSS3", "REST APIs"]
                  }
                ].map((job, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                      {index < 2 && <div className="w-0.5 h-24 bg-gray-200 dark:bg-gray-700 ml-1.5 mt-2"></div>}
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{job.duration}</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Location & Contact</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      <span>Based in India 🇮🇳</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>💼</span>
                      <span>Working remotely</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>✉️</span>
                      <span>hello@harshitj183.in</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Interests</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                      <span>💻</span>
                      <span>Open Source Contributions</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📚</span>
                      <span>Technical Writing</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>Continuous Learning</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
