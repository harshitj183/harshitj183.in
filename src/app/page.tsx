import Link from "next/link";

export default function Home() {
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
            <Link href="/" className="flex items-center gap-3 px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg transition-colors">
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
              <span className="font-semibold text-gray-900 dark:text-white">Harshit Jaiswal</span>
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
        {/* Hero Section */}
        <section id="about" className="p-6 lg:p-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m Harshit
              </h1>
              <span className="text-3xl">👋</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Based in Gurugram, Haryana 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>CS Student at K.R. Mangalam University</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
              As a freelance web developer, I have completed over 24 projects in web development, including full-stack solutions and customizations. 
              I am currently pursuing my degree in Computer Science at K.R. Mangalam University, where I am expected to graduate in 2027. 
              I have gained valuable experience as a WordPress Developer Intern at SenpaiHost LLP, where I developed and maintained WordPress sites, 
              coded new features, and collaborated with team members on various web projects. I am passionate about creating high-quality user 
              experiences and solving complex problems through innovative solutions.
            </p>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section id="articles" className="p-6 lg:p-8">
          <div className="max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All Articles →</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "🎉 100 Days of Code Challenge: Completed!",
                  excerpt: "Successfully completed the #100DaysOfCode Challenge and earned the 100 Days Badge 2025! Solving over 100 coding problems has sharpened my problem-solving skills and deepened my understanding of data structures and algorithms...",
                  tags: ["LeetCode", "100DaysOfCode"],
                  date: "January 2025",
                  views: "10",
                  readTime: "2 MINS READ",
                  color: "from-green-500 to-blue-600"
                },
                {
                  title: "Building the KRMU Search Engine", 
                  excerpt: "Creating a custom search engine for KR Mangalam University using HTML, CSS, and JavaScript. This project provides efficient search functionality for students and faculty...",
                  tags: ["JavaScript", "Search"],
                  date: "December 2024",
                  views: "2",
                  readTime: "3 MINS READ",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Interactive Tic-Tac-Toe with Modern UX",
                  excerpt: "Built a modern Tic-Tac-Toe game with Google UI/UX design, smooth animations, vibration feedback, score tracking, and alternate starting player features...",
                  tags: ["JavaScript", "GameDev"],
                  date: "November 2024", 
                  views: "4",
                  readTime: "2 MINS READ",
                  color: "from-orange-500 to-red-500"
                }
              ].map((article, index) => (
                <article key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className={`h-32 bg-gradient-to-br ${article.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.views} VIEWS</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="p-6 lg:p-8">
          <div className="max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Tools That I Have Used</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {[
                { name: "Vite", icon: "⚡", color: "from-yellow-400 to-orange-500" },
                { name: "JavaScript", icon: "�", color: "from-yellow-300 to-yellow-500" },
                { name: "TypeScript", icon: "�", color: "from-blue-400 to-blue-600" },
                { name: "Gatsby", icon: "�", color: "from-purple-400 to-purple-600" },
                { name: "Artificial Intelligence", icon: "🤖", color: "from-green-400 to-green-600" },
                { name: "Vue.js", icon: "�", color: "from-green-400 to-green-500" },
                { name: "Apollo", icon: "�", color: "from-indigo-400 to-indigo-600" },
                { name: "Artificial Intelligence", icon: "🧠", color: "from-pink-400 to-pink-600" },
                { name: "Angular", icon: "🅰️", color: "from-red-400 to-red-600" },
                { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
                { name: "Prisma", icon: "🔷", color: "from-gray-400 to-gray-600" },
                { name: "CSS", icon: "🎨", color: "from-blue-300 to-blue-500" },
                { name: "Nginx", icon: "🟢", color: "from-green-500 to-green-700" },
                { name: "Material UI", icon: "�", color: "from-blue-400 to-blue-600" },
                { name: "Storybook", icon: "�", color: "from-pink-400 to-pink-600" },
                { name: "GraphQL", icon: "�", color: "from-pink-400 to-purple-500" },
                { name: "WordPress", icon: "🔵", color: "from-blue-600 to-blue-800" },
                { name: "Nuxt.js", icon: "💚", color: "from-green-400 to-green-600" },
                { name: "Redux", icon: "🔄", color: "from-purple-400 to-purple-600" },
                { name: "Jest", icon: "🃏", color: "from-red-400 to-red-600" },
                { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
                { name: "TailwindCSS", icon: "🎨", color: "from-teal-400 to-teal-600" },
                { name: "Styled Components", icon: "💅", color: "from-pink-300 to-pink-500" },
                { name: "Laravel", icon: "🔴", color: "from-red-500 to-red-700" },
                { name: "PWA", icon: "📱", color: "from-blue-500 to-blue-700" },
                { name: "Socket", icon: "�", color: "from-green-500 to-green-700" },
                { name: "Express", icon: "🚂", color: "from-gray-600 to-gray-800" },
                { name: "Firebase", icon: "🔥", color: "from-orange-400 to-orange-600" },
                { name: "Bootstrap", icon: "🅱️", color: "from-purple-500 to-purple-700" },
                { name: "Node.js", icon: "💚", color: "from-green-500 to-green-700" },
                { name: "jQuery", icon: "📜", color: "from-blue-400 to-blue-600" },
                { name: "PHP", icon: "🐘", color: "from-purple-400 to-purple-600" }
              ].map((tool, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all duration-200 text-center group-hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} mx-auto mb-2 flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                      {tool.icon}
                    </div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white">{tool.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="p-6 lg:p-8">
          <div className="max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What I&apos;ve Been Working On</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I assist brands, companies, institutions, and startups in creating exceptional digital experiences 
                for their businesses through strategic development services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-center text-white mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-4xl">💝</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s work together!</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I&apos;m open for freelance projects, feel free to email me to see how we can collaborate.
              </p>
              <a 
                href="mailto:harshit.jain.dev@gmail.com" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
