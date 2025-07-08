export default function About() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I'm Harshit Jaiswal, a passionate full-stack web developer and computer science student 
            dedicated to creating exceptional digital experiences that make a difference.
          </p>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                My passion for technology began during my school years when I first discovered programming. 
                What started as curiosity quickly evolved into a deep fascination with how code can transform 
                ideas into reality. This journey led me to pursue Computer Science at K.R. Mangalam University, 
                where I'm currently in my second year with an expected graduation in 2027.
              </p>
              <p>
                As a freelance web developer, I've had the privilege of working on over 24 diverse projects, 
                ranging from simple portfolio websites to complex e-commerce platforms and real-time applications. 
                Each project has taught me something new and reinforced my belief that great software is built 
                through understanding user needs, clean code practices, and continuous learning.
              </p>
              <p>
                My professional experience as a WordPress Developer Intern at SenpaiHost LLP provided me with 
                valuable insights into working with teams, managing client requirements, and delivering projects 
                within tight deadlines. This experience taught me the importance of communication, project 
                management, and maintaining high-quality standards under pressure.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Drives Me</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                I believe that technology should empower people and make their lives easier. This philosophy 
                drives every line of code I write and every solution I design. Whether it's building a user-friendly 
                interface or optimizing backend performance, I always keep the end user in mind.
              </p>
              <p>
                The rapidly evolving nature of web development excites me. I'm constantly exploring new frameworks, 
                learning emerging technologies, and staying updated with industry best practices. From React's latest 
                features to cutting-edge backend technologies, I enjoy pushing the boundaries of what's possible.
              </p>
              <p>
                Beyond coding, I'm passionate about sharing knowledge and helping others in their development journey. 
                I regularly contribute to open-source projects, write technical articles, and mentor fellow developers 
                who are starting their careers. I believe in the power of community and collaborative learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
              </div>
              <div className="space-y-3">
                {[
                  { skill: 'HTML5 & CSS3', level: 95 },
                  { skill: 'JavaScript (ES6+)', level: 90 },
                  { skill: 'React.js', level: 88 },
                  { skill: 'Next.js', level: 85 },
                  { skill: 'TypeScript', level: 80 },
                  { skill: 'Tailwind CSS', level: 92 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{width: `${item.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xl">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Backend Development</h3>
              </div>
              <div className="space-y-3">
                {[
                  { skill: 'Node.js', level: 85 },
                  { skill: 'Express.js', level: 83 },
                  { skill: 'MongoDB', level: 80 },
                  { skill: 'PostgreSQL', level: 75 },
                  { skill: 'REST APIs', level: 88 },
                  { skill: 'Authentication', level: 82 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-600 dark:bg-green-400 h-2 rounded-full transition-all duration-300"
                        style={{width: `${item.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tools & Technologies</h3>
              </div>
              <div className="space-y-3">
                {[
                  { skill: 'Git & GitHub', level: 90 },
                  { skill: 'WordPress', level: 95 },
                  { skill: 'VS Code', level: 92 },
                  { skill: 'Figma', level: 78 },
                  { skill: 'Vercel/Netlify', level: 85 },
                  { skill: 'Docker', level: 70 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full transition-all duration-300"
                        style={{width: `${item.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience & Education</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-8">
              {[
                {
                  type: "work",
                  title: "Freelance Web Developer",
                  company: "Self-Employed",
                  period: "2022 - Present",
                  description: "Completed 24+ web development projects including e-commerce platforms, portfolio websites, and custom web applications. Worked directly with clients to understand requirements, provide technical solutions, and deliver high-quality products.",
                  achievements: [
                    "Built scalable e-commerce platforms with payment integration",
                    "Developed responsive WordPress themes and custom plugins",
                    "Implemented real-time features using Socket.io and WebRTC",
                    "Maintained 100% client satisfaction rating"
                  ]
                },
                {
                  type: "work",
                  title: "WordPress Developer Intern",
                  company: "SenpaiHost LLP",
                  period: "2023 - 2024",
                  description: "Gained hands-on experience in a professional development environment, working on client projects and collaborating with cross-functional teams.",
                  achievements: [
                    "Developed and maintained WordPress websites for clients",
                    "Created custom themes and plugins from scratch",
                    "Optimized website performance and SEO",
                    "Collaborated with designers and project managers"
                  ]
                },
                {
                  type: "education",
                  title: "Bachelor of Computer Science",
                  company: "K.R. Mangalam University",
                  period: "2024 - 2027 (Expected)",
                  description: "Currently pursuing a comprehensive Computer Science degree with focus on software engineering, data structures, algorithms, and modern web technologies.",
                  achievements: [
                    "Studying advanced programming concepts and algorithms",
                    "Learning software engineering principles and practices",
                    "Participating in coding competitions and hackathons",
                    "Building projects using latest technologies"
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    item.type === 'work' ? 'bg-blue-600 border-blue-600' : 'bg-green-600 border-green-600'
                  } relative z-10`}></div>
                  
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-green-500 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Beyond Development</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">When I'm Not Coding</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    Outside of development, I enjoy exploring new technologies through side projects and 
                    contributing to open-source repositories. I believe in giving back to the community 
                    that has taught me so much.
                  </p>
                  <p>
                    I'm also passionate about sharing knowledge through technical writing and mentoring. 
                    There's something incredibly rewarding about helping someone overcome a coding challenge 
                    or understand a complex concept.
                  </p>
                  <p>
                    In my free time, I enjoy reading about emerging technologies, playing strategic games 
                    that challenge my problem-solving skills, and exploring the outdoors to maintain a 
                    healthy work-life balance.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🚀", label: "Innovation", desc: "Always seeking creative solutions" },
                    { icon: "🎯", label: "Quality", desc: "Committed to excellence" },
                    { icon: "🤝", label: "Collaboration", desc: "Better together than alone" },
                    { icon: "📚", label: "Learning", desc: "Continuous growth mindset" },
                    { icon: "⚡", label: "Efficiency", desc: "Smart work over hard work" },
                    { icon: "🔍", label: "Attention to Detail", desc: "Perfection in the details" }
                  ].map((value, index) => (
                    <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{value.label}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{value.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Create Something Amazing Together</h2>
            <p className="text-lg mb-6 opacity-90">
              I'm always excited to work on new projects and collaborate with fellow developers and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
