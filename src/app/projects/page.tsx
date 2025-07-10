import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

// Project data
const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, responsive design, and optimized performance.',
    imageSrc: '/projects/portfolio.jpg',
    tags: [
      { name: 'Next.js', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'Tailwind CSS', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'TypeScript', bgClass: 'bg-yellow-100 dark:bg-yellow-900', textClass: 'text-yellow-800 dark:text-yellow-100' },
    ],
    demoUrl: 'https://harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/harshitj183.in',
    featured: true,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A fully-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing integration.',
    imageSrc: '/projects/ecommerce.jpg',
    tags: [
      { name: 'React', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'Node.js', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
      { name: 'MongoDB', bgClass: 'bg-gray-100 dark:bg-gray-700', textClass: 'text-gray-800 dark:text-gray-100' },
    ],
    demoUrl: 'https://ecommerce-demo.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/ecommerce-platform',
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    description: 'A productivity app for managing tasks and projects with features like drag-and-drop organization, due dates, priorities, and team collaboration.',
    imageSrc: '/projects/task-app.jpg',
    tags: [
      { name: 'Angular', bgClass: 'bg-red-100 dark:bg-red-900', textClass: 'text-red-800 dark:text-red-100' },
      { name: 'Firebase', bgClass: 'bg-orange-100 dark:bg-orange-900', textClass: 'text-orange-800 dark:text-orange-100' },
      { name: 'SCSS', bgClass: 'bg-pink-100 dark:bg-pink-900', textClass: 'text-pink-800 dark:text-pink-100' },
    ],
    demoUrl: 'https://task-app.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/task-management',
  },
  {
    id: 'weather-forecast',
    title: 'Weather Forecast App',
    description: 'A real-time weather application that provides current conditions and forecasts based on location. Features include interactive maps and historical data.',
    imageSrc: '/projects/weather.jpg',
    tags: [
      { name: 'React', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'API Integration', bgClass: 'bg-indigo-100 dark:bg-indigo-900', textClass: 'text-indigo-800 dark:text-indigo-100' },
      { name: 'Chart.js', bgClass: 'bg-green-100 dark:bg-green-900', textClass: 'text-green-800 dark:text-green-100' },
    ],
    demoUrl: 'https://weather.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/weather-app',
  },
  {
    id: 'blog-platform',
    title: 'Content Management System',
    description: 'A modern blogging platform with a rich text editor, content management, and SEO optimization features. Supports multiple authors and content types.',
    imageSrc: '/projects/blog.jpg',
    tags: [
      { name: 'Next.js', bgClass: 'bg-purple-100 dark:bg-purple-900', textClass: 'text-purple-800 dark:text-purple-100' },
      { name: 'PostgreSQL', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'Prisma', bgClass: 'bg-teal-100 dark:bg-teal-900', textClass: 'text-teal-800 dark:text-teal-100' },
    ],
    demoUrl: 'https://blog.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/blog-platform',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracking Application',
    description: 'A mobile-first web app for tracking workouts, nutrition, and fitness goals. Features include progress visualization and custom workout plans.',
    imageSrc: '/projects/fitness.jpg',
    tags: [
      { name: 'React Native', bgClass: 'bg-blue-100 dark:bg-blue-900', textClass: 'text-blue-800 dark:text-blue-100' },
      { name: 'GraphQL', bgClass: 'bg-pink-100 dark:bg-pink-900', textClass: 'text-pink-800 dark:text-pink-100' },
      { name: 'Firebase', bgClass: 'bg-orange-100 dark:bg-orange-900', textClass: 'text-orange-800 dark:text-orange-100' },
    ],
    demoUrl: 'https://fitness.harshitj183.in',
    githubUrl: 'https://github.com/harshitj183/fitness-tracker',
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
        A selection of my recent work and personal projects
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
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}