"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { ContactHero } from "./ContactHero";
import { ContactFormSection } from "./ContactFormSection";
import { ContactMap } from "./ContactMap";
import { ContactFAQ } from "./ContactFAQ";
import { BlogSection, LatestBlog } from "@/components/commons/BlogSection";
import { NewsletterSection } from "@/components/commons/NewsletterSection";
import { getLatestBlogs } from "@/app/actions/blog";
import { useEffect, useState } from "react";

export function ContactContent() {
    const [blogs, setBlogs] = useState<LatestBlog[]>([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const data = await getLatestBlogs(3);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching latest blogs:', error);
                setBlogs([]);
            }
        }

        fetchBlogs();
    }, []);

    return (
        <main className="bg-(--color-contact-bg-light) dark:bg-(--color-contact-bg-dark) min-h-screen font-sans">
            <Navbar />
            <ContactHero />
            <ContactFormSection />
            <ContactMap />
            <ContactFAQ />
            <BlogSection blogs={blogs} />
            <NewsletterSection />
            <Footer />
            <AIChatBot />
        </main>
    );
}
