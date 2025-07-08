import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Harshit Jaiswal | Web Development Insights & Tutorials',
  description: 'Explore web development tutorials, React insights, full-stack development tips, and tech industry perspectives by Harshit Jaiswal.',
  keywords: 'web development blog, React tutorials, full-stack development, JavaScript tips, tech articles, programming insights',
};

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large-scale React applications using TypeScript, proper component architecture, and state management patterns.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      featured: true
    },
    {
      id: 2,
      title: "Full-Stack Development with Next.js and Prisma",
      excerpt: "A comprehensive guide to building modern full-stack applications using Next.js 14, Prisma ORM, and PostgreSQL for robust web solutions.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Full-Stack",
      featured: true
    },
    {
      id: 3,
      title: "Optimizing Web Performance: Core Web Vitals Guide",
      excerpt: "Master the art of web performance optimization with practical strategies for improving Core Web Vitals, SEO rankings, and user experience.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Performance"
    },
    {
      id: 4,
      title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
      excerpt: "Explore advanced CSS techniques including CSS Grid, Flexbox, custom properties, and modern layout patterns for responsive web design.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "CSS"
    },
    {
      id: 5,
      title: "API Design Best Practices for RESTful Services",
      excerpt: "Comprehensive guide to designing robust RESTful APIs with proper status codes, error handling, pagination, and documentation strategies.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Backend"
    },
    {
      id: 6,
      title: "JavaScript ES2024: New Features and Improvements",
      excerpt: "Discover the latest JavaScript features in ES2024, including new array methods, improved async patterns, and enhanced developer experience.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "JavaScript"
    }
  ];

  const categories = ["All", "React", "Full-Stack", "Performance", "CSS", "Backend", "JavaScript"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, best practices, and the latest trends in technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Articles Published</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">25K+</div>
            <div className="text-gray-600 dark:text-gray-300">Total Reads</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1K+</div>
            <div className="text-gray-600 dark:text-gray-300">Monthly Readers</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Tech Topics</div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles, tutorials, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
