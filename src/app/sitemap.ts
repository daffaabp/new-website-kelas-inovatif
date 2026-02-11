import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kelasinovatif.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/community',
        '/user-story',
        '/program',
        '/bootcamp',
        '/private',
        '/schedule',
        '/blogs',
        '/faq',
        '/contact',
        '/jobs',
        '/homepage',
        '/terms',
        '/privacy'
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
