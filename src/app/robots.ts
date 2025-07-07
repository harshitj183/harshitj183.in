import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.harshitj183.in/sitemap.xml',
    host: 'https://www.harshitj183.in',
  }
}
