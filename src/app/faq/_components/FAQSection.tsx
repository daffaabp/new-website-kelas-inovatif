"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ADMIN_PHONE_DISPLAY_DASHED } from '@/lib/admin-contact';

const faqCategories = [
    {
        title: 'Mengapa Memilih Kami',
        questions: [
            {
                question: 'Apa yang membuat Kelas Inovatif berbeda dari pelatihan AI lainnya?',
                answer: 'Kami adalah Platform Pembelajaran AI No.1 di Indonesia yang fokus khusus pada akademisi. Tidak hanya mengajarkan tools, tetapi juga metodologi riset lengkap—dari pencarian referensi hingga publikasi. Ratusan alumni telah berhasil menyelesaikan tesis, disertasi, dan publikasi internasional dengan dukungan komunitas aktif dan mentoring berkelanjutan.',
            },
            {
                question: 'Mengapa saya harus belajar AI untuk akademik? Apakah ini benar-benar membantu?',
                answer: 'AI mempercepat proses yang memakan waktu seperti pencarian referensi, analisis literatur, dan penulisan—bukan menggantikan pemikiran Anda. Alumni kami menghemat 50-70% waktu riset dan menghasilkan karya lebih berkualitas karena bisa fokus pada ide dan analisis mendalam, bukan tugas administratif.',
            },
            {
                question: 'Apakah Kelas Inovatif memiliki track record yang terbukti?',
                answer: 'Ya. Kami telah membantu ratusan mahasiswa S2/S3, dosen, dan peneliti menyelesaikan karya akademik mereka. Banyak alumni berhasil publikasi di jurnal Scopus, menyelesaikan tesis/disertasi lebih cepat, dan menghasilkan buku akademik. Testimoni dan hasil nyata tersedia di halaman komunitas kami.',
            },
            {
                question: 'Siapa instruktur kelas dan apa kredensialnya?',
                answer: 'Instruktur kami adalah Arianto, AI Engineer & Researcher dengan pengalaman mendalam dalam penelitian akademik dan penggunaan AI untuk penulisan ilmiah. Tidak hanya ahli teknis, tetapi juga memahami kebutuhan akademisi Indonesia dan selalu update dengan perkembangan terbaru tools AI untuk akademik.',
            },
        ],
    },
    {
        title: 'Program & Hasil',
        questions: [
            {
                question: 'Bagaimana struktur pembelajaran di Kelas Inovatif?',
                answer: 'Kami menggunakan pendekatan intensif dengan praktik langsung. Setiap kelas menggabungkan teori dan praktik dengan pendampingan dari instruktur berpengalaman. Anda langsung mempraktikkan dengan project Anda sendiri, dan tetap mendapat dukungan melalui komunitas serta mentoring berkelanjutan setelah kelas.',
            },
            {
                question: 'Apa perbedaan kelas SciSpace, NotebookLM, dan Cursor? Apakah saya perlu mengikuti semuanya?',
                answer: 'Setiap kelas dirancang untuk tahap berbeda dalam alur riset. SciSpace untuk pencarian referensi berkualitas, NotebookLM untuk memahami literatur mendalam, dan Cursor untuk penulisan akurat bebas plagiasi. Anda bisa mengambil sesuai kebutuhan atau mengikuti ketiganya sebagai paket lengkap untuk hasil maksimal.',
            },
            {
                question: 'Berapa lama waktu yang dibutuhkan untuk melihat hasil setelah mengikuti kelas?',
                answer: 'Banyak peserta langsung menerapkan materi di kelas dan melihat hasil dalam 1-2 minggu pertama. Dengan praktik konsisten dan dukungan komunitas, Anda bisa menghemat 50-70% waktu riset. Beberapa alumni bahkan menyelesaikan tesis/disertasi lebih cepat dari timeline yang direncanakan.',
            },
            {
                question: 'Apakah menggunakan AI untuk penulisan akademik dianggap plagiasi atau tidak etis?',
                answer: 'Tidak, jika digunakan dengan benar dan transparan. Kami mengajarkan cara menggunakan AI secara etis—sebagai asisten yang mempercepat proses, bukan menggantikan pemikiran Anda. Cursor membantu drafting, strukturisasi, dan konsistensi, sementara ide, analisis, dan argumentasi tetap berasal dari Anda.',
            },
            {
                question: 'Apakah kelas ini cocok untuk saya yang sedang menulis tesis/disertasi atau artikel jurnal?',
                answer: 'Sangat cocok! Kelas dirancang khusus untuk akademisi di semua tahap—mulai dari mahasiswa yang baru mulai riset hingga dosen yang ingin mempercepat publikasi. Ratusan mahasiswa S2/S3 dan dosen telah membuktikan bahwa tools ini membantu menyelesaikan tesis, disertasi, artikel jurnal, bahkan buku akademik dengan kualitas tinggi.',
            },
            {
                question: 'Apakah ada testimoni atau bukti keberhasilan alumni?',
                answer: 'Ya, banyak sekali! Lihat testimoni video alumni di halaman komunitas kami. Banyak yang berhasil publikasi di jurnal Scopus, menyelesaikan disertasi lebih cepat, menghasilkan buku akademik, dan mendapat beasiswa lanjutan. Kami juga memiliki showcase hasil karya alumni sebagai inspirasi.',
            },
        ],
    },
    {
        title: 'Komunitas & Pendaftaran',
        questions: [
            {
                question: 'Apa yang saya dapatkan setelah bergabung dengan komunitas Kelas Inovatif?',
                answer: 'Anda mendapat akses ke network akademisi aktif, sesi mentoring rutin, diskusi solusi untuk project Anda, materi premium tambahan, dan peluang kolaborasi riset. Banyak anggota menemukan co-author untuk publikasi, mendapat feedback untuk karya mereka, dan menemukan peluang penelitian baru.',
            },
            {
                question: 'Bagaimana sistem mentoring berjalan di komunitas?',
                answer: 'Mentoring kami berkelanjutan, bukan hanya saat kelas. Anda bisa bertanya langsung di grup komunitas dan mendapat respons dari mentor maupun anggota berpengalaman. Ada juga sesi mentoring rutin untuk topik spesifik, konsultasi privat untuk project Anda, dan sharing session dari alumni sukses.',
            },
            {
                question: 'Apakah ada peluang kolaborasi riset dan publikasi di komunitas?',
                answer: 'Tentu! Ini salah satu keunggulan utama kami. Anggota aktif sering berkolaborasi dalam penelitian, co-authoring artikel ilmiah, dan menghasilkan publikasi Scopus bersama. Kami juga mengadakan event khusus untuk matching researcher dengan interest serupa. Banyak publikasi internasional lahir dari kolaborasi di komunitas kami.',
            },
            {
                question: 'Bagaimana cara mendaftar kelas?',
                answer: `Sangat mudah! Hubungi admin kami via WhatsApp di ${ADMIN_PHONE_DISPLAY_DASHED} atau melalui form pendaftaran di website. Admin akan membantu Anda memilih kelas yang tepat sesuai kebutuhan, memberikan informasi jadwal terbaru, dan memandu proses pendaftaran. Kami juga menawarkan konsultasi gratis.`,
            },
            {
                question: 'Apakah ada diskon atau paket khusus?',
                answer: 'Ya, kami sering memberikan penawaran khusus untuk paket lengkap (mengambil beberapa kelas sekaligus) dan untuk anggota komunitas yang ingin upgrade skill mereka. Hubungi admin untuk informasi penawaran terbaru dan paket yang tersedia.',
            },
            {
                question: 'Apa yang perlu saya siapkan sebelum mengikuti kelas?',
                answer: 'Yang utama adalah laptop/komputer dengan koneksi internet stabil dan semangat belajar! Untuk tools, sebagian besar gratis atau akan kami pandu instalasinya. SciSpace dan NotebookLM berbasis web, sementara Cursor akan kami pandu instalasi step-by-step di kelas. Tidak perlu khawatir—kami akan memastikan Anda siap.',
            },
        ],
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section className="py-16 bg-white dark:bg-faq-bg-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-faq-primary dark:text-white mb-6">
                            {category.title}
                        </h2>
                        <div className="space-y-3">
                            {category.questions.map((item, questionIndex) => {
                                const key = `${categoryIndex}-${questionIndex}`;
                                const isOpen = openItems[key];
                                return (
                                    <div
                                        key={questionIndex}
                                        className={`rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                                            ? 'bg-white dark:bg-faq-surface-dark shadow-lg border border-faq-primary/20 dark:border-gray-700'
                                            : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700'
                                            }`}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors"
                                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                                        >
                                            <span className={`font-medium ${isOpen ? 'text-faq-primary dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-faq-primary' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
