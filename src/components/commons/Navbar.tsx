"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Rocket, Users, Newspaper, HelpCircle, Mail, Briefcase } from 'lucide-react';

export function Navbar() {
    // Force rebuild
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
    const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
    const [informationDropdownOpen, setInformationDropdownOpen] = useState(false);
    const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
    const communityDropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
    const infoDropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-contact-secondary/90 dark:bg-contact-bg-dark/90 backdrop-blur-md shadow-sm border-b border-contact-primary/10 dark:border-white/10 ${scrolled ? 'py-3' : 'py-4'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/logo-kelas-inovatif/logo_kelas_inovatif.png"
                        alt="Kelas Inovatif"
                        width={180}
                        height={50}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Link href="/" className="hover:opacity-75 transition-opacity cursor-pointer">BERANDA</Link>
                    <Link href="/about" className="hover:opacity-75 transition-opacity cursor-pointer">TENTANG KAMI</Link>

                    <Link href="/partnership" className="hover:opacity-75 transition-opacity cursor-pointer">KERJA SAMA</Link>

                    {/* Community Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (communityDropdownTimerRef.current) {
                                clearTimeout(communityDropdownTimerRef.current);
                            }
                            setCommunityDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            communityDropdownTimerRef.current = setTimeout(() => {
                                setCommunityDropdownOpen(false);
                            }, 300);
                        }}
                    >
                        <button
                            className="flex items-center gap-1 hover:opacity-75 transition-opacity cursor-pointer py-2"
                            onClick={() => setCommunityDropdownOpen(!communityDropdownOpen)}
                        >
                            KOMUNITAS
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${communityDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {communityDropdownOpen && (
                            <div className="absolute top-full left-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="w-64 bg-contact-secondary/95 dark:bg-contact-bg-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-eduzin-dark/5 to-transparent pointer-events-none"></div>

                                    <div className="relative py-2">
                                        <Link
                                            href="/community"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Users className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Komunitas Utama</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/user-story"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Newspaper className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">User Story</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Programs Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (dropdownTimerRef.current) {
                                clearTimeout(dropdownTimerRef.current);
                            }
                            setProgramsDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            dropdownTimerRef.current = setTimeout(() => {
                                setProgramsDropdownOpen(false);
                            }, 300);
                        }}
                    >
                        <button
                            className="flex items-center gap-1 hover:opacity-75 transition-opacity cursor-pointer py-2"
                            onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                        >
                            PROGRAM
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {programsDropdownOpen && (
                            <div className="absolute top-full left-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="w-64 bg-contact-secondary/95 dark:bg-contact-bg-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-eduzin-dark/5 to-transparent pointer-events-none"></div>

                                    <div className="relative py-2">
                                        <Link
                                            href="/program"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <BookOpen className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Regular Program</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/bootcamp"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Rocket className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Bootcamp Masterclass</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/private"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Users className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Private Class</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/schedule" className="hover:opacity-75 transition-opacity cursor-pointer">EVENT</Link>

                    {/* Information Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (infoDropdownTimerRef.current) {
                                clearTimeout(infoDropdownTimerRef.current);
                            }
                            setInformationDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            infoDropdownTimerRef.current = setTimeout(() => {
                                setInformationDropdownOpen(false);
                            }, 300);
                        }}
                    >
                        <button
                            className="flex items-center gap-1 hover:opacity-75 transition-opacity cursor-pointer py-2"
                            onClick={() => setInformationDropdownOpen(!informationDropdownOpen)}
                        >
                            INFORMASI
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${informationDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {informationDropdownOpen && (
                            <div className="absolute top-full left-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="w-64 bg-contact-secondary/95 dark:bg-contact-bg-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-linear-to-br from-eduzin-dark/5 to-transparent pointer-events-none"></div>

                                    <div className="relative py-2">
                                        <Link
                                            href="/blogs"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Newspaper className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Baca Blogs</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/faq"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <HelpCircle className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Baca FAQ</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/contact"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Mail className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Hubungi Kami</span>
                                            </div>
                                        </Link>

                                        <div className="mx-4 my-1 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

                                        <Link
                                            href="/jobs"
                                            className="group block px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-linear-to-r hover:from-eduzin-dark/10 hover:to-eduzin-dark/5 dark:hover:from-eduzin-dark/20 dark:hover:to-eduzin-dark/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-eduzin-dark to-eduzin-dark/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200"></div>
                                            <div className="flex items-center gap-3">
                                                <Briefcase className="w-4 h-4 text-eduzin-dark group-hover:scale-110 transition-transform duration-200" />
                                                <span className="font-medium">Karir</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="https://ruang.kelasinovatif.com/auth/login" className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer border border-eduzin-dark text-eduzin-dark dark:border-white dark:text-white hover:bg-eduzin-dark hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
                        Login
                    </a>
                    <a href="https://ruang.kelasinovatif.com/auth/register" className="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer bg-eduzin-dark text-white hover:bg-opacity-90 shadow-lg shadow-eduzin-dark/20">
                        Register
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-current cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="text-black dark:text-white" /> : <Menu className="text-black dark:text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-8 px-4 flex flex-col gap-4 text-center">
                    <Link href="/" className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Beranda</Link>

                    <Link href="/about" className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Tentang Kami</Link>
                    <Link href="/partnership" className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Kerja Sama</Link>

                    {/* Community Dropdown Mobile */}
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer flex items-center justify-center gap-1"
                            onClick={() => setCommunityDropdownOpen(!communityDropdownOpen)}
                        >
                            Komunitas
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${communityDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {communityDropdownOpen && (
                            <div className="flex flex-col gap-2 pl-4 bg-gray-50 dark:bg-gray-800 py-2 rounded-lg">
                                <Link href="/community" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Komunitas Utama</Link>
                                <Link href="/user-story" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>User Story</Link>
                            </div>
                        )}
                    </div>

                    {/* Programs Dropdown Mobile */}
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer flex items-center justify-center gap-1"
                            onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                        >
                            Program
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {programsDropdownOpen && (
                            <div className="flex flex-col gap-2 pl-4 bg-gray-50 dark:bg-gray-800 py-2 rounded-lg">
                                <Link href="/program" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Regular Program</Link>
                                <Link href="/bootcamp" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Bootcamp Masterclass</Link>
                                <Link href="/private" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Private Class</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/schedule" className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Event</Link>

                    {/* Information Dropdown Mobile */}
                    <div className="flex flex-col gap-2">
                        <button
                            className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer flex items-center justify-center gap-1"
                            onClick={() => setInformationDropdownOpen(!informationDropdownOpen)}
                        >
                            Informasi
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${informationDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {informationDropdownOpen && (
                            <div className="flex flex-col gap-2 pl-4 bg-gray-50 dark:bg-gray-800 py-2 rounded-lg">
                                <Link href="/blogs" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Read Blogs</Link>
                                <Link href="/faq" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Baca FAQ</Link>
                                <Link href="/contact" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Hubungi Kami</Link>
                                <Link href="/jobs" className="text-gray-700 dark:text-gray-300 text-sm cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
