'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { BlogStatus } from '@prisma/client';

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
                contentImage: blog.contentImage ?? undefined,
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
            contentImage: blog.contentImage ?? undefined,
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
            contentImage: blog.contentImage ?? undefined,
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

import { saveFile, deleteFile } from '@/lib/storage';


interface BlogData {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    category?: string;
    author_name?: string;
    author_image?: string;
    image?: string;
    contentImage?: string;
    read_time?: string;
    featured?: boolean;
    status?: BlogStatus;
    image_file?: File;
    content_image_file?: File;
}

export async function createBlog(data: BlogData) {
    try {
        console.log('createBlog called with:', {
            title: data.title,
            slug: data.slug,
            hasImageFile: !!data.image_file,
            imageFileSize: data.image_file?.size,
            imageFileType: data.image_file?.type,
            hasContentImageFile: !!data.content_image_file,
            contentImageFileSize: data.content_image_file?.size
        });

        // Validate required fields
        if (!data.title || data.title.trim() === '') {
            console.error('Validation error: title is required');
            return { msg: 'Title is required' };
        }

        if (!data.slug || data.slug.trim() === '') {
            console.error('Validation error: slug is required');
            return { msg: 'Slug is required' };
        }

        // Check if slug already exists
        const existingBlog = await prisma.blog.findUnique({
            where: { slug: data.slug }
        });

        if (existingBlog) {
            console.error('Validation error: slug already exists');
            return { msg: 'Slug already exists. Please use a unique slug.' };
        }

        // Handle thumbnail image upload
        if (data.image_file && data.image_file.size > 0) {
            console.log('Uploading thumbnail...');
            try {
                data.image = await saveFile(data.image_file, 'blog/thumbnail');
                console.log('Thumbnail uploaded:', data.image);
            } catch (uploadError) {
                console.error('Thumbnail upload failed:', uploadError);
                return { msg: `Failed to upload thumbnail: ${uploadError instanceof Error ? uploadError.message : 'Unknown error'}` };
            }
        }

        // Handle content image upload
        if (data.content_image_file && data.content_image_file.size > 0) {
            console.log('Uploading content image...');
            try {
                data.contentImage = await saveFile(data.content_image_file, 'blog/content');
                console.log('Content image uploaded:', data.contentImage);
            } catch (uploadError) {
                console.error('Content image upload failed:', uploadError);
                return { msg: `Failed to upload content image: ${uploadError instanceof Error ? uploadError.message : 'Unknown error'}` };
            }
        }

        console.log('Creating blog with data:', {
            title: data.title,
            slug: data.slug,
            category: data.category,
            status: data.status || 'draft',
            featured: data.featured || false,
        });

        await prisma.blog.create({
            data: {
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt || null,
                content: data.content || null,
                category: data.category || null,
                authorName: data.author_name || null,
                authorImage: data.author_image || null,
                image: data.image || null,
                contentImage: data.contentImage || null,
                readTime: data.read_time || null,
                featured: data.featured || false,
                status: (data.status as BlogStatus) || 'draft',
            },
        });

        console.log('Blog created successfully');
        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating blog:', error);

        // Provide more detailed error messages
        if (error instanceof Error) {
            // Check for Prisma-specific errors
            if (error.message.includes('Unique constraint')) {
                return { msg: 'A blog with this slug already exists' };
            }
            if (error.message.includes('connect')) {
                return { msg: 'Database connection error. Please try again.' };
            }
            return { msg: `Failed to create blog: ${error.message}` };
        }

        return { msg: 'Failed to create blog. Please check the console for details.' };
    }
}

export async function updateBlog(id: number, data: Partial<BlogData>) {
    try {
        const existingBlog = await prisma.blog.findUnique({
            where: { id },
            select: { image: true, contentImage: true }
        });

        // Handle thumbnail image upload
        if (data.image_file && data.image_file instanceof File && data.image_file.size > 0) {
            if (existingBlog?.image) {
                await deleteFile(existingBlog.image);
            }
            data.image = await saveFile(data.image_file, 'blog/thumbnail');
        }

        // Handle content image upload
        if (data.content_image_file && data.content_image_file instanceof File && data.content_image_file.size > 0) {
            if (existingBlog?.contentImage) {
                await deleteFile(existingBlog.contentImage);
            }
            data.contentImage = await saveFile(data.content_image_file, 'blog/content');
        }

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
                contentImage: data.contentImage,
                readTime: data.read_time,
                featured: data.featured,
                status: data.status as BlogStatus | undefined,
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
        const existingBlog = await prisma.blog.findUnique({
            where: { id },
            select: { image: true, contentImage: true }
        });

        if (existingBlog?.image) {
            await deleteFile(existingBlog.image);
        }
        if (existingBlog?.contentImage) {
            await deleteFile(existingBlog.contentImage);
        }

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
            slug: blog.slug ?? null,
            excerpt: blog.excerpt ?? null,
            content: blog.content ?? null,
            category: blog.category ?? null,
            author_name: blog.authorName ?? null,
            author_image: blog.authorImage ?? null,
            image: blog.image ?? null,
            read_time: blog.readTime ?? null,
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
