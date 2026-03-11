"use client";

import React from "react";
import { AdminSidebar } from "../../_components/AdminSidebar";
import { ThemeToggle } from "../../_components/ThemeToggle";
import { CreatePostHeader } from "./_components/CreatePostHeader";
import { PostMainContent } from "./_components/PostMainContent";
import { PostSidebar } from "./_components/PostSidebar";

import { createBlog } from "@/app/actions/blog";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { BlogStatus } from '@prisma/client';
import { upload } from '@vercel/blob/client';

export default function CreatePostPage() {
    const router = useRouter();

    async function handleAction(formData: FormData) {
        const readTimeVal = formData.get('read_time');
        const readTime = readTimeVal ? `${readTimeVal} min read` : '5 min read';

        let thumbnailUrl: string | undefined = formData.get('image') as string || undefined;
        let contentImageUrl: string | undefined = formData.get('contentImage') as string || undefined;

        if (thumbnailUrl?.startsWith('blob:')) thumbnailUrl = undefined;
        if (contentImageUrl?.startsWith('blob:')) contentImageUrl = undefined;

        const thumbnailFile = formData.get('image_file') as File;
        if (thumbnailFile && thumbnailFile.size > 0 && thumbnailFile.name !== 'undefined') {
            const blob = await upload(thumbnailFile.name, thumbnailFile, {
                access: 'public',
                handleUploadUrl: '/api/upload',
            });
            thumbnailUrl = blob.url;
        }

        const contentFile = formData.get('content_image_file') as File;
        if (contentFile && contentFile.size > 0 && contentFile.name !== 'undefined') {
             const blob = await upload(contentFile.name, contentFile, {
                access: 'public',
                handleUploadUrl: '/api/upload',
            });
            contentImageUrl = blob.url;
        }

        const res = await createBlog({
            title: formData.get('title') as string,
            slug: formData.get('slug') as string,
            excerpt: formData.get('excerpt') as string | undefined,
            content: formData.get('content') as string | undefined,
            category: formData.get('category') as string | undefined,
            image: thumbnailUrl,
            contentImage: contentImageUrl,
            read_time: readTime,
            featured: formData.get('featured') === 'on',
            status: formData.get('status') as BlogStatus | undefined,
            // Author hardcoded or pulled from auth session in real app
            author_name: 'Admin',
            author_image: '/images/logo-kelas-inovatif/admin_image_placeholder.avif',
        });

        if (res.msg === 'success') {
            toast.success('Blog post created successfully');
            router.push('/admin/blogs');
        } else {
            toast.error(res.msg);
        }
    }

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full pb-24">
                    <form action={handleAction}>
                        <CreatePostHeader />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <PostMainContent />
                            <PostSidebar />
                        </div>
                    </form>
                    <footer className="mt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2026 Kelas Inovatif. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
