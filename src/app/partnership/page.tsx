import { Metadata } from "next";
import { PartnershipContent } from "./_components/PartnershipContent";

export const metadata: Metadata = {
    title: "Program Kerjasama & Kolaborasi - Kelas Inovatif",
    description: "Program kerjasama dan kolaborasi Kelas Inovatif untuk membangun ekosistem AI yang inklusif untuk Indonesia.",
};

export default function PartnershipPage() {
    return <PartnershipContent />;
}
