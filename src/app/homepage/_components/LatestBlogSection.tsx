"use client";

import { useEffect, useState } from 'react';
import { getLatestBlogs } from '@/app/actions/blog';
import { BlogSection, LatestBlog } from '@/components/commons/BlogSection';

interface LatestBlogSectionProps {
    initialBlogs?: LatestBlog[];
}

export function LatestBlogSection({ initialBlogs }: LatestBlogSectionProps) {
    const [blogs, setBlogs] = useState<LatestBlog[]>(initialBlogs || []);
    const [loading, setLoading] = useState(!initialBlogs || initialBlogs.length === 0);

    useEffect(() => {
        // Jika data sudah diberikan dari server via props, skip client-side fetch
        if (initialBlogs && initialBlogs.length > 0) {
            setLoading(false);
            return;
        }

        async function fetchBlogs() {
            try {
                setLoading(true);
                const data = await getLatestBlogs(3);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching latest blogs:', error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, [initialBlogs]);

    if (loading) {
        return (
            <section className="py-12 border-t border-gray-100 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-8">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Terbaru dari Blog</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-48 bg-gray-200 rounded-sm mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-6 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return <BlogSection blogs={blogs} />;
}

