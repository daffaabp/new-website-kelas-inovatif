"use client";

import React from "react";
import { PostMainContent } from "../../../create/_components/PostMainContent";
import { PostSidebar } from "../../../create/_components/PostSidebar";
import { updateBlog, getBlogById } from '@/app/actions/blog';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upload } from '@vercel/blob/client';
import { BlogStatus } from '@prisma/client';
import Link from 'next/link';

type BlogResult = NonNullable<Awaited<ReturnType<typeof getBlogById>>>;

interface EditPostFormWrapperProps {
    blog: BlogResult;
}

export function EditPostFormWrapper({ blog }: EditPostFormWrapperProps) {
    const router = useRouter();
    const [isPending, startTransition] = React.useTransition();

    async function handleUpdate(formData: FormData) {
        startTransition(async () => {
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

            const res = await updateBlog(blog.id, {
                title: formData.get('title') as string,
                slug: formData.get('slug') as string,
                excerpt: formData.get('excerpt') as string,
                content: formData.get('content') as string,
                category: formData.get('category') as string,
                image: thumbnailUrl,
                contentImage: contentImageUrl,
                read_time: readTime,
                featured: formData.get('featured') === 'on',
                status: formData.get('status') as BlogStatus,
            });

            if (res.msg === 'success') {
                toast.success('Blog post updated successfully');
                router.push('/admin/blogs');
                router.refresh();
            } else {
                toast.error(res.msg);
            }
        });
    }

    return (
        <form action={handleUpdate} className="p-6 md:p-10 max-w-7xl mx-auto min-h-full pb-24">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-[#263c32] dark:text-white">
                        Edit Post
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                        Update your blog post details
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link
                        href="/admin/blogs"
                        className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-6 py-2.5 rounded-xl bg-[#263c32] text-white hover:bg-[#1e2f27] transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2 disabled:opacity-50"
                    >
                        {isPending ? 'Updating...' : 'Update Post'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <PostMainContent initialData={blog} />
                <PostSidebar initialData={blog} />
            </div>
        </form>
    );
}
