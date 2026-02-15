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
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            {children}
        </>
    );
}
