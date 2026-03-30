# Product Requirements Document (PRD)
## Halaman User Story — Komunitas Kelas Inovatif

| Atribut | Detail |
|---------|--------|
| **Nama Proyek** | Halaman User Story |
| **Versi Dokumen** | 1.1 |
| **Tanggal Dibuat** | 1 Februari 2026 |
| **Terakhir Diperbarui** | 1 Februari 2026 |
| **Status** | Draft |
| **Product Owner** | [Nama PO] |
| **Tech Lead** | [Nama Tech Lead] |

---

## 1. Executive Summary

### 1.1 Latar Belakang

Website Komunitas Kelas Inovatif saat ini memiliki struktur halaman yang cukup lengkap:
- **Beranda** — Memberikan overview tentang komunitas AI untuk akademisi.
- **Tentang Kami** — Menjelaskan visi, misi, dan nilai-nilai.
- **Komunitas** — Menunjukkan budaya, statistik, dan bukti sosial (video testimoni).
- **Program** — Menampilkan kelas-kelas yang ditawarkan.
- **FAQ, Blog, Karir** — Halaman informasi pendukung.

Namun, terdapat **gap** dalam customer journey: pengunjung yang sudah tertarik sering kali masih **ragu** untuk bergabung karena merasa "Saya kan orang biasa, bisa nggak ya?". Halaman **Komunitas** menampilkan testimoni, tetapi dalam format yang bersifat kolektif dan ringkas, belum cukup untuk menjawab keraguan personal.

### 1.2 Solusi yang Diusulkan

Membuat halaman **User Story** yang berfungsi sebagai **"jembatan emosional terakhir"** sebelum konversi. Halaman ini akan:
1. Menyapa keraguan pengunjung secara langsung.
2. Menampilkan cerita transformasi alumni yang **relatable** dengan berbagai kondisi pengunjung.
3. Menggunakan format **Before-After** yang jelas dan meyakinkan.
4. Mendorong aksi bergabung setelah pengunjung yakin.

### 1.3 Diferensiasi dari Halaman Komunitas

| Aspek | Halaman Komunitas | Halaman User Story |
|-------|-------------------|-------------------|
| **Sudut Pandang** | Kolektif ("Kami") | Individual ("Dia/Mereka") |
| **Fokus** | Budaya, visi, statistik | Perjalanan personal alumni |
| **Format Testimoni** | Kutipan singkat, video cepat | Narasi mendalam (Before-After) |
| **Emosi** | "Ini komunitas yang bagus" | "Kalau dia bisa, saya juga bisa" |

---

## 2. Goals & Success Metrics

### 2.1 Business Goals

| Goal | Deskripsi |
|------|-----------|
| **G1** | Meningkatkan konversi pengunjung dari tahap Consideration ke Decision. |
| **G2** | Mengurangi bounce rate di halaman Komunitas/Program dengan memberikan "next step" yang meyakinkan. |
| **G3** | Membangun kepercayaan lebih dalam melalui cerita transformasi yang relatable. |

### 2.2 User Goals

| Goal | Deskripsi |
|------|-----------|
| **U1** | Menemukan cerita alumni yang kondisinya mirip dengan kondisi saya. |
| **U2** | Mendapatkan keyakinan bahwa saya juga bisa sukses seperti mereka. |
| **U3** | Mengetahui langkah selanjutnya untuk bergabung. |

### 2.3 Success Metrics (KPIs)

| Metric | Target | Cara Mengukur |
|--------|--------|---------------|
| **Click-through rate ke halaman Register/Schedule** | > 15% dari pengunjung halaman | Google Analytics Event Tracking |
| **Time on Page** | > 2 menit rata-rata | Google Analytics |
| **Scroll Depth** | > 75% pengunjung scroll sampai CTA | Hotjar / GA4 |
| **Bounce Rate** | < 40% | Google Analytics |

---

## 3. User Personas & Stories

### 3.1 Target Personas

#### Persona 1: Sarah — Mahasiswa S3 yang Stuck
- **Demografi:** Wanita, 35 tahun, dosen muda di PTS.
- **Kondisi:** Disertasi mandek 2+ tahun, literature review sulit, takut skor Turnitin tinggi.
- **Keraguan:** "Saya sudah hampir menyerah, apakah masih bisa diselamatkan?"
- **Goal:** Menemukan cara untuk menyelesaikan disertasi dengan bantuan AI yang etis.

