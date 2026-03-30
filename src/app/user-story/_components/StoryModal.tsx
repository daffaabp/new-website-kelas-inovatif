import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { X, Quote, CheckCircle } from 'lucide-react';
import { AlumniStory } from '../_data/stories';

interface StoryModalProps {
    story: AlumniStory | null;
    onClose: () => void;
}

export function StoryModal({ story, onClose }: StoryModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Kunci scroll body saat modal terbuka
    useEffect(() => {
        if (story) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [story]);

    if (!mounted || !story) return null;

    return createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 font-sans">
            {/* Backdrop Gelap - Klik untuk tutup */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-[#1A2220] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row">

                {/* Close Button - Sticky supaya selalu terlihat */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors z-50 backdrop-blur-sm shadow-sm"
                >
                    <X className="w-5 h-5 text-[#1C302B] dark:text-gray-200" />
                </button>

                {/* Sidebar Profile (Kiri di Desktop, Atas di Mobile) */}
                <div className="w-full md:w-80 bg-[#F7F5F0] dark:bg-[#151917] p-6 md:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 shrink-0 overflow-y-auto custom-scrollbar">
                    <div className="md:sticky md:top-0 flex flex-col items-center">
                        <div className="relative mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-white dark:border-[#1A2220] shadow-md">
                            <Image
                                src={story.photo}
                                alt={story.name}
                                className="object-cover"
                                fill
                                sizes="128px"
                            />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl text-[#1C302B] dark:text-white mb-1 leading-tight">{story.name}</h3>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6 px-4">{story.title}</p>

                        <div className="w-full flex flex-wrap justify-center gap-2 md:flex-col md:space-y-2 md:gap-0">
                            {story.highlights.map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-[#1A2220] px-3 py-2 rounded-lg text-xs font-medium text-[#1C302B] dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-2 w-auto md:w-full">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                                    <span className="leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area (Scrollable) */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-white dark:bg-[#1A2220] h-full">
                    <div className="p-6 md:p-10 pb-20 md:pb-10"> {/* Extra padding bottom for mobile */}
                        {!(story.story.before.trim() || story.story.turningPoint.trim() || story.story.after.trim()) && (
                        <div className="mb-8 relative">
                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#D4AF37]/20 transform -scale-x-100" />
                            <h2 className="relative font-serif text-xl md:text-2xl text-[#1C302B] dark:text-white leading-relaxed italic pl-6 md:pl-8">
                                &quot;{story.quote}&quot;
                            </h2>
                        </div>
                        )}

                        <div className="space-y-8 relative pl-2">
                            {(story.story.before.trim() || story.story.turningPoint.trim() || story.story.after.trim()) && (
                            <div className="absolute left-[9px] top-3 bottom-4 w-[2px] bg-gray-100 dark:bg-gray-800 rounded-full" aria-hidden />
                            )}

                            {story.story.before.trim() !== '' && (
                            <div className="relative pl-8 md:pl-10 group">
                                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-[#1A2220] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                </div>
                                <h4 className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs mb-2 mt-1">Tantangan Awal</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                                    {story.story.before}
                                </p>
                            </div>
                            )}

                            {story.story.turningPoint.trim() !== '' && (
                            <div className="relative pl-8 md:pl-10 group">
                                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#D4AF37]/20 border-4 border-white dark:border-[#1A2220] flex items-center justify-center shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                </div>
                                <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider text-xs mb-2 mt-1">Titik Balik</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-[#F7F5F0] dark:bg-white/5 p-4 rounded-xl border border-dashed border-[#D4AF37]/30 whitespace-pre-wrap">
                                    {story.story.turningPoint}
                                </p>
                            </div>
                            )}

                            {story.story.after.trim() !== '' && (
                            <div className="relative pl-8 md:pl-10 group">
                                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#1C302B]/20 dark:bg-white/20 border-4 border-white dark:border-[#1A2220] flex items-center justify-center shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-[#1C302B] dark:bg-white"></div>
                                </div>
                                <h4 className="font-bold text-[#1C302B] dark:text-white uppercase tracking-wider text-xs mb-2 mt-1">Hasil Akhir</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base font-medium whitespace-pre-wrap">
                                    {story.story.after}
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
