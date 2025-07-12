import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubRepos from '@/components/GitHubRepos';

// Define project types for better organization
interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  tags: Array<{
    name: string;
    bgClass: string;
    textClass: string;
  }>;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Project data - Real projects by Harshit Jaiswal
const projects: Project[] = [
  {
    id: 'printing-service-ai',
    title: 'Printing Service AI Web App',
    description: 'Latest hackathon project from KRMU 4.0 - AI-powered printing service web app with intelligent code editor integration. Modern solution for document processing and printing workflows.',
    imageSrc: '/projects/printing-ai.jpg',
    tags: [
      { name: 'AI', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'Web App', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'Code Editor', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    demoUrl: 'https://printing-ai.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/printing-service-ai',
    featured: true,
  },
  {
    id: 'food-waste-donation-app',
    title: 'Food Waste Donation Web App',
    description: 'A full-stack system connecting hotels with NGOs and farmers to donate excess food. Built with PHP, MySQL, and JavaScript, featuring Google Maps API integration and PWA capabilities. Reduced local food waste by 35% in test rollout.',
    imageSrc: '/projects/food-waste-app.jpg',
    tags: [
      { name: 'PHP', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'MySQL', bgClass: 'bg-orange-100 dark:bg-orange-900', textClass: 'text-orange-800 dark:text-orange-100' },
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'PWA', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    demoUrl: 'https://food-donation.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/food-waste-donation',
    featured: true,
  },
  {
    id: 'tic-tac-toe-game',
    title: 'Interactive Tic-Tac-Toe Game',
    description: 'A modern web-based Tic-Tac-Toe game with Google UI/UX design, smooth animations, vibration feedback, score tracking, and alternate starting player feature for fairness.',
    imageSrc: '/projects/tic-tac-toe.jpg',
    tags: [
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'HTML5', bgClass: 'bg-red-100 dark:bg-red-900', textClass: 'text-red-800 dark:text-red-100' },
      { name: 'CSS3', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'Google UI', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    demoUrl: 'https://harshitj183.github.io/tic-tac-toe',
    githubUrl: 'https://github.com/harshitj183/tic-tac-toe',
  },
  {
    id: 'krmu-search-engine',
    title: 'KRMU Search Engine',
    description: 'A custom-built search engine specifically designed for KR Mangalam University. Provides seamless search functionality for students and faculty to find academic resources and campus information.',
    imageSrc: '/projects/krmu-search.jpg',
    tags: [
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'HTML', bgClass: 'bg-red-100 dark:bg-red-900', textClass: 'text-red-800 dark:text-red-100' },
      { name: 'CSS', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'API Integration', bgClass: 'bg-indigo-100 dark:bg-indigo-900', textClass: 'text-indigo-800 dark:text-indigo-100' },
    ],
    githubUrl: 'https://github.com/harshitj183/krmu-search-engine',
  },
  {
    id: 'translation-tool',
    title: 'Translation Tool',
    description: 'A web-based translation tool with Google Translate API integration, featuring light/dark mode options and auto language detection for seamless multilingual communication.',
    imageSrc: '/projects/translation-tool.jpg',
    tags: [
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'Google API', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
      { name: 'CSS3', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
    ],
    demoUrl: 'https://harshitj183.github.io/translation-tool',
    githubUrl: 'https://github.com/harshitj183/translation-tool',
  },
  {
    id: 'object-detection-system',
    title: 'Web-based Object Detection System',
    description: 'An AI-powered object detection system using TensorFlow.js and COCO-SSD model for real-time object detection and tracking directly in the browser. Built during CodeAlpha internship.',
    imageSrc: '/projects/object-detection.jpg',
    tags: [
      { name: 'TensorFlow.js', bgClass: 'bg-orange-100 dark:bg-orange-900', textClass: 'text-orange-800 dark:text-orange-100' },
      { name: 'AI/ML', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'Computer Vision', bgClass: 'bg-pink-100 dark:bg-pink-900', textClass: 'text-pink-800 dark:text-pink-100' },
    ],
    demoUrl: 'https://harshitj183.github.io/object-detection',
    githubUrl: 'https://github.com/harshitj183/object-detection',
  },
  {
    id: 'multi-search-extension',
    title: 'MultiSearch Browser Extension',
    description: 'A browser extension that enables simultaneous searching across multiple search engines with speed and convenience. Enhances productivity by providing swift results from preferred platforms.',
    imageSrc: '/projects/multi-search.jpg',
    tags: [
      { name: 'Browser Extension', bgClass: 'bg-indigo-100 dark:bg-indigo-900', textClass: 'text-indigo-800 dark:text-indigo-100' },
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'Chrome API', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    githubUrl: 'https://github.com/harshitj183/multi-search-extension',
  },
  {
    id: 'video-speed-controller',
    title: 'Video Speed Controller Extension',
    description: 'A browser extension to control video playback speed without affecting audio quality. Features easy speed adjustment settings while maintaining pitch clarity for clear dialogue and music.',
    imageSrc: '/projects/video-controller.jpg',
    tags: [
      { name: 'Browser Extension', bgClass: 'bg-indigo-100 dark:bg-indigo-900', textClass: 'text-indigo-800 dark:text-indigo-100' },
      { name: 'JavaScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
      { name: 'Media API', bgClass: 'bg-red-100 dark:bg-red-900', textClass: 'text-red-800 dark:text-red-100' },
    ],
    githubUrl: 'https://github.com/harshitj183/video-speed-controller',
  },
  {
    id: 'printing-service-app',
    title: 'Printing Service Web App (KRMU Hackathon 4.0)',
    description: 'An innovative printing service web application with AI code editor integration, developed for KRMU 4.0 Hackathon. Features modern UI/UX and intelligent code assistance capabilities.',
    imageSrc: '/projects/printing-service.jpg',
    tags: [
      { name: 'AI Integration', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'React', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'Code Editor', bgClass: 'bg-gray-100 dark:bg-gray-700', textClass: 'text-gray-800 dark:text-gray-100' },
      { name: 'Hackathon', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    githubUrl: 'https://github.com/harshitj183/printing-service-app',
  },
];

export default function Projects() {
  // Split projects into featured and regular projects
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">My Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A showcase of 24+ freelance projects, hackathon winners, and innovative solutions in web development, AI/ML, and browser extensions
      </p>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row"
              >
                {project.imageSrc && (
                  <div className="lg:w-1/2 h-64 lg:h-auto relative">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      {/* Fallback for image */}
                      <div className="text-gray-400 dark:text-gray-500 text-lg font-medium">
                        {project.title}
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-6 lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 ${tag.bgClass} ${tag.textClass} text-sm rounded-full`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <Link 
                        href={project.demoUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                      >
                        View Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        View Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* All Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              {project.imageSrc && (
                <div className="w-full h-48 relative">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    {/* Fallback for image */}
                    <div className="text-gray-400 dark:text-gray-500 text-lg font-medium">
                      {project.title}
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 ${tag.bgClass} ${tag.textClass} text-sm rounded`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <Link 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      View Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      {/* Live GitHub Repositories */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
          <span>🔗</span> Live GitHub Repositories
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Here are my latest repositories fetched in real-time from GitHub. This section automatically 
          updates with new projects and contributions.
        </p>
        <GitHubRepos maxRepos={12} featured={true} />
      </section>

      <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready for your next project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          With 24+ completed freelance projects and experience in full-stack development, AI/ML, and browser extensions, 
          I'm ready to bring your ideas to life. Let's build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
          <Link 
            href="mailto:harshitj183@hotmail.com"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors"
          >
            Email Me
          </Link>
        </div>
      </section>
    </div>
  );
}