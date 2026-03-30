import React from 'react';
import Image from 'next/image';
import { Quote, ArrowRight, PlayCircle } from 'lucide-react';
import { AlumniStory } from '../_data/stories';

interface StoryCardProps {
    story: AlumniStory;
    onReadMore: (story: AlumniStory) => void;
}

export function StoryCard({ story, onReadMore }: StoryCardProps) {

    return (
        <div className="bg-white dark:bg-[#1A2220] rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col relative group transition duration-500 h-full hover:-translate-y-1 hover:shadow-2xl">
            {/* Header: Profile */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#D4AF37] shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                        <Image
                            alt={story.name}
                            src={story.photo}
                            className="object-cover"
                            fill
                            sizes="64px"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#1C302B] dark:text-white leading-tight">{story.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">{story.title}</p>
                    </div>
                </div>
            </div>

            {/* Highlights (Angka Penting) */}
            <div className="flex flex-wrap gap-2 mb-6">
                {story.highlights.map((highlight, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#D4AF37]/10 text-[#a38629] dark:text-[#D4AF37]">
                        {highlight}
                    </span>
                ))}
            </div>

            {/* Quote Utama */}
            <div className="relative mb-6 grow">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#D4AF37]/20 transform -scale-x-100" />
                <p
                    className="font-serif text-xl text-[#1C302B] dark:text-white leading-relaxed pl-6 italic line-clamp-5"
                    title={story.quote}
                >
                    &quot;{story.quote}&quot;
                </p>
            </div>

            {/* Footer Actions */}
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                <button
                    onClick={() => onReadMore(story)}
                    className="flex items-center gap-2 text-sm font-bold text-[#1C302B] dark:text-white hover:text-[#D4AF37] transition-colors group/btn"
                >
                    Baca Cerita Lengkap
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                    {story.videoUrl && (
                        <button className="text-gray-400 hover:text-red-500 transition hover:scale-110 transform" title="Tonton Video">
                            <PlayCircle className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
