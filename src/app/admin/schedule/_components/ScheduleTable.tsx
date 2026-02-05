"use client";

import React, { useTransition } from "react";
import { Filter, LayoutGrid, GraduationCap, BrainCircuit, Laptop, Users, Edit, Trash2 } from "lucide-react";
import Link from 'next/link';
import { deleteSchedule } from '@/app/actions/schedule';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface Schedule {
    id: number;
    title: string;
    type: string;
    speaker_name: string;
    speaker_role?: string;
    speaker_image?: string;
    date: string;
    start_time: string;
    end_time: string;
    location: string;
    description?: string;
}

interface ScheduleTableProps {
    schedules: Schedule[];
}

export function ScheduleTable({ schedules }: ScheduleTableProps) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this schedule?')) {
            startTransition(async () => {
                const res = await deleteSchedule(id);
                if (res.msg === 'success') {
                    toast.success('Schedule deleted successfully');
                } else {
                    toast.error('Failed to delete schedule');
                }
            });
        }
    };

    return (
        <div className="bg-white dark:bg-[#1C2624] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                    <button className="text-[#263c32] dark:text-white font-semibold border-b-2 border-[#263c32] pb-1 whitespace-nowrap">
                        All Events
                    </button>
                    {/* Placeholder filter buttons */}
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Event
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Speaker
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Category
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Date & Time
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Location
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {schedules.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                                    No schedules found.
                                </td>
                            </tr>
                        ) : (
                            schedules.map((schedule) => (
                                <tr key={schedule.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
                                                <GraduationCap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                                    {schedule.title}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {schedule.type}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <div className="flex items-center gap-2">
                                            {schedule.speaker_image ? (
                                                <img
                                                    alt={schedule.speaker_name}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                    src={schedule.speaker_image}
                                                />
                                            ) : (
                                                <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                                    {schedule.speaker_name.charAt(0)}
                                                </div>
                                            )}
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {schedule.speaker_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                                            {schedule.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 align-middle">
                                        <div className="text-sm text-gray-700 dark:text-gray-300">
                                            {format(new Date(schedule.date), 'dd MMMM yyyy', { locale: id })}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            {schedule.start_time} - {schedule.end_time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 align-middle text-sm text-gray-600 dark:text-gray-400">
                                        {schedule.location}
                                    </td>
                                    <td className="px-6 py-4 align-middle text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link href={`/admin/schedule/${schedule.id}/edit`} className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                                <Edit className="w-5 h-5" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(schedule.id)}
                                                disabled={isPending}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50"
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
            {/* Pagination (Static for now or implement later) */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing {schedules.length} events
                </p>
            </div>
        </div>
    );
}

