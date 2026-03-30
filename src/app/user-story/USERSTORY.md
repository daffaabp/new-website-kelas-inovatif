# User Story: Halaman "User Story" Kelas Inovatif

## 📌 Ringkasan Eksekutif

Halaman **User Story** adalah halaman yang berfungsi sebagai **"jembatan emosional terakhir"** sebelum pengunjung memutuskan untuk bergabung dengan komunitas Kelas Inovatif. Halaman ini menjawab keraguan utama calon member: **"Saya kan orang biasa, bisa nggak ya?"**

---

## 🎯 Tujuan Halaman

| Tujuan | Deskripsi |
|--------|-----------|
| **Primary Goal** | Mengubah keraguan pengunjung menjadi keyakinan bahwa mereka juga bisa sukses seperti alumni lainnya. |
| **Secondary Goal** | Meningkatkan konversi ke halaman pendaftaran program atau bergabung komunitas. |
| **Emotional Trigger** | Menciptakan perasaan: *"Kalau mereka bisa, saya pasti bisa juga!"* |

---

## 👥 Target Audiens

Pengunjung yang sudah melewati tahap **Awareness** dan **Interest**, kini berada di tahap **Consideration/Decision**. Mereka:

- Sudah tahu apa itu Kelas Inovatif (dari Beranda).
- Sudah tertarik dengan budaya komunitas (dari halaman Komunitas).
- **Masih ragu** apakah ini cocok untuk kondisi mereka yang "biasa".

### Persona Target:

| Persona | Keraguan Utama |
|---------|----------------|
| Mahasiswa S2/S3 yang stuck | "Saya sudah bertahun-tahun tidak selesai, masih ada harapan?" |
| Orang awam teknologi | "Saya tidak mengerti AI, bisa ikut?" |
| Dosen/peneliti sibuk | "Apakah ini worth it untuk waktu saya?" |
| Yang takut plagiasi | "Apakah pakai AI itu aman dan etis?" |
| Mahasiswa biasa | "Ini kan untuk dosen/profesor, saya cocok tidak?" |
| Yang ingin produktif | "Saya ingin terbitkan buku/jurnal, tapi tidak tahu caranya." |

---

## 🏗️ Struktur Halaman

### Section 1: Hero
**Fungsi:** Menyapa keraguan pengunjung secara langsung dan empatik.

**Copywriting:**
```
[Badge]: Kisah Nyata Alumni

[Headline]: 
"Mereka Juga Pernah Ragu. Sepertimu."

[Sub-headline]:
Bukan profesor. Bukan jenius. Hanya orang biasa yang memutuskan untuk mencoba. Dan berhasil.
```

---

### Section 2: Filter Persona
**Fungsi:** Membantu pengunjung menemukan cerita yang paling relevan dengan kondisi mereka.

**Tombol Filter:**
```
[ Saya Awam Teknologi ]
[ Saya Sudah Lama Stuck ]
[ Takut Plagiasi ]
[ Saya Mahasiswa Biasa ]
[ Ingin Produktif Menulis ]
[ Dosen Muda ]
```

> **Catatan Teknis:** Ketika tombol diklik, tampilkan cerita alumni yang relevan dengan persona tersebut. Bisa menggunakan state management sederhana atau scroll ke section yang sesuai.

---

### Section 3: Kartu Cerita Alumni (Featured Stories)
**Fungsi:** Menampilkan cerita mendalam (deep dive) dari alumni dalam format **Before → Turning Point → After**.

**Format Kartu:**
```
┌─────────────────────────────────────────────────────┐
│ [FOTO ALUMNI]                           [PERSONA]   │
├─────────────────────────────────────────────────────┤
│ BEFORE:                                             │
│ "[Kondisi awal yang relatable dan humble]"          │
│                                                     │
│ TURNING POINT:                                      │
│ "[Momen menemukan Kelas Inovatif]"                  │
│                                                     │
│ AFTER:                                              │
│ "[Hasil nyata dan transformasi - dengan angka]"    │
├─────────────────────────────────────────────────────┤
│ — [Nama Lengkap], [Gelar/Afiliasi]                  │
│ [Video Testimoni - jika ada]                        │
└─────────────────────────────────────────────────────┘
```

---

### Section 4: Achievement Gallery (Opsional)
**Fungsi:** Menampilkan bukti visual/tangible dari kesuksesan alumni.

