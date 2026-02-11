import { Metadata } from 'next';
import { UserStoryContent } from './_components/UserStoryContent';

export const metadata: Metadata = {
    title: 'Kisah Pengguna - Kelas Inovatif',
    description: 'Temukan kisah inspiratif dari para pengguna Kelas Inovatif yang telah berhasil meningkatkan kemampuan akademik mereka.',
};

export default function UserStoryPage() {
    return <UserStoryContent />;
}