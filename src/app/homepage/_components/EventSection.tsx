"use client";

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getLatestSchedules } from '@/app/actions/schedule';

interface EventData {
  id: number;
  title: string;
  date: string; // ISO String
  start_time: string;
  type: string;
  price: string;
  location: string;
  speaker: {
    name: string;
    role: string;
    avatar: string;
  };
}

// Helpers for Date Formatting
const getDayName = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(date);
};

const getDayNumber = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric' }).format(date);
};

const getMonthName = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(date);
};

const formatTime = (time: string): string => {
  if (!time) return '';
  if (time.includes(':')) {
    return `${time.split(':').slice(0, 2).join(':')} WIB`;
  }
  return time;
};

// Helper for Badge Colors/Icons
const getEventTypeStyles = (type: string) => {
  const t = type?.toLowerCase() || '';
  if (t.includes('workshop')) return {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-600 dark:text-indigo-400',
    icon: <Users size={14} />
  };
  if (t.includes('bootcamp')) return {
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    text: 'text-rose-600 dark:text-rose-400',
    icon: <BookOpen size={14} />
  };
  // Webinar/Seminar/Default
  return {
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    icon: <Video size={14} />
  };
};

interface ScheduleInput {
  id: number;
  title: string;
  date: string;
  start_time: string;
  type: string;
  location: string;
  speaker_name: string;
  speaker_role?: string;
  speaker_image?: string;
  [key: string]: unknown;
}

function mapScheduleToEvent(schedule: ScheduleInput): EventData {
  return {
    id: schedule.id,
    title: schedule.title,
    date: schedule.date,
    start_time: schedule.start_time,
    type: schedule.type || 'Event',
    price: 'Gratis Member',
    location: schedule.location || 'Online via Zoom',
    speaker: {
      name: schedule.speaker_name || 'TBA',
      role: schedule.speaker_role || 'Pembicara',
      avatar: schedule.speaker_image || 'https://i.pravatar.cc/100?img=32'
    }
  };
}

export function EventSection({ initialEvents }: { initialEvents?: ScheduleInput[] }) {
  const [events, setEvents] = useState<EventData[]>(
    initialEvents ? initialEvents.map(mapScheduleToEvent) : []
  );
  const [loading, setLoading] = useState(!initialEvents || initialEvents.length === 0);

  useEffect(() => {
    // Jika data sudah diberikan dari server via props, skip client-side fetch
    if (initialEvents && initialEvents.length > 0) {
      setLoading(false);
      return;
    }

    async function fetchEvents() {
      try {
        setLoading(true);
        const schedules = await getLatestSchedules(8);
        const mappedEvents = schedules.map(mapScheduleToEvent);
        setEvents(mappedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [initialEvents]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">
              Jadwal Kegiatan
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
              Agenda & Event Komunitas
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Jangan lewatkan kesempatan belajar langsung dari para ahli melalui workshop dan webinar eksklusif.
            </p>
          </div>
          <div className="hidden md:block">
            <Link href="/schedule" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-eduzin-gold transition-colors text-eduzin-dark">
              Lihat Kalender Penuh <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

          {loading ? (
            // Loading Skeleton
            <div className="p-6 md:p-8 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 animate-pulse border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
                    <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                  </div>
                  <div className="w-full md:w-48 h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            // Empty State
            <div className="text-center py-20 px-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Belum ada agenda</h3>
              <p className="text-gray-500">Nantikan update event terbaru dari kami.</p>
            </div>
          ) : (
            // Event List
            <div className="divide-y divide-gray-200">
              {events.map((event) => {
                const style = getEventTypeStyles(event.type);
                return (
                  <div
                    key={event.id}
                    className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 hover:bg-white transition-colors duration-200"
                  >

                    {/* Date Block (Desktop Left / Mobile Top) */}
                    <div className="shrink-0 flex items-center gap-4 md:block text-center md:w-20">
                      <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-2 md:p-3 shadow-sm min-w-[70px]">
                        <span className="text-xs uppercase text-red-500 font-bold tracking-wider">
                          {getMonthName(event.date)}
                        </span>
                        <span className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-none my-1">
                          {getDayNumber(event.date)}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {getDayName(event.date)}
                        </span>
                      </div>
                      {/* Mobile Type Badge (Inline with date) */}
                      <div className={`md:hidden flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}>
                        {style.icon}
                        <span>{event.type}</span>
                      </div>
                    </div>

                    {/* Main Info */}
                    <div className="grow min-w-0 space-y-2 md:space-y-1">
                      {/* Valid for Desktop Type Badge */}
                      <div className="hidden md:flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${style.bg} ${style.text}`}>
                          {style.icon}
                          {event.type}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                          <Clock size={12} /> {formatTime(event.start_time)}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 group-hover:text-eduzin-gold transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-1.5 md:hidden">
                          <Clock size={14} className="text-gray-400" />
                          <span>{formatTime(event.start_time)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-gray-400" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Speaker & Action */}
                    <div className="shrink-0 w-full md:w-auto flex items-center justify-between md:flex-col md:items-end gap-4 mt-2 md:mt-0 pl-0 md:pl-6 md:border-l md:border-gray-100">

                      <div className="flex items-center gap-3">
                        <Image
                          src={event.speaker.avatar}
                          alt={event.speaker.name}
                          className="rounded-full object-cover border-2 border-white shadow-sm"
                          width={40}
                          height={40}
                        />
                        <div className="text-left md:text-right">
                          <p className="text-xs font-bold text-gray-900">{event.speaker.name}</p>
                          <p className="text-[10px] text-gray-500 truncate max-w-[120px]">{event.speaker.role}</p>
                        </div>
                      </div>

                      <Link href={`/schedule/${event.id}`} className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm font-bold text-gray-700 hover:bg-eduzin-dark hover:text-white hover:border-transparent transition-all group/btn cursor-pointer">
                        Detail <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      {/* Mobile Only Action */}
                      <Link href={`/schedule/${event.id}`} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-eduzin-dark text-white shadow-lg active:scale-95 transition-transform cursor-pointer">
                        <ArrowRight size={18} />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            Lihat Semua Event
          </button>
        </div>

      </div>
    </section>
  );
}
