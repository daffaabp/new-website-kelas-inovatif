import { AdminSidebar } from '../../../_components/AdminSidebar';
import { ThemeToggle } from '../../../_components/ThemeToggle';
import { getBlogById, getBlogBySlug } from '@/app/actions/blog';
import { notFound } from 'next/navigation';
import { EditPostFormWrapper } from './_components/EditPostFormWrapper';

type BlogData = NonNullable<Awaited<ReturnType<typeof getBlogById>>>;

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let blog: BlogData | null = null;
    const itemsId = parseInt(id);
    if (!isNaN(itemsId)) {
        blog = await getBlogById(itemsId);
    } else {
        // Fallback for string-based IDs or testing 'test'
        blog = await getBlogBySlug(id);
    }

    if (!blog) notFound();

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <EditPostFormWrapper blog={blog} />
            </main>
            <ThemeToggle />
        </div>
    );
}
