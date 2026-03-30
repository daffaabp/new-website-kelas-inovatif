'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@prisma/client';
import { deleteFile } from '@/lib/storage';

export async function getSchedules(page = 1, limit = 6, type?: string, month?: number, year?: number, status: 'published' | 'draft' | 'all' = 'published') {
    try {
        const offset = (page - 1) * limit;

        const where: Prisma.ScheduleWhereInput = {};

        if (status !== 'all') {
            where.status = status;
        }

        if (type && type !== 'All') {
            where.type = type;
        }

        if (month && year) {
            const startDate = new Date(year, month - 1, 1);
            const endDate = new Date(year, month, 0, 23, 59, 59, 999);
            where.date = {
                gte: startDate,
                lte: endDate,
            };
        }

        const [schedules, total] = await Promise.all([
            prisma.schedule.findMany({
                where,
                orderBy: { date: 'desc' },
                take: limit,
                skip: offset,
            }),
            prisma.schedule.count({ where }),
        ]);

        const data = schedules.map(schedule => ({
            id: schedule.id,
            title: schedule.title,
            type: schedule.type,
            speaker_name: schedule.speakerName,
            speaker_role: schedule.speakerRole ?? undefined,
            speaker_image: schedule.speakerImage ?? undefined,
            date: schedule.date.toISOString(),
            start_time: schedule.startTime,
            end_time: schedule.endTime,
            location: schedule.location,
            description: schedule.description ?? undefined,
            image: schedule.image ?? undefined,
            excerpt: schedule.excerpt ?? undefined,
            benefits: schedule.benefits ?? undefined,
            register_url: schedule.registerUrl ?? undefined,
            original_price: schedule.originalPrice ?? undefined,
            discounted_price: schedule.discountedPrice ?? undefined,
            created_at: schedule.createdAt.toISOString(),
            updated_at: schedule.updatedAt.toISOString(),
            status: schedule.status,
        }));

        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return {
            data: [],
            meta: { total: 0, page: 1, limit: 6, totalPages: 0 }
        };
    }
}

export async function getScheduleById(id: number) {
    try {
        const schedule = await prisma.schedule.findUnique({ where: { id } });
        if (!schedule) return null;
        return {
            id: schedule.id,
            title: schedule.title,
            type: schedule.type,
            speaker_name: schedule.speakerName,
            speaker_role: schedule.speakerRole ?? undefined,
            speaker_image: schedule.speakerImage ?? undefined,
            date: schedule.date.toISOString(),
            start_time: schedule.startTime,
            end_time: schedule.endTime,
            location: schedule.location,
            description: schedule.description ?? undefined,
            image: schedule.image ?? undefined,
            excerpt: schedule.excerpt ?? undefined,
            benefits: schedule.benefits ?? undefined,
            register_url: schedule.registerUrl ?? undefined,
            original_price: schedule.originalPrice ?? undefined,
            discounted_price: schedule.discountedPrice ?? undefined,
            created_at: schedule.createdAt.toISOString(),
            updated_at: schedule.updatedAt.toISOString(),
            status: schedule.status,
        };
    } catch (error) {
        console.error('Error fetching schedule by id:', error);
        return null;
    }
}

// Helper to safely parse numbers
const parseIntSafe = (value: unknown) => {
    if (value === undefined || value === null || value === '') return null;
    const num = Number(value);
    return isNaN(num) ? null : num;
};

interface ScheduleData {
    title: string;
    date: string | Date;
    start_time: string;
    end_time: string;
    type: string;
    location: string;
    speaker_name: string;
    speaker_role?: string;
    speaker_image?: string;
    image?: string;
    description?: string;
    excerpt?: string;
    benefits?: string;
    register_url?: string;
    original_price?: number;
    discounted_price?: number;
    status?: 'published' | 'draft';
}

export async function createSchedule(data: ScheduleData) {
    try {

        // Basic validation
        if (!data.title || !data.date || !data.start_time || !data.end_time) {
            return { msg: 'Missing required fields' };
        }

        await prisma.schedule.create({
            data: {
                title: data.title,
                type: data.type,
                speakerName: data.speaker_name,
                speakerRole: data.speaker_role,
                speakerImage: data.speaker_image,
                image: data.image,
                date: new Date(data.date),
                startTime: data.start_time,
                endTime: data.end_time,
                location: data.location,
                description: data.description,
                excerpt: data.excerpt,
                benefits: data.benefits,
                registerUrl: data.register_url,
                originalPrice: parseIntSafe(data.original_price),
                discountedPrice: parseIntSafe(data.discounted_price),
                status: data.status || 'published',
            },
        });

        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating schedule:', error);
        return { msg: 'Failed to create schedule' };
    }
}

