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
                Born in Rajapur, Chitrakoot, UP (near Prayagraj) on September 12, 2005, my journey into technology began during my school years at S Tulsi Inter College. 
                After completing my 10th and 12th from UP Board, I took a gap year (2022-2023) to explore my passion for technology before joining K.R. Mangalam University 
                in Haryana, Delhi NCR, where I'm currently pursuing B.Tech in Computer Science Engineering with an expected graduation in 2027.
              </p>
              <p>
                My entrepreneurial spirit emerged early - in 11th grade, I started a blog at harshitj183.blogspot.com using Google's Blogger platform. 
                This experience introduced me to HTML, CSS, and JavaScript, laying the foundation for my future in web development. 
                In August 2022, after passing 12th grade, I expanded my horizons by launching harshitj183.in on WordPress, working on numerous projects 
                that honed my skills in blog management, SEO, and Google Search Console.
              </p>
              <p>
                As a freelancer since 2020, I've successfully completed over 24 diverse projects for clients, ranging from simple websites to complex full-stack solutions. 
                My professional experience includes internships as a WordPress Developer at SenpaiHost and an AI Intern at CodeAlpha, where I've gained valuable 
                insights into working with teams, managing client requirements, and delivering projects within tight deadlines.
              </p>
              <p>
                My recent achievements include publishing a research paper on "Innovative Systems and Ethical Data Practices to Increase Organ Donations" 
                in the International Journal of Scientific Research in Engineering and Management (IJSREM), participating in the KRMU 4.0 hackathon, 
                and maintaining a 50-day continuous coding streak on LeetCode. These accomplishments reflect my commitment to continuous learning and 
                contributing to both academic research and practical technology solutions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Drives Me</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                I believe that technology should empower people and make their lives easier. This philosophy 
                drives every line of code I write and every solution I design. Whether it's building a user-friendly 
                interface or optimizing backend performance, I always keep the end user in mind. My recent research 
                on organ donation systems reflects this commitment to using technology for social good.
              </p>
              <p>
                Known as @harshitj183 across all social media platforms including GitHub, Twitter, and Instagram, 
                I maintain a consistent personal brand that showcases my professional identity. This branding approach 
                has helped me build a recognizable presence in the tech community and connect with like-minded developers 
                and potential collaborators.
              </p>
              <p>
                My professional goals are ambitious yet focused: I aim to become a successful freelancer while 
                contributing to prestigious organizations like DRDO and ISRO. My passion for technology and continuous 
                learning drives me to explore new possibilities in software programming and space research. I believe 
                that by combining freelancing with contributing to national defense and space technologies, I can make 
                meaningful contributions to both the industry and my country.
              </p>
              <p>
                The rapidly evolving nature of web development, AI, and emerging technologies like prompt engineering 
                with ChatGPT excites me. I'm constantly exploring new frameworks, learning cutting-edge technologies, 
                and staying updated with industry best practices. From building browser extensions to creating full-stack 
                applications, I enjoy pushing the boundaries of what's possible with code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Publications Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Research & Publications</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">📄</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Innovative Systems and Ethical Data Practices to Increase Organ Donations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  International Journal of Scientific Research in Engineering and Management (IJSREM) - Volume 08, Issue 10, October 2024
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This research explores how Artificial Intelligence (AI), Blockchain technology, and Big Data Analytics can 
                  optimize donor-recipient matching while maintaining transparency and ethical standards in organ donation systems.
                </p>
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-blue-600 dark:text-blue-400">Co-authors:</span>
                    <span className="text-gray-600 dark:text-gray-400">Dr. Preeti Rathi, Ms. Sneha, Mr. Ashish Yadav, Mr. Kundan, Mr. Harsh Deo</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded-full">
                    Published
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                    AI in Healthcare
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full">
                    Blockchain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <div className="max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Certifications & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Foundations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn Learning, June 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Career Skills in Software Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn Learning, June 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Samsung Galaxy AI Treasure Hunt</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Samsung via Unstop, May 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Nestlé Leaders League Genesis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Nestlé via Unstop, June 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Consultathon 4.0</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Unstop, November 2023</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WordPress Development Internship</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">SenpaiHost, August-September 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-6 opacity-90">
            Ready to collaborate on your next project or discuss exciting opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="/projects" 
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
