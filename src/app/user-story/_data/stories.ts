export interface AlumniStory {
    id: string;
    name: string;
    title: string;           // Gelar/afiliasi
    photo: string;           // Path ke gambar
    persona: PersonaType;    // Kategori persona
    personaLabel: string;    // Label untuk ditampilkan
    quote: string;           // Kutipan singkat
    story: {
        before: string;        // Kondisi sebelum
        turningPoint: string;  // Momen menemukan Kelas Inovatif
        after: string;         // Hasil/transformasi
    };
    highlights: string[];    // Angka-angka penting (Turnitin 11%, dll)
    videoUrl?: string;       // YouTube URL (opsional)
}

export type PersonaType =
    | 'awam-teknologi'
    | 'stuck-lama'
    | 'takut-plagiasi'
    | 'mahasiswa-biasa'
    | 'produktif-menulis'
    | 'dosen-muda';

export const stories: AlumniStory[] = [
    {
        id: 'wayan-tangun',
        name: 'Wayan Tangun Setiarien, M.M.',
        title: 'Alumni Magister Manajemen',
        photo: '/images/testimonials/Wayan Tangun.avif',
        persona: 'awam-teknologi',
        personaLabel: 'Awam Teknologi & Bisnis',
        quote: "Jujur saya gaptek. Tapi di sini saya diajari pelan-pelan sampai bisa analisis 200 halaman data cuma dalam 7 menit.",
        story: {
            before: "Sebagai orang non-IT, dengar kata 'AI' saja saya sudah takut. Khawatir nggak nyambung, takut salah pencet, dan takut tulisan jadi kaku kayak robot. Di kantor, saya juga kewalahan harus baca ratusan halaman laporan menu manual satu per satu.",
            turningPoint: "Masuk Kelas Inovatif rasanya beda. Pendekatannya 'membumi'. Saya diajari cara bikin AI ngomong pakai bahasa manusia yang sederhana—gaya saya banget. Plus trik 'ngasih makan' data tebal ke AI biar nggak error.",
            after: "Hasilnya? Tesis saya lancar dengan revisi tipis karena bahasanya enak dibaca. Di kantor lebih gila lagi: analisa 50 menu restoran (200 halaman) yang biasanya mingguan, sekarang kelar 7 menit. Produktivitas naik drastis!"
        },
        highlights: ["Analisis 7 Menit", "Kerjaan Ringan", "Revisi Minim"],
        videoUrl: ""
    },
    {
        id: 'leopold-baginda',
        name: 'Dr. Leopold Baginda, S.Pd., M.Th.',
        title: 'Dosen STT Injili Indonesia Palu',
        photo: '/images/testimonials/LEOPOLD BAGINDA.avif',
        persona: 'stuck-lama',
        personaLabel: 'Sudah Lama Stuck',
        quote: "Disertasi itu perjalanan sepi. Tapi dengan 'teman diskusi' yang tepat, Turnitin saya bisa turun ke 7% dan tembus Scopus Q1.",
        story: {
            before: "Bertahun-tahun disertasi saya jalan di tempat. Masalah utamanya validasi orisinalitas; tiap cek Turnitin selalu merah. Mau parafrase topik teologi yang sensitif itu susahnya minta ampun. Rasanya buntu dan hampir nyerah.",
            turningPoint: "Di sini mindset saya diubah. Cursor bukan joki, tapi 'mitra dialog'. Saya diajari diskusi sama AI: minta 10 opsi judul, minta tunjukin bagian plagiat, dan cari solusi bareng. Interaksinya dua arah, kayak ngobrol sama asisten cerdas.",
            after: "Skor Turnitin saya berhasil ditekan dari 11% jadi 7-8% dengan rapi. Argumen jadi lebih tajam. Puncaknya, artikel tim kami tembus Scopus Q1. Saya lulus Doktor dengan bangga, karena ini murni hasil pemikiran saya yang dibantu teknologi."
        },
        highlights: ["Turnitin 7%", "Tembus Scopus Q1", "Lulus Doktor"],
        videoUrl: ""
    },
    {
        id: 'tri-nugraha',
        name: 'Dr. Tri Nugraha Sakti, MSI',
        title: 'Lecturer LSPR Institute',
        photo: '/images/testimonials/Dr. Tri Nugraha Sakti, MSI.avif',
        persona: 'takut-plagiasi',
        personaLabel: 'Takut Plagiasi',
        quote: "Saya udah coba macem-macem tool untuk mengatasi plagiasi. Cuma Cursor yang bisa konsisten 5% buat standar Scopus.",
        story: {
            before: "Saya sangat skeptis soal integritas akademik. Tools lain kayak Quillbot atau Jenny AI hasilnya mengecewakan—Jenny AI bahkan bikin paper saya kena Turnitin 80%. Bahaya banget buat reputasi dosen kalau nekat dipakai.",
            turningPoint: "Pas bedah Cursor di Kelas Inovatif, saya baru paham bedanya 'Chatbot' sama 'Agent'. Logikanya lebih dalam, nggak asal ngarang (halusinasi). Kita diajari pakai logic itu buat nyusun bahasa Inggris standar jurnal tingkat tinggi.",
            after: "Saya buktikan pakai data: Paper dengan metode ini konsisten plagiasinya di 5%, aman buat Scopus. Kualitas bahasanya pun level Q1. Ini bukan jalan pintas, tapi soal memilih alat yang memang kelasnya beda."
        },
        highlights: ["Plagiasi 5%", "Standar Scopus", "Aman & Etis"],
        videoUrl: ""
    },
    {
        id: 'akhmad-suhaidi',
        name: 'Akhmad Suhaidi, S.H',
        title: 'Mahasiswa Magister Hukum',
        photo: '/images/testimonials/AKHMAD SUHAIDI.avif',
        persona: 'mahasiswa-biasa',
        personaLabel: 'Mahasiswa Biasa',
        quote: "Semester 3 proposal udah beres. Fitur Git-nya ngebantu banget ngurusin revisi dosen yang bejibun.",
        story: {
            before: "Anak hukum pasti tahu ribetnya detail redaksional. Dulu file saya berantakan, pusing ngelacak revisi dosen. Waktu habis cuma buat ngerapihin file, bukan mikir substansi hukumnya. Progres jadi kerasa lambat banget.",
            turningPoint: "Ternyata Cursor punya fitur 'Git'—semacam mesin waktu buat dokumen. Saya diajari cara manage revisi biar rapi, plus cara pakai 'Research Online' buat nyari dasar hukum terbaru yang valid tanpa hoax.",
            after: "Sekarang temen lain baru mulai, saya di semester 3 proposal tesis udah mateng. Revisi dosen ada, tapi ngerjainnya cepet dan terukur. Plagiasi aman di bawah 5%. Kuliah S2 jadi terasa jauh lebih ringan."
        },
        highlights: ["Proposal Sem. 3", "Plagiasi < 5%", "Revisi Rapi"],
        videoUrl: ""
    },
    {
        id: 'arif-muljohadi',
        name: 'Dr. R. Arif Muljohadi, S.H., M.Hum.',
        title: 'Dosen Universitas Bangkalan',
        photo: '/images/testimonials/Arif Mulyohadi.avif',
        persona: 'produktif-menulis',
        personaLabel: 'Ingin Produktif Menulis',
        quote: "Dulu target 'Satu Bulan Satu Buku' rasanya mustahil. Sekarang? Satu semester ganjil aja jadi 3 buku.",
        story: {
            before: "Niat jadi Guru Besar menggebu, tapi eksekusi sering macet. Ikut workshop AI lain malah tambah bingung kebanyakan teori. Target nulis buku rutin rasanya mustahil, satu buku aja setahun bisa nggak kelar-kelar.",
            turningPoint: "Masuk sini rasanya beda. Nggak banyak teori njelimet, langsung praktik workflow simpel. 'Klik ini, prompt-nya gini, jadi'. Bener-bener mecahin kebuntuan ide (writer's block) saya.",
            after: "Nulis buku sekarang jadi rutinitas. Semester ganjil kemarin saya selesaikan 3 buku siap ISBN. Cursor bantu kerangka, saya isi kepakaran hukumnya. Target Guru Besar rasanya udah di depan mata."
        },
        highlights: ["3 Buku / Semester", "Otw Guru Besar", "Caranya Simpel"],
        videoUrl: ""
    },
    {
        id: 'rakhmadi-irfansyah',
        name: 'Rakhmadi Irfansyah Putra, S.Kom., MMSI',
        title: 'Dosen ITPLN',
        photo: '/images/testimonials/Rakhmadi Irfansyah Putra, S.Kom., MMSI.avif',
        persona: 'dosen-muda',
        personaLabel: 'Dosen Muda',
        quote: "Lulus sidang proposal pas awal semester 2. Ini bukan hoki, tapi karena sistemnya emang bisa diulang (repeatable).",
        story: {
            before: "Jadi dosen muda sambil S3 itu capeknya ampun-ampunan. Orang kira orang IT risetnya gampang, padahal sama aja waktu habis buat ngajar. Saya butuh cara kerja pasti, bukan coba-coba yang buang waktu.",
            turningPoint: "Saya terapin semua 'resep' Kelas Inovatif, nggak setengah-setengah. Saya lihat ini sistem yang solid. Kalau diikuti langkahnya—prompting, iterasi, validasi—hasilnya pasti bagus.",
            after: "Dan bener, awal semester 2 saya udah lulus sidang proposal S3. Plagiasi konsisten di bawah 5%. Pola ini bisa saya pakai terus (repeatable) buat paper selanjutnya. Efisiensi waktu dapet, kualitas juga dapet."
        },
        highlights: ["Lulus Sem. 2", "Plagiasi < 5%", "Pola Pasti"],
        videoUrl: ""
    }
];
