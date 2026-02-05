'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getBlogs({ page = 1, limit = 10, query = '' }: { page?: number; limit?: number; query?: string } = {}) {
    try {
        const offset = (page - 1) * limit;

        const where = query ? {
            title: {
                contains: query,
                mode: 'insensitive' as const,
            }
        } : {};

        const [blogs, total] = await Promise.all([
            prisma.blog.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip: offset,
            }),
            prisma.blog.count({ where }),
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
            data: blogs.map(blog => ({
                id: blog.id,
                title: blog.title,
                slug: blog.slug ?? undefined,
                excerpt: blog.excerpt ?? undefined,
                content: blog.content ?? undefined,
                category: blog.category ?? undefined,
                author_name: blog.authorName ?? undefined,
                author_image: blog.authorImage ?? undefined,
                image: blog.image ?? undefined,
                read_time: blog.readTime ?? undefined,
                featured: blog.featured,
                status: blog.status,
                created_at: blog.createdAt.toISOString(),
                updated_at: blog.updatedAt.toISOString(),
            })),
            metadata: {
                total,
                page,
                limit,
                totalPages,
            }
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            data: [],
            metadata: {
                total: 0,
                page: 1,
                limit: 10,
                totalPages: 0,
            }
        };
    }
}

export async function getBlogById(id: number) {
    try {
        const blog = await prisma.blog.findUnique({ where: { id } });
        if (!blog) return null;
        return {
            id: blog.id,
            title: blog.title,
            slug: blog.slug ?? undefined,
            excerpt: blog.excerpt ?? undefined,
            content: blog.content ?? undefined,
            category: blog.category ?? undefined,
            author_name: blog.authorName ?? undefined,
            author_image: blog.authorImage ?? undefined,
            image: blog.image ?? undefined,
            read_time: blog.readTime ?? undefined,
            featured: blog.featured,
            status: blog.status,
            created_at: blog.createdAt.toISOString(),
            updated_at: blog.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error('Error fetching blog by id:', error);
        return null;
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        let blog = await prisma.blog.findUnique({ where: { slug } });

        // If not found by slug, and input is numeric, try ID (Legacy support)
        if (!blog && !isNaN(parseInt(slug))) {
            blog = await prisma.blog.findUnique({ where: { id: parseInt(slug) } });
        }

        if (!blog) return null;
        return {
            id: blog.id,
            title: blog.title,
            slug: blog.slug ?? undefined,
            excerpt: blog.excerpt ?? undefined,
            content: blog.content ?? undefined,
            category: blog.category ?? undefined,
            author_name: blog.authorName ?? undefined,
            author_image: blog.authorImage ?? undefined,
            image: blog.image ?? undefined,
            read_time: blog.readTime ?? undefined,
            featured: blog.featured,
            status: blog.status,
            created_at: blog.createdAt.toISOString(),
            updated_at: blog.updatedAt.toISOString(),
        };
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return null;
    }
}

export async function createBlog(data: any) {
    try {
        await prisma.blog.create({
            data: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                category: data.category,
                authorName: data.author_name,
                authorImage: data.author_image,
                image: data.image,
                readTime: data.read_time,
                featured: data.featured || false,
                status: data.status || 'draft',
            },
        });

        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating blog:', error);
        return { msg: 'Failed to create blog' };
    }
}

export async function updateBlog(id: number, data: any) {
    try {
        await prisma.blog.update({
            where: { id },
            data: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                category: data.category,
                authorName: data.author_name,
                authorImage: data.author_image,
                image: data.image,
                readTime: data.read_time,
                featured: data.featured,
                status: data.status,
            },
        });

        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error updating blog:', error);
        return { msg: 'Failed to update blog' };
    }
}

export async function deleteBlog(id: number) {
    try {
        await prisma.blog.delete({ where: { id } });
        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting blog:', error);
        return { msg: 'Failed to delete blog' };
    }
}

export async function getLatestBlogs(limit: number = 3) {
    try {
        const blogs = await prisma.blog.findMany({
            where: { status: 'published' },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });

        return blogs.map(blog => ({
            id: blog.id,
            title: blog.title,
            slug: blog.slug ?? undefined,
            excerpt: blog.excerpt ?? undefined,
            content: blog.content ?? undefined,
            category: blog.category ?? undefined,
            author_name: blog.authorName ?? undefined,
            author_image: blog.authorImage ?? undefined,
            image: blog.image ?? undefined,
            read_time: blog.readTime ?? undefined,
            featured: blog.featured,
            status: blog.status,
            created_at: blog.createdAt.toISOString(),
            updated_at: blog.updatedAt.toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching latest blogs:', error);
        return [];
    }
}

export async function getBlogStats() {
    try {
        const [total, published, drafts] = await Promise.all([
            prisma.blog.count(),
            prisma.blog.count({
                where: { status: 'published' },
            }),
            prisma.blog.count({
                where: { status: 'draft' },
            }),
        ]);

        return {
            total,
            published,
            drafts
        };
    } catch (error) {
        console.error('Error fetching blog stats:', error);
        return {
            total: 0,
            published: 0,
            drafts: 0
        };
    }
}
