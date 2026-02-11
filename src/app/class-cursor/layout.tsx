import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Cursor - Kelas Inovatif',
    description: 'Kuasai pengeditan kode berbasis AI dengan Cursor. Tingkatkan produktivitas pengembangan Anda dengan kursus khusus kami.',
};

export default function CursorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
