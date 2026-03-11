
"use client";

import React from "react";
import { AdminSidebar } from "../../_components/AdminSidebar";
import { ThemeToggle } from "../../_components/ThemeToggle";
import { CreateScheduleHeader } from "./_components/CreateScheduleHeader";
import { ScheduleForm } from "./_components/ScheduleForm";
import { ScheduleSidebar } from "./_components/ScheduleSidebar";
import { createSchedule } from '@/app/actions/schedule';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upload } from '@vercel/blob/client';

export default function CreateSchedulePage() {
    const router = useRouter();

    async function handleAction(formData: FormData) {
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

        const res = await createSchedule({
            title: formData.get('title') as string,
            type: formData.get('type') as string,
            speaker_name: formData.get('speaker_name') as string,
            speaker_role: formData.get('speaker_role') as string || undefined,
            speaker_image: speakerImageUrl,
            image: featuredImageUrl,
            date: formData.get('date') as string,
            start_time: formData.get('start_time') as string,
            end_time: formData.get('end_time') as string,
            location: formData.get('location') as string,
            description: formData.get('description') as string || undefined,
            excerpt: formData.get('excerpt') as string || undefined,
            benefits: formData.get('benefits') as string || undefined,
            register_url: formData.get('register_url') as string || undefined,
            original_price: formData.get('original_price') ? Number(formData.get('original_price')) : undefined,
            discounted_price: formData.get('discounted_price') ? Number(formData.get('discounted_price')) : undefined,
            status: formData.get('status') as 'published' | 'draft' || 'published',
        });

        if (res.msg === 'success') {
            toast.success('Schedule created successfully');
            router.push('/admin/schedule');
        } else {
            toast.error(res.msg);
        }
    }

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <form action={handleAction} className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col">
                    <CreateScheduleHeader />
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                        <ScheduleForm />
                        <ScheduleSidebar />
                    </div>
                    <footer className="mt-auto pt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2023 Kelas Inovatif Admin Panel. All rights reserved.
                    </footer>
                </form>
            </main>
            <ThemeToggle />
        </div>
    );
}
