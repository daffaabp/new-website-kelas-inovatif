"use client";

import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AboutHero } from "./AboutHero";
import { MissionSection } from "./MissionSection";
import { ValuesSection } from "./ValuesSection";

export function AboutContent() {
    return (
        <main className="w-full overflow-x-hidden font-sans bg-about-bg-light dark:bg-about-bg-dark text-gray-900 dark:text-white">
            <Navbar />
            <AboutHero />
            <MissionSection />
            <ValuesSection />
            {/* <PartnershipSection /> */}
            {/* <ProofOfCollaborationSection /> */}
            <Footer />
        </main>
    );
}
