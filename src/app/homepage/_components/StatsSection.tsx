"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../_data/testimonials';

function AnimatedGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradGlobe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rotating Outer Ring */}
      <g transform="translate(100 100)">
        <circle r="85" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
        </circle>
        <circle r="92" fill="none" stroke="white" strokeWidth="0.2" opacity="0.1">
          <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="40s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Main Globe Body */}
      <circle cx="100" cy="100" r="70" fill="url(#gradGlobe)" stroke="white" strokeWidth="0.5" opacity="0.2" />

      {/* Rotating Meridians (Simulated 3D) */}
      <g>
        <ellipse cx="100" cy="100" rx="70" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
        {/* Dynamic Ellipses */}
        <ellipse cx="100" cy="100" rx="30" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="rx" values="30;0;30" dur="4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="100" rx="10" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="rx" values="10;50;10" dur="4s" begin="1s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="100" cy="100" rx="50" ry="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="rx" values="50;10;50" dur="4s" begin="2s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Latitude Lines */}
      <line x1="35" y1="50" x2="165" y2="50" stroke="white" strokeWidth="0.5" opacity="0.1" />
      <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2" />
      <line x1="35" y1="150" x2="165" y2="150" stroke="white" strokeWidth="0.5" opacity="0.1" />

      {/* Orbiting Dots */}
      <circle r="3" fill="white" filter="url(#glow)">
        <animateMotion dur="8s" repeatCount="indefinite" path="M100,100 m-90,0 a90,25 0 1,0 180,0 a90,25 0 1,0 -180,0" />
      </circle>

      <circle r="2" fill="white" opacity="0.6">
        <animateMotion dur="12s" repeatCount="indefinite" path="M100,100 m0,-90 a25,90 0 1,0 0,180 a25,90 0 1,0 0,-180" />
      </circle>
    </svg>
  );
}

export function StatsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-eduzin-dark text-white py-12 px-6 md:py-18 md:px-8 overflow-hidden relative">
      {/* Globe Background - positioned absolutely behind content */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-20 lg:opacity-40 translate-y-[30%]">
          <AnimatedGlobe />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Stats */}
          <div className="space-y-10">
            {/* Student Avatars & Rating */}
            <div>
              <div className="flex -space-x-4 mb-4">
                {[
                  'abdul-jamil.avif',
                  'akhmad-suhaidi.avif',
                  'fadilah-neyarasmi.avif',
                  'gomgom-t-pangaribuan.avif',
                  'khairuddin-karim.avif',
                ].map((filename) => (
                  <div
                    key={filename}
                    className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-eduzin-dark"
                  >
                    <Image
                      src={`/images/testimonials/${filename}`}
                      alt="Student"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-bold text-white">4.9</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif mb-2">10,000+</h3>
                <p className="text-md text-white/60">Member komunitas Kelas Inovatif dari seluruh Indonesia</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-serif mb-2">95%</h3>
                <p className="text-md text-white/60">Alumni kami sukses lulus studi, menyelesaikan skripsi, tesis, dan disertasi, hingga publikasi internasional berkat AI</p>
              </div>
            </div>

            {/* Student Ratings Card - Now inline instead of absolute */}
            <div className="hidden lg:flex bg-white/10 backdrop-blur-md p-4 rounded-xl items-center gap-4 border border-white/10 w-fit">
              <div className="flex -space-x-2">
                {[
                  'gomgom-t-pangaribuan.avif',
                  'akhmad-suhaidi.avif',
                  'fadilah-neyarasmi.avif',
                ].map((filename) => (
                  <div
                    key={filename}
                    className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-transparent"
                  >
                    <Image
                      src={`/images/testimonials/${filename}`}
                      alt="student"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-sm text-white">4.9/5</p>
                <p className="text-[10px] uppercase tracking-wide text-white/80">Rating dari 5000+ peserta</p>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Slider */}
          <div className="lg:pl-8 relative flex flex-col pb-8 lg:pb-12">
            {/* Header Badge */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white/90">
                Kisah Sukses Alumni
              </span>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 pr-2">
              <Quote className="text-white/20 w-10 h-10 mb-6" />

              <div key={current.id} className="animate-fadeIn">
                <h2 className="text-2xl font-serif font-medium leading-relaxed mb-6">
                  &quot;{current.quote}&quot;
                </h2>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white/20">
                    <Image
                      src={current.avatar}
                      alt={current.author}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{current.author}</p>
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest">{current.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-eduzin-dark transition-all duration-300 group cursor-pointer"
                aria-label="Testimoni sebelumnya"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white text-eduzin-dark flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg group cursor-pointer"
                aria-label="Testimoni selanjutnya"
              >
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

