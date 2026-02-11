import { Metadata } from "next";
import { ContactContent } from "./_components/ContactContent";

export const metadata: Metadata = {
    title: "Hubungi Kami - Kelas Inovatif",
    description: "Hubungi tim Kelas Inovatif untuk pertanyaan, kolaborasi, atau bantuan lebih lanjut.",
};

export default function ContactPage() {
    return <ContactContent />;
}