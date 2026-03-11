"use client";

import React from "react";
import { ScheduleForm } from "../../../create/_components/ScheduleForm";
import { ScheduleSidebar } from "../../../create/_components/ScheduleSidebar";
import { Upload, Menu } from "lucide-react";
import { updateSchedule, getScheduleById } from '@/app/actions/schedule';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upload } from '@vercel/blob/client';

type ScheduleResult = NonNullable<Awaited<ReturnType<typeof getScheduleById>>>;

interface EditScheduleFormWrapperProps {
    schedule: ScheduleResult;
    scheduleId: number;
}

export function EditScheduleFormWrapper({ schedule, scheduleId }: EditScheduleFormWrapperProps) {
    const router = useRouter();
    const [isPending, startTransition] = React.useTransition();

    async function handleAction(formData: FormData) {
        startTransition(async () => {
            let speakerImageUrl: string | undefined = formData.get('speaker_image') as string || undefined;
            let featuredImageUrl: string | undefined = formData.get('image') as string || undefined;

            // Prevent setting 'blob:http://...' strings if file upload somehow fails or defaults preview
            if (speakerImageUrl?.startsWith('blob:')) speakerImageUrl = undefined;
            if (featuredImageUrl?.startsWith('blob:')) featuredImageUrl = undefined;

            const speakerFile = formData.get('speaker_image_file') as File;
            if (speakerFile && speakerFile.size > 0 && speakerFile.name !== 'undefined') {
                const blob = await upload(speakerFile.name, speakerFile, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                speakerImageUrl = blob.url;
            }

            const featuredFile = formData.get('featured_image_file') as File;
            if (featuredFile && featuredFile.size > 0 && featuredFile.name !== 'undefined') {
                 const blob = await upload(featuredFile.name, featuredFile, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                featuredImageUrl = blob.url;
            }

            const res = await updateSchedule(scheduleId, {
                title: formData.get('title') as string,
                type: formData.get('type') as string,
                speaker_name: formData.get('speaker_name') as string,
                speaker_role: formData.get('speaker_role') as string,
                speaker_image: speakerImageUrl,
                image: featuredImageUrl,
                date: formData.get('date') as string, // Date string is fine if ScheduleData accepts string | Date
                start_time: formData.get('start_time') as string,
                end_time: formData.get('end_time') as string,
                location: formData.get('location') as string,
                description: formData.get('description') as string,
                excerpt: formData.get('excerpt') as string,
                benefits: formData.get('benefits') as string,
                register_url: formData.get('register_url') as string,
                original_price: formData.get('original_price') ? Number(formData.get('original_price')) : undefined,
                discounted_price: formData.get('discounted_price') ? Number(formData.get('discounted_price')) : undefined,
                status: formData.get('status') as 'published' | 'draft',
            });

            if (res.msg === 'success') {
                toast.success('Schedule updated successfully');
                router.push('/admin/schedule');
                router.refresh();
            } else {
                toast.error(res.msg);
            }
        });
    }

    return (
        <form action={handleAction} className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col">
            {/* Header inline for reuse simplicity or create another component */}
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
                        {/* Menu icon placeholder */}
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#263c32] dark:text-white leading-tight">
                            Edit Schedule
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => router.back()} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-4 py-2 text-sm font-medium text-white bg-[#263c32] rounded-lg hover:bg-[#1e3028] shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            <Upload className="w-4 h-4" />
                            {isPending ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </header>
            </>

            <div className="flex flex-col lg:flex-row gap-8 h-full">
                <ScheduleForm initialData={schedule} />
                <ScheduleSidebar initialData={schedule} />
            </div>
            <footer className="mt-auto pt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                © 2023 Kelas Inovatif Admin Panel. All rights reserved.
            </footer>
        </form>
    );
}
