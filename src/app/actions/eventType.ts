'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getEventTypes() {
    try {
        const eventTypes = await prisma.eventType.findMany({
            orderBy: { name: 'asc' },
        });
        return eventTypes;
    } catch (error) {
        console.error('Error fetching event types:', error);
        return [];
    }
}

export async function createEventType(name: string) {
    try {
        if (!name || name.trim() === '') {
            return { msg: 'Name is required' };
        }

        await prisma.eventType.create({
            data: {
                name: name.trim(),
            },
        });

        revalidatePath('/admin/schedule/create');
        revalidatePath('/admin/schedule');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating event type:', error);
        return { msg: 'Failed to create event type' };
    }
}

export async function deleteEventType(id: number) {
    try {
        await prisma.eventType.delete({
            where: { id },
        });

        revalidatePath('/admin/schedule/create');
        revalidatePath('/admin/schedule');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting event type:', error);
        return { msg: 'Failed to delete event type' };
    }
}
