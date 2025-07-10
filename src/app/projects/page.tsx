import React from 'react';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of project 1 and its features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm rounded">Node.js</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">Demo</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of project 2 and its features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-sm rounded">Next.js</span>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 text-sm rounded">TypeScript</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">Demo</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of project 3 and its features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 text-sm rounded">Angular</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm rounded">MongoDB</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">Demo</a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}