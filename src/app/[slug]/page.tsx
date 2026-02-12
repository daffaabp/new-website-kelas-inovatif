import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { ArticleContent } from './_components/ArticleContent';
import { AuthorBio } from './_components/AuthorBio';
import { Breadcrumb } from './_components/Breadcrumb';
import { RelatedArticles } from './_components/RelatedArticles';
import { Newsletter } from '@/app/blogs/_components/Newsletter';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    let post = await prisma.blog.findUnique({ where: { slug, status: 'published' } });

    // If not found by slug, and input is numeric, try ID (Legacy support)
    if (!post && !isNaN(parseInt(slug))) {
        post = await prisma.blog.findUnique({ where: { id: parseInt(slug), status: 'published' } });
    }

    if (!post) {
        return {
            title: 'Artikel Tidak Ditemukan',
        };
    }

    // Strip HTML tags from content for description fallback
    const cleanContent = post.content?.replace(/<[^>]*>?/gm, "") || "";
    const description = post.excerpt || cleanContent.substring(0, 200) || undefined;

    return {
        title: post.title,
        description: description,
        openGraph: {
            title: post.title,
            description: description || "",
            url: `/${post.slug}`,
            images: [
                {
                    url: post.image || '/admin_image_placeholder.jpeg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: 'article',
            publishedTime: post.createdAt.toISOString(),
            authors: [post.authorName || 'Admin'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: description || "",
            images: [post.image || '/admin_image_placeholder.jpeg'],
        },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;

    let post = await prisma.blog.findUnique({ where: { slug, status: 'published' } });

    // If not found by slug, and input is numeric, try ID (Legacy support)
    if (!post && !isNaN(parseInt(slug))) {
        post = await prisma.blog.findUnique({ where: { id: parseInt(slug), status: 'published' } });
    }

    if (!post) {
        notFound();
    }

    // Format post data
    const formattedPost = {
        title: post.title,
        category: post.category || 'Umum',
        date: new Date(post.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),
        readTime: post.readTime || '5 menit baca',
        author: {
            name: post.authorName || 'Admin',
            image: (post.authorImage && !post.authorImage.includes('ui-avatars.com')) ? post.authorImage : '/images/logo-kelas-inovatif/admin_image_placeholder.avif',
            role: 'Penulis',
            bio: 'Penulis di Kelas Inovatif.',
        },
        image: post.contentImage || post.image || '/admin_image_placeholder.jpeg',
        content: post.content || '<p>Konten belum tersedia.</p>',
    };

    // Fetch related articles (random 3)
    // Get all published blogs except current one, then shuffle and take 3
    const allRelatedPosts = await prisma.blog.findMany({
        where: {
            id: { not: post.id },
            status: 'published',
        },
    });

    // Deterministic shuffle based on post ID to avoid Math.random() in render
    // This ensures consistent related articles for the same post
    const shuffled = allRelatedPosts.sort((a, b) => {
        // Use post ID as seed for deterministic but varied ordering
        const hashA = (a.id * 2654435761) % (post.id + 1);
        const hashB = (b.id * 2654435761) % (post.id + 1);
        return hashA - hashB;
    });
    const relatedPostsRaw = shuffled.slice(0, 3);

    const relatedArticles = relatedPostsRaw.map((p) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt || '',
        category: p.category || 'Umum',
        date: new Date(p.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),
        readTime: p.readTime || '5 menit baca',
        author: {
            name: p.authorName || 'Admin',
            image: (p.authorImage && !p.authorImage.includes('ui-avatars.com')) ? p.authorImage : '/images/logo-kelas-inovatif/admin_image_placeholder.avif',
        },
        image: p.image || p.contentImage || '/admin_image_placeholder.jpeg',
        slug: p.slug || '',
    }));

    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb title={formattedPost.title} />
            <Hero
                title={formattedPost.title}
                category={formattedPost.category}
                date={formattedPost.date}
                readTime={formattedPost.readTime}
                author={formattedPost.author}
            />

            <div className="relative -mt-24 lg:-mt-32 pb-16 px-4 sm:px-6 lg:px-8 z-20">
                <div className="max-w-4xl mx-auto">
                    <ArticleContent
                        content={formattedPost.content}
                        image={formattedPost.image}
                    />
                    <AuthorBio author={formattedPost.author} />
                    {/* Comments component can be added here once backend is ready */}
                    {/* <Comments /> */}
                </div>
            </div>

            <RelatedArticles articles={relatedArticles} />
            <Newsletter />
            <Footer />
        </main>
    );
}
