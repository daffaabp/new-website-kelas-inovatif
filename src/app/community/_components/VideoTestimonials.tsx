'use client';

import { ChevronLeft, ChevronRight, Play, User } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface VideoTestimonial {
    id: string;
    youtubeId: string;
    thumbnail: string;
    name: string;
    role: string;
    title?: string;
    /** Path ke foto di `public/images/testimonials/` (opsional; jika kosong pakai ikon placeholder) */
    avatar?: string;
}

interface VideoTestimonialsProps {
    videos?: VideoTestimonial[];
}

export function VideoTestimonials({ videos }: VideoTestimonialsProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const defaultVideos: VideoTestimonial[] = [
        {
            id: '1',
            youtubeId: 'Uw7N1ALCsa4',
            thumbnail: '',
            name: 'Dr. Leopold Baginda, S.Pd., M.Th.',
            role: 'Dosen Sekolah Tinggi Teologi Injili Indonesia Palu',
            title: 'Disertasi Selesai dengan Skor Turnitin 11%',
            avatar: '/images/testimonials/leopold-baginda.avif',
        },
        {
            id: '2',
            youtubeId: '8SntnOR87aM',
            thumbnail: '',
            name: 'Akhmad Suhaidi, S.H',
            role: 'Mahasiswa Magister Hukum',
            title: 'Sukses Proposal Tesis',
            avatar: '/images/testimonials/akhmad-suhaidi.avif',
        },
        {
            id: '3',
            youtubeId: 'mMDNmK06e6w',
            thumbnail: '',
            name: 'Rakhmadi Irfansyah Putra, S.Kom., MMSI',
            role: 'Dosen ITPLN',
            title: 'Sukses Proposal Disertasi Turnitin 5%',
            avatar: '/images/testimonials/rakhmadi-irfansyah-putra-s-kom-mmsi.avif',
        },
        {
            id: '4',
            youtubeId: 'D_I3vn93EDs',
            thumbnail: '',
            name: 'Dr. R. Arif Muljohadi, S.H., M.Hum.',
            role: 'Dosen Universitas Bangkalan',
            title: 'Buku Ajar Ke-6 Berhasil Terbit ISBN',
            avatar: '/images/testimonials/arif.webp',
        },
        {
            id: '5',
            youtubeId: 'TuzG15sZsjI',
            thumbnail: '',
            name: 'Dr. Tri Nugraha Sakti. MSI',
            role: 'Lecturer LSPR Institute',
            title: 'Cursor Lolos Turnitin AI Detection untuk Scopus',
            avatar: '/images/testimonials/dr-tri-nugraha-sakti-msi.avif',
        },
        {
            id: '6',
            youtubeId: 'csYGWGNh40U',
            thumbnail: '',
            name: 'Wayan Tangun Setiarien, M.M.',
            role: 'Magister Managemen Unisula',
            title: 'Bergabung di Kelas Inovatif, Tersesat Dijalan Yang Benar',
            avatar: '/images/testimonials/wayan-tangun.avif',
        },
    ];

    const videoList = videos || defaultVideos;
    const videosPerPage = 4;
    const totalPages = Math.ceil(videoList.length / videosPerPage);

    const getThumbnail = (video: VideoTestimonial) => {
        if (video.thumbnail) return video.thumbnail;
        return `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
    };

    const currentVideos = videoList.slice(
        currentPage * videosPerPage,
        (currentPage + 1) * videosPerPage
    );

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setPlayingVideoId(null);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setPlayingVideoId(null);
    };

    return (
        <section id="video-testimonials" className="py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <span className="text-teal-700 dark:text-teal-400 font-semibold tracking-wider text-xs uppercase">
                            Testimoni Video
                        </span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-2">
                            Bukti Nyata Kesuksesan
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl">
                            Dengarkan langsung pengalaman rekan-rekan yang telah berhasil menyelesaikan Magister, meraih gelar Doktor, dan menembus publikasi Scopus/Sinta melalui kolaborasi komunitas ini.
                        </p>
                    </div>
                    {totalPages > 1 && (
                        <div className="flex gap-2 mt-6 md:mt-0">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 0}
                                className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Video sebelumnya"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            </button>
                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages - 1}
                                className="w-12 h-12 rounded-full bg-linear-to-r from-teal-700 to-teal-800 text-white flex items-center justify-center hover:from-teal-800 hover:to-teal-900 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Video selanjutnya"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {currentVideos.map((video, index) => (
                        <div
                            key={video.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-800 animate-in fade-in slide-in-from-bottom-4"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Video Container - Inline Playback */}
                            <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                {playingVideoId === video.id ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                        title={`Testimoni ${video.name}`}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    />
                                ) : (
                                    <div
                                        className="relative w-full h-full cursor-pointer"
                                        onClick={() => setPlayingVideoId(video.id)}
                                    >
                                        <Image
                                            src={getThumbnail(video)}
                                            alt={`Testimoni ${video.name}`}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            fill
                                            onError={(e) => {
                                                // Fallback jika thumbnail gagal load
                                                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                            }}
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 border-2 border-white/40 ring-4 ring-teal-500/30">
                                                <Play className="w-8 h-8 text-white ml-1 fill-white" />
                                            </div>
                                        </div>

                                        {/* YouTube Badge */}
                                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                            YouTube
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Video Info */}
                            <div className="p-6">
                                {video.title && (
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                        {video.title}
                                    </h3>
                                )}
                                <div className="flex items-center gap-3">
                                    {video.avatar ? (
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-300 dark:ring-teal-700">
                                            <Image
                                                src={video.avatar}
                                                alt={video.name}
                                                fill
                                                sizes="40px"
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-900 flex items-center justify-center ring-2 ring-teal-300 dark:ring-teal-700 shrink-0">
                                            <User className="w-5 h-5 text-teal-700 dark:text-teal-300" />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                                            {video.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                            {video.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Page Indicators */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentPage(index);
                                    setPlayingVideoId(null);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                                        ? 'bg-teal-700 dark:bg-teal-400 w-8'
                                        : 'bg-gray-300 dark:bg-gray-600 w-2'
                                    }`}
                                aria-label={`Ke halaman ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
