import React from 'react';
import { ADMIN_WHATSAPP_DIGITS } from '@/lib/admin-contact';

export function WaitlistCTA() {
    return (
        <section className="py-24 bg-private-bg-light dark:bg-private-bg-dark border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Masih Ragu Menentukan Paket?</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Konsultasikan kebutuhan riset Anda dengan tim kami. Kami akan membantu merekomendasikan paket yang paling sesuai dengan target akademik Anda saat ini.
                </p>
                <div className="flex justify-center">
                    <a 
                        href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20masih%20ragu%20mau%20ambil%20paket%20Private%20yang%20mana,%20boleh%20konsultasi?`}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <span>Chat WhatsApp Admin</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.991.56 1.748.835 2.806.835 3.182 0 5.768-2.587 5.768-5.766-.001-3.181-2.587-5.768-5.768-5.768zm0 10.375c-.966 0-1.78-.291-2.454-.639l-1.439.379.384-1.402c-.443-.728-.682-1.378-.681-2.348 0-2.542 2.068-4.609 4.61-4.609 2.542 0 4.61 2.067 4.609 4.609 0 2.542-2.067 4.61-4.609 4.61zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 8a8 8 0 100-16 8 8 0 000 16z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
