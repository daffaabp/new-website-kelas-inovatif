"use client";

import { waMeBase } from '@/lib/admin-contact';

export function PartnershipCTA() {
    return (
        <section className="bg-community-primary text-partnership-bg-cream py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">Siap berkolaborasi untuk masa depan?</h2>
                    <p className="text-partnership-bg-cream/80 text-lg mb-8 max-w-md font-sans">Membangun kemitraan strategis untuk inovasi yang berkelanjutan. Mari diskusikan bagaimana kami bisa membantu institusi Anda bertransformasi.</p>
                    <div className="flex flex-col gap-4 font-sans">
                        <a className="text-2xl font-bold border-b border-partnership-accent/50 w-fit hover:text-partnership-accent transition-colors pb-1" href="mailto:aiindonesiakreatif@gmail.com">aiindonesiakreatif@gmail.com</a>
                        <div className="flex gap-6 mt-4">
                            <a className="hover:text-partnership-accent transition-colors" href={waMeBase()}>WhatsApp</a>
                            <a className="hover:text-partnership-accent transition-colors" href="https://instagram.com/kelasinovatif">Instagram</a>
                            <a className="hover:text-partnership-accent transition-colors" href="https://youtube.com/@kelasinovatif">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 border border-partnership-bg-cream/20 rounded-full flex items-center justify-center p-8 group hover:border-partnership-accent/50 transition-colors duration-500">
                        {/* Handshake Illustration */}
                        <svg className="w-32 h-32 text-partnership-accent opacity-90 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <div className="absolute -bottom-4 -right-4 bg-partnership-bg-cream text-[#013e42] p-4 rounded-full shadow-lg transform transition-transform duration-500 group-hover:rotate-12">
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
