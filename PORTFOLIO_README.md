# 🚀 Enhanced Portfolio with Real-Time Integration

A modern, responsive portfolio website built with Next.js 15 and React, featuring real-time data integration from GitHub and LeetCode APIs. This portfolio showcases live coding statistics, project repositories, and achievements through a unified dashboard with beautiful animations and enhanced user experience.

## Features
- **Unified Dashboard**: All-in-one view for GitHub stats, repositories, and LeetCode activity
- **Real-Time Data Integration**: Live updates for coding statistics and project activity
- **Modern UI/UX**: Responsive design, dark mode support, and smooth animations
- **Technical Excellence**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Key Features

### 🔄 Real-Time Data Integration
- **GitHub API Integration**: Live repository data, commit statistics, and contribution activity
- **LeetCode API Integration**: Problem-solving progress, submission history, and achievement badges
- **Auto-refresh**: Data updates every 5 minutes with manual refresh capability
- **Caching**: Efficient data caching to reduce API calls and improve performance

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for all screen sizes and devices
- **Dark Mode Support**: Automatic theme switching with system preference detection
- **Smooth Animations**: CSS animations and micro-interactions for enhanced user experience
- **Loading States**: Beautiful skeleton loaders and progress indicators
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages

### 📊 Interactive Dashboard
- **Coding Analytics**: Comprehensive overview of coding activity and achievements
- **GitHub Stats**: Repository overview, language distribution, and contribution history
- **LeetCode Progress**: Problem-solving statistics, submission tracking, and badge collection
- **Live Coding Stats**: Real-time integration on homepage and dedicated dashboard

### 🛠️ Technical Excellence
- **Next.js 15**: Latest version with Turbopack for fast development
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component Architecture**: Reusable, maintainable React components
- **Performance Optimized**: Fast loading times and efficient rendering

## 🏗️ Architecture

### Component Structure
```
src/
├── app/                    # Next.js 15 app directory
│   ├── page.tsx           # Homepage with hero, stats, and projects
│   ├── projects/          # Projects showcase page
│   ├── github/            # Dedicated coding dashboard
│   ├── about/             # About page with bio and achievements
│   └── globals.css        # Global styles and imports
├── components/            # Reusable React components
│   ├── GitHubStats.tsx    # GitHub statistics and activity
│   ├── LeetCodeStats.tsx  # LeetCode progress and achievements
│   ├── CodingPlatforms.tsx # Tabbed dashboard component
│   ├── CodingAnalytics.tsx # Advanced analytics and insights
│   ├── LoadingSpinner.tsx  # Loading states and skeleton UI
│   ├── ErrorBoundary.tsx   # Error handling and recovery
│   ├── RefreshButton.tsx   # Manual data refresh functionality
│   └── Toast.tsx          # Notification system
├── lib/                   # API utilities and helpers
│   ├── github.ts          # GitHub API integration
│   └── leetcode.ts        # LeetCode API integration
└── styles/               # CSS modules and animations
    ├── coding-platforms.css # Component-specific styles
    └── animations.css      # Enhanced animations and effects
```

### API Integration
- **GitHub REST API**: User profile, repositories, and activity data
- **LeetCode GraphQL API**: User statistics, submissions, and badges
- **Caching Strategy**: Local storage with TTL for efficient data management
- **Error Handling**: Graceful degradation and retry mechanisms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
1. Clone the repository
```bash
git clone https://github.com/harshitj183/harshitj183.in.git
cd harshitj183.in
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables (Optional)
Create a `.env.local` file for enhanced GitHub API limits:
```env
GITHUB_TOKEN=your_github_personal_access_token
```

## 📈 Performance Features

### Loading & Caching
- **Smart Caching**: 5-minute TTL for API responses
- **Skeleton Loading**: Beautiful loading states while data loads
- **Progressive Enhancement**: Content loads gracefully with fallbacks

### Error Handling
- **Error Boundaries**: Prevent crashes and provide recovery options
- **Graceful Degradation**: Show fallback content when APIs fail
- **Retry Mechanisms**: Automatic and manual retry options

### Animations & Interactions
- **Smooth Transitions**: CSS transitions for all interactive elements
- **Micro-interactions**: Hover effects, button animations, and loading states
- **Accessibility**: Respects `prefers-reduced-motion` for accessibility
- **Performance**: GPU-accelerated animations for smooth experience

## 🎯 Features Showcase

### Homepage Integration
- **Hero Section**: Personal introduction with floating animations
- **Live Stats**: Real-time coding statistics from both platforms
- **Featured Projects**: Highlighted work with hover effects
- **Technology Stack**: Interactive skill showcase with tooltips

### Dedicated Dashboard
- **Tabbed Interface**: Switch between GitHub and LeetCode views
- **Analytics Overview**: Comprehensive coding activity insights
- **Progress Tracking**: Visual progress bars and achievement displays
- **Activity Timeline**: Recent commits, submissions, and achievements

### Enhanced UX
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dark Mode**: System preference detection with manual toggle
- **Toast Notifications**: User feedback for actions and errors
- **Refresh Controls**: Manual data refresh with visual feedback

## 🔧 Customization

### API Configuration
- Update usernames in `lib/github.ts` and `lib/leetcode.ts`
- Modify API endpoints and data processing as needed
- Adjust caching TTL values for different refresh rates

### UI/UX Customization
- Modify colors and themes in `tailwind.config.js`
- Update animations in `styles/animations.css`
- Customize component styling in individual component files

### Content Updates
- Personal information in homepage (`app/page.tsx`)
- Project showcases and descriptions
- Skills and technology stack
- About page content and achievements

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deployment Options
- **Vercel**: Optimized for Next.js applications
- **Netlify**: Easy deployment with continuous integration
- **GitHub Pages**: Static site hosting (requires export)
- **Docker**: Containerized deployment for any platform

### Performance Optimization
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Bundle Analysis**: Use `npm run analyze` to check bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and deployment platform
- **GitHub**: For providing comprehensive APIs
- **LeetCode**: For coding challenge platform
- **Tailwind CSS**: For utility-first CSS framework

## 📞 Contact

**Harshit Jaiswal**
- Website: [harshitj183.in](https://harshitj183.in)
- GitHub: [@harshitj183](https://github.com/harshitj183)
- LeetCode: [@harshitj183](https://leetcode.com/u/harshitj183/)
- Email: [contact@harshitj183.in](mailto:contact@harshitj183.in)

---

**Built with ❤️ by Harshit Jaiswal | © 2025 All Rights Reserved**
