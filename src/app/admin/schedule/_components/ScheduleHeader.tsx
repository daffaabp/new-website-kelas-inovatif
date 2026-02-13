import React from "react";
import Link from "next/link";
import { Search, Plus, Menu } from "lucide-react";

import { getEventTypes } from '@/app/actions/eventType';

export async function ScheduleHeader({ currentType = 'All' }: { currentType?: string }) {
    const eventTypes = await getEventTypes();
    const categories = ["All", ...eventTypes.map(t => t.name)];

    return (
        <>
            <div className="md:hidden flex items-center justify-between mb-8 sticky top-0 bg-[#F3F1EC] dark:bg-[#111816] z-10 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#263c32] flex items-center justify-center text-white font-serif font-bold italic text-lg">
                        K
                    </div>
                    <span className="font-serif font-bold text-lg text-[#263c32] dark:text-white">
                        Kelas Inovatif
                    </span>
                </div>
                <button className="text-gray-600 dark:text-gray-300 p-2">
                    {/* Menu icon placeholder - likely handled by layout or separate component */}
                    <Menu className="h-6 w-6" />
                </button>
            </div>
            <header className="flex flex-col gap-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#263c32] dark:text-white mb-2 leading-tight">
                            Schedule Management
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Organize, track, and manage all upcoming educational events.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#263c32]/20 transition-all">
                            <Search className="text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                className="bg-transparent border-none focus:ring-0 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 w-48 lg:w-64 focus:outline-none ml-2"
                                placeholder="Search events..."
                            />
                        </div>
                        <Link
                            href="/admin/schedule/create"
                            className="bg-[#263c32] hover:bg-[#1e3028] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform active:scale-95 whitespace-nowrap"
                        >
                            <Plus className="w-4 h-4" />
                            Create New Schedule
                        </Link>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                        const isActive = currentType === category || (currentType === 'All' && category === 'All');
                        return (
                            <Link
                                key={category}
                                href={category === 'All' ? '/admin/schedule' : `/admin/schedule?type=${encodeURIComponent(category)}`}
                                scroll={false}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive
                                    ? "bg-[#263c32] text-white shadow-md"
                                    : "bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {category === 'All' ? 'Semua Acara' : category}
                            </Link>
                        );
                    })}
                </div>
            </header>
        </>
    );
}
