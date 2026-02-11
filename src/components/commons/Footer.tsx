import { Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white dark:bg-contact-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-about-primary rounded-full flex items-center justify-center text-white font-serif font-bold">K</div>
                            <span className="font-serif font-bold text-xl text-about-primary dark:text-white">Kelas Inovatif</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Kelas Inovatif adalah platform pembelajaran AI nomor 1 di Indonesia. Membantu profesional akademisi menguasai AI tools yang terbukti efektif.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                className="text-gray-400 hover:text-about-primary dark:hover:text-white transition"
                                href="https://www.facebook.com/profile.php?id=61561356131476" target="_blank" rel="noopener noreferrer" aria-label="Facebook Kelas Inovatif"
                            >
                                <Facebook size={24} strokeWidth={1.5} />
                            </a>
                            <a
                                className="text-gray-400 hover:text-about-primary dark:hover:text-white transition"
                                href="https://instagram.com/kelasinovatif" target="_blank" rel="noopener noreferrer" aria-label="Instagram Kelas Inovatif"
                            >
                                {/* Instagram Icon */}
                                <svg width="24" height="24" strokeWidth="1.5" fill="none" viewBox="0 0 24 24" className="inline-block" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
                                    <circle cx="12" cy="12" r="5" stroke="currentColor" />
                                    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                                </svg>
                            </a>
                            <a
                                className="text-gray-400 hover:text-about-primary dark:hover:text-white transition"
                                href="https://www.youtube.com/@aiindonesiakreatif" target="_blank" rel="noopener noreferrer" aria-label="YouTube Kelas Inovatif"
                            >
                                {/* YouTube Icon */}
                                <svg width="24" height="24" strokeWidth="1.5" fill="none" viewBox="0 0 24 24" className="inline-block" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" />
                                    <polygon points="10,9 16,12 10,15" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Menu Utama</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/">Beranda</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/about">Tentang Kami</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/community">Komunitas</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/program">Program</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/bootcamp">Bootcamp</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/schedule">Event</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Informasi</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/blogs">Blog & Artikel</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/user-story">Kisah Alumni</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/faq">FAQ</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/contact">Hubungi Kami</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/jobs">Karir</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/privacy">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Kontak</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-about-primary w-5 h-5 shrink-0" />
                                <span><strong>PT BAKAT KREATIF INDONESIA</strong><br />Jl Raya Mujur No 46 Kroya<br />Cilacap, Jawa Tengah<br />Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-about-primary w-5 h-5 shrink-0" />
                                <span>085712208535</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-about-primary w-5 h-5 shrink-0" />
                                <span>aiindonesiakreatif@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-about-primary w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Senin - Sabtu<br />08:00 - 17:00 WIB</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} PT BAKAT KREATIF INDONESIA. Hak cipta dilindungi.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="hover:text-about-primary dark:hover:text-white transition" href="/privacy">Kebijakan Privasi</a>
                        <a className="hover:text-about-primary dark:hover:text-white transition" href="/terms">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