**Konten:**
- Screenshot skor Turnitin rendah
- Cover buku yang sudah terbit ber-ISBN
- Screenshot nama alumni di halaman jurnal Scopus
- Foto ijazah/wisuda

---

### Section 5: CTA (Call to Action)
**Fungsi:** Mendorong aksi setelah pengunjung yakin.

**Copywriting:**
```
[Headline]: 
"Cerita Berikutnya Adalah Milikmu."

[Sub-headline]:
Mereka sudah membuktikan. Sekarang giliran kamu memulai perjalananmu.

[Button Primary]: Gabung Komunitas Sekarang
[Button Secondary]: Lihat Program Kami
```

---

## 📦 Aset Konten: 6 Alumni Utama

Berikut adalah pemetaan alumni yang akan dijadikan subjek cerita:

### 1. Wayan Tangun Setiarien, M.M.
| Atribut | Detail |
|---------|--------|
| **Persona** | "Saya Awam Teknologi" |
| **Profil** | Alumni Magister Manajemen |
| **Kutipan Existing** | "Saya awam dengan AI, namun di Kelas Inovatif saya justru 'tersesat di jalan yang benar'. Pembelajaran diberikan perlahan dan bertahap." |
| **Before** | Tidak paham AI sama sekali, takut ketinggalan jaman. |
| **After** | Lulus Magister, rencana lanjut S3. |
| **Foto** | `/images/testimonials/wayan-tangun.avif` |

---

### 2. Dr. Leopold Baginda, S.Pd., M.Th.
| Atribut | Detail |
|---------|--------|
| **Persona** | "Saya Sudah Lama Stuck" |
| **Profil** | Dosen STT Injili Indonesia Palu |
| **Kutipan Existing** | "Puji Tuhan, disertasi saya berhasil selesai. Turnitin 11%. Artikel kami tembus Scopus Q1." |
| **Before** | Disertasi mandek bertahun-tahun, hampir menyerah. |
| **After** | Lulus Doktor + Publikasi Scopus Q1, Turnitin 11%. |
| **Foto** | `/images/testimonials/leopold-baginda.avif` |
| **Video** | Ada (YouTube) |

---

### 3. Dr. Tri Nugraha Sakti, MSI
| Atribut | Detail |
|---------|--------|
| **Persona** | "Takut Plagiasi / AI Detection" |
| **Profil** | Lecturer LSPR Institute |
| **Kutipan Existing** | "Cursor lolos Turnitin AI Detection untuk Scopus." |
| **Before** | Khawatir jurnal ditolak karena terdeteksi AI. |
| **After** | Lolos AI Detection, berhasil publikasi internasional. |
| **Video** | Ada (YouTube) |

---

### 4. Akhmad Suhaidi, S.H
| Atribut | Detail |
|---------|--------|
| **Persona** | "Saya Mahasiswa Biasa" |
| **Profil** | Mahasiswa Magister Hukum |
| **Kutipan Existing** | "Dengan bimbingan step by step yang sangat detail, saya berhasil menyusun proposal tesis dengan revisi yang sangat sedikit. Turnitin rata-rata di bawah 10%." |
| **Before** | Mahasiswa biasa yang bingung mulai dari mana. |
| **After** | Proposal tesis diterima dengan revisi minimal, Turnitin <10%. |
| **Foto** | `/images/testimonials/akhmad-suhaidi.avif` |
| **Video** | Ada (YouTube) |

---

### 5. Dr. R. Arif Muljohadi, S.H., M.Hum.
| Atribut | Detail |
|---------|--------|
| **Persona** | "Ingin Produktif Menulis" |
| **Profil** | Dosen Universitas Bangkalan |
| **Kutipan Existing** | "Setelah menerapkan trik penulisan buku dari kelas intensif Cursor, 6 buku saya terbit ber-ISBN. Target saya, setiap bulan menerbitkan satu buku baru." |
| **Before** | Ingin menulis buku tapi tidak produktif. |
| **After** | 6 buku terbit ber-ISBN, target 1 buku per bulan. |
| **Foto** | `/images/testimonials/arif-mulyohadi.avif` |
| **Video** | Ada (YouTube) |

---

### 6. Rakhmadi Irfansyah Putra, S.Kom., MMSI
| Atribut | Detail |
|---------|--------|
| **Persona** | "Dosen Muda yang Butuh Bimbingan" |
| **Profil** | Dosen ITPLN |
| **Kutipan Existing** | "Sukses Proposal Disertasi Turnitin 5%." |
| **Before** | Dosen muda yang sedang struggle mengejar S3. |
| **After** | Proposal Disertasi lolos dengan Turnitin hanya 5%. |
| **Video** | Ada (YouTube) |

