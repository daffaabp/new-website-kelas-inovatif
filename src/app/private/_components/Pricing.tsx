import React from 'react';
import { Check } from 'lucide-react';
import { ADMIN_WHATSAPP_DIGITS } from '@/lib/admin-contact';

export function Pricing() {
    return (
        <section className="py-24 bg-private-bg-light dark:bg-private-bg-dark border-t border-gray-100 dark:border-gray-800" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-private-primary/10 text-private-primary text-xs font-bold tracking-wider uppercase mb-4">Investasi Belajar</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Pilih Paket Sesuai Kebutuhan
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Semua paket mendapatkan fasilitas dan kurikulum yang sama. Perbedaan hanya pada jumlah peserta dalam satu kelas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Paket Eksklusif */}
                    <div className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-private-primary transform hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 bg-private-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                            POPULER
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Eksklusif</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Fokus maksimal, privasi terjaga.</p>
                        </div>
                        <div className="my-6 p-4 bg-private-bg-light dark:bg-gray-700/50 rounded-xl text-center">
                            <span className="block text-4xl font-serif font-bold text-gray-900 dark:text-white mb-1">1</span>
                            <span className="text-gray-600 dark:text-gray-300 font-medium">Peserta</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>3x Pertemuan @ 2 Jam</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>1-on-1 Mentoring Intensif</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Jadwal Paling Fleksibel</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Gratis Kelas Pengantar</span>
                            </li>
                        </ul>
                        <a
                            href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20tertarik%20daftar%20Private%20Master%20Class%20Paket%20Eksklusif%20(1%20Orang).`}
                            target='_blank'
                            className="block w-full text-center bg-private-primary hover:bg-private-primary/90 text-white font-bold py-4 rounded-xl transition-colors"
                        >
                            Daftar Sekarang
                        </a>
                    </div>

                    {/* Paket Premium */}
                    <div className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Premium</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Belajar bersama partner riset.</p>
                        </div>
                        <div className="my-6 p-4 bg-private-bg-light dark:bg-gray-700/50 rounded-xl text-center">
                            <span className="block text-4xl font-serif font-bold text-gray-900 dark:text-white mb-1">2</span>
                            <span className="text-gray-600 dark:text-gray-300 font-medium">Peserta</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>3x Pertemuan @ 2 Jam</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Semi-Private Mentoring</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Jadwal Disepakati Bersama</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Gratis Kelas Pengantar</span>
                            </li>
                        </ul>
                        <a
                            href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20tertarik%20daftar%20Private%20Master%20Class%20Paket%20Premium%20(2%20Orang).`}
                            target='_blank'
                            className="block w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-4 rounded-xl transition-colors"
                        >
                            Daftar Sekarang
                        </a>
                    </div>

                    {/* Paket Ekonomis */}
                    <div className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Ekonomis</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Hemat biaya, tetap efektif.</p>
                        </div>
                        <div className="my-6 p-4 bg-private-bg-light dark:bg-gray-700/50 rounded-xl text-center">
                            <span className="block text-4xl font-serif font-bold text-gray-900 dark:text-white mb-1">3</span>
                            <span className="text-gray-600 dark:text-gray-300 font-medium">Peserta</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>3x Pertemuan @ 2 Jam</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Group Mentoring Kecil</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Jadwal Disepakati Bersama</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                <span>Gratis Kelas Pengantar</span>
                            </li>
                        </ul>
                        <a
                            href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20tertarik%20daftar%20Private%20Master%20Class%20Paket%20Ekonomis%20(3%20Orang).`}
                            target='_blank'
                            className="block w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-4 rounded-xl transition-colors"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        *Biaya dapat ditanyakan langsung melalui Admin WhatsApp.
                    </p>
                </div>
            </div>
        </section>
    );
}
