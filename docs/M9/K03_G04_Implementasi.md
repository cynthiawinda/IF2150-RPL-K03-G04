<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 9
<br>
IMPLEMENTASI PERANGKAT LUNAK
</h1>
<br>

## *Mahasehat: Mental Health Monitoring App for Students*
<img alt="Logo Perangkat Lunak" src="../M8/assets/logo-mahasehat.png" width="35%">

### Untuk: *Stefani Angeline Oroh*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *03* |
| Kelompok | *04* |

| NIM | Nama |
|---|---|
| *13525021* | *Haikal Muhammad Royyan* |
| *13525066* | *Cynthia Winda Wijaya* |
| *13525081* | *Rendy Salastra Putra* |
| *13525090* | *Sophia Imelda Rogate Marpaung* |
| *13525141* | *Christabelcyne Costan* |
---

**Deadline:** Rabu, 11 November 2026, 21.50 WIB

**Asistensi akbar:** *[Hari, DD Bulan YYYY, HH.MM WIB, lokasi/link]*

---

# BAGIAN B: Laporan Implementasi

## B.1 Perubahan dari DPPL

Tabel B.1. Perubahan dari DPPL

| No | Bagian DPPL | Rancangan Awal | Implementasi Akhir | Alasan |
| :--- | :--- | :--- | :--- | :--- |
| 1 | C21 `PengajuanKonsultasiPage` | Halaman terpisah untuk memilih jadwal dan mengirim pengajuan | Dihapus; fungsi dipindah ke modal "Buat Janji" pada `CariTenagaKesehatanPage` dan `KonsultasiController` | Menghindari dua halaman yang mengerjakan alur UC06 yang sama |
| 2 | C19 `ProfilTenagaKesehatanPage` | Halaman profil tenaga kesehatan terpisah | Tidak ada halaman terpisah; profil dan jadwal tampil pada dialog detail `CariTenagaKesehatanPage` | Semua informasi yang dibutuhkan UC05/UC06 sudah cukup dalam satu page |
| 3 | C22 `JadwalKonsultasiController` dan C23 `KonsultasiController` | Dua controller terpisah | Digabung menjadi `src/controllers/KonsultasiController.js` dengan route `/api/konsultasi` | Operasi jadwal dan pengajuan saling bergantung dan memakai transaksi yang sama |
| 4 | C15 `NotifikasiPengingatController` | Pengingat check-in harian | Tidak diimplementasikan; scheduler hanya menjalankan evaluasi notifikasi darurat (`src/jobs/`); pengingat check-in belum masuk lingkup implementasi | Waktu pengerjaan M9 dipakai untuk alur inti UC01–UC10; kebutuhan pengingat belum diverifikasi |
| 5 | UC07 skenario alternatif 1 | Status "Menunggu Konfirmasi Ulang" | Memakai status `Rescheduled` pada `JadwalKonsultasi`, sesuai `CHECK` constraint dan DPPL Tabel 4.1 | Menjaga konsistensi dengan model dan basis data yang sudah ada |
| 6 | C23 `KonsultasiController` | Operasi hanya `approvePengajuan()` dan `reschedule()` | Ditambah `ajukan`, `daftarSaya`, `daftarMasuk`, `daftarJadwal`, `ubahStatus`, `jadwalUlang`, dan `tolak` | Diperlukan agar halaman pelajar dan nakes memakai satu sumber data yang sama |
| 7 | Basis data `tenaga_kesehatan` | Profil tenaga kesehatan lengkap | Kolom `bio` dan tarif per sesi tidak ada; tarif diambil dari `fasilitas_kesehatan.estimasi_biaya`, bio hanya tersimpan di klien | Mengikuti skema DPPL yang sudah ada; penambahan kolom belum diperlukan untuk alur inti |
| 8 | Basis data `jadwal_konsultasi` | Status pengajuan termasuk penolakan | Tidak ada status "Ditolak"; tombol Tolak mengembalikan slot menjadi `Belum Diajukan` dan `status_ketersediaan = TRUE` | Menjaga `CHECK` constraint yang hanya mengizinkan empat status |
| 9 | C11 `AuthController` | Operasi autentikasi dasar | Ditambah `pengajuanMenunggu` (`GET /api/auth/wali/menunggu`, nama dan tanggal pengajuan yang menunggu, tanpa token konfirmasi) dan `perbaruiProfil` (`PATCH /api/auth/me`) | Dashboard wali perlu menampilkan pengajuan yang menunggu; persetujuan tetap lewat tautan di e-mail wali karena e-mail akun wali tidak diverifikasi. Setelan perlu menyimpan profil ke server |
| 10 | Struktur View | Satu partial sidebar | Markup sidebar disalin di setiap HTML statis (CSS-nya tunggal) | Aplikasi berupa HTML statis tanpa mesin templating; sesuai catatan DPPL tentang View |
| 11 | Algo-C11-02 `registerAccount()` | Kata sandi disimpan dengan `ENCRYPT_AES256` | Kata sandi di-hash dengan bcrypt (cost 12) melalui `Pengguna.hashPassword()` dan diperiksa dengan `verifyPassword()` | Mengikuti deskripsi kelas C01 yang menyimpan hash bcrypt; kata sandi cukup diverifikasi, tidak perlu dapat didekripsi kembali |
| 12 | C01, Q-C11-01 s.d. Q-C11-05 | Status akun `PENDING`/`AKTIF` pada algoritma C11, sedangkan C01 memakai `Aktif`/`Belum Terverifikasi`/`Ditolak` | Hanya nilai C01 yang dipakai (dibatasi `CHECK` pada tabel `pengguna`); login hanya diterima untuk akun `Aktif` | Menyatukan dua penamaan status agar akun `Ditolak` tidak bisa masuk |
| 13 | Query C11, skema basis data | Nama tabel berawalan `tbl_` (`tbl_pengguna`) | Tabel tanpa awalan (`pengguna`, `pelajar`, `orang_tua_wali`, dan seterusnya) di `src/config/schema.sql` | Menyamakan dengan query kelas lain di DPPL (misalnya Q-C03-02 dan Q-C24-01) yang sudah tanpa awalan |
| 14 | C11, layar I-06 | Hanya `validateConfirmation()` dan `confirmAccount()` | Ditambah data pendaftaran untuk wali (`GET /api/auth/confirm/:token`) dan penolakan (`POST /api/auth/reject/:token`, akun menjadi `Ditolak`) | I-06 menampilkan data pelajar dan memiliki tombol Tidak Setuju |
| 15 | C11, UC02 skenario alternatif 1 | Batas waktu tautan konfirmasi tidak dirancang | Tautan berlaku 7 hari sejak registrasi; setelah itu akun ditandai `Ditolak` (gagal terverifikasi) | SKPL UC02 meminta tautan kedaluwarsa setelah batas waktu tertentu |
| 16 | C11 `startSession()`, `endSession()` (Algo-C11-09, Algo-C11-10) | Sesi disimpan pada `SESSION` | Token JWT yang memuat `versi_token`; logout dan reset kata sandi menaikkan `versi_token` sehingga token lama ditolak | Tabel 2.1 memakai JWT; logout harus benar-benar mengakhiri sesi di server (KNF12) |
| 17 | C24, Q-C24-01, Q-C24-02 | Notifikasi hanya diperbarui (UPDATE), tanpa pemicu deteksi dan tanpa tempat penyimpanan | Entity `NotifikasiDarurat` (tabel `notifikasi_darurat`), job harian `node-cron` (`EMERGENCY_CRON`), pengiriman diulang hingga 3 kali bila gagal, dan dikirim ulang bila 24 jam belum direspons | UC08 tidak bisa berjalan tanpa pemicu dan catatan notifikasi (KF18, KF19, KNF06, UC08 skenario alternatif 1) |
| 18 | C24 `loadEmergencyDetail()` (Algo-C24-02) | Menghitung `detectEmergency()` saat dipanggil | Membaca notifikasi aktif milik wali yang login; wali lain ditolak (403) | Deteksi sudah dijalankan job harian; wali hanya boleh melihat pelajar yang diwalikannya |
| 19 | C24 penilaian darurat (Q-C03-02) | Check-in 7 hari terakhir | 7 check-in terakhir milik pelajar | Pelajar yang berhenti check-in sama sekali tidak punya data 7 hari terakhir sehingga tidak pernah terdeteksi |
| 20 | C27 `generateResetLink()` (Algo-C27-03) | Bentuk token tidak dirancang (`SECURITY.createResetToken`) | Token acak 32 byte; yang disimpan hanya hash SHA-256, berlaku 1 jam, dan sekali pakai | Tautan tidak dapat dipakai walaupun isi tabel bocor |
| 21 | C27 `validateNewPassword()` (Algo-C27-04) | Kata sandi baru dan konfirmasi wajib dicocokkan di server | Konfirmasi dicocokkan bila dikirim; panjang minimal 8 karakter tetap wajib | ResetPasswordPage sudah mencocokkan konfirmasi sebelum mengirim permintaan |

