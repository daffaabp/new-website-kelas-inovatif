import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { FeaturedPost } from './_components/FeaturedPost';
import { BlogGrid } from './_components/BlogGrid';
import { Newsletter } from './_components/Newsletter';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import { BlogPost } from './_components/types';

export const metadata: Metadata = {
    title: 'Blog - Komunitas Kelas Inovatif',
    description: 'Baca wawasan, berita, dan artikel terbaru dari Komunitas Kelas Inovatif.',
    openGraph: {
        title: 'Blog - Komunitas Kelas Inovatif',
        description: 'Baca wawasan, berita, dan artikel terbaru dari Komunitas Kelas Inovatif.',
        url: '/blogs',
        type: 'website',
    },
};

export default async function BlogsPage() {
    try {
        const blogs = await prisma.blog.findMany({
            where: { status: 'published' },
            orderBy: { createdAt: 'desc' },
        });

        const formattedPosts: BlogPost[] = blogs.map((blog) => ({
            id: blog.id,
            title: blog.title,
            excerpt: blog.excerpt || '',
            category: blog.category || 'Umum',
            date: new Date(blog.createdAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }),
            author: {
                name: blog.authorName || 'Admin',
                image: (blog.authorImage && !blog.authorImage.includes('ui-avatars.com')) ? blog.authorImage : '/images/logo-kelas-inovatif/admin_image_placeholder.avif',
                role: 'Penulis',
            },
            image: blog.image || blog.contentImage || '/admin_image_placeholder.jpeg',
            readTime: blog.readTime || '5 menit baca',
            featured: Boolean(blog.featured),
            slug: blog.slug || undefined,
        }));

        // If no featured post exists, make the most recent one featured
        if (!formattedPosts.some((post) => post.featured) && formattedPosts.length > 0) {
            formattedPosts[0].featured = true;
        }

        const featuredPost = formattedPosts.find((post) => post.featured);

        return (
            <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
                <Navbar />
                <Hero />
                <FeaturedPost post={featuredPost} />
                <BlogGrid posts={formattedPosts} />
                <Newsletter />
                <Footer />
            </main>
        );
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return (
            <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
                <Navbar />
                <Hero />
                <div className="flex justify-center items-center h-64">
                    <p className="text-red-500">Gagal memuat artikel blog. Silakan coba lagi nanti.</p>
                </div>
                <Footer />
            </main>
        );
    }
}