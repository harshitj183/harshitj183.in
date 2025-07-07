import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="mb-12">
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
          </p>
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
