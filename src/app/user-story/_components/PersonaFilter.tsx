import React from 'react';
import { AlumniStory, PersonaType } from '../_data/stories';

interface PersonaFilterProps {
    stories: AlumniStory[];
    activeFilter: PersonaType | 'all';
    onFilterChange: (filter: PersonaType | 'all') => void;
}

const ALL_FILTERS: { value: PersonaType | 'all'; label: string }[] = [
    { value: 'all', label: 'Semua Cerita' },
    { value: 'awam-teknologi', label: 'Awam Teknologi' },
    { value: 'stuck-lama', label: 'Sudah Lama Stuck' },
    { value: 'takut-plagiasi', label: 'Takut Plagiasi' },
    { value: 'mahasiswa-biasa', label: 'Mahasiswa Biasa' },
    { value: 'produktif-menulis', label: 'Ingin Produktif' },
    { value: 'dosen-muda', label: 'Dosen Muda' },
];

export function PersonaFilter({ stories, activeFilter, onFilterChange }: PersonaFilterProps) {
    const personasPresent = new Set(stories.map((s) => s.persona));
    const filters = ALL_FILTERS.filter(
        (f) => f.value === 'all' || personasPresent.has(f.value)
    );

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeFilter === filter.value
                            ? 'bg-[#1C302B] text-white shadow-lg scale-105'
                            : 'bg-white dark:bg-[#1A2220] border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-[#1C302B] hover:text-[#1C302B] dark:hover:text-white'
                    }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}
