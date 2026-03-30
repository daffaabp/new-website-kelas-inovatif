import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Inovatif - Community Impact',
    description: 'Program Kerjasama & Kolaborasi Kelas Inovatif. Bersama membangun ekosistem AI yang inklusif untuk Indonesia.',
};

export default function PartnershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
