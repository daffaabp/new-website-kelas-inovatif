"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";
import { toast } from "sonner"; // Assuming sonner is used for toasts based on package.json

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full sm:w-auto px-8 py-3 bg-eduzin-dark hover:bg-eduzin-dark/90 text-white rounded-full font-medium transition-all shadow-lg shadow-eduzin-dark/20 inline-flex items-center justify-center gap-2 order-1 sm:order-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                </>
            ) : (
                <>
                    Kirim Pesan
                    <Send className="w-4 h-4" />
                </>
            )}
        </button>
    );
};

const initialState = {
    success: false,
    message: "",
    errors: {} as Record<string, string[] | undefined>
};

export const ContactFormSection = () => {
    const [state, formAction] = useActionState(sendContactMessage, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            toast.success(state.message);
            formRef.current?.reset();
        } else if (state.message && !state.success) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                    <div className="bg-about-primary dark:bg-contact-surface-dark text-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between relative overflow-hidden border border-gray-200 dark:border-gray-800">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl font-semibold mb-6">
                                Informasi Kontak
                            </h3>
                            <p className="text-gray-300 mb-8 font-light">
                                Isi formulir dan tim kami akan menghubungi Anda dalam 24 jam.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Telepon
                                        </p>
                                        <a
                                            href="https://wa.me/6285712208535"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium hover:text-white/90 transition"
                                        >
                                            085712208535 (WA)
                                        </a>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Senin - Sabtu 08:00 - 17:00 WIB
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:aiindonesiakreatif@gmail.com"
                                            className="font-medium hover:text-white/90 transition block"
                                        >
                                            aiindonesiakreatif@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Alamat
                                        </p>
                                        <p className="font-medium leading-snug">
                                            Jl Raya Mujur No 46 Kroya,
                                            <br />
                                            Cilacap, Jawa Tengah,
                                            <br />
                                            Indonesia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-12">
                            <div className="flex space-x-4">
                                <a
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-about-primary transition"
                                    href="https://www.facebook.com/profile.php?id=61561356131476"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Kelas Inovatif"
                                >
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-about-primary transition"
                                    href="https://instagram.com/kelasinovatif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram Kelas Inovatif"
                                >
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="4" strokeWidth="2" />
                                        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                                    </svg>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-about-primary transition"
                                    href="https://www.youtube.com/@aiindonesiakreatif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube Kelas Inovatif"
                                >
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="5" width="20" height="14" rx="4" strokeWidth="2" />
                                        <polygon points="10,9 16,12 10,15" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                    <div className="bg-white dark:bg-contact-surface-dark rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-800 h-full">
                        <h2 className="font-serif text-2xl font-bold text-eduzin-dark dark:text-white mb-2">
                            Kirimkan pesan kepada kami
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Kami senang mendengar dari Anda. Silakan lengkapi formulir di bawah ini.
                        </p>

                        {state.success ? (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center animate-fadeIn">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Pesan Terkirim!</h3>
                                <p className="text-green-700 dark:text-green-400 mb-6">
                                    Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="text-sm font-medium text-green-700 dark:text-green-400 hover:underline"
                                >
                                    Kirim pesan lain
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} action={formAction} className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-eduzin-dark dark:text-white">Informasi Pribadi</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="full-name">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            name="fullName"
                                            id="full-name"
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                            placeholder="Masukkan nama lengkap Anda"
                                        />
                                        {state.errors?.fullName && (
                                            <p className="text-red-500 text-xs mt-1">{state.errors.fullName[0]}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                name="email"
                                                id="email"
                                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                                placeholder="Masukkan email Anda"
                                            />
                                            {state.errors?.email && (
                                                <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">
                                                Nomor Telepon <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                name="phone"
                                                id="phone"
                                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                                placeholder="081xxxxxxxxx"
                                            />
                                            {state.errors?.phone && (
                                                <p className="text-red-500 text-xs mt-1">{state.errors.phone[0]}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-eduzin-dark dark:text-white">Keperluan</h3>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Saya tertarik dengan... <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Program", "Bootcamp", "Komunitas", "FAQ / Support", "Lainnya"].map((interest) => (
                                                <label key={interest} className="cursor-pointer">
                                                    <input
                                                        className="peer sr-only"
                                                        name="interest"
                                                        type="radio"
                                                        required
                                                        value={interest}
                                                    />
                                                    <span className="inline-block rounded-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 peer-checked:border-eduzin-dark peer-checked:bg-eduzin-dark peer-checked:text-white transition-all hover:border-eduzin-dark/50">
                                                        {interest}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                        {state.errors?.interest && (
                                            <p className="text-red-500 text-xs mt-1">{state.errors.interest[0]}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                                            Pesan <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            id="message"
                                            rows={6}
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all resize-none"
                                            placeholder="Bagaimana kami bisa membantu Anda?"
                                        />
                                        {state.errors?.message && (
                                            <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <label className="flex items-start gap-2 cursor-pointer order-2 sm:order-1">
                                        <input
                                            type="checkbox"
                                            required
                                            name="privacy"
                                            className="h-4 w-4 text-eduzin-dark focus:ring-eduzin-dark border-gray-300 rounded mt-0.5"
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Saya setuju dengan{" "}
                                            <Link href="/privacy" className="text-eduzin-dark dark:text-about-primary underline hover:no-underline">
                                                kebijakan privasi
                                            </Link>
                                            . <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                    <SubmitButton />
                                </div>
                                {state.message && !state.success && (
                                    <div className="text-red-500 text-sm text-center mt-2">
                                        {state.message}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
