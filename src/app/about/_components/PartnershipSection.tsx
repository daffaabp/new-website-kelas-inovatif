import { GraduationCap, BookOpen, Users } from "lucide-react";

export function PartnershipSection() {
    return (
        <section className="py-20 bg-about-surface-light dark:bg-about-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Program Kerjasama
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Kelas Inovatif telah dipercaya berbagai institusi untuk mengakselerasi literasi AI di Indonesia.
                        Mulai dari universitas, lembaga pemerintahan, hingga satuan militer (TNI), kami hadir untuk
                        menciptakan dampak nyata melalui edukasi teknologi yang inklusif.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <GraduationCap className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Institusi Pendidikan
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Kurikulum & Training:</strong> Integrasi modul AI praktis ke dalam kurikulum serta pelatihan intensif bagi dosen dan mahasiswa.</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Visiting Lecturer:</strong> Menghadirkan praktisi AI sebagai dosen tamu untuk berbagi wawasan industri terkini.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <BookOpen className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Pemerintah & Militer
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Program Pengabdian:</strong> Sinergi edukasi teknologi untuk masyarakat luas bersama satuan militer (TNI).</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Upgrading SDM:</strong> Pelatihan efisiensi kerja berbasis AI khusus aparatur sipil dan personal pertahanan.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Users className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Organisasi & Komunitas
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Kolaborasi Event:</strong> Penyelenggaraan seminar dan workshop bersama untuk jangkauan audiens lebih luas.</span>
                            </li>
                            <li className="flex items-start text-justify">
                                <span className="text-about-primary mr-2 shrink-0">•</span>
                                <span><strong className="text-about-primary dark:text-white">Community Partnership:</strong> Program kemitraan eksklusif dengan benefit khusus bagi komunitas mitra.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
