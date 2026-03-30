import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { ADMIN_PHONE_DISPLAY_DASHED, waMeUrl } from '@/lib/admin-contact';

export function ContactCTA() {
    const whatsappUrl = waMeUrl(
        'Halo Admin, saya tertarik dengan program pembelajaran AI untuk akademik di Kelas Inovatif. Mohon informasi mengenai jadwal kelas terdekat dan bagaimana cara mendaftarnya. Terima kasih.'
    );

    return (
        <section className="py-16 bg-faq-accent dark:bg-faq-surface-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-faq-primary dark:text-white mb-4">
                    Masih Ada Pertanyaan?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Tim kami siap membantu Anda menemukan program yang tepat dan menjawab pertanyaan lebih lanjut. Jangan ragu untuk menghubungi kami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-faq-primary hover:bg-faq-accent text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat via WhatsApp
                    </a>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{ADMIN_PHONE_DISPLAY_DASHED}</span>
                    </div>
                </div>
                <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                    Respons cepat • Konsultasi gratis • Informasi lengkap program
                </p>
            </div>
        </section>
    );
}