---

## ✍️ Panduan Copywriting

### Tone of Voice
- **Empatik:** Mengakui keraguan, bukan mengabaikannya.
- **Humble:** Menekankan bahwa alumni adalah "orang biasa", bukan jenius.
- **Spesifik:** Gunakan angka dan fakta (Turnitin %, Scopus Q berapa, jumlah buku).
- **Inspiring:** Memberikan harapan bahwa perubahan itu mungkin.

### Format Narasi Cerita (300-500 kata per orang)
```markdown
## [Nama Alumni]
### [Persona Label, contoh: "Dari Awam Teknologi ke Magister"]

**Latar Belakang**
[1-2 paragraf tentang siapa mereka sebelum bergabung, masalah yang dihadapi]

**Titik Balik**
[1 paragraf tentang bagaimana mereka menemukan Kelas Inovatif dan keputusan untuk mencoba]

**Proses & Tantangan**
[1-2 paragraf tentang kelas yang diikuti, apa yang dipelajari, dukungan komunitas]

**Hasil & Transformasi**
[1-2 paragraf tentang pencapaian spesifik dengan angka-angka]

> "[Kutipan langsung dari alumni]"
> — [Nama], [Gelar/Afiliasi]
```

---

## 🎨 Referensi Desain

Halaman ini akan menggunakan kerangka yang sudah ada di template (`src/app/user-story/_components/`), dengan penyesuaian:

| Komponen Template | Akan Digunakan Untuk | Modifikasi |
|-------------------|----------------------|------------|
| `Hero.tsx` | Section Hero | Ganti copy dengan "Mereka Juga Pernah Ragu" |
| `StudentVoices.tsx` (Carousel) | Featured Stories (Deep Dive) | Ganti konten dengan 6 alumni, format Before-After |
| `MasonryStories.tsx` (Grid) | Achievement Gallery atau cerita pendek tambahan | Ganti filter dengan Persona, ganti konten |
| `CTA.tsx` | Section CTA | Ganti copy dengan "Cerita Berikutnya Adalah Milikmu" |
| `Newsletter.tsx` | Newsletter | Tetap atau hapus jika tidak relevan |

---

## 📋 Acceptance Criteria

Halaman User Story dianggap selesai jika memenuhi kriteria berikut:

- [ ] Hero section menampilkan headline "Mereka Juga Pernah Ragu. Sepertimu."
- [ ] Terdapat filter persona yang berfungsi (minimal 6 kategori).
- [ ] Minimal 6 kartu cerita alumni ditampilkan dengan format Before-After.
- [ ] Setiap kartu menampilkan foto, nama, profil, persona label, dan kutipan.
- [ ] Angka-angka spesifik (Turnitin %, Scopus, jumlah buku) di-highlight.
- [ ] CTA mengarah ke halaman pendaftaran/komunitas.
- [ ] Responsif di mobile dan desktop.
- [ ] Support dark mode.

---

## 🔗 Referensi Terkait

- **Halaman Komunitas:** `/community` — Untuk memahami posisi "User Story" dalam customer journey.
- **Data Testimoni:** `src/app/homepage/_data/testimonials.ts`
- **Video Testimoni:** `src/app/community/_components/VideoTestimonials.tsx`

---

## 📝 Catatan Tambahan

### Pengumpulan Konten Tambahan (Rekomendasi)
Untuk memperkaya narasi cerita, disarankan melakukan wawancara singkat (15-20 menit) dengan alumni menggunakan pertanyaan:

1. Ceritakan sedikit tentang diri Anda. Anda mengajar/kuliah di mana?
2. Sebelum bergabung Kelas Inovatif, apa tantangan terbesar yang Anda hadapi?
3. Bagaimana Anda pertama kali mengenal Kelas Inovatif?
4. Kelas apa saja yang Anda ikuti? Hal apa yang paling berdampak?
5. Apa pencapaian spesifik yang berhasil Anda raih?
6. Jika ada seseorang yang masih ragu untuk bergabung, apa yang akan Anda sampaikan?

---

*Dokumen ini dibuat sebagai panduan pengembangan halaman User Story untuk website Kelas Inovatif.*
