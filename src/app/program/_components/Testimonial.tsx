import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonial() {
    return (
        <section className="py-20 bg-program-accent/30 dark:bg-program-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Quote className="text-program-primary/40 dark:text-white/20 w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 dark:text-white mb-8">
                    &quot;Saya awam dengan AI, namun di Kelas Inovatif saya justru &apos;tersesat di jalan yang benar&apos;. Di sini, pembelajaran diberikan perlahan dan bertahap. Hasilnya, saya bisa menyelesaikan studi magister saya, dan tahun depan berencana melanjutkan ke jenjang doktoral S3&quot;
                </h3>
                <div className="flex items-center justify-center space-x-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                        <Image
                            alt="Student Portrait"
                            className="object-cover"
                            src="/images/testimonials/wayan-tangun.avif"
                            fill
                            sizes="48px"
                        />
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-gray-900 dark:text-white text-sm">Wayan Tangun Setiarien, M.M.</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Alumni Kelas Inovatif & Magister Manajemen</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
