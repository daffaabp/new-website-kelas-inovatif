import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Menguasai SciSpace - Kelas Inovatif',
    description: 'Pelajari cara mencari referensi akademik yang akurat dengan SciSpace. Tingkatkan kualitas literature review dan riset Anda dengan bantuan AI.',
};

export default function SciteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
