import HomePage from "@/app/homepage/page";
import { getLatestSchedules } from '@/app/actions/schedule';
import { getLatestBlogs } from '@/app/actions/blog';

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  // Fetch data di server-side (pattern yang sudah terbukti berhasil di /schedule dan /blogs)
  const [schedules, blogs] = await Promise.all([
    getLatestSchedules(8),
    getLatestBlogs(3),
  ]);

  return <HomePage initialSchedules={schedules} initialBlogs={blogs} />;
}
