"use client";

import { GraduationCap, BookOpen, Users } from "lucide-react";

export function PartnershipFeatureSection() {
    return (
        <section id="program-kerjasama" className="py-20 bg-partnership-bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-partnership-primary mb-4">
                        Program Kerjasama
                    </h2>
                    <p className="text-partnership-text-muted text-lg font-sans">
                        Kelas Inovatif telah dipercaya berbagai institusi untuk mengakselerasi literasi AI di Indonesia.
                        Mulai dari universitas, lembaga pemerintahan, hingga satuan militer (TNI), kami hadir untuk
                        menciptakan dampak nyata melalui edukasi teknologi yang inklusif.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                        <div className="w-12 h-12 bg-partnership-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-partnership-primary transition-colors">
                            <GraduationCap className="w-6 h-6 text-partnership-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-partnership-primary">
                            Institusi Pendidikan
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Kurikulum & Training:</strong> Integrasi modul AI praktis ke dalam kurikulum serta pelatihan intensif bagi dosen dan mahasiswa.</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Visiting Lecturer:</strong> Menghadirkan praktisi AI sebagai dosen tamu untuk berbagi wawasan industri terkini.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                        <div className="w-12 h-12 bg-partnership-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-partnership-primary transition-colors">
                            <BookOpen className="w-6 h-6 text-partnership-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-partnership-primary">
                            Pemerintah & Militer
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Program Pengabdian:</strong> Sinergi edukasi teknologi untuk masyarakat luas bersama satuan militer (TNI).</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Upgrading SDM:</strong> Pelatihan efisiensi kerja berbasis AI khusus aparatur sipil dan personal pertahanan.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                        <div className="w-12 h-12 bg-partnership-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-partnership-primary transition-colors">
                            <Users className="w-6 h-6 text-partnership-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-partnership-primary">
                            Organisasi & Komunitas
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Kolaborasi Event:</strong> Penyelenggaraan seminar dan workshop bersama untuk jangkauan audiens lebih luas.</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-partnership-primary mr-2 shrink-0">•</span>
                                <span className="font-sans"><strong className="text-partnership-primary">Community Partnership:</strong> Program kemitraan eksklusif dengan benefit khusus bagi komunitas mitra.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
