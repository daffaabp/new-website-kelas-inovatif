"use client";

import React from "react";
import { Filter, MoreVertical, Edit, Trash2 } from "lucide-react";

import { deleteBlog } from "@/app/actions/blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface BlogTableProps {
    blogs: any[];
    metadata: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export function BlogTable({ blogs, metadata }: BlogTableProps) {
    const router = useRouter();
    const { page, totalPages, total, limit } = metadata;

    async function handleDelete(id: number) {
        if (confirm('Are you sure you want to delete this blog post?')) {
            const res = await deleteBlog(id);
            if (res.msg === 'success') {
                toast.success('Blog post deleted successfully');
                router.refresh();
            } else {
                toast.error('Failed to delete blog post');
            }
        }
    }

    const handlePageChange = (newPage: number) => {
        router.push(`/admin/blogs?page=${newPage}`);
    };

    return (
        <div className="bg-white dark:bg-[#1C2624] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                    <button className="text-[#263c32] dark:text-white font-semibold border-b-2 border-[#263c32] pb-1 whitespace-nowrap">
                        All Posts
                    </button>
                    {/* Other tabs can be implemented later with filtering */}
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <Filter className="text-xl w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <MoreVertical className="text-xl w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Title
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Author
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Status
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Date
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {blogs.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    No blogs found.
                                </td>
                            </tr>
                        ) : (
                            blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 shadow-sm">
                                                <img
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                                    src={blog.image || "https://placehold.co/100"}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                                    {blog.title}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {blog.category}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                {(blog.author_name || "A").charAt(0)}
                                            </div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {blog.author_name || "Admin"}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${blog.status === 'draft'
                                                ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                                                : blog.featured
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30'
                                                    : 'bg-green-100 text-green-800 dark:bg-green-900/30'
                                            }`}>
                                            {blog.status === 'draft' ? 'Draft' : (blog.featured ? 'Featured' : 'Published')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 align-middle text-sm text-gray-500 dark:text-gray-400">
                                        {blog.created_at ? format(new Date(blog.created_at), 'dd MMMM yyyy', { locale: id }) : '-'}
                                    </td>
                                    <td className="px-6 py-4 align-middle text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <a href={`/admin/blogs/${blog.id}/edit`} className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                                <Edit className="w-5 h-5" />
                                            </a>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing {((page - 1) * limit) + 1}-{Math.min(page * limit, total)} of {total} results
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page <= 1}
                        className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        // Limit visible pages if strictly needed, but for now simple listing is fine for < 10 pages usually.
                        // Let's implement a simple view that doesn't explode if 100 pages.
                        // For now, simple list.
                        (p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)) ? (
                            <button
                                key={p}
                                onClick={() => handlePageChange(p)}
                                className={`px-3 py-1 rounded text-sm transition-colors cursor-pointer ${p === page
                                    ? "bg-[#263c32] text-white"
                                    : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {p}
                            </button>
                        ) : (
                            (p === page - 2 || p === page + 2) ? <span key={p} className="px-1 text-gray-400">...</span> : null
                        )
                    ))}
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page >= totalPages}
                        className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