#### Persona 2: Budi — Dosen Senior Anti-Teknologi
- **Demografi:** Pria, 52 tahun, dosen di universitas negeri.
- **Kondisi:** Tidak paham teknologi, tuntutan publikasi tapi tidak tahu caranya.
- **Keraguan:** "Saya gaptek, bisa ikut nggak ya? AI itu ribet."
- **Goal:** Menemukan cara belajar AI yang mudah dan step-by-step.

#### Persona 3: Andi — Mahasiswa S2 Biasa
- **Demografi:** Pria, 28 tahun, karyawan yang kuliah S2.
- **Kondisi:** Bukan dari keluarga akademisi, merasa "bukan level-nya".
- **Keraguan:** "Ini kan untuk dosen/profesor, saya cocok nggak?"
- **Goal:** Menemukan bahwa orang biasa seperti dia juga bisa sukses di sini.

### 3.2 User Stories (Agile Format)

| ID | User Story | Priority |
|----|------------|----------|
| **US-01** | Sebagai pengunjung yang ragu, saya ingin melihat judul yang mengakui keraguan saya, agar saya merasa dipahami dan mau melanjutkan membaca. | P0 (Must Have) |
| **US-02** | Sebagai pengunjung, saya ingin memfilter cerita berdasarkan kondisi saya (awam teknologi, mahasiswa biasa, dll), agar saya langsung menemukan cerita yang relevan. | P1 (Should Have) |
| **US-03** | Sebagai pengunjung, saya ingin melihat cerita alumni dalam format Before-After, agar saya bisa membandingkan kondisi awal mereka dengan pencapaian akhir. | P0 (Must Have) |
| **US-04** | Sebagai pengunjung, saya ingin melihat angka-angka spesifik (Turnitin %, Scopus Q), agar saya yakin ceritanya bukan sekadar kata-kata. | P0 (Must Have) |
| **US-05** | Sebagai pengunjung, saya ingin melihat foto dan nama asli alumni, agar ceritanya terasa nyata dan bukan fiktif. | P0 (Must Have) |
| **US-06** | Sebagai pengunjung yang sudah yakin, saya ingin langsung bisa klik tombol untuk bergabung, agar saya tidak perlu mencari-cari. | P0 (Must Have) |
| **US-07** | Sebagai pengunjung, saya ingin bisa menonton video testimoni (jika ada), agar saya mendapat bukti tambahan. | P2 (Nice to Have) |
| **US-08** | Sebagai pengunjung, saya ingin melihat bukti visual (cover buku, screenshot Scopus), agar saya semakin yakin. | P1 (Should Have) |

---

## 4. Functional Requirements

### 4.1 Section: Hero

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-01** | Menampilkan headline utama: "Mereka Juga Pernah Ragu. Sepertimu." | P0 | ⬜ Belum |
| **FR-02** | Menampilkan sub-headline pendukung yang menekankan "orang biasa yang berhasil". | P0 | ⬜ Belum |
| **FR-03** | Menggunakan background dengan nuansa akademis dan elemen dekoratif (konsisten dengan branding). | P1 | ⬜ Belum |

### 4.2 Section: Filter Persona

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-04** | Menampilkan 6 tombol filter berdasarkan persona: (1) Awam Teknologi, (2) Sudah Lama Stuck, (3) Takut Plagiasi, (4) Mahasiswa Biasa, (5) Ingin Produktif Menulis, (6) Dosen Muda. | P1 | ⬜ Belum |
| **FR-05** | Ketika tombol diklik, halaman scroll/filter ke cerita yang relevan dengan persona tersebut. | P1 | ⬜ Belum |
| **FR-06** | Secara default, semua cerita ditampilkan (filter "Semua"). | P1 | ⬜ Belum |

