import Link from 'next/link';
import { ADMIN_WHATSAPP_DIGITS } from '@/lib/admin-contact';

export function CTA() {
    return (
        <section className="py-24 bg-linear-to-br from-teal-900 via-teal-800 to-teal-900 dark:from-gray-900 dark:via-teal-950 dark:to-gray-900 relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
                </svg>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-teal-400/30 bg-white/10 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
                    <svg className="w-4 h-4 mr-2 text-teal-300 fill-teal-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    PENDAFTARAN KELAS KHUSUS
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Siap menulis karya ilmiah berkualitas?
                </h2>
                <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
                    Bergabunglah dengan para akademisi dan peneliti yang menghasilkan artikel, tesis, disertasi, dan buku berkualitas tinggi dengan teknologi AI. Kursi terbatas tersedia untuk kelas intensif ini.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link className="inline-flex items-center justify-center px-8 py-4 bg-white text-eduzin-dark font-bold rounded-full hover:bg-gray-100 transition shadow-lg text-lg" href="/schedule">
                        Daftar Sekarang
                    </Link>
                    <a
                        className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition text-lg"
                        href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin%20Kelas%20Inovatif%2C%20saya%20ingin%20bertanya%20tentang%20Kelas%20Intensif%20Penulisan%20Karya%20Ilmiah%20menggunakan%20Cursor%20AI.%20Mohon%20info%20jadwal%20dan%20cara%20pendaftaran%20terbarunya.%20Terima%20kasih.`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hubungi Kami
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a8 8 0 11-5.293 14.293l.997-1.745A6 6 0 1010 4v2a1 1 0 11-2 0V2h2z" clipRule="evenodd" />
                        </svg>
                        <span>Free Pengulangan Kelas </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-1 7a1 1 0 01-1 1h-3.586l-1.707 1.707a1 1 0 01-1.414-1.414L10.586 16h-3.586a1 1 0 01-1-1v-1a1 1 0 011-1h9a1 1 0 011 1v1z" clipRule="evenodd" />
                        </svg>
                        <span>Lifetime Support via Admin</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2C5.582 2 2 5.582 2 10c0 2.006.745 3.84 1.978 5.252l-.86 2.797a1 1 0 001.266 1.266l2.797-.86A7.968 7.968 0 0010 18c4.418 0 8-3.582 8-8s-3.582-8-8-8zm4 10a1 1 0 10-2 0 1 1 0 002 0zm-4 1a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                        </svg>
                        <span>Akses Komunitas Peneliti</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
