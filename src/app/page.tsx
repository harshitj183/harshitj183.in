import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m Harshit Jaiswal
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
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>Graduating 2027</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full-Stack Web Developer & Computer Science Student
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl">
              I'm a passionate web developer with expertise in modern technologies like React, Next.js, Node.js, and WordPress. 
              With over 24 completed projects and hands-on experience as a WordPress Developer Intern at SenpaiHost LLP, 
              I specialize in creating scalable, user-friendly web applications that deliver exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
              Currently pursuing my Computer Science degree at K.R. Mangalam University, I combine academic knowledge 
              with real-world experience to build innovative solutions. I'm always eager to take on new challenges 
              and collaborate on exciting projects.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All Projects →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard built with React, Node.js, and MongoDB.",
                technologies: ["React", "Node.js", "MongoDB", "Stripe"],
                status: "Completed",
                image: "🛒",
                github: "https://github.com/harshitj183",
                live: "https://ecommerce-demo.harshitj183.in"
              },
              {
                title: "Real-Time Chat Application",
                description: "Modern chat app with instant messaging, file sharing, video calls, and group conversations using Socket.io and WebRTC.",
                technologies: ["Socket.io", "WebRTC", "Express", "React"],
                status: "In Progress",
                image: "💬",
                github: "https://github.com/harshitj183",
                live: null
              },
              {
                title: "Task Management System",
                description: "Comprehensive project management tool with team collaboration, real-time updates, and progress tracking for enhanced productivity.",
                technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
                status: "Completed",
                image: "📋",
                github: "https://github.com/harshitj183",
                live: "https://taskmanager.harshitj183.in"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' :
                    'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs transition-colors"
                    >
                      Code
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", icon: "⚡", color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400", level: "Expert" },
              { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400", level: "Advanced" },
              { name: "Node.js", icon: "🟢", color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400", level: "Advanced" },
              { name: "TypeScript", icon: "📘", color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400", level: "Intermediate" },
              { name: "Next.js", icon: "▲", color: "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400", level: "Advanced" },
              { name: "MongoDB", icon: "🍃", color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400", level: "Intermediate" },
              { name: "WordPress", icon: "🔧", color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400", level: "Expert" },
              { name: "Git", icon: "📝", color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400", level: "Advanced" }
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer`}>
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-medium mb-1">{tech.name}</div>
                <div className="text-xs opacity-75">{tech.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All Articles →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Building Scalable React Applications: Best Practices for 2025",
                excerpt: "Discover the latest patterns and techniques for creating maintainable React applications that can grow with your business needs.",
                date: "Jan 15, 2025",
                category: "React",
                readTime: "8 min read",
                image: "⚛️"
              },
              {
                title: "Full-Stack Development with Next.js and MongoDB",
                excerpt: "Complete guide to building modern web applications using Next.js for the frontend and MongoDB for data storage.",
                date: "Jan 10, 2025",
                category: "Full Stack",
                readTime: "12 min read",
                image: "🚀"
              },
              {
                title: "WordPress vs Custom Development: When to Choose What",
                excerpt: "Comprehensive comparison to help you decide between WordPress and custom development for your next project.",
                date: "Jan 5, 2025",
                category: "Web Development",
                readTime: "6 min read",
                image: "🔧"
              }
            ].map((article, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{article.image}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{article.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-500">{article.date}</span>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg mb-6 opacity-90">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              href="/projects" 
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