## B.2 Bukti Penerapan Best Practices

Tabel B.2. Bukti Best Practices

| Praktik | Bukti | Keterangan |
| :--- | :--- | :--- |
| Branching | [Daftar branch](https://github.com/cynthiawinda/IF2150-RPL-K03-G04/branches) | Memakai `develop` dan branch per fitur, mis. `feat/uc02-batas-waktu-konfirmasi`, `fix/desain-interface`, `24-feat-implement-checkinpage`; digabung lewat PR |
| Semantic commit | [Riwayat commit](https://github.com/cynthiawinda/IF2150-RPL-K03-G04/commits/develop) | Format `<tipe>(<scope>): <deskripsi>`, mis. `feat(auth): ...`, `fix(ui): ...`, `refactor(sidebar): ...` |
| Track tasks | [GitHub Issues](https://github.com/cynthiawinda/IF2150-RPL-K03-G04/issues) | Pembagian fitur per anggota; riwayat pekerjaan juga dicatat di `docs/K03_G04_Logbook.md` |
| Pull request dan review | [Daftar PR](https://github.com/cynthiawinda/IF2150-RPL-K03-G04/pulls) | PR #9, #12, #15, #18, #22, #28, #38, #39; setiap PR di-review minimal satu anggota lain |
| Pengujian | [`src/tests/`](../../src/tests) | `npm test` di folder `src/`: 5 suite lulus (54 tes), 4 suite integrasi DB di-skip bila `TEST_DATABASE_URL` kosong. Dengan `TEST_DATABASE_URL` terisi, 9 suite (116 tes) lulus; menguji auth, check-in ganda, laporan, notifikasi darurat, dan scheduler |

### B.2.1 Profiling dan Optimasi

| Informasi | Keterangan |
| :--- | :--- |
| Fitur / proses yang diprofil | `GET /api/reports/summary` — agregasi check-in 90 hari untuk dashboard dan halaman laporan |
| Alat | `performance.now()` pada 10 permintaan berurutan dan `EXPLAIN ANALYZE` PostgreSQL |
| Temuan (sebelum) | Endpoint menjalankan beberapa query (riwayat 90 hari, tanggal check-in terakhir, ringkasan 7 hari) dan mengolah agregasi di Node.js. `EXPLAIN ANALYZE` menunjukkan `Index Scan` memakai `idx_check_in_pelajar_tanggal`; execution time 0,06 ms, tidak ada N+1 |
| Perbaikan | Tidak ada perubahan kode khusus; bottleneck tidak ditemukan. Hasil ringkasan dipakai bersama oleh dashboard dan halaman laporan agar tidak menghitung ulang |
| Hasil (sesudah) | Rata-rata respons **11,1 ms** (min 7,0 ms, maks 26,0 ms) pada DB seed. Waktu didominasi latensi HTTP dan parsing, bukan query basis data |

## B.3 Kendala dan Catatan Penting

1. **Basis data wajib berjalan.** Aplikasi memakai PostgreSQL sesuai `.env`; tanpa koneksi, endpoint mengembalikan error 500. Jalankan `npm run db:seed` untuk membuat skema dan data uji.
2. **`db:init` dan `db:seed` mengosongkan basis data.** `schema.sql` diawali `DROP TABLE IF EXISTS`, sehingga perintah tersebut membuat ulang seluruh tabel dan menghapus data lama. Jangan jalankan pada basis data yang datanya ingin disimpan.
3. **Akun uji.** Password akun seed: `Password123!`. Contoh: `budi.pelajar@mahasehat.id` (pelajar), `santoso.wali@mahasehat.id` (wali), `siti.psikolog@mahasehat.id` (nakes). `andi.siswa@mahasehat.id` sengaja berstatus *Belum Terverifikasi* untuk menguji konfirmasi wali.
4. **E-mail dan konfirmasi wali.** Bila `SMTP_HOST` pada `.env` dikosongkan, e-mail (konfirmasi wali, atur ulang kata sandi, notifikasi darurat) tidak dikirim, tetapi isinya dicetak ke log server (`[Mail] ...`) sehingga tautannya dapat disalin. Dashboard wali hanya menampilkan pengajuan yang menunggu; persetujuan tetap lewat tautan konfirmasi. Token uji `TOKEN-WALI-ANDI-2026` berlaku 7 hari sejak `npm run db:seed`; jalankan ulang perintah tersebut bila sudah lewat.
5. **Pengujian integrasi DB.** Isi `TEST_DATABASE_URL` untuk menjalankan 4 suite yang di-skip; isi database tersebut akan dikosongkan oleh test.
6. **Setelan tenaga kesehatan.** Profil inti (nama, email, telepon, jenis, STR) tersimpan ke server. Bio, tempat kerja, dan jadwal praktik masih disimpan di `localStorage` karena kolomnya belum ada di skema.
7. **Notifikasi darurat.** Notifikasi dibuat oleh job harian (`EMERGENCY_CRON`). Untuk menguji tanpa menunggu jadwal, jalankan `npm run job:darurat`, lalu masuk sebagai `ratna.wali@mahasehat.id` (wali dari `citra.pelajar@mahasehat.id`). Modal darurat hanya muncul untuk peran wali dan hanya jika ada baris aktif di `notifikasi_darurat`.
8. **Data demo relatif terhadap tanggal seed.** Jadwal konsultasi memakai `CURRENT_DATE + n`; jika database lama tidak di-seed ulang, slot bisa sudah lewat.
9. **Kepemilikan e-mail wali belum diverifikasi.** Pengaitan pelajar ke akun wali memakai e-mail atau nomor telepon wali yang diisi saat registrasi, sedangkan e-mail akun wali tidak diverifikasi saat mendaftar.
10. **Belum ada pembatasan jumlah percobaan login.**

## B.4 Kontribusi Anggota

Tabel B.4. Kontribusi Anggota

| NIM | Nama | Modul / Fitur yang Dikerjakan | Persentase Kontribusi |
| :--- | :--- | :--- | :--- |
| *13525021* | *Haikal Muhammad Royyan* | Fondasi basis data (skema, seed, model C01–C09), konfirmasi registrasi oleh wali (UC02), notifikasi darurat beserta job harian (UC08), masuk akun dan atur ulang kata sandi (UC09), keluar akun (UC10), serta pengujian otomatis modul tersebut | *20%* |
| *13525066* | *Cynthia Winda Wijaya* | Halaman registrasi, login, konfirmasi registrasi, pop-up notifikasi, `CariTenagaKesehatanPage`, `CheckInPage`, routing/controller konsultasi | *20%* |
| *13525081* | *Rendy Salastra Putra* | Integrasi FE–BE, `AuthLayout.css`, sidebar/design system, manajemen konsultasi, setelan nakes dan ortu, perbaikan bug dan umpan balik aksi | *20%* |
| *13525090* | *Sophia Imelda Rogate Marpaung* | `DashboardPage` semua peran, `SettingPage`, `ReportPage`, `ResetPasswordPage`, perapian aset/tampilan | *20%* |
| *13525141* | *Christabelcyne Costan* | Backend check-in, backend laporan kesehatan, backend manajemen konsultasi, perbaikan check-in dan konsultasi | *20%* |

## B.5 Traceability Kelas Perancangan ke Implementasi

Tabel B.5. Traceability Kelas Perancangan ke Implementasi

| ID Kelas | Nama Kelas Perancangan | Bentuk Implementasi | Lokasi (File dan Nama) | Keterangan |
| :--- | :--- | :--- | :--- | :--- |
| *C01* | *Pengguna* | Kelas, tabel | `src/models/Pengguna.js` — `Pengguna`; tabel `pengguna` | Kelas induk C02–C04. Atribut `password` disimpan sebagai `password_hash` (bcrypt); ditambah `versi_token`, `token_konfirmasi`, dan token atur ulang kata sandi |
| *C02* | *Pelajar* | Kelas, tabel | `src/models/Pelajar.js` — `Pelajar`; tabel `pelajar` | Turunan `Pengguna`. Termasuk `setCheckIn`, `getCheckInHistory`, `ajukanKonsultasi`; ditambah `getRiwayatTerbaruSemuaAktif()` untuk job notifikasi darurat |
| *C03* | *OrangTuaWali* | Kelas, tabel | `src/models/OrangTuaWali.js` — `OrangTuaWali`; tabel `orang_tua_wali` | Turunan `Pengguna`. Ditambah `getPelajarTerhubung`, `getSummaryReport`, `getPengajuanMenunggu` |
| *C04* | *TenagaKesehatan* | Kelas, tabel | `src/models/TenagaKesehatan.js` — `TenagaKesehatan`; tabel `tenaga_kesehatan` | Turunan `Pengguna`. `getJadwalTersedia`, `perbaruiProfil` |
| *C05* | *RiwayatKesehatan* | Kelas, tabel | `src/models/RiwayatKesehatan.js` — `RiwayatKesehatan`; tabel `riwayat_kesehatan` | Isi riwayat disimpan terenkripsi AES-256 |
| *C06* | *CheckIn* | Kelas, tabel | `src/models/CheckIn.js` — `CheckIn`; tabel `check_in` | `createCheckIn`, `getCheckInData`; `catatan_refleksi` disimpan terenkripsi AES-256 |
| *C07* | *LaporanKesehatan* | Kelas | `src/models/LaporanKesehatan.js` — `LaporanKesehatan` | `evaluateThreshold`, `detectEmergency`; dihitung dari data check-in setiap kali dipanggil, tidak disimpan sebagai tabel |
| *C08* | *FasilitasKesehatan* | Kelas, tabel | `src/models/FasilitasKesehatan.js` — `FasilitasKesehatan`; tabel `fasilitas_kesehatan` | Termasuk `estimasi_biaya` untuk tarif nakes |
| *C09* | *JadwalKonsultasi* | Kelas, tabel | `src/models/JadwalKonsultasi.js` — `JadwalKonsultasi`; tabel `jadwal_konsultasi` | `reservasi`, `updateStatus`, `updateSchedule`, `findPengajuanMasuk` |
| *C10* | *RegistrationPage* | Halaman HTML + JS | `RegistrationPagePelajar.html`, `RegistrationPageOrangTuaWali.html`, `RegistrationPageTenagaKesehatan.html` + `.js` | Validasi di JS, submit ke `POST /api/auth/register` |
| *C11* | *AuthController* | Controller + route + middleware | `src/controllers/authController.js` — `daftar`, `dataKonfirmasi`, `setujuiRegistrasi`, `tolakRegistrasi`, `masuk`, `profilSaya`, `keluar`, `pengajuanMenunggu`, `perbaruiProfil`; `src/routes/authRoutes.js`; `src/middleware/authMiddleware.js` — `generateToken`, `authenticate` | `registerAccount()` menjadi `daftar`; `validateConfirmation()` dan `confirmAccount()` menjadi `dataKonfirmasi` dan `setujuiRegistrasi`; `login()`, `validateCredentials()`, `checkAccountStatus()`, dan `startSession()` menjadi `masuk` dan `generateToken`; `logout()` dan `endSession()` menjadi `keluar`. Atribut `currentUser` menjadi isi token JWT (`req.user`) |
| *C12* | *KonfirmasiRegistrasiPage* | Halaman HTML + JS | `KonfirmasiRegistrasiPage.html`, `.js`, `KonfirmasiRegistrasiPage.css` | Data dan keputusan diambil dari API konfirmasi |
| *C13* | *CheckInPage* | Halaman HTML + JS | `CheckInPage.html`, `CheckInPage.js`, `CheckInPage.css` | Langkah mood, tidur, makan, pemicu, refleksi |
| *C14* | *CheckInController* | Controller + route | `src/controllers/checkInController.js`, `src/routes/checkInRoutes.js` | `submitCheckIn`, `getHistory`, `getTodayStatus`, enkripsi jurnal |
| *C15* | *NotifikasiPengingatController* | Tidak diimplementasikan | `src/jobs/scheduler.js`, `src/jobs/jalankanEvaluasiDarurat.js` | Pengingat check-in harian belum dibuat; scheduler hanya mengevaluasi notifikasi darurat |
| *C16* | *ReportPage* | Halaman HTML + JS | `ReportPagePelajar.html`, `ReportPageOrangTuaWali.html`, `ReportChart.js`, CSS terkait | Chart dan filter periode di `ReportChart.js` |
| *C17* | *ReportController* | Controller + route | `src/controllers/ReportController.js`, `src/routes/reportRoutes.js` | `summary`, `riwayat`, agregasi dan pembatasan data wali |
| *C18* | *CariTenagaKesehatanPage* | Halaman HTML + JS | `CariTenagaKesehatanPage.html`, `.js`, `.css` | Pencarian, filter, izin lokasi, modal detail dan modal janji |
| *C19* | *ProfilTenagaKesehatanPage* | Dialog dalam halaman Cari | `CariTenagaKesehatanPage.html` (`#Modal_Detail`), `TenagaKesehatanController.selectTenagaKesehatan` | Tidak ada halaman terpisah |
| *C20* | *TenagaKesehatanController* | Controller + route | `src/controllers/TenagaKesehatanController.js`, `src/routes/tenagaKesehatanRoutes.js` | `loadTenagaKesehatan`, `processLocationPermission`, `selectTenagaKesehatan` |
| *C21* | *PengajuanKonsultasiPage* | Dihapus, digabung | Modal `#Modal_Janji` pada `CariTenagaKesehatanPage`; `KonsultasiController.ajukan` | Lihat B.1 butir 1 |
| *C22* | *JadwalKonsultasiController* | Digabung ke controller konsultasi | `src/controllers/KonsultasiController.js`, `src/routes/konsultasiRoutes.js` | `daftarJadwal`, `jadwalUlang`, `daftarMasuk` |
| *C23* | *KonsultasiController* | Controller + route | `src/controllers/KonsultasiController.js`, `src/routes/konsultasiRoutes.js` | `ajukan`, `daftarSaya`, `daftarMasuk`, `ubahStatus`, `jadwalUlang`, `tolak` |
| *C24* | *NotifikasiDaruratController* | Controller + route + job + halaman | `src/controllers/NotifikasiDaruratController.js`, `src/routes/emergencyRoutes.js`, `src/jobs/scheduler.js`, `src/jobs/jalankanEvaluasiDarurat.js`, `src/models/NotifikasiDarurat.js` (tabel `notifikasi_darurat`), `NotifikasiDarurat.html/.js`, `emergency-alert.js` | Keempat operasi DPPL menjadi metode dengan nama yang sama, ditambah `jalankanEvaluasiHarian()` untuk job harian. Modal darurat otomatis untuk wali |
| *C25* | *LoginPage* | Halaman HTML + JS | `LoginPage.html`, `LoginPage.js` | Submit ke `POST /api/auth/login` |
| *C26* | *ResetPasswordPage* | Halaman HTML + JS | `ResetPasswordPage.html`, `ResetPasswordPage.js` | Dua langkah: minta tautan dan sandi baru |
| *C27* | *PasswordController* | Controller + route | `src/controllers/passwordController.js` — `lupaPassword`, `resetPassword`; `src/routes/authRoutes.js` — `POST /api/auth/forgot-password`, `POST /api/auth/reset-password` | `sendResetLink()` dan `generateResetLink()` menjadi `lupaPassword`; `resetPassword()` dan `validateNewPassword()` menjadi `resetPassword` |
| *C28* | *DashboardPage* | Halaman HTML + JS | `DashboardPagePelajar.*`, `DashboardPageOrangTuaWali.*`, `DashboardPageTenagaKesehatan.*` | Data dari `/api/reports/summary`, `/api/konsultasi/*`, `/api/auth/*` |
| *C29* | *SettingPage* | Halaman HTML + JS | `SettingPagePelajar.*`, `SettingPageOrangTuaWali.*`, `SettingPageTenagaKesehatan.*`, `session.js` | Profil, notifikasi, lokasi, izin; logout memakai modal |