### 4.3 Section: Featured Stories (Carousel/Cards)

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-07** | Menampilkan minimal 6 kartu cerita alumni. | P0 | ⬜ Belum |
| **FR-08** | Setiap kartu menampilkan: foto, nama lengkap, gelar/afiliasi, label persona. | P0 | ⬜ Belum |
| **FR-09** | Setiap kartu menampilkan narasi dalam format: BEFORE, TURNING POINT, AFTER. | P0 | ⬜ Belum |
| **FR-10** | Angka-angka spesifik (Turnitin %, Scopus Q, jumlah buku) di-highlight (bold/warna berbeda). | P0 | ⬜ Belum |
| **FR-11** | Kartu dapat di-hover untuk efek visual (scale up / shadow). | P2 | ⬜ Belum |
| **FR-12** | Jika alumni memiliki video testimoni, tampilkan tombol "Tonton Video" yang membuka modal/embed YouTube. | P2 | ⬜ Belum |

### 4.4 Section: Achievement Gallery (Opsional)

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-13** | Menampilkan galeri gambar bukti: cover buku, screenshot jurnal Scopus, skor Turnitin. | P2 | ⬜ Belum |
| **FR-14** | Gambar dapat diklik untuk memperbesar (lightbox). | P2 | ⬜ Belum |

### 4.5 Section: CTA

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-15** | Menampilkan headline: "Cerita Berikutnya Adalah Milikmu." | P0 | ⬜ Belum |
| **FR-16** | Menampilkan tombol primary: "Gabung Komunitas Sekarang" → link ke halaman pendaftaran/komunitas. | P0 | ⬜ Belum |
| **FR-17** | Menampilkan tombol secondary: "Lihat Program Kami" → link ke halaman program. | P1 | ⬜ Belum |

---

## 5. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria | Status |
|----|-------------|---------------------|--------|
| **NFR-01** | **Performance:** Halaman harus memuat dalam < 3 detik pada koneksi 3G. | Lighthouse Performance Score > 80. | ⬜ Belum |
| **NFR-02** | **Responsiveness:** Halaman harus tampil optimal di mobile (360px), tablet (768px), dan desktop (1280px+). | Manual QA passed on all breakpoints. | ⬜ Belum |
| **NFR-03** | **Accessibility:** Halaman harus aksesibel (kontras warna, alt text, keyboard navigation). | Lighthouse Accessibility Score > 85. | ⬜ Belum |
| **NFR-04** | **Dark Mode:** Halaman harus mendukung dark mode sesuai system preference atau toggle. | Warna teks dan background berubah sesuai mode. | ⬜ Belum |
| **NFR-05** | **SEO:** Halaman harus memiliki meta title, description, dan heading hierarchy yang tepat. | Lighthouse SEO Score > 90. | ⬜ Belum |

---

## 6. Technical Specifications

### 6.1 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS + CSS Variables |
| **Icons** | Lucide React |
| **State Management** | React useState (untuk filter) |
| **Video Embed** | YouTube Embed / React Player |

### 6.2 File Structure

```
src/app/user-story/
├── page.tsx                    # Main page entry
├── USERSTORY.md               # User Story document
├── PRD.md                     # This PRD document
├── _components/
│   ├── Hero.tsx               # Hero section
│   ├── PersonaFilter.tsx      # NEW: Filter buttons
│   ├── FeaturedStories.tsx    # NEW: Carousel/Cards for deep stories
│   ├── StoryCard.tsx          # NEW: Individual story card component
│   ├── AchievementGallery.tsx # NEW: Bukti visual (opsional)
│   ├── CTA.tsx                # Call to action section
│   └── Newsletter.tsx         # (Existing, optional)
├── _data/
│   └── stories.ts             # NEW: Data alumni untuk stories
```

### 6.3 Data Schema

```typescript
// src/app/user-story/_data/stories.ts

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
    turningPoint: string;  // Momen menemukan Komunitas Kelas Inovatif
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
```

### 6.4 Component Props

```typescript
// StoryCard.tsx
interface StoryCardProps {
  story: AlumniStory;
  variant?: 'featured' | 'compact';
  showVideo?: boolean;
}

// PersonaFilter.tsx
interface PersonaFilterProps {
  activeFilter: PersonaType | 'all';
  onFilterChange: (filter: PersonaType | 'all') => void;
}

// FeaturedStories.tsx
interface FeaturedStoriesProps {
  stories: AlumniStory[];
  filter: PersonaType | 'all';
}
```

