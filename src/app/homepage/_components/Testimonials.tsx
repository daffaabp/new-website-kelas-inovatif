"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '../_data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-eduzin-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider">Testimoni</span>
            <h2 className="text-4xl font-medium max-w-xs">Kisah sukses dari anggota komunitas kami.</h2>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-eduzin-dark hover:text-white transition-colors cursor-pointer"
                aria-label="Testimoni sebelumnya"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-eduzin-dark text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Testimoni selanjutnya"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col justify-between h-full min-h-[300px] transition-all duration-300">
            <div>
              {current.title && (
                <span className="text-xs font-bold text-eduzin-dark mb-4 block">{current.title}</span>
              )}
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                &quot;{current.quote}&quot;
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={current.avatar}
                  alt={current.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm">{current.author}</p>
                <p className="text-xs text-gray-500">{current.role}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
