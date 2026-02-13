import React from "react";
import { AdminSidebar } from "../_components/AdminSidebar";
import { ThemeToggle } from "../_components/ThemeToggle";
import { ScheduleHeader } from "./_components/ScheduleHeader";
import { ScheduleStats } from "./_components/ScheduleStats";
import { ScheduleTable } from "./_components/ScheduleTable";
import { getSchedules, getScheduleStats } from "@/app/actions/schedule";

export default async function AdminSchedulePage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedParams = await searchParams;
    const type = typeof resolvedParams.type === 'string' ? resolvedParams.type : 'All';

    // Fetch data in parallel
    const [schedulesData, stats] = await Promise.all([
        getSchedules(1, 100, type, undefined, undefined, 'all'),
        getScheduleStats()
    ]);

    const { data: schedules } = schedulesData;

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full">
                    <ScheduleHeader currentType={type} />
                    <ScheduleStats stats={stats} />
                    <ScheduleTable schedules={schedules} />
                    <footer className="mt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2023 Kelas Inovatif Admin Panel. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
