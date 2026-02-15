"use client";

import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { PartnershipHero } from "./PartnershipHero";
import { ImpactGallery } from "./ImpactGallery";
import { PartnershipCTA } from "./PartnershipCTA";
import { PartnershipFeatureSection } from "./PartnershipFeatureSection";
import { PartnershipSinergySection } from "./PartnershipSinergySection";

export function PartnershipContent() {
    return (
        <main className="w-full overflow-x-hidden font-sans bg-partnership-bg-cream">
            <Navbar />
            <PartnershipHero />
            <PartnershipFeatureSection />
            <PartnershipSinergySection />
            <PartnershipCTA />
            <Footer />
        </main>
    );
}