export async function updateSchedule(id: number, data: Partial<ScheduleData>) {
    try {
        // Fetch existing data first to handle image deletion
        const existingSchedule = await prisma.schedule.findUnique({
            where: { id },
            select: { speakerImage: true, image: true }
        });

        // Delete old speaker image if it is being replaced
        if (data.speaker_image && existingSchedule?.speakerImage && data.speaker_image !== existingSchedule.speakerImage) {
            await deleteFile(existingSchedule.speakerImage);
        }

        // Delete old featured image if it is being replaced
        if (data.image && existingSchedule?.image && data.image !== existingSchedule.image) {
            await deleteFile(existingSchedule.image);
        }

        await prisma.schedule.update({
            where: { id },
            data: {
                title: data.title,
                type: data.type,
                speakerName: data.speaker_name,
                speakerRole: data.speaker_role,
                speakerImage: data.speaker_image,
                image: data.image,
                date: data.date ? new Date(data.date) : undefined,
                startTime: data.start_time,
                endTime: data.end_time,
                location: data.location,
                description: data.description,
                excerpt: data.excerpt,
                benefits: data.benefits,
                registerUrl: data.register_url,
                originalPrice: parseIntSafe(data.original_price),
                discountedPrice: parseIntSafe(data.discounted_price),
                status: data.status,
            },
        });

        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error updating schedule:', error);
        return { msg: 'Failed to update schedule' };
    }
}

export async function deleteSchedule(id: number) {
    try {
        // Find existing schedule to get image URLs
        const existingSchedule = await prisma.schedule.findUnique({
            where: { id },
            select: { speakerImage: true, image: true }
        });

        // Delete associated images
        if (existingSchedule?.speakerImage) {
            await deleteFile(existingSchedule.speakerImage);
        }
        if (existingSchedule?.image) {
            await deleteFile(existingSchedule.image);
        }

        await prisma.schedule.delete({ where: { id } });
        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting schedule:', error);
        return { msg: 'Failed to delete schedule' };
    }
}

export async function getLatestSchedules(limit: number = 10) {
    try {
        const now = new Date();
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        const schedules = await prisma.schedule.findMany({
            where: {
                date: {
                    gte: sevenDaysAgo,
                },
                status: 'published',
            },
            orderBy: { date: 'asc' }, // Show nearest events first
            take: limit,
        });

        return schedules.map(schedule => ({
            id: schedule.id,
            title: schedule.title,
            type: schedule.type,
            speaker_name: schedule.speakerName,
            speaker_role: schedule.speakerRole ?? null,
            speaker_image: schedule.speakerImage ?? null,
            date: schedule.date.toISOString(),
            start_time: schedule.startTime,
            end_time: schedule.endTime,
            location: schedule.location,
            description: schedule.description ?? null,
            image: schedule.image ?? null,
            excerpt: schedule.excerpt ?? null,
            benefits: schedule.benefits ?? null,
            register_url: schedule.registerUrl ?? null,
            original_price: schedule.originalPrice ?? null,
            discounted_price: schedule.discountedPrice ?? null,
            created_at: schedule.createdAt.toISOString(),
            updated_at: schedule.updatedAt.toISOString(),
            status: schedule.status,
        }));
    } catch (error) {
        console.error('Error fetching latest schedules:', error);
        return [];
    }
}

export async function getScheduleStats() {
    try {
        const now = new Date();

        const [totalEvents, upcomingEvents, completedEvents] = await Promise.all([
            prisma.schedule.count(),
            prisma.schedule.count({
                where: { date: { gte: now } },
            }),
            prisma.schedule.count({
                where: { date: { lt: now } },
            }),
        ]);

        return {
            totalEvents,
            upcomingEvents,
            completedEvents
        };
    } catch (error) {
        console.error('Error fetching schedule stats:', error);
        return {
            totalEvents: 0,
            upcomingEvents: 0,
            completedEvents: 0
        };
    }
}
