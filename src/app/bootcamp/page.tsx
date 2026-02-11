import { Metadata } from "next";
import { BootcampContent } from "./_components/BootcampContent";

export const metadata: Metadata = {
  title: "Bootcamp Masterclass - Kelas Inovatif",
  description: "Program intensif untuk meningkatkan skill penelitian dan penulisan akademik Anda bersama para ahli.",
};

export default function BootcampPage() {
  return <BootcampContent />;
}