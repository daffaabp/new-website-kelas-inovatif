"use client";

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Hero } from './_components/Hero';
import { StatsSection } from './_components/StatsSection';
import { CoursesSection } from './_components/CoursesSection';
import { FeaturesSection } from './_components/FeaturesSection';
import { PromoSection } from './_components/PromoSection';
import { EventSection } from './_components/EventSection';
import { FaqSection } from './_components/FaqSection';
import { Footer } from '@/components/commons/Footer';
import { NewsletterSection } from '@/components/commons/NewsletterSection';
import { AIChatBot } from '@/components/commons/AIChatBot';
import { CourseDetailView } from './_components/CourseDetailView';
import { Course } from './types';
import { LatestBlogSection } from './_components/LatestBlogSection';
import { LatestBlog } from '@/components/commons/BlogSection';

interface ScheduleData {
  id: number;
  title: string;
  date: string;
  start_time: string;
  type: string;
  location: string;
  speaker_name: string;
  speaker_role?: string | null;
  speaker_image?: string | null;
  [key: string]: unknown;
}

interface HomePageProps {
  initialSchedules?: ScheduleData[];
  initialBlogs?: LatestBlog[];
}

export default function HomePage({ initialSchedules, initialBlogs }: HomePageProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCourse]);

  if (selectedCourse) {
    return (
      <main className="w-full overflow-x-hidden font-sans">
        <CourseDetailView course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        <AIChatBot />
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <CoursesSection onCourseSelect={setSelectedCourse} />
      <div id="about">
        <StatsSection />
      </div>
      <FeaturesSection />
      {/* <Testimonials /> */}
      <PromoSection />
      <EventSection initialEvents={initialSchedules} />
      <FaqSection />
      {/* <NewsSection /> */}
      <div id="contact">
        <LatestBlogSection initialBlogs={initialBlogs} />
        <NewsletterSection />
        <Footer />
      </div>
      <AIChatBot />
    </main>
  );
}

