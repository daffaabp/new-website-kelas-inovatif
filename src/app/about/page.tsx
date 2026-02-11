import { Metadata } from "next";
import { AboutContent } from "./_components/AboutContent";

export const metadata: Metadata = {
    title: "Tentang Kami - Kelas Inovatif",
    description: "Kenali lebih dekat misi, visi, dan nilai-nilai Kelas Inovatif dalam memajukan pendidikan dan penelitian.",
};

export default function AboutPage() {
    return <AboutContent />;
}