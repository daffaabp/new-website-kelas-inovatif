import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kelasinovatif.com'),
  title: {
    default: "Komunitas Kelas Inovatif",
    template: "%s | Kelas Inovatif"
  },
  description: "Pembelajaran inovatif untuk semua",
  keywords: ["Kelas Inovatif", "Komunitas Belajar", "Kursus Online", "Pendidikan", "Inovasi"],
  authors: [{ name: "Tim Kelas Inovatif" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kelas Inovatif',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kelasinovatif',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <NextTopLoader color="#1C302B" showSpinner={false} />
        {children}
        <FloatingWhatsApp />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
