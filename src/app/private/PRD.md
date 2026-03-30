# Product Requirements Document (PRD): Private Master Class - Kelas Inovatif

## 1. Executive Summary

**Private Master Class** adalah layanan bimbingan eksklusif dan intensif dari Kelas Inovatif yang dirancang untuk membantu akademisi (mahasiswa, dosen, peneliti) menyelesaikan penulisan karya ilmiah mereka (Skripsi, Tesis, Disertasi, Buku, Jurnal/Artikel) dengan memanfaatkan teknologi Artificial Intelligence (AI).

Berbeda dengan kelas reguler, kelas ini menawarkan pendekatan **terpersonalisasi (one-on-one atau small group)**, jadwal fleksibel, materi yang lebih mendalam (*deep dive*), serta pendampingan seumur hidup (*lifetime support*). Fokus utamanya adalah efisiensi, kecepatan, dan akurasi tanpa mengorbankan integritas akademik.

---

## 2. Problem Statement

Banyak penulis akademik menghadapi kendala:
*   **Stagnasi (Writer's Block):** Bingung memulai atau melanjutkan bab tertentu.
*   **Teknologi:** Tahu ada AI, tapi tidak tahu cara menggunakannya secara etis dan efektif untuk konteks akademik spesifik.
*   **Waktu:** Jadwal kelas reguler sering bentrok dengan kesibukan mereka.
*   **Kebutuhan Spesifik:** Materi umum di kelas reguler tidak menjawab masalah spesifik pada data atau topik penelitian mereka.

## 3. Goals & Objectives

*   Memberikan solusi bimbingan yang **100% relevan** dengan kasus per kasus peserta.
*   Memastikan peserta mampu menggunakan *stack* AI (SciSpace, NotebookLM, Cursor, dll) secara optimal untuk kebutuhan spesifik mereka.
*   Menyediakan fleksibilitas waktu maksimal bagi peserta.
*   Membangun hubungan jangka panjang melalui *Lifetime Support*.

## 4. Target Audience

*   Mahasiswa S1 (Skripsi), S2 (Tesis), S3 (Disertasi).
*   Dosen dan Peneliti (Jurnal, Buku Ajar, Buku Referensi).
*   Penulis profesional yang membutuhkan efisiensi riset.

---

## 5. Product Features & Scope

### 5.1. Core Offerings (The Package)
Berdasarkan flyer resmi "Private Master Class", paket mencakup:
*   **Durasi:** 3 Kali Pertemuan (Total 6 Jam @ 2 Jam/pertemuan).
*   **Platform:** Via Zoom Meeting (Live & Interactive).
*   **Materi:** All-in-One (Mencakup materi kelas SciSpace, NotebookLM, Cursor) + *Deep Dive* Tips & Tricks.
*   **Mentor:** Ekspertis AI & Researcher (M. Arianto).

### 5.2. Unique Value Propositions
1.  **Kelas Pengantar (Onboarding Session):**
    *   Sebelum masuk ke sesi inti privat, peserta mendapatkan materi pengantar (format video atau sesi singkat) untuk menyamakan persepsi dasar tentang AI.
2.  **Flexible Scheduling:**
    *   Peserta memilih waktu sendiri sesuai ketersediaan.
3.  **Personalized Curriculum:**
    *   Materi disesuaikan 100% dengan jenis tulisan (misal: Tesis Kualitatif vs Disertasi Kuantitatif) dan progres peserta.
4.  **Guidance on Tool Selection:**
    *   Rekomendasi spesifik: "Untuk tahap ini, gunakan AI X. Untuk tahap itu, gunakan AI Y."
5.  **Lifetime Support:**
    *   Akses tanya jawab selamanya via WhatsApp Group/Personal ke Admin/Mentor jika ada kendala pasca-kelas.
6.  **Bonus Assets:**
    *   Rekaman Video Mentoring (bisa diputar ulang).
    *   Panduan Prompt Penulisan (Library Prompt siap pakai).

### 5.3. Pricing Tiers (Pricing Model)
Fasilitas sama, harga berbeda berdasarkan jumlah peserta per sesi:
1.  **Paket Eksklusif:** 1 Peserta (Paling privat, fokus penuh).
2.  **Paket Premium:** 2 Peserta.
3.  **Paket Ekonomis:** 3 Peserta.

---

## 6. Functional Requirements (Web Implementation)

### 6.1. Landing Page Section (`/private`)
*   **Hero Section:** Menampilkan *value proposition* utama, foto mentor, dan CTA "Daftar Sekarang".
*   **Why Us / Benefit List:**
    *   Mentoring personal intensif.
    *   Jadwal fleksibel.
    *   Lifetime support.
    *   Bonus Prompt.
*   **Curriculum / Scope:** Penjelasan bahwa materi mencakup Skripsi, Tesis, Disertasi, Buku, dll.
*   **Package Cards:** Menampilkan 3 pilihan paket (Eksklusif, Premium, Ekonomis) berjejer.
    *   *Note:* Tombol CTA akan mengarah ke WhatsApp Admin (`0954-0212-2395`) untuk konsultasi biaya dan penjadwalan.
*   **Flow Pendaftaran:**
    1.  Lihat Paket.
    2.  Hubungi Admin via WA.
    3.  Tentukan Jadwal.
    4.  Pembayaran.
    5.  Onboarding (Kelas Pengantar).
    6.  Pelaksanaan Private.

---

## 7. Success Metrics
*   **Conversion Rate:** Persentase pengunjung halaman `/private` yang menekan tombol WhatsApp.
*   **Participant Satisfaction:** Feedback positif pasca-mentoring.
*   **Completion Rate:** Peserta menyelesaikan 3 sesi pertemuan penuh.

## 8. Constraints & Assumptions
*   **Ketersediaan Mentor:** Jadwal sangat bergantung pada slot waktu M. Arianto.
*   **Platform:** Menggunakan Zoom pihak ketiga.
*   **Pembayaran:** Manual transfer (dikonfirmasi via WA).