---

## 7. UI/UX Requirements

### 7.1 Visual Design

| Aspek | Spesifikasi |
|-------|-------------|
| **Color Palette** | Primary: `#1C302B` (Hijau Tua), Accent: `#D4AF37` (Emas), Background: `#F7F5F0` (Krem) |
| **Typography** | Heading: Serif font (sesuai branding), Body: Sans-serif |
| **Card Style** | Rounded corners (16px-24px), subtle shadow, hover effect |
| **Spacing** | Minimal 64px padding antar section |

### 7.2 Interaction Design

| Interaksi | Behavior |
|-----------|----------|
| **Filter Click** | Smooth scroll ke section stories + filter animasi fade |
| **Card Hover** | Scale up 1.02 + shadow increase |
| **Video Button** | Open modal dengan YouTube embed |
| **CTA Button** | Hover scale + background color shift |

### 7.3 Mobile Considerations

- Filter buttons: Horizontal scroll jika tidak muat.
- Story cards: Single column layout.
- Video modal: Full screen overlay.

---

## 8. Content Requirements

### 8.1 Copywriting Assets

Lihat dokumen **USERSTORY.md** untuk detail lengkap copywriting, termasuk:
- Pemetaan 6 alumni ke persona.
- Template narasi Before-After.
- Kutipan existing yang bisa digunakan.

### 8.2 Media Assets Checklist

| Aset | Status | Lokasi | Checklist |
|------|--------|--------|-----------|
| Foto Wayan Tangun | ✅ Ada | `/images/testimonials/wayan-tangun.avif` | ✅ |
| Foto Leopold Baginda | ✅ Ada | `/images/testimonials/leopold-baginda.avif` | ✅ |
| Foto Akhmad Suhaidi | ✅ Ada | `/images/testimonials/akhmad-suhaidi.avif` | ✅ |
| Foto Arif Muljohadi | ✅ Ada | `/images/testimonials/arif-mulyohadi.avif` | ✅ |
| Foto Tri Nugraha Sakti | ✅ Ada | `/images/testimonials/dr-tri-nugraha-sakti-msi.avif` | ✅ |
| Foto Rakhmadi Irfansyah | ✅ Ada | `/images/testimonials/rakhmadi-irfansyah-putra-s-kom-mmsi.avif` | ✅ |
| Video YouTube Alumni | ✅ Ada | Lihat `VideoTestimonials.tsx` | ✅ |
| Screenshot Turnitin | ⚠️ Perlu dikumpulkan | - | ⬜ |
| Cover Buku Alumni | ⚠️ Perlu dikumpulkan | - | ⬜ |

---

## 9. Dependencies

| Dependency | Type | Owner | Status | Checklist |
|------------|------|-------|--------|-----------|
| Data narasi lengkap dari alumni (wawancara) | Content | Product/Marketing | Pending | ⬜ |
| Foto alumni yang belum ada | Media | Marketing | Pending | ⬜ |
| Screenshot bukti (Turnitin, Scopus) | Media | Alumni Relations | Pending | ⬜ |
| API/CMS untuk data dinamis (opsional) | Tech | Engineering | Not Started | ⬜ |

---

## 10. Implementation Checklist

### Phase 1: Persiapan Dokumen ✅
- [x] Buat USERSTORY.md
- [x] Buat PRD.md
- [ ] Review dan approval dari stakeholder

### Phase 2: Pengumpulan Konten
- [x] Foto alumni (termasuk Tri Nugraha, Rakhmadi) di `public/images/testimonials/` — penamaan kebab-case
- [ ] Kumpulkan screenshot bukti (Turnitin, Scopus)
- [ ] Kumpulkan cover buku alumni
- [ ] Lakukan wawancara dengan alumni (opsional, untuk narasi lebih lengkap)
- [x] Finalisasi narasi Before-After untuk 6 alumni

### Phase 3: Development - Komponen
- [x] Buat file `_data/stories.ts` dengan data 6 alumni
- [x] Update `Hero.tsx` dengan copywriting baru
- [x] Buat komponen `PersonaFilter.tsx`
- [x] Buat komponen `StoryCard.tsx`
- [x] Buat komponen `FeaturedStories.tsx`
- [x] Update `CTA.tsx` dengan copywriting baru
- [ ] (Opsional) Buat `AchievementGallery.tsx`

