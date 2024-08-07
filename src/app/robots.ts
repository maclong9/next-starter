import { AppConfig } from '@/config/metadata'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: `${AppConfig.url}/sitemap.xml`,
    host: AppConfig.url,
  }
}