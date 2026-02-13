
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const defaultEventTypes = [
    "FREE WEBINAR",
    "KELAS INTENSIF: CURSOR",
    "WORKSHOP REGULAR: SCISPACE",
    "WORKSHOP REGULAR: NOTEBOOKLM",
    "PERTEMUAN ALUMNI"
];

async function main() {
    console.log('Start seeding event types...');

    for (const name of defaultEventTypes) {
        const eventType = await prisma.eventType.upsert({
            where: { name },
            update: {},
            create: { name },
        });
        console.log(`Created (or found) event type: ${eventType.name}`);
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