### Phase 4: Development - Integrasi
- [x] Update `page.tsx` dengan komponen baru
- [x] Implementasi logika filter persona
- [ ] Implementasi video modal (jika ada)
- [x] Pastikan semua link CTA berfungsi

### Phase 5: Styling & Polish
- [ ] Pastikan responsif di mobile (360px)
- [ ] Pastikan responsif di tablet (768px)
- [ ] Pastikan responsif di desktop (1280px+)
- [ ] Pastikan dark mode berfungsi
- [ ] Tambahkan animasi hover pada kartu
- [ ] Optimasi gambar (lazy loading, format AVIF/WebP)

### Phase 6: QA & Testing
- [ ] Test di browser Chrome
- [ ] Test di browser Firefox
- [ ] Test di browser Safari (jika memungkinkan)
- [ ] Test di mobile device nyata
- [ ] Lighthouse Performance > 80
- [ ] Lighthouse Accessibility > 85
- [ ] Lighthouse SEO > 90
- [ ] Test semua link berfungsi
- [ ] Test filter persona berfungsi

### Phase 7: Launch
- [ ] Final review dengan stakeholder
- [ ] Deploy ke staging
- [ ] UAT (User Acceptance Testing)
- [ ] Deploy ke production
- [ ] Monitoring awal (1 minggu pertama)

---

## 11. Timeline & Milestones

| Phase | Deliverable | Target Date | Owner | Status |
|-------|-------------|-------------|-------|--------|
| **Phase 1** | PRD & User Story document final | 1 Feb 2026 | PM | ✅ Selesai |
| **Phase 2** | Konten alumni lengkap | TBD | Content/Marketing | ⬜ Belum |
| **Phase 3** | Komponen selesai dikembangkan | TBD | Frontend Dev | ⬜ Belum |
| **Phase 4** | Integrasi halaman selesai | TBD | Frontend Dev | ⬜ Belum |
| **Phase 5** | Styling & polish selesai | TBD | Frontend Dev | ⬜ Belum |
| **Phase 6** | QA passed | TBD | QA | ⬜ Belum |
| **Phase 7** | Launch ke production | TBD | DevOps | ⬜ Belum |

---

## 12. Risks & Mitigations

| Risk | Impact | Probability | Mitigation | Status |
|------|--------|-------------|------------|--------|
| Konten wawancara alumni terlambat | Halaman tidak bisa launch | Medium | Gunakan kutipan existing yang diperluas + tandai sebagai V1 | ⬜ Monitor |
| Foto/media tidak tersedia | Tampilan kurang meyakinkan | Low | Gunakan initial/avatar placeholder sementara | ⬜ Monitor |
| Filter persona terlalu kompleks | User bingung | Low | Buat default "Semua" dan UX yang intuitif | ⬜ Monitor |
| Performance lambat (banyak gambar) | UX buruk | Medium | Lazy loading, optimasi gambar (WebP/AVIF) | ⬜ Monitor |

---

## 13. Out of Scope (V1)

Fitur-fitur berikut **tidak** termasuk dalam scope V1:

- [ ] CMS/Admin panel untuk mengelola cerita alumni.
- [ ] Fitur submit user story dari alumni (user-generated content).
- [ ] Integrasi dengan database eksternal (Supabase, dll).
- [ ] Animasi kompleks (Framer Motion, GSAP).
- [ ] A/B testing infrastruktur.

---

## 14. Appendix

### A. Wireframe Reference

> *Placeholder untuk wireframe atau mockup jika tersedia.*

### B. Related Documents

- [USERSTORY.md](./USERSTORY.md) — Panduan konten dan copywriting.
- [Halaman Komunitas](../community/page.tsx) — Referensi untuk diferensiasi.
- [Data Testimoni Existing](../homepage/_data/testimonials.ts) — Sumber kutipan.

### C. Approval Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | | | ⬜ |
| Tech Lead | | | ⬜ |
| Design Lead | | | ⬜ |

---

*Dokumen ini adalah living document dan akan diperbarui seiring perkembangan proyek.*

*Last updated: 1 Februari 2026*
