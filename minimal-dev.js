// Minimal Next.js development server starter
// This script bypasses most of the complex project initialization to start faster

// Set environment variables
process.env.NODE_OPTIONS = '--max-old-space-size=4096';
process.env.USE_MOCK_DATA = 'true';

// Import only the essential Next.js parts
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Create a Next.js development server with minimal config
const dev = true;
const hostname = 'localhost';
const port = 3030; // Using port 3030 to avoid conflicts

console.log('🔄 Starting minimal Next.js server...');
console.log('⚠️  Using mock data and minimal configuration');
console.log('⚡ Type checking disabled for faster startup');

// Configure Next.js
const app = next({
  dev,
  hostname,
  port,
  conf: {
    // Minimize the work Next.js has to do
    typescript: {
      ignoreBuildErrors: true,
      tsconfigPath: 'tsconfig.json'
    },
    eslint: {
      ignoreDuringBuilds: true
    },
    swcMinify: false
  }
});

const handle = app.getRequestHandler();

// Start the server
app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log('✅ Server started successfully');
  });
}).catch(err => {
  console.error('Error starting server:', err);
  process.exit(1);
});
