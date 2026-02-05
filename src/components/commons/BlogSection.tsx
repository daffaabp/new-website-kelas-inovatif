import Link from 'next/link';

export interface LatestBlog {
    id: number;
    title: string;
    category: string | null | undefined;
    image: string | null | undefined;
    slug: string | null | undefined;
    created_at: string | Date;
}

interface BlogSectionProps {
    blogs: LatestBlog[];
}

// Helper function to get category color based on category name
const getCategoryColor = (category: string | null | undefined): string => {
    if (!category) return 'bg-gray-400';
    
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('akademik')) return 'bg-eduzin-dark';
    if (categoryLower.includes('kampus') || categoryLower.includes('kehidupan')) return 'bg-yellow-400';
    if (categoryLower.includes('penelitian') || categoryLower.includes('research')) return 'bg-red-400';
    if (categoryLower.includes('berita') || categoryLower.includes('news')) return 'bg-blue-400';
    if (categoryLower.includes('tutorial')) return 'bg-purple-400';
    if (categoryLower.includes('bisnis')) return 'bg-green-400';
    
    // Default color
    return 'bg-gray-400';
};

// Helper function to format date
const formatDate = (date: string | Date): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).toUpperCase();
};

export function BlogSection({ blogs = [] }: BlogSectionProps) {
    // Ensure we only show up to 3 blogs
    const displayBlogs = blogs?.slice(0, 3) || [];

    return (
        <section className="py-12 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Terbaru dari Blog</h4>
                    <Link 
                        href="/blogs" 
                        className="text-xs font-bold underline decoration-1 underline-offset-4 hover:text-eduzin-dark cursor-pointer"
                    >
                        LIHAT SEMUA
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayBlogs.length > 0 ? (
                        displayBlogs.map((blog) => {
                            const categoryColor = getCategoryColor(blog.category);
                            const formattedDate = formatDate(blog.created_at);
                            const blogUrl = blog.slug ? `/blogs/${blog.slug}` : '#';
                            const imageUrl = blog.image || '/placeholder-image.jpg';

                            return (
                                <Link 
                                    key={blog.id} 
                                    href={blogUrl} 
                                    className="group block cursor-pointer"
                                >
                                    <div className="overflow-hidden rounded-sm mb-4">
                                        <img 
                                            src={imageUrl}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`w-2 h-2 rounded-full ${categoryColor}`}></span>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">
                                            {blog.category || 'Umum'}
                                        </p>
                                        <p className="text-[10px] font-bold text-gray-300">{formattedDate}</p>
                                    </div>
                                    <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                                        {blog.title}
                                    </h3>
                                </Link>
                            );
                        })
                    ) : (
                        // Fallback: Show placeholder if no blogs
                        <div className="col-span-3 text-center py-12 text-gray-500">
                            <p>Tidak ada blog tersedia saat ini.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
