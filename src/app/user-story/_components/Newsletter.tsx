import React from 'react';

export function Newsletter() {
    return (
        <section className="py-12 container mx-auto px-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-[#1C302B] text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">K</div>
                    <div>
                        <h3 className="font-bold text-lg text-[#1C302B] dark:text-white">Kelas Inovatif</h3>
                    </div>
                </div>
                <div className="relative z-10 text-center md:text-left">
                    <h3 className="font-serif text-2xl text-[#1C302B] dark:text-white">Bergabung dengan newsletter kami</h3>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                    <form className="flex bg-white dark:bg-[#1A2220] p-1.5 rounded-full shadow-sm w-full md:w-[400px]">
                        <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 dark:text-white" placeholder="Email bisnis..." required type="email" />
                        <button className="bg-[#1C302B] text-white text-[10px] font-bold uppercase px-6 py-2.5 rounded-full hover:bg-opacity-90 transition" type="submit">Berlangganan</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
