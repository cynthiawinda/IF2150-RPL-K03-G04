<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 10
<br>
HASIL IMPLEMENTASI DAN UJI PERANGKAT LUNAK (HIUPL)
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

## Daftar Isi

- [BAB 1: Pendahuluan](#bab-1-pendahuluan)
  - [1.1 Tujuan Penulisan Dokumen](#11-tujuan-penulisan-dokumen)
  - [1.2 Lingkup Masalah](#12-lingkup-masalah)
  - [1.3 Definisi, Istilah, dan Singkatan](#13-definisi-istilah-dan-singkatan)
  - [1.4 Aturan Penomoran](#14-aturan-penomoran)
  - [1.5 Referensi](#15-referensi)
  - [1.6 Deskripsi Umum Dokumen (Ikhtisar)](#16-deskripsi-umum-dokumen-ikhtisar)
- [BAB 2: Deskripsi Umum Perangkat Lunak](#bab-2-deskripsi-umum-perangkat-lunak)
- [BAB 3: Implementasi](#bab-3-implementasi)
  - [3.1 Lingkungan Implementasi](#31-lingkungan-implementasi)
  - [3.2 Implementasi Modul](#32-implementasi-modul)
  - [3.3 Implementasi Antarmuka](#33-implementasi-antarmuka)
  - [3.4 File Lain](#34-file-lain)
- [BAB 4: Hasil Pengujian](#bab-4-hasil-pengujian)
  - [4.1 Strategi dan Kedalaman Pengujian Kelas](#41-strategi-dan-kedalaman-pengujian-kelas)
  - [4.2 Pengujian Unit Kelas](#42-pengujian-unit-kelas)
  - [4.3 Pengujian Integrasi](#43-pengujian-integrasi)
  - [4.4 Pengujian Use Case](#44-pengujian-use-case)
  - [4.5 Pengujian Kebutuhan Non-Fungsional (KNF)](#45-pengujian-kebutuhan-non-fungsional-knf)
  - [4.6 Tangkapan Layar dan Bukti Hasil Pengujian](#46-tangkapan-layar-dan-bukti-hasil-pengujian)
- [BAB 5: Traceability](#bab-5-traceability)

---

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| ... | ... |

---

# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Dokumen ini bertujuan mendokumentasikan deskripsi umum perangkat lunak, hasil implementasi, hasil pengujian perangkat lunak, serta traceability antar-komponen spesifikasi, implementasi, dan pengujian. HIUPL berfungsi sebagai catatan teknis hasil pelaksanaan implementasi dan pengujian serta bahan evaluasi kesesuaian dan tindak lanjut perbaikan perangkat lunak.

## 1.2 Lingkup Masalah
Mahasehat merupakan aplikasi berbasis web yang membantu pelajar dalam memantau dan memahami kondisi kesehatan mental sehari-hari serta memperoleh akses terhadap layanan kesehatan mental. Aplikasi ini menyediakan fitur pencatatan suasana hati, pola tidur, aktivitas fisik, pola makan, tingkat stres, dan refleksi harian. Data tersebut digunakan dan disajikan dalam bentuk statistik dan laporan untuk melihat perkembangan kondisi pelajar sehingga pelajar dapat mengenali pola atau perubahan pada kondisi kesehatan mentalnya. Selain pemantauan mandiri, Mahasehat menyediakan akses terhadap layanan kesehatan mental melalui tenaga kesehatan. Pelajar dapat mencari tenaga kesehatan sesuai kebutuhan, melihat jadwal yang tersedia, serta mengajukan konsultasi. Selain itu, orang tua/wali dilibatkan dalam pemantauan kondisi pelajar melalui informasi dan notifikasi tertentu, sementara tenaga kesehatan dapat mengakses informasi kesehatan yang relevan untuk mendukung proses konsultasi.

## 1.3 Definisi, Istilah, dan Singkatan

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *SKPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *DPPL* | *Singkatan dari Deskripsi Perancangan Perangkat Lunak, yaitu dokumen yang menjelaskan rancangan arsitektur, kelas, dan antarmuka P/L.* |
| *HIUPL* | *Singkatan dari Hasil Implementasi dan Uji Perangkat Lunak, yaitu dokumen yang melaporkan hasil implementasi dan pengujian P/L.* |
| *KF* | *Singkatan dari Kebutuhan Fungsional.* |
| *KNF* | *Singkatan dari Kebutuhan Non-Fungsional.* |
| *UC* | *Singkatan dari Use Case.* |
| *TC* | *Singkatan dari Test Case, yaitu satu kasus uji untuk skenario tertentu.* |
| *UT* | *Singkatan dari Unit Test, yaitu test case tingkat kelas/operasi.* |
| *INT* | *Singkatan dari Integration Test, yaitu test case yang menguji interaksi antarkomponen.* |
| *Boundary* | *Kasus uji pada nilai batas masukan, misalnya nilai minimum, maksimum, atau tepat di ambang aturan.* |
| *Coverage* | *Persentase baris/cabang kode yang dieksekusi oleh pengujian.* |

## 1.4 Aturan Penomoran

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Kebutuhan Fungsional* | *KFXX* | *Mewakili singkatan kata "Kebutuhan Fungsional", diikuti dua digit unik untuk membedakan tiap KF.* |
| *Kebutuhan Non-Fungsional* | *KNFXX* | *Mewakili singkatan kata "Kebutuhan Non-Fungsional", diikuti dua digit unik untuk membedakan tiap KNF.* |
| *Use Case* | *UCXX* | *Mewakili singkatan kata "Use Case", diikuti dua digit unik untuk membedakan tiap UC.* |
| *Kelas* | *CXX* | *Mewakili singkatan kata "Class", diikuti dua digit unik untuk membedakan tiap kelas.* |
| *Antarmuka* | *I-XX* | *Mewakili singkatan kata "Interface", diikuti dua digit unik untuk membedakan tiap layar antarmuka.* |
| *Test Case Unit* | *CXX-UTYY* | *XX adalah nomor kelas, YY adalah nomor urut test case unit pada kelas tersebut* |
| *Test Case Integrasi* | *INT-TCYY* | *YY adalah nomor urut test case integrasi* |
| *Test Case Use Case* | *UCXX-TCYY* | *XX adalah nomor use case, YY adalah nomor urut test case pada use case tersebut* |
| *Test Case KNF* | *KNFXX-TCYY* | *XX adalah nomor KNF, YY adalah nomor urut test case pada KNF tersebut* |
| *Algoritma* | *Algo-CXX-XX* | *Mewakili singkatan kata "Algoritma", diikuti ID kelas dan dua digit unik untuk membedakan tiap algoritma.* |

## 1.5 Referensi
- Dokumen APL: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M6/K03_G04_APL.md
- Dokumen SKPL: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M5/K03_G04_SKPL.md
- Dokumen DPPL: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M8/K03_G04_DPPL2.md
- Dokumen Implementasi: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M9/K03_G04_Implementasi.md
- Diagram UML: [https://www.drawio.com/](https://www.drawio.com/)
- https://nodejs.org/docs/latest-v20.x/api/
- https://expressjs.com/
- https://www.postgresql.org/docs/15/
- https://developers.google.com/maps/documentation/geolocation/
- https://developers.google.com/calendar/api
- Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
BAB 1 membahas pendahuluan yang berisi tujuan, lingkup masalah, definisi, istilah serta singkatan, aturan penomoran, referensi, dan deskripsi umum dokumen. BAB 2 membahas deskripsi umum perangkat lunak. BAB 3 membahas implementasi meliputi lingkungan implementasi, implementasi modul, implementasi antarmuka, dan file lain. BAB 4 membahas hasil pengujian yang meliputi strategi dan kedalaman pengujian, pengujian unit kelas, pengujian integrasi, pengujian use case, pengujian kebutuhan nonfungsional, dan tangkapan layar hasil pengujian. BAB 5 berisi traceability.

<br>

---

# BAB 2: Deskripsi Umum Perangkat Lunak
Mahasehat merupakan sistem pemantauan kesehatan mental berbasis web responsif yang dirancang untuk kalangan pelajar, termasuk siswa dan mahasiswa. Sistem ini dikembangkan untuk menjawab permasalahan nyata di lingkungan pendidikan, di mana banyak pelajar cenderung memendam stres akademik maupun masalah pribadi seorang diri. Di sisi lain, orang tua/wali sering terlambat menyadari penurunan kondisi psikologis anak karena minimnya komunikasi atau keterbatasan jarak, khususnya bagi mahasiswa rantau. Mahasehat memadukan pencatatan mandiri oleh pelajar, dasbor pemantauan bagi orang tua/wali, serta alur rujukan bantuan profesional ke dalam satu sistem yang tetap mengutamakan kerahasiaan data pribadi pengguna. 
Dari sisi batasan sistem, MahaSehat mengelola autentikasi dan manajemen peran pengguna, pencatatan check-in harian, pengolahan statistik dan laporan kondisi, evaluasi notifikasi darurat, serta penjadwalan konsultasi dengan tenaga kesehatan. Catatan pribadi pelajar dijaga privasinya dari pihak luar. Adapun keterkaitan layanan eksternal meliputi pengiriman e-mail melalui server SMTP (via 'nodemailer') serta integrasi pendukung seperti Google Maps API dan Google Calendar API sesuai kebutuhan fitur, sementara penanganan kondisi darurat langsung di luar kendali otomatis aplikasi.

<p align="center">
<img alt="System Overview / Use Case Diagram" src="./assets/uc-diagram.png" width="90%">
</p>
<p align="center">
<i>Gambar 2.1. Use Case Diagram MahaSehat</i>
</p>

Gambar 2.1 menggambarkan interaksi tiga aktor utama dengan sistem MahaSehat. Pelajar dapat melakukan registrasi dan masuk/keluar akun, mengisi daily check-in, melihat statistik dan laporan kondisi, memilih tenaga kesehatan, serta mengajukan jadwal konsultasi. Orang tua/wali dapat melakukan registrasi dan konfirmasi akun pelajar, masuk/keluar akun, memantau statistik dan laporan kondisi pelajar, serta menerima dan menindaklanjuti notifikasi darurat. Tenaga kesehatan dapat registrasi akun, masuk/keluar akun, dan mengelola pengajuan konsultasi yang masuk.
<br>

---

# BAB 3: Implementasi

Bab ini memuat elemen P/L Mahasehat yang dibangun pada Tugas 9 (tag `v9.0`), yaitu lingkungan implementasi, kelas, layar antarmuka, dan file pendukung. Mahasehat ditulis dalam JavaScript yang langsung dijalankan oleh Node.js di sisi server dan oleh peramban di sisi klien, sehingga tidak ada file *executable* hasil kompilasi. Karena itu, kolom Nama File Executable pada Tabel 3.2 dan Tabel 3.3 diisi `-`. Seluruh modul server dimuat saat `src/server.js` dijalankan dengan `npm start`, sedangkan file antarmuka disajikan Express sebagai file statis dari folder `src/frontend` dengan alamat `http://localhost:3000/views/<NamaHalaman>.html`. Perubahan terhadap rancangan DPPL mengikuti Tabel B.1 dokumen Implementasi (Tugas 9).

## 3.1 Lingkungan Implementasi

Lingkungan implementasi mengacu pada Tabel 2.1 DPPL. Perbedaan terhadap rancangan dijelaskan langsung pada kolom keterangan.

Tabel 3.1. Lingkungan Implementasi

| Aspek | Keterangan |
| :--- | :--- |
| *Hardware* | Laptop pengembang masing-masing anggota. Pengujian use case UC04–UC07 dijalankan pada laptop dengan prosesor Intel Core i7-1165G7 2,80 GHz dan RAM 16 GB |
| *Operating System* | Pengembangan dan pengujian: Windows 11. Klien: peramban di Windows, Android, dan iOS sesuai Tabel 2.1 DPPL. Ubuntu Server 22.04 LTS pada DPPL adalah sasaran *deployment*; sampai tag `v9.0`, aplikasi masih dijalankan secara lokal |
| *Bahasa Pemrograman* | JavaScript (ECMAScript 2020+) di Node.js 20 atau lebih baru (`"engines": { "node": ">=20" }` pada `src/package.json`); pengujian UC04–UC07 dijalankan dengan Node.js 26.13.0. Sisi klien memakai HTML5, CSS3, dan JavaScript tanpa *framework*. TypeScript yang disebut pada DPPL tidak dipakai |
| *Framework/Library* | Express 4.22.3 (server HTTP dan *routing* MVC), pg 8.23.1 (driver PostgreSQL), bcryptjs 2.4.3 (*hash* kata sandi), jsonwebtoken 9.0.3 (token sesi JWT), node-cron 4.6.0 (job harian notifikasi darurat), nodemailer 10.3.1 (e-mail SMTP), dotenv 16.6.1 (konfigurasi `.env`), cors 2.8.6, modul bawaan `crypto` Node.js (AES-256-CBC untuk catatan refleksi dan riwayat kesehatan), serta Web Geolocation API dan rumus Haversine (`src/utils/distance.js`) untuk jarak fasilitas kesehatan. Google Maps API dan Google Calendar API pada DPPL belum dipakai; kuncinya tersedia di `.env.example`, tetapi tidak dipanggil oleh kode |
| *DBMS* | PostgreSQL 15+ sesuai DPPL. Skema dibuat dari `src/config/schema.sql`. Pengujian UC04–UC07 memakai basis data uji PGlite 0.5.17 (PostgreSQL 18.7) yang diakses oleh driver `pg` lewat protokol PostgreSQL |
| *Development Tools* | Visual Studio Code, Git dan GitHub (*version control*, *issue*, dan *pull request* pada repositori `cynthiawinda/IF2150-RPL-K03-G04`), npm (manajemen paket), nodemon 3.1.14 (*reload* otomatis saat pengembangan) |
| *Testing Tools* | Jest 29.7.0 (*test runner* unit dan integrasi), Supertest 7.3.1 (uji endpoint HTTP), `jest --coverage` dengan Istanbul (laporan *coverage* per kelas), Google Chrome DevTools (tab Network untuk *response time* dan akses API, tab Memory untuk *heap snapshot*), Microsoft Edge dan emulasi perangkat DevTools (uji lintas peramban dan responsif), `psql` (inspeksi isi basis data), stopwatch (waktu pengisian check-in), serta pengujian manual di peramban untuk use case dengan bukti tangkapan layar |

## 3.2 Implementasi Modul

Tabel 3.2 memakai ID dan nama kelas DPPL dan sejalan dengan Tabel B.5 dokumen Implementasi (Tugas 9). Kelas yang digabung, dipindahkan, atau belum dibuat tetap dicantumkan beserta keterangannya.

Tabel 3.2. Implementasi Modul

| No | ID Kelas | Nama Modul/Kelas | Nama File Fisik | Nama File Executable |
| :--- | :--- | :--- | :--- | :--- |
| 1 | *C01* | Pengguna | `src/models/Pengguna.js` (tabel `pengguna`) | - |
| 2 | *C02* | Pelajar | `src/models/Pelajar.js` (tabel `pelajar`) | - |
| 3 | *C03* | OrangTuaWali | `src/models/OrangTuaWali.js` (tabel `orang_tua_wali`) | - |
| 4 | *C04* | TenagaKesehatan | `src/models/TenagaKesehatan.js` (tabel `tenaga_kesehatan`) | - |
| 5 | *C05* | RiwayatKesehatan | `src/models/RiwayatKesehatan.js` (tabel `riwayat_kesehatan`) | - |
| 6 | *C06* | CheckIn | `src/models/CheckIn.js` (tabel `check_in`) | - |
| 7 | *C07* | LaporanKesehatan | `src/models/LaporanKesehatan.js` (dihitung dari data check-in, tanpa tabel) | - |
| 8 | *C08* | FasilitasKesehatan | `src/models/FasilitasKesehatan.js` (tabel `fasilitas_kesehatan`) | - |
| 9 | *C09* | JadwalKonsultasi | `src/models/JadwalKonsultasi.js` (tabel `jadwal_konsultasi`) | - |
| 10 | *C10* | RegistrationPage | `src/frontend/views/RegistrationPagePelajar.html`, `RegistrationPageOrangTuaWali.html`, `RegistrationPageTenagaKesehatan.html` beserta file `.js` masing-masing dan `RegistrationPage.css` | - |
| 11 | *C11* | AuthController | `src/controllers/authController.js`, `src/routes/authRoutes.js`, `src/middleware/authMiddleware.js` | - |
| 12 | *C12* | KonfirmasiRegistrasiPage | `src/frontend/views/KonfirmasiRegistrasiPage.html`, `.js`, `.css` | - |
| 13 | *C13* | CheckInPage | `src/frontend/views/CheckInPage.html`, `.js`, `.css` | - |
| 14 | *C14* | CheckInController | `src/controllers/checkInController.js`, `src/routes/checkInRoutes.js` | - |
| 15 | *C15* | NotifikasiPengingatController | Belum diimplementasikan. Scheduler `src/jobs/scheduler.js` hanya menjalankan evaluasi notifikasi darurat (Tabel B.1 butir 4, Tugas 9) | - |
| 16 | *C16* | ReportPage | `src/frontend/views/ReportPage.html` (pengalih sesuai peran), `ReportPagePelajar.html`, `ReportPagePelajar.js`, `ReportPageOrangTuaWali.html`, `ReportPageOrangTuaWali.js`, `ReportChart.js`, `ReportPage.css` | - |
| 17 | *C17* | ReportController | `src/controllers/ReportController.js`, `src/routes/reportRoutes.js` | - |
| 18 | *C18* | CariTenagaKesehatanPage | `src/frontend/views/CariTenagaKesehatanPage.html`, `.js`, `.css` | - |
| 19 | *C19* | ProfilTenagaKesehatanPage | Dialog `#Modal_Detail` pada `src/frontend/views/CariTenagaKesehatanPage.html`; datanya dari `TenagaKesehatanController.selectTenagaKesehatan` (Tabel B.1 butir 2, Tugas 9) | - |
| 20 | *C20* | TenagaKesehatanController | `src/controllers/TenagaKesehatanController.js`, `src/routes/tenagaKesehatanRoutes.js` | - |
| 21 | *C21* | PengajuanKonsultasiPage | Dialog `#Modal_Janji` pada `src/frontend/views/CariTenagaKesehatanPage.html` dan `CariTenagaKesehatanPage.js`; dikirim ke `KonsultasiController.ajukan` (Tabel B.1 butir 1, Tugas 9) | - |
| 22 | *C22* | JadwalKonsultasiController | Digabung ke `src/controllers/KonsultasiController.js` (`daftarJadwal`, `jadwalUlang`, `daftarMasuk`) dan `src/routes/konsultasiRoutes.js` (Tabel B.1 butir 3, Tugas 9) | - |
| 23 | *C23* | KonsultasiController | `src/controllers/KonsultasiController.js`, `src/routes/konsultasiRoutes.js` | - |
| 24 | *C24* | NotifikasiDaruratController | `src/controllers/NotifikasiDaruratController.js`, `src/routes/emergencyRoutes.js`, `src/jobs/scheduler.js`, `src/jobs/jalankanEvaluasiDarurat.js` | - |
| 25 | *C25* | LoginPage | `src/frontend/views/LoginPage.html`, `LoginPage.js`, `AuthLayout.css` | - |
| 26 | *C26* | ResetPasswordPage | `src/frontend/views/ResetPasswordPage.html`, `ResetPasswordPage.js` | - |
| 27 | *C27* | PasswordController | `src/controllers/passwordController.js` (rute di `src/routes/authRoutes.js`) | - |
| 28 | *C28* | DashboardPage | `src/frontend/views/DashboardPagePelajar.*`, `DashboardPageOrangTuaWali.*`, `DashboardPageTenagaKesehatan.*` (`.html`, `.js`, `.css`) | - |
| 29 | *C29* | SettingPage | `src/frontend/views/SettingPagePelajar.*`, `SettingPageOrangTuaWali.*`, `SettingPageTenagaKesehatan.*` (`.html`, `.js`, `.css`), `session.js` | - |
| 30 | - | NotifikasiDarurat (kelas tambahan) | `src/models/NotifikasiDarurat.js` (tabel `notifikasi_darurat`); menyimpan notifikasi darurat yang dibuat job harian C24 (Tabel B.1 butir 17, Tugas 9) | - |

## 3.3 Implementasi Antarmuka

Tabel 3.3 memakai ID dan nama layar Bab 6 DPPL. Semua file berada di `src/frontend/views/`. Beberapa layar DPPL diimplementasikan sebagai langkah atau dialog di dalam satu halaman, sehingga kolom Nama File Fisik juga menyebut ID elemen atau langkahnya. Layar tambahan yang belum memiliki ID di DPPL dicantumkan pada baris 24–30.

Tabel 3.3. Implementasi Antarmuka

| No | ID Antarmuka | Nama Antarmuka | Nama File Fisik | Nama File Executable |
| :--- | :--- | :--- | :--- | :--- |
| 1 | *I-01* | RegistrationPagePelajar | `RegistrationPagePelajar.html`, `RegistrationPagePelajar.js`, `RegistrationPage.css` | - |
| 2 | *I-02* | RegistrationPageOrangTuaWali | `RegistrationPageOrangTuaWali.html`, `RegistrationPageOrangTuaWali.js`, `RegistrationPage.css` | - |
| 3 | *I-03* | RegistrationPageTenagaKesehatan | `RegistrationPageTenagaKesehatan.html`, `RegistrationPageTenagaKesehatan.js`, `RegistrationPage.css` | - |
| 4 | *I-04* | RegistrationSuccessPelajarPage | `RegistrationSuccessPelajarPage.html`, `RegistrationSuccessPage.css` | - |
| 5 | *I-05* | RegistrationSuccessPage | `RegistrationSuccessPage.html`, `RegistrationSuccessPage.css` | - |
| 6 | *I-06* | KonfirmasiRegistrasiPage | `KonfirmasiRegistrasiPage.html`, `.js`, `.css` | - |
| 7 | *I-07* | LoginPage | `LoginPage.html`, `LoginPage.js`, `AuthLayout.css` | - |
| 8 | *I-08* | ResetPasswordPage1 | `ResetPasswordPage.html` langkah `#Step_Email` dan pemberitahuan `#Step_Terkirim`, `ResetPasswordPage.js` | - |
| 9 | *I-09* | ResetPasswordPage2 | `ResetPasswordPage.html` langkah `#Step_KataSandiBaru`, `ResetPasswordPage.js` | - |
| 10 | *I-10* | PasswordChangedMessage | Pop-up `#Popup_SandiDiganti` pada `ResetPasswordPage.html` | - |
| 11 | *I-11* | IzinAksesLokasiPopUp | Dialog `#Modal_IzinLokasi` pada `CariTenagaKesehatanPage.html` | - |
| 12 | *I-12* | CariTenagaKesehatanPage | `CariTenagaKesehatanPage.html`, `.js`, `.css` | - |
| 13 | *I-13* | ProfilTenagaKesehatanPage | Dialog `#Modal_Detail` pada `CariTenagaKesehatanPage.html` (Tabel B.1 butir 22, Tugas 9) | - |
| 14 | *I-14* | ReportPage | `ReportPage.html`, `ReportPagePelajar.html`, `ReportPageOrangTuaWali.html` beserta file `.js` masing-masing, `ReportChart.js`, `ReportPage.css` | - |
| 15 | *I-15* | DashboardPageBelumCheckIn | `DashboardPagePelajar.html`, kartu `#Card_CheckIn` saat check-in hari ini belum diisi (`DashboardPagePelajar.js`) | - |
| 16 | *I-16* | DashboardPageSudahCheckIn | `DashboardPagePelajar.html`, kartu `#Card_CheckIn` saat check-in hari ini sudah diisi (`DashboardPagePelajar.js`) | - |
| 17 | *I-17* | CheckInMoodPage | `CheckInPage.html`, langkah 1 pada `CheckInPage.js` | - |
| 18 | *I-18* | CheckInTidurPage | `CheckInPage.html`, langkah 2 pada `CheckInPage.js` | - |
| 19 | *I-19* | CheckInTidurModal | Pemilih waktu bawaan peramban (`<input type="time">`) pada langkah 2 `CheckInPage.js`, menggantikan dialog pemilih jam dan menit | - |
| 20 | *I-20* | CheckInMakanPage | `CheckInPage.html`, langkah 3 pada `CheckInPage.js` | - |
| 21 | *I-21* | CheckInCatatanPage | `CheckInPage.html`, langkah 4 pada `CheckInPage.js` (pemicu stres dan catatan refleksi dalam satu langkah) | - |
| 22 | *I-22* | CheckInPeriksaKembaliPage | `CheckInPage.html`, langkah 5 (ringkasan) pada `CheckInPage.js` | - |
| 23 | *I-23* | PengajuanKonsultasi | Dialog `#Modal_Janji` pada `CariTenagaKesehatanPage.html` (Tabel B.1 butir 22, Tugas 9) | - |
| 24 | - | DashboardPageOrangTuaWali | `DashboardPageOrangTuaWali.html`, `.js`, `.css` | - |
| 25 | - | DashboardPageTenagaKesehatan | `DashboardPageTenagaKesehatan.html`, `.js`, `.css` | - |
| 26 | - | ManajemenKonsultasiPage | `ManajemenKonsultasiPage.html`, `.js`, `.css`; layar UC07 untuk tenaga kesehatan beserta dialog `#Modal_JadwalUlang` dan `#Modal_KonfirmasiTolak` | - |
| 27 | - | NotifikasiDarurat | `NotifikasiDarurat.html`, `.js`, `.css`, dan modal otomatis `emergency-alert.js` untuk peran wali (UC08) | - |
| 28 | - | SettingPagePelajar | `SettingPagePelajar.html`, `.js`, `.css` | - |
| 29 | - | SettingPageOrangTuaWali | `SettingPageOrangTuaWali.html`, `.js`, `.css` | - |
| 30 | - | SettingPageTenagaKesehatan | `SettingPageTenagaKesehatan.html`, `.js`, `.css` | - |

## 3.4 File Lain

Tabel 3.4. File Lain

| No | Nama File | Keterangan |
| :--- | :--- | :--- |
| 1 | `src/server.js` | Titik masuk aplikasi: membaca `.env`, menjalankan server HTTP pada `PORT`, dan memulai scheduler notifikasi darurat |
| 2 | `src/app.js` | Konfigurasi Express: *middleware* JSON dan CORS, penyajian file statis `src/frontend`, router `/api`, pengalihan `/`, `/konfirmasi-registrasi`, dan `/reset-password`, serta penanganan galat global |
| 3 | `src/routes/index.js` | Router utama `/api` yang memasang rute auth, check-in, laporan, tenaga kesehatan, konsultasi, dan darurat, serta *healthcheck* `GET /api/health` |
| 4 | `src/package.json`, `src/package-lock.json` | Daftar dependensi dengan versi terkunci dan *script* `start`, `dev`, `db:init`, `db:seed`, `job:darurat`, `test` |
| 5 | `src/.env.example` | Contoh konfigurasi: koneksi PostgreSQL, `JWT_SECRET`, `AES_SECRET_KEY`, SMTP, kunci API eksternal, dan `EMERGENCY_CRON` |
| 6 | `src/config/db.js` | *Pool* koneksi PostgreSQL dan *helper* transaksi `withTransaction` |
| 7 | `src/config/schema.sql` | DDL seluruh tabel, `CHECK` *constraint*, dan indeks; diawali `DROP TABLE IF EXISTS` |
| 8 | `src/config/seed.sql` | Data uji fiktif untuk tiga peran, check-in, fasilitas kesehatan, dan jadwal konsultasi relatif terhadap `CURRENT_DATE` |
| 9 | `src/config/initDb.js` | *Script* `npm run db:init` dan `npm run db:seed`; menjalankan `schema.sql` dan `seed.sql`, lalu mengganti penanda *hash* akun uji dengan *hash* bcrypt `Password123!` |
| 10 | `src/utils/encryption.js` | Enkripsi dan dekripsi AES-256-CBC untuk catatan refleksi dan riwayat kesehatan (KNF01) |
| 11 | `src/utils/distance.js` | Validasi koordinat dan perhitungan jarak Haversine ke fasilitas kesehatan (KF12) |
| 12 | `src/utils/waktu.js` | Tanggal hari ini zona Asia/Jakarta, selisih dan penambahan hari, validasi tanggal dan jam, hitung usia, gabung tanggal-waktu |
| 13 | `src/utils/AppError.js` | Kelas galat dengan kode status HTTP dan pesan yang aman ditampilkan ke pengguna |
| 14 | `src/utils/respon.js` | Format respons JSON seragam (`success`, `message`, `data`), konversi nama atribut ke *snake_case*, dan pembungkus *handler* asinkron |
| 15 | `src/utils/mailer.js` | E-mail konfirmasi registrasi untuk wali dan e-mail atur ulang kata sandi |
| 16 | `src/utils/kirimEmail.js` | Pengiriman e-mail notifikasi darurat; jika `SMTP_HOST` kosong, isi e-mail dicetak ke log server |
| 17 | `src/frontend/views/base.css`, `components.css`, `sidebar.css` | Gaya dasar, komponen bersama (tombol, kartu, *badge*, dialog), dan *sidebar* |
| 18 | `src/frontend/views/sidebar.js` | Perilaku *sidebar* responsif di semua halaman ber-*sidebar* |
| 19 | `src/frontend/views/session.js` | Penjaga sesi (arahkan ke LoginPage bila token tidak ada) dan logout bersama |
| 20 | `src/frontend/views/feedback.js` | *Toast* umpan balik untuk aksi berhasil dan gagal |
| 21 | `src/frontend/assets/*.png` | Logo Mahasehat dan ikon menu |
| 22 | `src/tests/setupEnv.js` | Nilai *environment* khusus pengujian; suite integrasi hanya berjalan bila `TEST_DATABASE_URL` terisi |
| 23 | `src/tests/foundation.test.js` | Uji utilitas fondasi: enkripsi AES-256 (KNF01), validasi koordinat (Algo-C02-03), dan jarak Haversine (Algo-C20-03) |
| 24 | `src/tests/fondasiDb.test.js` | Uji integrasi basis data untuk `Pelajar.setCheckIn` (check-in ganda) dan pengaturan *password* akun uji pada `initDb --seed` |
| 25 | `src/tests/authRegister.test.js`, `authKonfirmasiWali.test.js`, `authMasuk.test.js`, `authKeluar.test.js` | Uji registrasi (UC01), konfirmasi wali (UC02), masuk dan atur ulang kata sandi (UC09), serta keluar akun (UC10) |
| 26 | `src/tests/laporanKesehatan.test.js` | Uji `LaporanKesehatan.evaluateThreshold` (Algo-C07-01), `detectEmergency` (Algo-C07-02), `CheckIn.createCheckIn` (Algo-C06-01, Algo-C06-02), dan utilitas waktu |
| 27 | `src/tests/notifikasiDarurat.test.js`, `scheduler.test.js` | Uji notifikasi darurat (UC08) dan scheduler evaluasi darurat harian |
| 28 | `src/tests/unitAuthEmergency.test.js` | Uji unit Subbab 4.2 untuk C01, C02, C03, C11 (beserta `authMiddleware`), C24, dan C27 |
| 29 | `src/tests/tenagaKesehatan.test.js`, `checkIn.test.js`, `laporanKesehatanUnit.test.js`, `fasilitasKesehatan.test.js`, `jadwalKonsultasi.test.js` | Uji unit Subbab 4.2 untuk kelas *entity* C04, C06, C07, C08, dan C09 |
| 30 | `src/tests/checkInController.test.js`, `reportController.test.js`, `tenagaKesehatanController.test.js`, `konsultasiController.test.js` | Uji unit Subbab 4.2 untuk *controller* C14, C17, C20, dan C23 |
| 31 | `src/tests/encryption.test.js`, `distance.test.js` | Uji unit Subbab 4.2 untuk modul `encryption.js` dan `distance.js` |
| 32 | `src/tests/integrasiKomponen.test.js` | Uji integrasi Subbab 4.3 dengan basis data PostgreSQL nyata (`TEST_DATABASE_URL`), tanpa *mock* |
| 33 | `src/README.md`, `CARA-TEST.md` | Panduan instalasi, konfigurasi, menjalankan aplikasi, dan akun uji |
| 34 | `.gitignore` | Mengecualikan `node_modules`, `.env`, dan folder `coverage` dari repositori |

<br>

---

# BAB 4: Hasil Pengujian

Bab ini melaporkan hasil pengujian P/L pada level unit, integrasi, dan sistem. Pengujian dilakukan pada tag release terakhir Tugas 9. Hasil aktual diisi berdasarkan pengamatan saat pengujian. Kesimpulan diisi `Pass` atau `Fail`, dan untuk `Fail` dilengkapi penyebab serta usulan perbaikan.

## 4.1 Strategi dan Kedalaman Pengujian Kelas

Tabel 4.1.1. Identifikasi Tingkat Pengujian Kelas

| ID Kelas | Nama Kelas | Tingkat | Alasan | Test Case Terkait |
| :--- | :--- | :--- | :--- | :--- |
| *C01* | *Pengguna* | *Mendalam* | *Hash password (bcrypt), verifikasi password, dan token akun* | *C01-UT01 s.d. C01-UT12, INT-TC01 s.d. INT-TC03, INT-TC13* |
| *C02* | *Pelajar* | *Sedang* | *Hanya mendelegasikan check-in dan konsultasi ke kelas lain* | *C02-UT01 s.d. C02-UT06, INT-TC01, INT-TC04 s.d. INT-TC06, INT-TC08, INT-TC09, INT-TC11* |
| *C03* | *OrangTuaWali* | *Sedang* | *Mengambil data pelajar dan ringkasan laporan, tanpa perhitungan sendiri* | *C03-UT01 s.d. C03-UT04, INT-TC01, INT-TC07, INT-TC12* |
| *C04* | *TenagaKesehatan* | *Sedang* | *Mengambil jadwal dan memperbarui profil, tanpa algoritma kompleks* | *C04-UTYY* |
| *C05* | *RiwayatKesehatan* | *Sedang* | *Hanya memanggil enkripsi AES-256 (logikanya diuji di `encryption.js`)* | *C05-UTYY, KNF01-TC01* |
| *C06* | *CheckIn* | *Mendalam* | *Validasi data check-in dan enkripsi catatan refleksi* | *C06-UTYY* |
| *C07* | *LaporanKesehatan* | *Mendalam* | *Logika ambang batas dan deteksi kondisi darurat* | *C07-UTYY* |
| *C08* | *FasilitasKesehatan* | *Sedang* | *Hanya mengambil data lokasi dan estimasi biaya* | *C08-UTYY* |
| *C09* | *JadwalKonsultasi* | *Mendalam* | *Aturan perubahan status ketersediaan dan pengajuan* | *C09-UTYY* |
| *C10* | *RegistrationPage* | *Tidak perlu* | *Hanya tampilan form dan mengirim ke API* | *UC01-TCYY* |
| *C11* | *AuthController* | *Mendalam* | *Validasi kredensial, status akun, dan sesi (JWT)* | *C11-UT01 s.d. C11-UT14, INT-TC01, INT-TC02, KNF12-TC01* |
| *C12* | *KonfirmasiRegistrasiPage* | *Tidak perlu* | *Hanya tampilan, data dari API konfirmasi* | *UC02-TCYY* |
| *C13* | *CheckInPage* | *Tidak perlu* | *Hanya tampilan form, validasi ada di C06 dan C14* | *UC03-TCYY, KNF07-TC01* |
| *C14* | *CheckInController* | *Mendalam* | *Validasi format masukan dan enkripsi jurnal* | *C14-UTYY, INT-TCYY, KNF01-TC01* |
| *C15* | *NotifikasiPengingatController* | *Tidak perlu* | *Tidak diimplementasikan, jadi tidak ada kode yang diuji* | *-* |
| *C16* | *ReportPage* | *Tidak perlu* | *Hanya menampilkan grafik dan filter periode* | *UC04-TC01 s.d. UC04-TC05, KNF04-TC01* |
| *C17* | *ReportController* | *Mendalam* | *Agregasi statistik dan pembatasan data wali (tanpa teks jurnal)* | *C17-UTYY, INT-TCYY, KNF02-TC01* |
| *C18* | *CariTenagaKesehatanPage* | *Tidak perlu* | *Hanya tampilan pencarian, filter, dan modal* | *UC05-TC01, UC05-TC02, UC06-TC01 s.d. UC06-TC03, KNF03-TC01* |
| *C19* | *ProfilTenagaKesehatanPage* | *Tidak perlu* | *Hanya dialog dalam halaman Cari, tanpa logika* | *UC05-TC01, UC05-TC02, UC06-TC01* |
| *C20* | *TenagaKesehatanController* | *Mendalam* | *Izin lokasi, perhitungan jarak, dan integrasi lokasi eksternal* | *C20-UTYY, INT-TCYY, KNF03-TC01* |
| *C21* | *PengajuanKonsultasiPage* | *Tidak perlu* | *Dihapus dan digabung ke modal halaman Cari, logikanya ada di C23* | *UC06-TC01 s.d. UC06-TC03* |
| *C22* | *JadwalKonsultasiController* | *Tidak perlu* | *Digabung ke C23, operasinya diuji bersama C23* | *C23-UTYY, UC06-TC01, UC07-TC03* |
| *C23* | *KonsultasiController* | *Mendalam* | *Aturan status pengajuan, reschedule, dan hak akses per peran* | *C23-UTYY, INT-TCYY, UC07-TC01 s.d. UC07-TC03* |
| *C24* | *NotifikasiDaruratController* | *Mendalam* | *Evaluasi darurat, kirim e-mail, dan retry maksimal 3 kali* | *C24-UT01 s.d. C24-UT10, INT-TC11, INT-TC12, INT-TC15, KNF06-TC01, UC08-TC01, UC08-TC02* |
| *C25* | *LoginPage* | *Tidak perlu* | *Hanya tampilan form login* | *UC09-TC01 s.d. UC09-TC03, KNF11-TC01* |
| *C26* | *ResetPasswordPage* | *Tidak perlu* | *Hanya tampilan dua langkah reset password* | *UC09-TC04* |
| *C27* | *PasswordController* | *Mendalam* | *Pembuatan dan validasi token reset, validasi password baru, kirim e-mail* | *C27-UT01 s.d. C27-UT07, INT-TC03, UC09-TC04* |
| *C28* | *DashboardPage* | *Tidak perlu* | *Hanya menampilkan data dari API sesuai peran* | *UC08-TC01, UC09-TC01, UC09-TC02, UC09-TC04, KNF10-TC01* |
| *C29* | *SettingPage* | *Tidak perlu* | *Hanya tampilan pengaturan dan modal logout* | *UC10-TC01, UC10-TC02* |

## 4.2 Pengujian Unit Kelas

Pengujian unit dilakukan pada kelas bertingkat Mendalam dan Sedang. Kelas Mendalam diuji pada seluruh operasi public dengan kasus normal, batas, dan negatif, serta mencapai *coverage* minimal 70%. Kelas Sedang diuji minimal dengan satu kasus normal dan satu kasus gagal pada operasi public utama.

Cara menjalankan unit test: *cd src && npm test (tambahkan -- --coverage untuk laporan coverage).*

Lokasi file test: *src/tests/.*

### 4.2.1 Kelas Pengguna

**ID Kelas:** *C01*  
**Nama Kelas:** *Pengguna*  
**Tingkat:** *Mendalam*

Tabel 4.2.1. Hasil Pengujian Unit Kelas C01

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C01-UT01* | *findByUsernameOrEmail(usernameOrEmail): Pengguna* | *Normal* | *Masukan "  BUDI.Pelajar@mahasehat.id  " dengan baris mock role = 'Pelajar'* | *Input dinormalisasi (trim & toLowerCase) dan mengembalikan instance Pelajar* | *Parameter query diterima "budi.pelajar@mahasehat.id" dan objek yang dikembalikan adalah Pelajar* | *Pass* |
| *C01-UT02* | *findByUsernameOrEmail(usernameOrEmail): Pengguna* | *Batas* | *Masukan "", "   ", dan null* | *Mengembalikan null tanpa memanggil db.query* | *Seluruh pemanggilan mengembalikan null dan db.query tidak dipanggil* | *Pass* |
| *C01-UT03* | *findByUsernameOrEmail(usernameOrEmail): Pengguna* | *Negatif* | *Masukan "tidakada@test.id" dengan hasil query kosong (rows: [])* | *Mengembalikan null* | *Mengembalikan null* | *Pass* |
| *C01-UT04* | *findByEmail(email): Pengguna* | *Normal* | *Masukan "  WALI@test.id " (OrangTuaWali) dan "nakes@test.id" (TenagaKesehatan)* | *Mengembalikan instance subkelas OrangTuaWali dan TenagaKesehatan sesuai peran* | *Keduanya dikembalikan sebagai instance subkelas masing-masing* | *Pass* |
| *C01-UT05* | *findByEmail(email): Pengguna* | *Batas* | *Masukan format tidak mengandung @ ("bukan-email") dan null* | *Mengembalikan null tanpa memanggil db.query* | *Mengembalikan null dan db.query tidak dipanggil* | *Pass* |
| *C01-UT06* | *findByEmail(email): Pengguna* | *Negatif* | *Masukan "kosong@test.id" dengan hasil query kosong* | *Mengembalikan null* | *Mengembalikan null* | *Pass* |
| *C01-UT07* | *verifyPassword(password): Boolean* | *Normal* | *Hash "Rahasia123!" lewat hashPassword(), lalu verifikasi dengan "Rahasia123!"* | *Mengembalikan true* | *verifyPassword('Rahasia123!') mengembalikan true* | *Pass* |
| *C01-UT08* | *verifyPassword(password): Boolean* | *Negatif* | *Verifikasi hash yang sama dengan "Salah!", "", dan null* | *Mengembalikan false* | *Seluruh kasus mengembalikan false* | *Pass* |
| *C01-UT09* | *getStatusAkun(), getRole(), toJSON()* | *Normal* | *Instansiasi Pengguna dengan status_akun: 'Aktif', role: 'Pelajar', versi_token: 2* | *Getter mengembalikan status/role sesuai data dan toJSON() menyembunyikan password serta versiToken* | *getStatusAkun() = 'Aktif', getRole() = 'Pelajar', field sensitif undefined di toJSON()* | *Pass* |
| *C01-UT10* | *setPassword(newPassword): Boolean* | *Normal* | *Panggil setPassword('SandiBaru123!') dengan mock DB rowCount: 1* | *Mengembalikan true dan hash internal diperbarui sehingga cocok dengan sandi baru* | *Mengembalikan true dan verifyPassword('SandiBaru123!') bernilai true* | *Pass* |
| *C01-UT11* | *setPassword(newPassword): Boolean* | *Negatif* | *Panggil setPassword('LainLagi123!') dengan mock DB rowCount: 0* | *Mengembalikan false dan hash internal tidak berubah* | *Mengembalikan false dan hash tetap sama seperti sebelumnya* | *Pass* |
| *C01-UT12* | *findByTokenKonfirmasi(), findByResetToken(), ubahStatusKonfirmasi(), simpanResetToken(), ubahEmail(), akhiriSesiById()* | *Normal & Negatif* | *Token kosong vs valid, perubahan status konfirmasi, penyimpanan reset token, validasi pembaruan e-mail, dan inkremen versi_token* | *Token kosong mengembalikan null; operasi pembaruan meneruskan query/parameter dengan tepat* | *Semua pemanggilan mengembalikan nilai sesuai cabang normal dan negatif* | *Pass* |

Tabel 4.2.1b. Ringkasan Cakupan Kelas C01

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *findByUsernameOrEmail(usernameOrEmail), findByEmail(email), verifyPassword(password), getStatusAkun(), getRole(), setPassword(newPassword)* |
| Operasi yang diuji | *Seluruh 6 operasi public DPPL plus helper implementasi hashPassword(), findByTokenKonfirmasi(), findByResetToken(), ubahStatusKonfirmasi(), simpanResetToken(), ubahEmail(), akhiriSesiById(), dan toJSON()* |
| ID Algoritma yang tercakup | *Algo-C01-01, Algo-C01-02, Algo-C01-03, Algo-C01-04* |
| Coverage (wajib ≥ 70%) | *100% lines / 96,87% branches (100% stmts, 100% funcs); alat: Jest --coverage; bukti pada Subbab 4.6* |

### 4.2.2 Kelas Pelajar

**ID Kelas:** *C02*  
**Nama Kelas:** *Pelajar*  
**Tingkat:** *Sedang*

Tabel 4.2.2. Hasil Pengujian Unit Kelas C02

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C02-UT01* | *getCheckInHistory(), getCheckInSejak(), getTanggalCheckInTerakhir()* | *Normal & Batas* | *Query riwayat dengan dan tanpa dekripsi jurnal serta hasil kosong* | *Mengembalikan daftar CheckIn dan tanggal terakhir (atau null bila belum ada check-in)* | *Daftar CheckIn dikembalikan terdekripsi sesuai parameter dan null saat kosong* | *Pass* |
| *C02-UT02* | *setCheckIn(checkIn): CheckIn* | *Normal & Gagal* | *Simpan check-in baru; lalu ulangi dengan error DB 23505 (duplikat hari yang sama) dan XX000* | *Sukses menyimpan check-in pertama; menolak duplikat dengan HTTP 409 dan meneruskan error DB lain* | *Duplikat melempar AppError(409) dengan pesan check-in hari ini sudah dicatat; error XX000 diteruskan* | *Pass* |
| *C02-UT03* | *setLokasiSaatIni(lokasi), getLokasiSaatIni()* | *Normal & Gagal* | *Masukan koordinat sah "-6.8915, 107.6107" dan masukan invalid "bandung" / ""* | *Koordinat valid disimpan dan dinormalisasi; format invalid melempar error 400* | *getLokasiSaatIni() bernilai "-6.8915,107.6107" pada kasus sah dan melempar AppError(400) untuk invalid* | *Pass* |
| *C02-UT04* | *updateEmergencyStatus(status): Boolean* | *Normal & Batas* | *Ubah statusDarurat dari false ke true, lalu panggil lagi dengan nilai yang sama true* | *Memperbarui DB hanya saat status berubah dan bersifat idempoten jika sama* | *db.query hanya dipanggil 1 kali saat perubahan pertama dan bernilai true pada pemanggilan ulang* | *Pass* |
| *C02-UT05* | *ajukanKonsultasi(jadwal, keluhan): Boolean* | *Normal & Gagal* | *Ajukan dengan jadwal tersedia ('Tersedia'), jadwal 'Penuh', dan keluhan kosong* | *Menyimpan pengajuan saat tersedia; melempar error 400 saat keluhan kosong dan mengembalikan false bila penuh* | *Ketiga skenario mengembalikan nilai (true / AppError(400) / false) sesuai spesifikasi* | *Pass* |
| *C02-UT06* | *findById(), findByIdPengguna(), findSemuaAktif(), getRiwayatTerbaruSemuaAktif(), setWali(), hubungkanKeWali(), perbaruiProfil()* | *Normal & Batas* | *Pencarian berdasarkan ID/user ID, daftar pelajar aktif, tautan wali, dan pembaruan nama tanpa field opsional* | *Mengembalikan instance Pelajar/daftar yang valid atau null bila tidak ada* | *Seluruh helper mengembalikan hasil sesuai query mock DB* | *Pass* |

### 4.2.3 Kelas OrangTuaWali

**ID Kelas:** *C03*  
**Nama Kelas:** *OrangTuaWali*  
**Tingkat:** *Sedang*

Tabel 4.2.3. Hasil Pengujian Unit Kelas C03

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C03-UT01* | *getSummaryReport(): SummaryData* | *Normal* | *Panggil wali.getSummaryReport() dengan mock data 1 pelajar yang diwalikan serta riwayat check-in berisi catatanRefleksi* | *Mengembalikan ringkasan kondisi (namaPelajar, periode, ringkasanKondisi, indikatorRisiko, jumlahHariTidakCheckIn) tanpa membocorkan teks catatan refleksi pribadi (KNF02)* | *Summary dikembalikan terformat dan tidak memuat properti maupun teks catatan refleksi* | *Pass* |
| *C03-UT02* | *pilihPelajar(idPelajar): Pelajar* | *Gagal* | *Panggil wali.pilihPelajar() saat wali belum terhubung dengan pelajar mana pun* | *Melempar AppError(404) bahwa pelajar belum terhubung* | *Melempar AppError berstatus HTTP 404* | *Pass* |
| *C03-UT03* | *pilihPelajar(idPelajar): Pelajar* | *Gagal* | *Panggil wali.pilihPelajar('PLJ-999') saat ID tersebut bukan milik wali* | *Melempar AppError(403) menolak akses pelajar lain* | *Melempar AppError berstatus HTTP 403* | *Pass* |
| *C03-UT04* | *findById(), findByIdPengguna(), findIdByEmail(), tambah(), getPengajuanMenunggu(), perbaruiProfil()* | *Normal & Batas* | *Uji pencarian wali (valid & invalid), penambahan data wali, daftar pengajuan menunggu, dan pembaruan profil* | *Mengembalikan data wali/pengajuan dengan validasi input kosong/tidak ada* | *Seluruh pemanggilan mengembalikan nilai sesuai skenario normal dan kosong* | *Pass* |

### 4.2.4 Kelas AuthController

**ID Kelas:** *C11*  
**Nama Kelas:** *AuthController (termasuk middleware authMiddleware)*  
**Tingkat:** *Mendalam*

Tabel 4.2.4. Hasil Pengujian Unit Kelas C11

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C11-UT01* | *daftar() (validateData + registerAccount)* | *Negatif & Batas* | *Kirim payload tidak lengkap, role invalid, password < 8 karakter (7 karakter), format e-mail/tanggal lahir invalid, serta duplikat e-mail* | *Seluruhnya ditolak dengan status HTTP 400 (atau 409 untuk duplikat)* | *Setiap payload mengembalikan HTTP 400/409 dengan pesan validasi spesifik* | *Pass* |
| *C11-UT02* | *daftar() (registerAccount)* | *Normal & Batas* | *Registrasi Pelajar < 18 tahun (status "Belum Terverifikasi") & ≥ 18 tahun (status "Aktif"), OrangTuaWali, dan TenagaKesehatan* | *Akun tersimpan lewat transaksi, e-mail konfirmasi wali dikirim untuk < 18 tahun, HTTP 201* | *Status akun dan respons JSON (perluKonfirmasiWali) sesuai batas usia 18 tahun* | *Pass* |
| *C11-UT03* | *daftar() (registerAccount)* | *Negatif (Fault Tolerance)* | *Simulasi mailer.kirimEmailKonfirmasiWali gagal melempar error saat pendaftaran pelajar < 18 tahun* | *Transaksi registrasi tetap berhasil (HTTP 201) dengan emailTerkirim: false* | *Registrasi tidak dibatalkan, mengembalikan HTTP 201 dan emailTerkirim: false* | *Pass* |
| *C11-UT04* | *dataKonfirmasi() (validateConfirmation)* | *Normal & Negatif* | *Request GET /api/auth/konfirmasi-wali?token=... dengan token valid, token tidak ada (404), dan token kosong (400)* | *Token valid mengembalikan HTTP 200 dengan ringkasan data pelajar; token invalid mengembalikan 400/404* | *Respons status dan payload sesuai untuk valid, 404, dan 400* | *Pass* |
| *C11-UT05* | *setujuiRegistrasi() (confirmAccount)* | *Normal* | *Request POST /api/auth/konfirmasi-wali/setuju dengan token pelajar < 18 tahun yang menunggu persetujuan* | *Status akun diubah menjadi "Aktif", HTTP 200* | *ubahStatusKonfirmasi('Aktif', ...) dijalankan dan mengembalikan HTTP 200* | *Pass* |
| *C11-UT06* | *tolakRegistrasi() (confirmAccount)* | *Normal & Negatif* | *Request POST /api/auth/konfirmasi-wali/tolak dengan token valid dan dengan token yang sudah pernah diproses* | *Token valid mengubah status menjadi "Ditolak" (HTTP 200); token yang sudah diproses ditolak 400* | *Status berubah ke "Ditolak" pada kasus pertama dan melempar HTTP 400 pada pengulangan* | *Pass* |
| *C11-UT07* | *setujuiRegistrasi() (confirmAccount)* | *Negatif* | *Kirim konfirmasi persetujuan memakai token yang sudah ditolak atau tidak ditemukan* | *Mengembalikan HTTP 400/404 tanpa mengaktifkan akun* | *Mengembalikan status kesalahan yang sesuai dan akun tidak aktif* | *Pass* |
| *C11-UT08* | *masuk() (login)* | *Normal* | *Login dengan kredensial benar untuk ketiga peran (Pelajar, OrangTuaWali, TenagaKesehatan)* | *Mengembalikan HTTP 200 beserta JWT token dan objek pengguna sesuai peran* | *Ketiga peran memperoleh JWT valid dan data profil peran masing-masing* | *Pass* |
| *C11-UT09* | *masuk() (login)* | *Negatif* | *Login dengan input kosong (400), akun tidak ditemukan (401), dan sandi salah (401)* | *Akses ditolak dengan HTTP 400/401 tanpa menerbitkan token* | *Ketiga kasus gagal sesuai kode status dan pesan error* | *Pass* |
| *C11-UT10* | *masuk() (login)* | *Negatif* | *Login pada akun berstatus "Belum Terverifikasi" dan "Ditolak"* | *Akses ditolak dengan HTTP 403 beserta pesan status akun* | *Keduanya ditolak dengan HTTP 403 (menunggu konfirmasi / ditolak)* | *Pass* |
| *C11-UT11* | *profilSaya(), pengajuanMenunggu()* | *Normal* | *Request terautentikasi ke GET /api/auth/me dan daftar pengajuan tertunda milik wali* | *Mengembalikan HTTP 200 berisi profil saat ini dan daftar pelajar menunggu konfirmasi* | *Respons HTTP 200 dengan data profil & pengajuan yang sesuai* | *Pass* |
| *C11-UT12* | *perbaruiProfil()* | *Normal & Negatif* | *Perbarui profil Pelajar/Wali/Nakes, ubah e-mail sah vs duplikat, ubah sandi (sandi lama salah / < 8 karakter / valid)* | *Perubahan valid mengembalikan HTTP 200; duplikat e-mail (409) dan sandi salah/lemah (400/401) ditolak* | *Seluruh cabang validasi dan pembaruan profil berjalan sesuai ekspektasi* | *Pass* |
| *C11-UT13* | *keluar() (logout)* | *Normal* | *Request POST /api/auth/logout dengan Bearer JWT valid* | *Menaikkan versi_token pengguna lewat akhiriSesiById dan mengembalikan HTTP 200* | *akhiriSesiById dipanggil dan mengembalikan "Logout berhasil."* | *Pass* |
| *C11-UT14* | *authMiddleware (authenticate(), authorizeRoles())* | *Normal, Batas, Negatif* | *Tanpa header Authorization (401), token rusak (401), versi_token kedaluwarsa (401), akun non-Aktif (403), role terlarang (403), dan JWT_SECRET kosong* | *Menolak permintaan tidak sah dengan 401/403; meneruskan next() bila token dan role valid; error 500 bila JWT_SECRET tidak tersedia* | *Seluruh cabang middleware terpenuhi dengan 100% line & branch coverage* | *Pass* |

Tabel 4.2.4b. Ringkasan Cakupan Kelas C11

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *validateData(data), registerAccount(data), login(usernameOrEmail, pass), logout(), validateConfirmation(token), confirmAccount(token)* |
| Operasi yang diuji | *Seluruh 6 operasi public DPPL (pada implementasi: daftar(), masuk(), keluar(), dataKonfirmasi(), setujuiRegistrasi(), tolakRegistrasi()) ditambah profilSaya(), perbaruiProfil(), pengajuanMenunggu(), serta authenticate() dan authorizeRoles() pada authMiddleware.js* |
| ID Algoritma yang tercakup | *Algo-C11-01 s.d. Algo-C11-10* |
| Coverage (wajib ≥ 70%) | *authController.js: 91,66% lines / 74,65% branches (91,66% stmts, 100% funcs); authMiddleware.js: 100% lines / 100% branches; alat: Jest --coverage; bukti pada Subbab 4.6* |

### 4.2.5 Kelas NotifikasiDaruratController

**ID Kelas:** *C24*  
**Nama Kelas:** *NotifikasiDaruratController (termasuk model NotifikasiDarurat)*  
**Tingkat:** *Mendalam*

Tabel 4.2.5. Hasil Pengujian Unit Kelas C24

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C24-UT01* | *sendEmergencyNotification(notifikasi)* | *Normal* | *Panggil pengiriman dengan kirimEmail berhasil pada percobaan pertama (emailTujuan = 'wali@test.id')* | *Mengembalikan true, mencatat jumlahPercobaan = 1 dan status 'Terkirim'* | *status = 'Terkirim', jumlahPercobaan = 1, mengembalikan true* | *Pass* |
| *C24-UT02* | *sendEmergencyNotification(notifikasi)* | *Batas (Retry Maks 3x)* | *Simulasi kirimEmail melempar ECONNREFUSED terus-menerus* | *Melakukan 1 kirim awal + 3 retry (4 percobaan total), status menjadi 'Gagal Terkirim', mengembalikan false* | *kirimEmail dipanggil 4 kali, jumlahPercobaan = 4, status = 'Gagal Terkirim', kembali false* | *Pass* |
| *C24-UT03* | *sendEmergencyNotification(notifikasi)* | *Negatif* | *Panggil pengiriman saat emailTujuan tidak tersedia (null / kosong)* | *Tidak mengirim e-mail, langsung menyimpan status 'Gagal Terkirim' dan mengembalikan false* | *kirimEmail tidak dipanggil, status 'Gagal Terkirim', mengembalikan false* | *Pass* |
| *C24-UT04* | *loadEmergencyDetail(idWali) & getListNotifikasi()* | *Normal & Negatif* | *Uji dengan ID wali valid (mengembalikan daftar notifikasi darurat aktif) dan akun tanpa data wali (404)* | *Mengembalikan daftar kondisi pelajar yang dirawat bila ditemukan; HTTP 404 bila wali tidak ditemukan* | *Endpoint & metode statis mengembalikan daftar pada kasus valid dan HTTP 404 saat wali tidak ada* | *Pass* |
| *C24-UT05* | *confirmReceived(idNotifikasi, idWali) & postKonfirmasiDiterima()* | *Normal* | *Konfirmasi penerimaan notifikasi milik wali yang sah* | *Mengembalikan true dan mengubah status notifikasi di DB menjadi 'Diterima' beserta waktu_diterima* | *Status diperbarui menjadi 'Diterima' dan endpoint mengembalikan HTTP 200* | *Pass* |
| *C24-UT06* | *confirmReceived(idNotifikasi, idWali)* | *Negatif* | *ID notifikasi kosong (400), ID tidak ditemukan (404), dan notifikasi milik wali lain (403)* | *Ketiganya ditolak sesuai kode HTTP masing-masing* | *Ketiga kasus melempar AppError berstatus 400, 404, dan 403* | *Pass* |
| *C24-UT07* | *markFollowUp(idNotifikasi, idWali) & postTindakLanjut()* | *Normal & Batas* | *Tandai tindak lanjut pertama dalam transaksi DB, lalu ulangi saat status sudah 'Sudah Ditindaklanjuti'* | *Mengubah status notifikasi menjadi 'Sudah Ditindaklanjuti', memulihkan status_darurat = false, dan idempoten saat diulang* | *Transaksi berhasil memulihkan status pelajar; panggilan kedua tetap mengembalikan true* | *Pass* |
| *C24-UT08* | *evaluasiPelajar(pelajar, daftarCheckIn)* | *Batas* | *Uji kondisi check-in stabil (tanpa notifikasi) vs melampaui ambang batas (≥ 3 hari tidak check-in / penurunan kondisi drastis)* | *Kondisi normal tidak memicu darurat; kondisi melewati ambang memicu pembuatan NotifikasiDarurat dan status_darurat = true* | *Kondisi stabil tidak memicu aksi; kondisi darurat menghasilkan notifikasi serta mengirim e-mail* | *Pass* |
| *C24-UT09* | *tentukanEmailTujuan() & race condition 23505* | *Normal & Negatif* | *Fallback e-mail wali (dari wali.email ke pelajar.email_wali) dan konflik unik DB 23505 saat evaluasi serentak* | *Menggunakan e-mail wali yang tersedia dan mengembalikan notifikasi eksisting secara aman saat 23505* | *Fallback e-mail tepat dan race condition 23505 ditangani tanpa crash* | *Pass* |
| *C24-UT10* | *jalankanEvaluasiHarian() & NotifikasiDarurat (findBelumDirespons(), findById())* | *Normal & Negatif* | *Jalankan evaluasi harian terhadap pelajar aktif & notifikasi > 24 jam, serta uji model NotifikasiDarurat untuk masukan kosong/valid* | *Mengirim ulang reminder untuk notifikasi belum direspons > 24 jam; mengembalikan null untuk ID kosong* | *Evaluasi mengembalikan rekap jumlah pelajar/darurat/kirim ulang dengan tepat* | *Pass* |

Tabel 4.2.5b. Ringkasan Cakupan Kelas C24

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *sendEmergencyNotification(), loadEmergencyDetail(idWali), confirmReceived(idNotifikasi), markFollowUp(idNotifikasi)* |
| Operasi yang diuji | *Seluruh 4 operasi public DPPL plus handler HTTP getListNotifikasi(), postKonfirmasiDiterima(), postTindakLanjut(), fungsi evaluasi evaluasiPelajar(), jalankanEvaluasiHarian(), serta NotifikasiDarurat* |
| ID Algoritma yang tercakup | *Algo-C24-01, Algo-C24-02, Algo-C24-03, Algo-C24-04* |
| Coverage (wajib ≥ 70%) | *NotifikasiDaruratController.js: 97,89% lines / 88,88% branches (97,91% stmts, 100% funcs); NotifikasiDarurat.js: 100% lines / 83,33% branches; alat: Jest --coverage; bukti pada Subbab 4.6* |

### 4.2.6 Kelas PasswordController

**ID Kelas:** *C27*  
**Nama Kelas:** *PasswordController*  
**Tingkat:** *Mendalam*

Tabel 4.2.6. Hasil Pengujian Unit Kelas C27

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C27-UT01* | *lupaPassword() (sendResetLink)* | *Normal* | *Request POST /api/auth/forgot-password dengan e-mail terdaftar "nadia.psikolog@mahasehat.id"* | *Membuat token acak, menyimpan hash SHA-256 ke DB, mengirim tautan reset lewat mailer, HTTP 200* | *Token disimpan dalam bentuk hash SHA-256 (bukan plaintext), mailer dipanggil 1x, HTTP 200* | *Pass* |
| *C27-UT02* | *lupaPassword() (sendResetLink)* | *Negatif* | *Request dengan e-mail kosong "" atau format tidak valid "bukan-email"* | *Ditolak dengan HTTP 400 tanpa memanggil DB atau mailer* | *Mengembalikan HTTP 400 dengan pesan format e-mail tidak valid* | *Pass* |
| *C27-UT03* | *lupaPassword() (sendResetLink)* | *Negatif* | *Request dengan e-mail berformat sah namun tidak terdaftar "tidak.terdaftar@test.id"* | *Mengembalikan HTTP 404 bahwa e-mail tidak ditemukan* | *Mengembalikan HTTP 404 dan mailer tidak dipanggil* | *Pass* |
| *C27-UT04* | *resetPassword()* | *Batas (8 Karakter)* | *Request POST /api/auth/reset-password dengan password tepat 8 karakter ("Abcdef12"), baik dengan confirm_password sama maupun tanpa confirm_password* | *Diterima (≥ 8 karakter), hash diperbarui via setPassword(), sesi lama diakhiri, HTTP 200* | *Kedua variasi berhasil memperbarui sandi dan menaikkan versi_token, HTTP 200* | *Pass* |
| *C27-UT05* | *resetPassword()* | *Batas (7 Karakter)* | *Request dengan password panjang 7 karakter ("Abcdef1")* | *Ditolak dengan HTTP 400 karena di bawah batas minimum 8 karakter* | *Mengembalikan HTTP 400 dengan pesan sandi minimal 8 karakter* | *Pass* |
| *C27-UT06* | *resetPassword()* | *Negatif* | *Request dengan password bukan bertipe string (12345678) dan confirm_password tidak cocok dengan password* | *Ditolak dengan HTTP 400* | *Kedua kasus mengembalikan HTTP 400 sebelum menyentuh basis data* | *Pass* |
| *C27-UT07* | *resetPassword()* | *Negatif* | *Request dengan token kosong, bukan string, token tidak terdaftar di DB, atau token kedaluwarsa (reset_token_exp lewat)* | *Ditolak dengan HTTP 404 bahwa tautan reset tidak valid/kedaluwarsa* | *Seluruh kasus token mengembalikan HTTP 404 tanpa mengubah sandi* | *Pass* |

Tabel 4.2.6b. Ringkasan Cakupan Kelas C27

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *sendResetLink(email), resetPassword(newPassword, confirmPassword)* |
| Operasi yang diuji | *Seluruh operasi public pada implementasi lupaPassword() (padanan sendResetLink) dan resetPassword(), termasuk logika internal generateResetLink serta validateNewPassword* |
| ID Algoritma yang tercakup | *Algo-C27-01, Algo-C27-02, Algo-C27-03, Algo-C27-04* |
| Coverage (wajib ≥ 70%) | *100% lines / 95,45% branches (100% stmts, 100% funcs); alat: Jest --coverage; bukti pada Subbab 4.6* |

<!-- Subbab 4.2.7 dst.: kelas C04, C05, C06, C07, C08, C09, C14, C17, C20, C23 -->

### 4.2.3 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.4 Kelas TenagaKesehatan

**ID Kelas:** *C04*  
**Nama Kelas:** *TenagaKesehatan*  
**Tingkat:** *Sedang*

Tabel 4.2.4. Hasil Pengujian Unit Kelas C04

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C04-UT01* | *`getProfil()`* | *Normal* | *Tenaga kesehatan Siti Rahma, Psikolog* | *Teks profil memuat nama, jenis, e-mail, dan telepon* | *Sesuai* | *Pass* |
| *C04-UT02* | *`findAll()`* | *Normal* | *Basis data mengembalikan 2 baris* | *Mengembalikan 2 objek TenagaKesehatan sesuai urutan query* | *Sesuai* | *Pass* |
| *C04-UT03* | *`findAll()`* | *Batas* | *Basis data tidak punya data* | *Mengembalikan array kosong* | *Sesuai* | *Pass* |
| *C04-UT04* | *`findById()`* | *Normal* | *ID NAKES-1 ada di basis data* | *Mengembalikan objek dengan atribut sesuai baris* | *Sesuai* | *Pass* |
| *C04-UT05* | *`findById()`* | *Negatif* | *ID tidak ada di basis data* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C04-UT06* | *`findDetailDenganFasilitas()`* | *Negatif* | *ID tidak ada di basis data* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C04-UT07* | *`getJadwalTersedia()`* | *Normal* | *3 slot: masa depan tersedia, masa depan terisi, masa lalu tersedia* | *Hanya slot masa depan yang tersedia dikembalikan* | *Sesuai* | *Pass* |
| *C04-UT08* | *`getJadwalTersedia()`* | *Batas* | *Tenaga kesehatan belum punya slot* | *Mengembalikan array kosong* | *Sesuai* | *Pass* |
| *C04-UT09* | *`perbaruiProfil()`* | *Normal* | *Nama, telepon, e-mail, jenis, STR, lokasi diisi semua* | *Query UPDATE dijalankan dan atribut objek ikut berubah* | *Sesuai* | *Pass* |
| *C04-UT10* | *`perbaruiProfil()`* | *Batas* | *Jenis, STR, dan lokasi tidak diisi* | *Ketiganya dikirim sebagai null agar nilai lama dipertahankan (COALESCE)* | *Sesuai* | *Pass* |
| *C04-UT11* | *`setEstimasiBiaya()`* | *Negatif* | *Tenaga kesehatan belum terhubung ke fasilitas* | *Mengembalikan false tanpa menjalankan query* | *Sesuai* | *Pass* |
| *C04-UT12* | *`setEstimasiBiaya()`* | *Normal* | *Tarif 150000 dan fasilitas FAS-1 ada* | *Mengembalikan true dan query memakai tarif serta ID fasilitas* | *Sesuai* | *Pass* |
| *C04-UT13* | *`setEstimasiBiaya()`* | *Negatif* | *Query tidak mengubah baris apa pun (rowCount 0)* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C04-UT14* | *`tambah()`* | *Normal* | *Data baru tanpa ID fasilitas* | *Mengembalikan ID berawalan NAKES- dan ID fasilitas dikirim sebagai null* | *Sesuai* | *Pass* |

### 4.2.5 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.6 Kelas CheckIn

**ID Kelas:** *C06*  
**Nama Kelas:** *CheckIn*  
**Tingkat:** *Mendalam*

Tabel 4.2.6. Hasil Pengujian Unit Kelas C06

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C06-UT01* | *`createCheckIn()`* | *Normal* | *Mood 3, tidur 22:00, bangun 06:00, pola makan " Teratur "* | *Objek terbentuk dengan ID, tanggal hari ini, dan pola makan terpotong spasi* | *Sesuai* | *Pass* |
| *C06-UT02* | *`createCheckIn()`* | *Batas* | *Mood 1 dan mood 5* | *Keduanya diterima* | *Sesuai* | *Pass* |
| *C06-UT03* | *`createCheckIn()`* | *Negatif* | *Mood 0 dan mood 6* | *Melempar AppError status 400 "Data check-in tidak valid."* | *Sesuai* | *Pass* |
| *C06-UT04* | *`createCheckIn()`* | *Negatif* | *Mood 2.5 (bukan bilangan bulat) dan mood "3" (string)* | *Melempar kesalahan data tidak valid* | *Sesuai* | *Pass* |
| *C06-UT05* | *`createCheckIn()`* | *Negatif* | *Jam tidur "25:00" dan jam bangun "6:00" (format salah)* | *Melempar kesalahan data tidak valid* | *Sesuai* | *Pass* |
| *C06-UT06* | *`createCheckIn()`* | *Negatif* | *Jam tidur sama dengan jam bangun* | *Melempar kesalahan data tidak valid* | *Sesuai* | *Pass* |
| *C06-UT07* | *`createCheckIn()`* | *Negatif* | *Pola makan kosong, spasi saja, atau tidak diisi* | *Melempar kesalahan data tidak valid* | *Sesuai* | *Pass* |
| *C06-UT08* | *`createCheckIn()`* | *Negatif* | *Catatan refleksi berupa string kosong* | *Melempar kesalahan data tidak valid* | *Sesuai* | *Pass* |
| *C06-UT09* | *`createCheckIn()`* | *Batas* | *Catatan refleksi null dan pemicu stres tidak diisi* | *Diterima, catatan tetap null dan pemicu menjadi string kosong* | *Sesuai* | *Pass* |
| *C06-UT10* | *`validateData()`* | *Negatif* | *Tanggal check-in besok (masa depan)* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C06-UT11* | *`validateData()`* | *Normal* | *Baris basis data dengan jam format HH:mm:ss* | *Jam dipotong menjadi HH:mm dan data dinyatakan valid* | *Sesuai* | *Pass* |
| *C06-UT12* | *`getCheckInData()`* | *Normal* | *Check-in valid dengan catatan terenkripsi* | *Mengembalikan objek berisi seluruh atribut check-in* | *Sesuai* | *Pass* |

Tabel 4.2.6b. Ringkasan Cakupan Kelas C06

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *createCheckIn(), getCheckInData(), validateData()* |
| Operasi yang diuji | *createCheckIn(), getCheckInData(), validateData()* |
| ID Algoritma yang tercakup | *Algo-C06-01, Algo-C06-02* |
| Coverage (wajib ≥ 70%) | *100% baris / 100% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.7 Kelas LaporanKesehatan

**ID Kelas:** *C07*  
**Nama Kelas:** *LaporanKesehatan*  
**Tingkat:** *Mendalam*

Tabel 4.2.7. Hasil Pengujian Unit Kelas C07

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C07-UT01* | *`evaluateThreshold()`* | *Batas* | *Tidak ada data check-in dan tanpa tanggal terakhir* | *Indikator "Belum Dapat Dinilai", 0 hari tanpa check-in, ambang tidak terlampaui* | *Sesuai* | *Pass* |
| *C07-UT02* | *`evaluateThreshold()`* | *Batas* | *Tidak ada data periode ini, check-in terakhir 20 hari lalu* | *Jumlah hari tanpa check-in = 20 dan ambang terlampaui* | *Sesuai* | *Pass* |
| *C07-UT03* | *`evaluateThreshold()`* | *Normal* | *Check-in hari ini mood 4 dan kemarin mood 5, tidur 8 jam* | *Risiko "Rendah", ringkasan memuat rata-rata mood 4.5 dan tidur 8 jam* | *Sesuai* | *Pass* |
| *C07-UT04* | *`evaluateThreshold()`* | *Normal* | *Mood 2, 1, 2 selama 3 hari berturut-turut sampai hari ini* | *Risiko "Tinggi" dan ambang terlampaui* | *Sesuai* | *Pass* |
| *C07-UT05* | *`evaluateThreshold()`* | *Batas* | *Mood rendah hanya 2 hari berturut-turut* | *Tidak "Tinggi", menjadi "Sedang" karena rata-rata mood 2* | *Sesuai* | *Pass* |
| *C07-UT06* | *`evaluateThreshold()`* | *Batas* | *Rata-rata mood tepat 2.5 (mood 2 dan 3)* | *Risiko "Sedang"* | *Sesuai* | *Pass* |
| *C07-UT07* | *`evaluateThreshold()`* | *Batas* | *Rata-rata tidur tepat 5 jam dan mood 3* | *Risiko "Rendah" (batas 5 jam belum dianggap kurang)* | *Sesuai* | *Pass* |
| *C07-UT08* | *`evaluateThreshold()`* | *Batas* | *Rata-rata tidur 4.9 jam dan mood 4* | *Risiko "Sedang"* | *Sesuai* | *Pass* |
| *C07-UT09* | *`evaluateThreshold()`* | *Batas* | *Mood 2 pada hari ke-0, 1, dan 3 (hari ke-2 terlewat)* | *Rangkaian putus sehingga tidak "Tinggi"* | *Sesuai* | *Pass* |
| *C07-UT10* | *`evaluateThreshold()`* | *Batas* | *Rentang data tepat 7 hari dan 8 hari* | *Periode "Mingguan" untuk 7 hari dan "Bulanan" untuk 8 hari* | *Sesuai* | *Pass* |
| *C07-UT11* | *`evaluateThreshold()`* | *Batas* | *Check-in terakhir tepat 3 hari lalu, kondisi baik* | *Ambang terlampaui (>= 3 hari) walau risiko "Rendah"* | *Sesuai* | *Pass* |
| *C07-UT12* | *`detectEmergency()`* | *Normal* | *Tidak check-in 4 hari dan mood rendah 3 hari berturut-turut* | *Mengembalikan true* | *Sesuai* | *Pass* |
| *C07-UT13* | *`detectEmergency()`* | *Negatif* | *Belum pernah memanggil evaluateThreshold()* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C07-UT14* | *`detectEmergency()`* | *Negatif* | *Tidak ada data check-in ("Belum Dapat Dinilai")* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C07-UT15* | *`detectEmergency()`* | *Batas* | *Risiko "Tinggi" tetapi baru 2 hari tidak check-in* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C07-UT16* | *`detectEmergency()`* | *Batas* | *Risiko "Sedang" dan tepat 3 hari tidak check-in* | *Mengembalikan true* | *Sesuai* | *Pass* |
| *C07-UT17* | *`detectEmergency()`* | *Negatif* | *Tidak check-in 5 hari tetapi kondisi terakhir baik ("Rendah")* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C07-UT18* | *`hitungDurasiTidur()`* | *Batas* | *22:00 ke 06:00, 01:00 ke 06:30, dan jam tidur sama dengan jam bangun* | *8 jam, 5.5 jam, dan 24 jam (melewati tengah malam dihitung benar)* | *Sesuai* | *Pass* |

Tabel 4.2.7b. Ringkasan Cakupan Kelas C07

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *evaluateThreshold(), detectEmergency()* |
| Operasi yang diuji | *evaluateThreshold(), detectEmergency() (beserta hitungDurasiTidur())* |
| ID Algoritma yang tercakup | *Algo-C07-01, Algo-C07-02* |
| Coverage (wajib ≥ 70%) | *100% baris / 94.44% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.8 Kelas FasilitasKesehatan

**ID Kelas:** *C08*  
**Nama Kelas:** *FasilitasKesehatan*  
**Tingkat:** *Sedang*

Tabel 4.2.8. Hasil Pengujian Unit Kelas C08

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C08-UT01* | *`getLokasi()`* | *Normal* | *Fasilitas dengan lokasi "-6.9175,107.6191"* | *Mengembalikan string lokasi tersebut* | *Sesuai* | *Pass* |
| *C08-UT02* | *`getEstimasiBiaya()`* | *Normal* | *Fasilitas dengan estimasi biaya 150000* | *Mengembalikan 150000* | *Sesuai* | *Pass* |
| *C08-UT03* | *`getLokasi()`* | *Batas* | *Fasilitas dengan lokasi null* | *Mengembalikan null tanpa kesalahan* | *Sesuai* | *Pass* |
| *C08-UT04* | *`findAll()`* | *Normal* | *Basis data mengembalikan 2 fasilitas* | *Mengembalikan 2 objek FasilitasKesehatan dengan atribut terisi* | *Sesuai* | *Pass* |
| *C08-UT05* | *`findAll()`* | *Batas* | *Basis data tidak punya fasilitas* | *Mengembalikan array kosong* | *Sesuai* | *Pass* |
| *C08-UT06* | *`findAll()`* | *Negatif* | *Query ke basis data gagal* | *Galat diteruskan ke pemanggil (promise ditolak)* | *Sesuai* | *Pass* |

### 4.2.9 Kelas JadwalKonsultasi

**ID Kelas:** *C09*  
**Nama Kelas:** *JadwalKonsultasi*  
**Tingkat:** *Mendalam*

Tabel 4.2.9. Hasil Pengujian Unit Kelas C09

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C09-UT01* | *`getDate(), getTime(), getStatus()`* | *Normal* | *Baris basis data dengan waktu "10:00:00"* | *Tanggal "2099-01-01", waktu dipotong "10:00", status "Belum Diajukan"* | *Sesuai* | *Pass* |
| *C09-UT02* | *`isAvailable()`* | *Normal* | *Slot masa depan dan statusKetersediaan true* | *Mengembalikan true* | *Sesuai* | *Pass* |
| *C09-UT03* | *`isAvailable()`* | *Negatif* | *Slot masa depan tetapi statusKetersediaan false* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C09-UT04* | *`isAvailable()`* | *Negatif* | *Slot sudah lewat (tanggal 2000-01-01) walau statusKetersediaan true* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C09-UT05* | *`findById()`* | *Normal* | *ID J1 ada di basis data* | *Mengembalikan objek JadwalKonsultasi dengan atribut sesuai* | *Sesuai* | *Pass* |
| *C09-UT06* | *`findById()`* | *Negatif* | *ID tidak ada di basis data* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C09-UT07* | *`updateAvailability()`* | *Normal* | *Ubah ketersediaan menjadi false* | *Query UPDATE dijalankan dan statusKetersediaan objek menjadi false* | *Sesuai* | *Pass* |
| *C09-UT08* | *`updateStatus()`* | *Negatif* | *Status "Ditolak" (tidak dikenal)* | *Melempar AppError status 400* | *Sesuai* | *Pass* |
| *C09-UT09* | *`updateStatus()`* | *Negatif* | *Menyetujui slot berstatus "Belum Diajukan"* | *Melempar AppError status 409 dan status tidak berubah* | *Sesuai* | *Pass* |
| *C09-UT10* | *`updateStatus()`* | *Normal* | *Menyetujui slot berstatus "Diajukan"* | *Query UPDATE dijalankan dan status menjadi "Disetujui"* | *Sesuai* | *Pass* |
| *C09-UT11* | *`updateStatus()`* | *Batas* | *Menyetujui slot berstatus "Rescheduled"* | *Diterima, status menjadi "Disetujui"* | *Sesuai* | *Pass* |
| *C09-UT12* | *`updateStatus()`* | *Negatif* | *Menjadwalkan ulang slot berstatus "Belum Diajukan"* | *Melempar AppError status 409* | *Sesuai* | *Pass* |
| *C09-UT13* | *`updateStatus()`* | *Normal* | *Menjadwalkan ulang slot berstatus "Disetujui"* | *Status menjadi "Rescheduled"* | *Sesuai* | *Pass* |
| *C09-UT14* | *`reservasi()`* | *Normal* | *Slot tersedia, pelajar PLJ-1 dengan keluhan* | *Mengembalikan true, slot tidak tersedia, status "Diajukan", pelajar dan keluhan tercatat* | *Sesuai* | *Pass* |
| *C09-UT15* | *`reservasi()`* | *Negatif* | *Slot sudah diambil pelajar lain (status_ketersediaan false di basis data)* | *Mengembalikan false dan tidak ada UPDATE yang dijalankan* | *Sesuai* | *Pass* |
| *C09-UT16* | *`reservasi()`* | *Negatif* | *Slot tidak ditemukan di basis data (baris kosong)* | *Mengembalikan false* | *Sesuai* | *Pass* |
| *C09-UT17* | *`updateSchedule()`* | *Negatif* | *Jadwal baru di masa lalu (2000-01-01 09:00)* | *Melempar AppError status 400 dan transaksi tidak dijalankan* | *Sesuai* | *Pass* |
| *C09-UT18* | *`updateSchedule()`* | *Negatif* | *Waktu baru bentrok dengan jadwal lain tenaga kesehatan yang sama* | *Melempar AppError status 409 dan jadwal tidak berubah* | *Sesuai* | *Pass* |
| *C09-UT19* | *`updateSchedule()`* | *Normal* | *Waktu baru di masa depan dan tidak bentrok, status "Diajukan"* | *Tanggal dan waktu berubah, status menjadi "Rescheduled"* | *Sesuai* | *Pass* |
| *C09-UT20* | *`updateSchedule()`* | *Negatif* | *Slot berstatus "Belum Diajukan" dijadwalkan ulang* | *Melempar AppError status 409 dan tanggal tidak berubah* | *Sesuai* | *Pass* |
| *C09-UT21* | *`tolakPengajuan()`* | *Negatif* | *Menolak slot berstatus "Belum Diajukan"* | *Melempar AppError status 409 dan tidak ada query dijalankan* | *Sesuai* | *Pass* |
| *C09-UT22* | *`tolakPengajuan()`* | *Normal* | *Menolak slot berstatus "Diajukan" milik PLJ-1* | *Slot kembali kosong: pelajar dan keluhan null, status "Belum Diajukan", tersedia true* | *Sesuai* | *Pass* |
| *C09-UT23* | *`findPengajuanMasuk()`* | *Normal* | *Basis data mengembalikan 1 pengajuan dengan nama pelajar* | *Mengembalikan objek JadwalKonsultasi yang memuat namaPelajar* | *Sesuai* | *Pass* |
| *C09-UT24* | *`findByPelajar() dan findByTenagaKesehatan()`* | *Normal* | *Basis data mengembalikan 1 baris untuk masing-masing* | *Objek memuat nama tenaga kesehatan (findByPelajar) dan nama pelajar (findByTenagaKesehatan)* | *Sesuai* | *Pass* |

Tabel 4.2.9b. Ringkasan Cakupan Kelas C09

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *getDate(), getTime(), getStatus(), updateAvailability(), updateStatus(), isAvailable(), reservasi(), updateSchedule(), findById()* |
| Operasi yang diuji | *Seluruh operasi pada kolom kiri, ditambah tolakPengajuan(), findPengajuanMasuk(), findByPelajar(), findByTenagaKesehatan()* |
| ID Algoritma yang tercakup | *Algo-C09-01 sampai Algo-C09-06* |
| Coverage (wajib ≥ 70%) | *100% baris / 92.85% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.10 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.11 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.12 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.13 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.14 Kelas CheckInController

**ID Kelas:** *C14*  
**Nama Kelas:** *CheckInController*  
**Tingkat:** *Mendalam*

Tabel 4.2.14. Hasil Pengujian Unit Kelas C14

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C14-UT17* | *`validateCheckInFormat()`* | *Normal* | *Mood 3* | *Mengembalikan true* | *Sesuai* | *Pass* |
| *C14-UT18* | *`validateCheckInFormat()`* | *Batas* | *Mood 1 dan 5 (diterima), mood 0 dan 6 (ditolak)* | *true untuk 1 dan 5, false untuk 0 dan 6* | *Sesuai* | *Pass* |
| *C14-UT19* | *`validateCheckInFormat()`* | *Normal* | *Mood berupa string "4"* | *Mengembalikan true (dikonversi ke angka)* | *Sesuai* | *Pass* |
| *C14-UT20* | *`validateCheckInFormat()`* | *Negatif* | *Mood undefined, null, "", 2.5, "abc", dan tanpa argumen* | *Seluruhnya mengembalikan false* | *Sesuai* | *Pass* |
| *C14-UT21* | *`validateCheckInFormat()`* | *Normal* | *Hanya properti skalaMood (tanpa mood) bernilai 2* | *Mengembalikan true* | *Sesuai* | *Pass* |
| *C14-UT22* | *`encryptJournal()`* | *Negatif* | *null, undefined, "", dan "   "* | *Seluruhnya mengembalikan null* | *Sesuai* | *Pass* |
| *C14-UT23* | *`encryptJournal()`* | *Normal* | *Catatan "Hari ini saya cemas"* | *Ciphertext berformat iv:data yang bila didekripsi kembali ke teks asli* | *Sesuai* | *Pass* |
| *C14-UT24* | *`encryptJournal()`* | *Normal* | *Catatan berupa objek { cipher, iv, key }* | *Objek diubah ke JSON lalu dienkripsi, dekripsi menghasilkan JSON yang sama* | *Sesuai* | *Pass* |
| *C14-UT25* | *`submitCheckIn()`* | *Normal* | *Mood 4, tidur 23:00-06:30, makan "Teratur", pemicu ["Akademik","Keluarga"], catatan "Saya cemas"* | *Respons 201, check-in tersimpan, pemicu digabung, catatan tersimpan terenkripsi* | *Sesuai* | *Pass* |
| *C14-UT26* | *`submitCheckIn()`* | *Batas* | *Hanya mood 3 (tanpa tidur, makan, pemicu, catatan)* | *Memakai nilai bawaan tidur 22:30, bangun 06:00, makan "Teratur", catatan null* | *Sesuai* | *Pass* |
| *C14-UT27* | *`submitCheckIn()`* | *Batas* | *Catatan berisi spasi saja* | *Check-in tetap diterima dan catatan disimpan null* | *Sesuai* | *Pass* |
| *C14-UT28* | *`submitCheckIn()`* | *Negatif* | *Mood 9 (di luar 1-5)* | *Diteruskan ke next sebagai AppError 400 dan check-in tidak disimpan* | *Sesuai* | *Pass* |
| *C14-UT29* | *`submitCheckIn()`* | *Negatif* | *Body kosong (tanpa mood)* | *Diteruskan ke next sebagai AppError 400* | *Sesuai* | *Pass* |
| *C14-UT30* | *`submitCheckIn()`* | *Negatif* | *Profil pelajar tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C14-UT31* | *`submitCheckIn()`* | *Negatif* | *Jam tidur sama dengan jam bangun (23:00 dan 23:00)* | *Diteruskan ke next sebagai AppError 400 dari validasi CheckIn* | *Sesuai* | *Pass* |
| *C14-UT32* | *`getHistory()`* | *Normal* | *Pelajar punya 1 riwayat check-in* | *Respons 200 berisi riwayat tersebut* | *Sesuai* | *Pass* |
| *C14-UT33* | *`getTodayStatus()`* | *Normal* | *Pelajar sudah check-in hari ini* | *sudah_check_in true dan memuat check-in hari ini* | *Sesuai* | *Pass* |
| *C14-UT34* | *`getTodayStatus()`* | *Negatif* | *Pelajar belum check-in hari ini* | *sudah_check_in false dan check_in null* | *Sesuai* | *Pass* |

Tabel 4.2.14b. Ringkasan Cakupan Kelas C14

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *submitCheckIn(), validateCheckInFormat(), encryptJournal()* |
| Operasi yang diuji | *submitCheckIn(), validateCheckInFormat(), encryptJournal(), getHistory(), getTodayStatus()* |
| ID Algoritma yang tercakup | *Algo-C14-01, Algo-C14-02, Algo-C14-03* |
| Coverage (wajib ≥ 70%) | *100% baris / 90.24% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.15 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.16 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.17 Kelas ReportController

**ID Kelas:** *C17*  
**Nama Kelas:** *ReportController*  
**Tingkat:** *Mendalam*

Tabel 4.2.17. Hasil Pengujian Unit Kelas C17

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C17-UT01* | *`summary()`* | *Negatif* | *Pengguna berperan TenagaKesehatan* | *Diteruskan ke next sebagai AppError 403* | *Sesuai* | *Pass* |
| *C17-UT02* | *`summary()`* | *Normal* | *Pelajar dengan 3 check-in (mood 4, 4, 5; tidur 8 jam) sampai hari ini* | *Respons 200: rata-rata mood 4.3, rata-rata tidur 8, streak 3, risiko "Rendah", sudah_check_in true* | *Sesuai* | *Pass* |
| *C17-UT03* | *`summary()`* | *Normal* | *Pelajar membuka laporan sendiri, check-in memuat catatan terenkripsi "Saya cemas"* | *Catatan didekripsi pada respons dan jurnal diminta dari basis data (denganJurnal true)* | *Sesuai* | *Pass* |
| *C17-UT04* | *`summary()`* | *Normal* | *Wali membuka laporan pelajar yang punya catatan terenkripsi (KNF02)* | *Catatan kosong, jurnal tidak pernah diminta (denganJurnal false), ringkasan memakai data wali* | *Sesuai* | *Pass* |
| *C17-UT05* | *`summary()`* | *Negatif* | *Profil wali tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C17-UT06* | *`summary()`* | *Negatif* | *Profil pelajar tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C17-UT07* | *`summary()`* | *Batas* | *Pelajar belum pernah check-in* | *Risiko "Belum Dapat Dinilai", streak 0, indeks 0, pola makan "-", sudah_check_in false* | *Sesuai* | *Pass* |
| *C17-UT08* | *`summary()`* | *Normal* | *Pola makan "Teratur", "kurang teratur", "Tidak teratur" masing-masing 1 kali* | *jenis_makan menghitung 1 untuk tiga kategori resmi* | *Sesuai* | *Pass* |
| *C17-UT09* | *`summary()`* | *Normal* | *Pemicu "Ujian, Keluarga" (hari ini) dan "Tugas" (kemarin)* | *stres: Akademik 67% dan Keluarga 33%, rerata pemicu 1.5* | *Sesuai* | *Pass* |
| *C17-UT10* | *`summary()`* | *Batas* | *Check-in hari ini dan 2 hari lalu (kemarin terlewat), serta check-in hanya kemarin* | *Streak 1 untuk kasus pertama dan streak 0 untuk kasus kedua* | *Sesuai* | *Pass* |
| *C17-UT11* | *`summary()`* | *Normal* | *Check-in 2 hari terakhir dengan mood 3 (kemarin) dan 5 (hari ini)* | *Seri grafik 7 hari berurutan lama ke baru dengan mood [3, 5]* | *Sesuai* | *Pass* |
| *C17-UT12* | *`riwayat()`* | *Negatif* | *Pengguna berperan OrangTuaWali* | *Diteruskan ke next sebagai AppError 403* | *Sesuai* | *Pass* |
| *C17-UT13* | *`riwayat()`* | *Normal* | *Pelajar punya 1 check-in dengan catatan terenkripsi, tidur 22:00-06:00* | *Respons 200 memuat tanggal, mood, tidur 8, catatan terdekripsi; riwayat diminta 30 entri* | *Sesuai* | *Pass* |
| *C17-UT14* | *`riwayat()`* | *Batas* | *Check-in tanpa catatan refleksi* | *Catatan berupa string kosong* | *Sesuai* | *Pass* |
| *C17-UT15* | *`riwayat()`* | *Negatif* | *Profil pelajar tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |

Tabel 4.2.17b. Ringkasan Cakupan Kelas C17

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *calculateStatistics(), buildTrendChart(), applyPrivacyRestriction()* |
| Operasi yang diuji | *summary() (statistik, seri grafik, pembatasan data wali; mengimplementasikan ketiga operasi DPPL) dan riwayat()* |
| ID Algoritma yang tercakup | *Algo-C17-01, Algo-C17-02, Algo-C17-03* |
| Coverage (wajib ≥ 70%) | *95.59% baris / 71.96% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.18 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.19 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.20 Kelas TenagaKesehatanController

**ID Kelas:** *C20*  
**Nama Kelas:** *TenagaKesehatanController*  
**Tingkat:** *Mendalam*

Tabel 4.2.20. Hasil Pengujian Unit Kelas C20

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C20-UT23* | *`loadTenagaKesehatan()`* | *Normal* | *Tanpa koordinat pengguna* | *Mengembalikan 3 tenaga kesehatan dengan jarak_km null dan urutan asli* | *Sesuai* | *Pass* |
| *C20-UT24* | *`loadTenagaKesehatan()`* | *Normal* | *Koordinat pengguna di Bandung (-6.9,107.6)* | *Urut dari terdekat (Bandung lalu Jakarta), yang tanpa lokasi di urutan terakhir dengan jarak_km null* | *Sesuai* | *Pass* |
| *C20-UT25* | *`loadTenagaKesehatan()`* | *Normal* | *Filter spesialisasi "psikiater" (huruf kecil)* | *Hanya Hendra yang dikembalikan* | *Sesuai* | *Pass* |
| *C20-UT26* | *`loadTenagaKesehatan()`* | *Normal* | *Pencarian "jakarta" pada nama fasilitas* | *Hanya tenaga kesehatan di Klinik Jakarta yang dikembalikan* | *Sesuai* | *Pass* |
| *C20-UT27* | *`loadTenagaKesehatan()`* | *Negatif* | *Latitude 95 (di luar rentang)* | *Koordinat diabaikan, seluruh jarak_km null* | *Sesuai* | *Pass* |
| *C20-UT28* | *`loadTenagaKesehatan()`* | *Negatif* | *Latitude berupa string kosong dan longitude "abc"* | *Koordinat diabaikan, seluruh jarak_km null* | *Sesuai* | *Pass* |
| *C20-UT29* | *`loadTenagaKesehatan()`* | *Batas* | *Koordinat dikirim lewat nama latitude dan longitude* | *Koordinat dipakai, jarak_km Bandung terisi* | *Sesuai* | *Pass* |
| *C20-UT30* | *`processLocationPermission()`* | *Negatif* | *Koordinat tidak valid (lat "abc")* | *Diteruskan ke next sebagai AppError 400* | *Sesuai* | *Pass* |
| *C20-UT31* | *`processLocationPermission()`* | *Normal* | *Pelajar memberi izin lokasi (-6.9,107.6)* | *Lokasi disimpan "-6.9,107.6" dan daftar berjarak dikembalikan dengan status 200* | *Sesuai* | *Pass* |
| *C20-UT32* | *`processLocationPermission()`* | *Normal* | *Pengguna bukan Pelajar (OrangTuaWali) memberi lokasi* | *Lokasi tidak disimpan, daftar tetap dikembalikan* | *Sesuai* | *Pass* |
| *C20-UT33* | *`processLocationPermission()`* | *Batas* | *Role Pelajar tetapi profil pelajar tidak ditemukan* | *Tidak melempar kesalahan, daftar tetap dikembalikan (200)* | *Sesuai* | *Pass* |
| *C20-UT34* | *`updateTarif()`* | *Negatif* | *Tarif 0, -5, "abc", dan tidak diisi* | *Seluruhnya diteruskan ke next sebagai AppError 400* | *Sesuai* | *Pass* |
| *C20-UT35* | *`updateTarif()`* | *Negatif* | *Pengguna bukan tenaga kesehatan (profil tidak ditemukan)* | *Diteruskan ke next sebagai AppError 403* | *Sesuai* | *Pass* |
| *C20-UT36* | *`updateTarif()`* | *Negatif* | *Tenaga kesehatan belum terhubung ke fasilitas (setEstimasiBiaya false)* | *Diteruskan ke next sebagai AppError 400* | *Sesuai* | *Pass* |
| *C20-UT37* | *`updateTarif()`* | *Normal* | *Tarif 150000.6 dari tenaga kesehatan terhubung fasilitas* | *Tarif dibulatkan menjadi 150001, respons 200 memuat estimasi_biaya 150001* | *Sesuai* | *Pass* |
| *C20-UT38* | *`selectTenagaKesehatan()`* | *Negatif* | *ID tenaga kesehatan tidak ada* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C20-UT39* | *`selectTenagaKesehatan()`* | *Normal* | *ID N1 ada, punya 1 jadwal tersedia, koordinat pengguna (-6.9,107.6)* | *Detail dengan jarak_km terisi dan jadwal_tersedia berisi 1 slot* | *Sesuai* | *Pass* |
| *C20-UT40* | *`selectTenagaKesehatan()`* | *Batas* | *Tanpa koordinat pengguna* | *jarak_km bernilai null* | *Sesuai* | *Pass* |
| *C20-UT41* | *`selectTenagaKesehatan()`* | *Negatif* | *Koordinat pengguna valid tetapi lokasi faskes tidak ada* | *jarak_km seharusnya null (sama seperti loadTenagaKesehatan)* | *jarak_km bernilai -1* | *Fail. Penyebab: selectTenagaKesehatan memakai Math.max(calculateDistanceKm(...), -1) sehingga kode galat -1 tampil sebagai jarak, sedangkan loadTenagaKesehatan memakai null. Usulan: jarak >= 0 ? jarak : null.* |
| *C20-UT42* | *`selectTenagaKesehatan()`* | *Batas* | *Detail ada tetapi profil tenaga kesehatan tidak ditemukan (findById null)* | *Jadwal tersedia berupa array kosong* | *Sesuai* | *Pass* |

Tabel 4.2.20b. Ringkasan Cakupan Kelas C20

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *loadTenagaKesehatan(), processLocationPermission(), calculateDistances(), selectTenagaKesehatan()* |
| Operasi yang diuji | *loadTenagaKesehatan(), processLocationPermission(), selectTenagaKesehatan(), updateTarif(); perhitungan jarak diuji di 4.2.XX distance.js* |
| ID Algoritma yang tercakup | *Algo-C20-01, Algo-C20-02, Algo-C20-03, Algo-C20-04* |
| Coverage (wajib ≥ 70%) | *100% baris / 98.46% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.21 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.22 Kelas [Nama Kelas 2]

*[Ulangi pola 4.2.1 untuk setiap kelas bertingkat Mendalam atau Sedang.]*

### 4.2.23 Kelas KonsultasiController

**ID Kelas:** *C23*  
**Nama Kelas:** *KonsultasiController*  
**Tingkat:** *Mendalam*

Tabel 4.2.23. Hasil Pengujian Unit Kelas C23

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C23-UT01* | *`ajukan()`* | *Negatif* | *Profil pelajar tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C23-UT02* | *`ajukan()`* | *Negatif* | *ID jadwal kosong atau tidak dikirim* | *Diteruskan ke next sebagai AppError 400* | *Sesuai* | *Pass* |
| *C23-UT03* | *`ajukan()`* | *Batas* | *Keluhan 9 karakter* | *Diteruskan ke next sebagai AppError 400 "Keluhan minimal 10 karakter."* | *Sesuai* | *Pass* |
| *C23-UT04* | *`ajukan()`* | *Batas* | *Keluhan tepat 10 karakter* | *Diterima, respons 201* | *Sesuai* | *Pass* |
| *C23-UT05* | *`ajukan()`* | *Negatif* | *Jadwal dengan ID tersebut tidak ada* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C23-UT06* | *`ajukan()`* | *Negatif* | *Slot berstatus "Diajukan" (sudah diambil pelajar lain)* | *Diteruskan ke next sebagai AppError 409 dan pengajuan tidak dibuat* | *Sesuai* | *Pass* |
| *C23-UT07* | *`ajukan()`* | *Negatif* | *Slot direbut pelajar lain saat transaksi (ajukanKonsultasi false)* | *Diteruskan ke next sebagai AppError 409 "Slot sudah tidak tersedia."* | *Sesuai* | *Pass* |
| *C23-UT08* | *`ajukan()`* | *Normal* | *Slot J1 kosong dan keluhan 26 karakter* | *Respons 201 memuat id_jadwal J1 dan pengajuan dibuat dengan keluhan yang sudah dipangkas spasinya* | *Sesuai* | *Pass* |
| *C23-UT09* | *`daftarSaya()`* | *Normal* | *Pelajar punya 1 pengajuan* | *Respons 200 berisi daftar pengajuan milik pelajar tersebut* | *Sesuai* | *Pass* |
| *C23-UT10* | *`daftarSaya()`* | *Negatif* | *Profil pelajar tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C23-UT11* | *`daftarMasuk() dan daftarJadwal()`* | *Normal* | *Tenaga kesehatan NAKES-1 membuka daftar pengajuan dan daftar jadwal* | *Kedua daftar diambil berdasarkan ID profil tenaga kesehatan, respons 200* | *Sesuai* | *Pass* |
| *C23-UT12* | *`ubahStatus()`* | *Negatif* | *Status "Ditolak" dan status kosong* | *Diteruskan ke next sebagai AppError 400 tanpa mengambil jadwal* | *Sesuai* | *Pass* |
| *C23-UT13* | *`ubahStatus()`* | *Negatif* | *Jadwal tidak ditemukan* | *Diteruskan ke next sebagai AppError 404* | *Sesuai* | *Pass* |
| *C23-UT14* | *`ubahStatus()`* | *Negatif* | *Jadwal milik tenaga kesehatan lain (NAKES-9)* | *Diteruskan ke next sebagai AppError 403 dan status tidak diubah* | *Sesuai* | *Pass* |
| *C23-UT15* | *`ubahStatus()`* | *Normal* | *Tenaga kesehatan pemilik menyetujui pengajuan berstatus "Diajukan"* | *updateStatus("Disetujui") dipanggil, respons 200 memuat status baru* | *Sesuai* | *Pass* |
| *C23-UT16* | *`ubahStatus()`* | *Normal* | *Status "Rescheduled" dikirim oleh pemilik jadwal* | *Diterima dan updateStatus("Rescheduled") dipanggil* | *Sesuai* | *Pass* |
| *C23-UT17* | *`ubahStatus()`* | *Negatif* | *Model menolak transisi status (melempar AppError 409)* | *Galat diteruskan ke next apa adanya* | *Sesuai* | *Pass* |
| *C23-UT18* | *`jadwalUlang()`* | *Negatif* | *Tanggal "01-01-2099" dan jam "10:00:00" (format salah)* | *Diteruskan ke next sebagai AppError 400 dan jadwal tidak dipindah* | *Sesuai* | *Pass* |
| *C23-UT19* | *`jadwalUlang()`* | *Negatif* | *Jadwal milik tenaga kesehatan lain* | *Diteruskan ke next sebagai AppError 403* | *Sesuai* | *Pass* |
| *C23-UT20* | *`jadwalUlang()`* | *Normal* | *Pemilik jadwal memindah ke 2099-02-02 13:00* | *updateSchedule dipanggil dengan tanggal dan waktu baru, respons 200* | *Sesuai* | *Pass* |
| *C23-UT21* | *`jadwalUlang()`* | *Negatif* | *Model menolak jadwal bentrok (AppError 409)* | *Galat diteruskan ke next* | *Sesuai* | *Pass* |
| *C23-UT22* | *`tolakPengajuan()`* | *Normal* | *Pemilik jadwal menolak pengajuan berstatus "Diajukan"* | *tolakPengajuan dipanggil pada model, respons 200 dengan status "Belum Diajukan"* | *Sesuai* | *Pass* |
| *C23-UT23* | *`tolakPengajuan()`* | *Negatif* | *Jadwal milik tenaga kesehatan lain* | *Diteruskan ke next sebagai AppError 403 dan pengajuan tidak ditolak* | *Sesuai* | *Pass* |
| *C23-UT24* | *`tolakPengajuan()`* | *Negatif* | *Model menolak karena pengajuan belum menunggu (AppError 409)* | *Galat diteruskan ke next* | *Sesuai* | *Pass* |

Tabel 4.2.23b. Ringkasan Cakupan Kelas C23

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *approvePengajuan(), reschedule()* |
| Operasi yang diuji | *ajukan(), daftarSaya(), daftarMasuk(), daftarJadwal(), ubahStatus() (approvePengajuan), jadwalUlang() (reschedule), tolakPengajuan()* |
| ID Algoritma yang tercakup | *Algo-C23-01, Algo-C23-02* |
| Coverage (wajib ≥ 70%) | *100% baris / 87.8% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.XX Modul encryption.js

**Nama Modul:** *encryption.js*  
**Tingkat:** *Mendalam*

Modul ini dipakai operasi encryptJournal() pada C14 CheckInController (KNF01), sehingga ID pengujiannya memakai awalan C14.

Tabel 4.2.XX. Hasil Pengujian Unit Modul encryption.js

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C14-UT01* | *`encryptAES256()`* | *Normal* | *Teks "Hari ini saya merasa cemas"* | *Format `<iv_hex>:<ciphertext_hex>`, teks asli tidak terlihat* | *Sesuai* | *Pass* |
| *C14-UT02* | *`encryptAES256()`* | *Normal* | *Teks yang sama dienkripsi dua kali* | *Ciphertext berbeda (IV acak)* | *Sesuai* | *Pass* |
| *C14-UT03* | *`encryptAES256()`* | *Negatif* | *null dan undefined* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C14-UT04* | *`encryptAES256()`* | *Batas* | *String kosong dan string spasi saja* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C14-UT05* | *`encryptAES256()`* | *Normal* | *Angka 12345* | *Dikonversi ke string, dekripsi menghasilkan "12345"* | *Sesuai* | *Pass* |
| *C14-UT06* | *`encryptAES256()`* | *Negatif* | *AES_SECRET_KEY tidak diatur* | *Melempar kesalahan "AES_SECRET_KEY belum diatur"* | *Sesuai* | *Pass* |
| *C14-UT07* | *`encryptAES256()`* | *Batas* | *null tanpa AES_SECRET_KEY* | *Mengembalikan null tanpa kesalahan* | *Sesuai* | *Pass* |
| *C14-UT08* | *`encryptAES256()`* | *Batas* | *Kunci "pendek" (bukan 32 byte)* | *Tetap valid (derivasi SHA-256), dekripsi benar* | *Sesuai* | *Pass* |
| *C14-UT09* | *`decryptAES256()`* | *Normal* | *Enkripsi lalu dekripsi teks biasa* | *Kembali ke teks asli* | *Sesuai* | *Pass* |
| *C14-UT10* | *`decryptAES256()`* | *Normal* | *Teks Unicode dan emoji* | *Kembali ke teks asli* | *Sesuai* | *Pass* |
| *C14-UT11* | *`decryptAES256()`* | *Batas* | *Teks "  halo  "* | *Hasil "halo" (spasi pinggir dihapus)* | *Sesuai* | *Pass* |
| *C14-UT12* | *`decryptAES256()`* | *Negatif* | *null, undefined, "", 123, {}* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C14-UT13* | *`decryptAES256()`* | *Batas* | *Teks biasa tanpa :* | *Dikembalikan apa adanya* | *Sesuai* | *Pass* |
| *C14-UT14* | *`decryptAES256()`* | *Batas* | *Teks "a:b:c" (lebih dari satu :)* | *Dikembalikan apa adanya* | *Sesuai* | *Pass* |
| *C14-UT15* | *`decryptAES256()`* | *Negatif* | *Ciphertext didekripsi dengan kunci berbeda* | *Mengembalikan "[Data Terenkripsi]"* | *Sesuai* | *Pass* |
| *C14-UT16* | *`decryptAES256()`* | *Negatif* | *Ciphertext rusak dan IV tidak valid* | *Mengembalikan "[Data Terenkripsi]"* | *Sesuai* | *Pass* |

Tabel 4.2.XXb. Ringkasan Cakupan Modul encryption.js

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *encryptAES256(), decryptAES256()* |
| Operasi yang diuji | *encryptAES256(), decryptAES256()* |
| ID Algoritma yang tercakup | *-* |
| Coverage (wajib ≥ 70%) | *100% baris / 100% cabang (Jest `--coverage`, bukti pada 4.6)* |

### 4.2.XX Modul distance.js

**Nama Modul:** *distance.js*  
**Tingkat:** *Mendalam*

Modul ini dipakai operasi calculateDistances() pada C20 TenagaKesehatanController, sehingga ID pengujiannya memakai awalan C20.

Tabel 4.2.XX. Hasil Pengujian Unit Modul distance.js

| ID Pengujian | Operasi yang Diuji | Jenis Kasus | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *C20-UT01* | *`parseCoordinates()`* | *Normal* | *String "-6.9175,107.6191"* | *{lat: -6.9175, lng: 107.6191}* | *Sesuai* | *Pass* |
| *C20-UT02* | *`parseCoordinates()`* | *Normal* | *String dengan spasi di sekitar koma* | *Spasi diabaikan, koordinat terbaca* | *Sesuai* | *Pass* |
| *C20-UT03* | *`parseCoordinates()`* | *Normal* | *Objek {lat: -6.9, lng: 107.6}* | *Mengembalikan objek koordinat yang sama* | *Sesuai* | *Pass* |
| *C20-UT04* | *`parseCoordinates()`* | *Negatif* | *null, undefined, ""* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT05* | *`parseCoordinates()`* | *Negatif* | *"-6.9" dan "1,2,3"* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT06* | *`parseCoordinates()`* | *Negatif* | *"abc,def" dan "-6.9,xyz"* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT07* | *`parseCoordinates()`* | *Batas* | *"90,180" dan "-90,-180"* | *Diterima* | *Sesuai* | *Pass* |
| *C20-UT08* | *`parseCoordinates()`* | *Batas* | *Lat 90.0001 / -90.0001, lng 180.0001 / -180.0001* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT09* | *`parseCoordinates()`* | *Negatif* | *Objek tanpa lat atau lng* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT10* | *`parseCoordinates()`* | *Negatif* | *Masukan angka 5* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT11* | *`parseCoordinates()`* | *Batas* | *"0,0" dan {lat: 0, lng: 0}* | *Diterima sebagai titik valid* | *Sesuai* | *Pass* |
| *C20-UT12* | *`parseCoordinates()`* | *Negatif* | *"Infinity,0"* | *Mengembalikan null* | *Sesuai* | *Pass* |
| *C20-UT13* | *`parseCoordinates()`* | *Negatif* | *String "," (kedua bagian kosong)* | *Mengembalikan null* | *Mengembalikan {lat: 0, lng: 0}* | *Fail. Penyebab: Number('') bernilai 0 sehingga lolos pengecekan NaN. Usulan: tolak bagian string kosong sebelum konversi.* |
| *C20-UT14* | *`parseCoordinates()`* | *Negatif* | *Objek {lat: null, lng: null}* | *Mengembalikan null* | *Mengembalikan {lat: 0, lng: 0}* | *Fail. Penyebab: Number(null) bernilai 0 dan null !== undefined. Usulan: tolak nilai null atau '' sebelum konversi.* |
| *C20-UT15* | *`calculateDistanceKm()`* | *Batas* | *Dua titik yang sama* | *Jarak 0 km* | *Sesuai* | *Pass* |
| *C20-UT16* | *`calculateDistanceKm()`* | *Normal* | *"0,0" ke "0,1"* | *111.19 km* | *Sesuai* | *Pass* |
| *C20-UT17* | *`calculateDistanceKm()`* | *Batas* | *"0,0" ke "0,180" (antipodal)* | *20015.09 km* | *Sesuai* | *Pass* |
| *C20-UT18* | *`calculateDistanceKm()`* | *Normal* | *Bandung ke Jakarta dan sebaliknya* | *Jarak sama (simetris)* | *Sesuai* | *Pass* |
| *C20-UT19* | *`calculateDistanceKm()`* | *Normal* | *Bandung (-6.9175,107.6191) ke Jakarta (-6.2088,106.8456)* | *Antara 110 dan 120 km* | *Sesuai* | *Pass* |
| *C20-UT20* | *`calculateDistanceKm()`* | *Normal* | *Campuran objek dan string* | *111.19 km* | *Sesuai* | *Pass* |
| *C20-UT21* | *`calculateDistanceKm()`* | *Negatif* | *Salah satu titik null, "abc", atau lat 91* | *Mengembalikan -1* | *Sesuai* | *Pass* |
| *C20-UT22* | *`calculateDistanceKm()`* | *Normal* | *Bandung ke Jakarta* | *Dibulatkan 2 angka di belakang koma* | *Sesuai* | *Pass* |

Tabel 4.2.XXb. Ringkasan Cakupan Modul distance.js

| Informasi | Keterangan |
| :--- | :--- |
| Daftar operasi public pada DPPL | *parseCoordinates(), calculateDistanceKm()* |
| Operasi yang diuji | *parseCoordinates(), calculateDistanceKm()* |
| ID Algoritma yang tercakup | *Algo-C02-03, Algo-C20-03* |
| Coverage (wajib ≥ 70%) | *100% baris / 100% cabang (Jest `--coverage`, bukti pada 4.6)* |

<br>

## 4.3 Pengujian Integrasi

Pengujian integrasi memeriksa interaksi antarkomponen yang melewati batas, yaitu *Controller* ke *Model*, aplikasi ke basis data, dan aplikasi ke sistem eksternal. Daftar antarmuka mengacu pada dokumen DPPL, dengan minimal satu test case untuk setiap antarmuka. Pengujian memakai komponen nyata, bukan *mock*. Apabila ada antarmuka tambahan yang belum didaftarkan pada dokumen DPPL, cantumkan juga.

Cara menjalankan integration test: *atur TEST_DATABASE_URL ke basis data uji PostgreSQL, lalu jalankan cd src && npm test -- tests/integrasiKomponen.test.js.*

Lokasi file test: *src/tests/integrasiKomponen.test.js.*

Tabel 4.3.1. Daftar Antarmuka Antarkomponen

| ID Antarmuka | Komponen Asal | Komponen Tujuan | Jenis Batas | Test Case |
| :--- | :--- | :--- | :--- | :--- |
| *I-24* | *AuthController (authRoutes)* | *Pengguna, Pelajar, OrangTuaWali, TenagaKesehatan, RiwayatKesehatan (Model)* | *Controller - Model* | *INT-TC01, INT-TC02* |
| *I-25* | *PasswordController (authRoutes)* | *Pengguna (Model)* | *Controller - Model* | *INT-TC03* |
| *I-26* | *CheckInController (checkInRoutes)* | *Pelajar, CheckIn (Model & AES-256)* | *Controller - Model* | *INT-TC04, INT-TC05* |
| *I-27* | *ReportController (reportRoutes)* | *Pelajar, OrangTuaWali, CheckIn (Model)* | *Controller - Model* | *INT-TC06, INT-TC07* |
| *I-28* | *TenagaKesehatanController (tenagaKesehatanRoutes)* | *Pelajar, TenagaKesehatan (Model)* | *Controller - Model* | *INT-TC08* |
| *I-29* | *KonsultasiController (konsultasiRoutes)* | *Pelajar, JadwalKonsultasi, TenagaKesehatan (Model)* | *Controller - Model* | *INT-TC09, INT-TC10* |
| *I-30* | *NotifikasiDaruratController (emergencyRoutes)* | *Pelajar, OrangTuaWali, NotifikasiDarurat (Model)* | *Controller - Model* | *INT-TC11, INT-TC12* |
| *I-31* | *Model & db.withTransaction* | *PostgreSQL (mahasehat_test)* | *Aplikasi - Basis data* | *INT-TC01 s.d. INT-TC13* |
| *I-32* | *mailer.js & kirimEmail.js* | *Layanan SMTP (nodemailer) / Fallback Lokal* | *Aplikasi - Sistem eksternal* | *INT-TC14, INT-TC15* |
| *I-33* | *scheduler.js (mulaiScheduler)* | *node-cron Scheduler* | *Aplikasi - Sistem eksternal* | *INT-TC16* |

Tabel 4.3.2. Hasil Pengujian Integrasi

| ID Pengujian | ID Antarmuka | Skenario | Prosedur/Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *INT-TC01* | *I-24, I-31* | *Normal: registrasi pelajar <18 thn & konfirmasi wali* | *POST /api/auth/register untuk "integrasi.muda@mahasehat.id" (2012-03-03) dengan riwayat kesehatan dan email_orang_tua wali, lalu POST /api/auth/confirm/:token* | *Akun awal berstatus "Belum Terverifikasi", riwayat terenkripsi AES-256 di DB; setelah konfirmasi akun menjadi "Aktif" dan id_wali tertaut ke WALI-001* | *Registrasi HTTP 201 (Belum Terverifikasi), ciphertext terdekripsi tepat, setelah confirm HTTP 200 dengan status_akun: 'Aktif' & terhubung_ke_wali: true* | *Pass* |
| *INT-TC02* | *I-24, I-31* | *Normal: login JWT, cek sesi /api/auth/me, & logout* | *Login budi.pelajar@mahasehat.id, akses GET /api/auth/me, panggil POST /api/auth/logout, lalu akses ulang /api/auth/me memakai token lama* | */api/auth/me awal 200; logout menaikkan versi_token di DB; pemakaian ulang token lama ditolak 401* | */api/auth/me awal 200; setelah logout versi_token naik +1 dan token lama ditolak HTTP 401* | *Pass* |
| *INT-TC03* | *I-25, I-31* | *Normal: lupa password & reset password akhiri sesi lama* | *POST /api/auth/forgot-password untuk nadia.psikolog@mahasehat.id, ambil token reset, panggil POST /api/auth/reset-password dengan sandi baru, uji login sandi baru/lama & token sesi lama* | *Hash SHA-256 reset_token tersimpan di PostgreSQL; login sandi baru 200, sandi lama 401, dan sesi lama tertolak 401* | *Hash SHA-256 reset_token cocok di DB; sandi baru berhasil login (200), sandi lama 401, dan token sesi lama ditolak 401* | *Pass* |
| *INT-TC04* | *I-26, I-31* | *Normal: simpan daily check-in terenkripsi ke DB* | *POST /api/check-in sebagai citra.pelajar@mahasehat.id dengan mood 4, tidur 22:30-06:00, dan catatan "Jurnal integrasi rahasia", lalu inspeksi tabel check_in* | *HTTP 201, baris tersimpan pada check_in, kolom catatan_refleksi tersimpan terenkripsi dan kembali sama setelah didekripsi AES-256* | *HTTP 201; skala_mood = 4, catatan_refleksi di DB tidak berupa plaintext dan didekripsi tepat ke teks asli* | *Pass* |
| *INT-TC05* | *I-26, I-31* | *Negatif: cegah duplikasi check-in pada hari yang sama* | *Kirim ulang POST /api/check-in untuk citra.pelajar@mahasehat.id pada hari yang sama* | *Ditolak oleh unique index PostgreSQL dengan HTTP 409* | *Controller menerjemahkan pelanggaran unique index DB dan mengembalikan HTTP 409* | *Pass* |
| *INT-TC06* | *I-27, I-31* | *Normal: statistik & jurnal untuk akun pelajar* | *Akses GET /api/reports/summary dan GET /api/reports/riwayat memakai token citra.pelajar@mahasehat.id* | *Kedua endpoint HTTP 200 dan memuat catatan refleksi "Jurnal integrasi rahasia" hasil dekripsi* | *Kedua endpoint mengembalikan HTTP 200 dengan catatan terdekripsi yang sesuai* | *Pass* |
| *INT-TC07* | *I-27, I-31* | *Keamanan (KNF02): wali dibatasi pada ringkasan tanpa teks jurnal* | *Akses GET /api/reports/summary dan GET /api/reports/riwayat memakai token ratna.wali@mahasehat.id* | *Summary HTTP 200 dengan catatan: [] tanpa string jurnal rahasia; akses /riwayat ditolak HTTP 403* | *Summary berisi catatan: [] tanpa kebocoran teks jurnal dan /riwayat mengembalikan HTTP 403* | *Pass* |
| *INT-TC08* | *I-28, I-31* | *Normal: simpan lokasi pelajar & urutkan tenaga kesehatan berdasarkan jarak* | *PUT /api/tenaga-kesehatan/lokasi-pelajar sebagai Budi dengan { lat: -6.8915, lng: 107.6107 }* | *HTTP 200, kolom lokasi_saat_ini di PostgreSQL menjadi "-6.8915,107.6107", dan hasil rekomendasi terurut naik berdasarkan jarak_km* | *Kolom DB tersimpan "-6.8915,107.6107", elemen pertama memiliki jarak_km = 0 dan daftar terurut menaik* | *Pass* |
| *INT-TC09* | *I-29, I-31* | *Normal & Konkurensi: kunci slot konsultasi & tolak pengajuan ganda* | *Ajukan POST /api/konsultasi untuk jadwal JDW-001, lalu ajukan lagi ke jadwal yang sama* | *Pengajuan pertama HTTP 201 (status_ketersediaan = false, status_pengajuan = 'Diajukan'); pengajuan kedua ditolak 409* | *Pengajuan pertama mengunci baris JDW-001 di PostgreSQL (201) dan pengajuan kedua ditolak HTTP 409* | *Pass* |
| *INT-TC10* | *I-29, I-31* | *Normal: nakes setujui JDW-001 & reschedule JDW-003* | *Login siti.psikolog@mahasehat.id, panggil PUT /api/konsultasi/JDW-001/status (Disetujui) dan PUT /api/konsultasi/JDW-003/jadwal* | *Status kedua jadwal di PostgreSQL menjadi 'Disetujui' dan 'Rescheduled'* | *Kedua request HTTP 200 dan query tabel jadwal_konsultasi menunjukkan status 'Disetujui' dan 'Rescheduled'* | *Pass* |
| *INT-TC11* | *I-30, I-31* | *Normal: evaluasi darurat harian membuat notifikasi & set status_darurat* | *Hapus check-in hari ini milik PLJ-003 (Citra), lalu jalankan NotifikasiDaruratController.jalankanEvaluasiHarian()* | *jumlahDarurat = 1, pelajar.status_darurat = true, dan baris baru notifikasi_darurat berstatus 'Terkirim' / 'Belum Ditindaklanjuti'* | *Evaluasi menghasilkan jumlahDarurat: 1, status_darurat: true, serta 1 baris notifikasi_darurat di PostgreSQL* | *Pass* |
| *INT-TC12* | *I-30, I-31* | *Normal: wali konfirmasi diterima & tindak lanjut pulihkan status pelajar* | *Login ratna.wali@mahasehat.id, ambil GET /api/emergency/wali, panggil PUT /confirm lalu PUT /follow-up* | *Notifikasi berstatus 'Diterima' dan 'Sudah Ditindaklanjuti', serta pelajar.status_darurat kembali menjadi false* | *Kedua endpoint HTTP 200, DB notifikasi_darurat berubah ke 'Diterima'/'Sudah Ditindaklanjuti', dan status_darurat kembali false* | *Pass* |
| *INT-TC13* | *I-31* | *Negatif: atomisitas transaksi (ROLLBACK penuh saat gagal di tengah)* | *Jalankan db.withTransaction() yang menyisipkan Pengguna baru lalu melempar Error sebelum selesai* | *Transaksi di-rollback sehingga email batal tidak tersimpan di tabel pengguna* | *Exception tertangkap dan query verifikasi menghasilkan rowCount = 0* | *Pass* |
| *INT-TC14* | *I-32* | *Normal: modul mailer & kirimEmail menyusun konten tanpa teks jurnal* | *Panggil kirimEmailKonfirmasiWali, kirimEmailResetPassword, dan kirimEmail pada mode lokal (tanpa SMTP eksternal)* | *Pesan keluar berisi tautan konfirmasi/reset dan ringkasan angka tanpa memuat teks jurnal pribadi* | *Output memuat /konfirmasi-registrasi, /reset-password, dan ringkasan mood tanpa kata/isi jurnal pribadi* | *Pass* |
| *INT-TC15* | *I-32, I-31* | *Negatif (KNF06): kegagalan koneksi SMTP memicu 3x retry otomatis* | *Arahkan env SMTP ke 127.0.0.1:1 dan panggil NotifikasiDaruratController.sendEmergencyNotification() pada notifikasi nyata di DB* | *Mengembalikan false setelah total 4 percobaan (1 awal + 3 retry) dan DB mencatat status = 'Gagal Terkirim', jumlah_percobaan = 4* | *Mengembalikan false dan query PostgreSQL mencatat { status: 'Gagal Terkirim', jumlah_percobaan: 4 }* | *Pass* |
| *INT-TC16* | *I-33* | *Normal: registrasi jadwal cron nyata dengan node-cron* | *Atur EMERGENCY_CRON = '0 8 * * *', validasi ekspresi cron, lalu panggil mulaiScheduler()* | *Ekspresi cron tervalidasi dan cron.getTasks().size >= 1 tanpa mock* | *cron.validate bernilai true dan cron.getTasks().size >= 1 terdaftar sebelum dibersihkan* | *Pass* |

<br>

## 4.4 Pengujian Use Case

Pengujian use case dilakukan pada seluruh skenario normal dan alternatif sesuai Subbab 4.4 SKPL, dengan minimal satu test case untuk setiap skenario. Kolom ID KF menunjukkan KF yang diverifikasi oleh test case tersebut.

### 4.4.1 Use Case Melakukan Registrasi Akun

**ID Use Case:** *UC01*  
**Nama Use Case:** *Melakukan Registrasi Akun*

Tabel 4.4.1. Hasil Pengujian Use Case [UC01]

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC01-TC01* | *KF01* | *Normal* | *1. Buka halaman Registrasi<br>2. Masukkan data diri, riwayat kesehatan mental, dan kontak orang tua/wali bagi pelajar<br>3. Klik tombol "Buat Akun"* | *Nama: Budi<br>Email: budi@gmail.com<br>Nomor telepon: 0812930345<br>Email orang tua/wali: ortubudi@gmail.com<br>Tanggal lahir: 31 12 2000<br>Riwayat kesehatan: burnout<br>Kata sandi: Pass123!<br>Konfirmasi kata sandi: Pass123!* | *Pengguna diarahkan ke halaman Notifikasi Keberhasilan.* | *Pengguna diarahkan ke halaman Notifikasi Keberhasilan sesuai hasil yang diharapkan.* | *Pass* |
| *UC01-TC02* | *KF01* | *Alternatif 1: Masukan pengguna tidak valid* | *1. Buka halaman Registrasi.<br>2. Masukkan data diri yang tidak sesuai format, riwayat kesehatan mental, dan kontak orang tua/wali bagi pelajar.<br>3. Klik tombol "Buat Akun".* | *Nama: Budi12<br>Email: budi@gmail.com<br>Nomor telepon: 0812930345<br>Email orang tua/wali: ortubudi@gmail.com<br>Tanggal lahir: 31 12 2000<br>Riwayat kesehatan: burnout<br>Kata sandi: Pass123!<br>Konfirmasi kata sandi: Pass123!* | *Perangkat Lunak menampilkan pesan sesuai kesalahan masukan pengguna.* | *Perangkat Lunak menampilkan pesan sesuai dengan kesalahan masukan pengguna seperti yang diharapkan.* | *Pass* |

### 4.4.2 Use Case Mengonfirmasi Registrasi Akun

**ID Use Case:** *UC02*  
**Nama Use Case:** *Mengonfirmasi Registrasi Akun*

Tabel 4.4.2. Hasil Pengujian Use Case [UC02]

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC02-TC01* | *KF02* | *Normal* | *1. Buka tautan konfirmasi registrasi akun yang valid<br>2. Klik tombol "Setujui Akun".* | *Tautan konfirmasi pembuatan akun yang valid dan aksi klik tombol "Setujui Akun"* | *Halaman konfirmasi registrasi ditampilkan, akun pelajar diaktifkan, dan muncul pesan keberhasilan* | *Halaman konfirmasi registrasi ditampilkan, sesudah menekan tombol "Setujui Akun" muncul pesan keberhasilan dan akun pelajar diaktifkan.* | *Pass* |
| *UC02-TC02* | *KF02* | *Alternatif 1: Orang tua/wali tidak mengonfirmasi registrasi akun* | *1. Buka tautan konfirmasi registrasi akun yang sudah melewati batas waktu atau tidak disetujui dalam batas waktu tertentu.* | *Tautan konfirmasi registrasi akun yang sudah kadaluwarsa* | *Perangkat Lunak mendeteksi tautan yang telah kadaluwarsa, menandai akun pelajar gagal terverifikasi* | *Perangkat Lunak mendeteksi tautan yang telah kadaluwarsa, menandai akun pelajar gagal terverifikasi dan menampilkan pesan kesalahan* | *Pass* |

<br>

### 4.4.3 Use Case Melakukan Daily Check-In

**ID Use Case:** *UC03*  
**Nama Use Case:** *Melakukan Daily Check-In*

Tabel 4.4.3. Hasil Pengujian Use Case [UC03]

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC03-TC01* | *KF03, KF04, KF05, KF07* | *Normal* | *1. Mulai daily check-in<br>2. Pilih salah satu opsi suasana hati pada form suasana hati<br>3. Isi waktu tidur dan waktu bangun<br>4. Pilih opsi pola makan hari ini<br>5. Isi catatan refleksi harian<br>6. Periksa ringkasan check-in dan klik tombol "Simpan check-in"* | *Suasana hati: "Baik (skala 4/5), waktu tidur: 22.30 dan waktu bangun: 06.00, pola makan: "Teratur", catatan refleksi harian "stress akademik tugas besar"* | *Setiap langkah tercatat, halaman berpindah sesuai alur, ringkasan ditampilkan, data check-in tersimpan, dan pesan keberhasilan ditampilkan* | *Setiap langkah tercatat, halaman berpindah sesuai alur, ringkasan ditampilkan, data check-in tersimpan, dan pesan keberhasilan ditampilkan sesuai harapan* | *Pass* |
| *UC03-TC02* | *KF03, KF04, KF05, KF07* | *Alternatif 1: Pelajar tidak mengisi catatan refleksi harian* | *1. Mulai daily check-in<br>2. Pilih salah satu opsi suasana hati pada form suasana hati<br>3. Isi waktu tidur dan waktu bangun<br>4. Pilih opsi pola makan hari ini<br>5. Catatan refleksi harian dikosongkan<br>6. Periksa ringkasan check-in dan klik tombol "Simpan check-in"* | *Suasana hati: "Biasa (skala 3/5), waktu tidur: 22.30 dan waktu bangun: 06.00, pola makan: "Kurang teratur", catatan refleksi harian dikosongkan* | *Pop-up konfirmasi untuk memastikan apakah pelajar ingin melanjutkan tanpa membuat catatan refleksi muncul, setelah dikonfirmasi rangkuman tampil, dan data check-in tersimpan dengan pesan keberhasilan ditampilkan.* | *Ketika catatan refleksi dikosongkan, tidak muncul pop-up konfirmasi dan sistem langsung melanjutkan ke tahap berikutnya / menyimpan data* | *Fail karena form refleksi harian tidak menyertakan pengecekan masukan kosong untuk menampilkan pop up konfirmasi. Harusnya menambahkan pengecekan masukan kosong untuk menampilkan pop-up konfirmasi melanjutkan tanpa refleksi* |

**Lingkungan uji UC04–UC07.** Pengujian dijalankan pada 19–20 November 2026 terhadap kode aplikasi tag `v9.0` (`fb77692`). Sampai 20 November 2026, perubahan `src/` di `main` hanya berupa file test baru di `src/tests/`, sehingga hasil ini tetap berlaku untuk `main`. Server dijalankan dengan `npm start` setelah `npm run db:seed`, lalu diakses lewat peramban berbasis Chromium dengan *viewport* 1280×800. Basis data uji adalah PGlite 0.5.17 (PostgreSQL 18.7) yang diakses driver `pg`. `SMTP_HOST` dikosongkan sehingga setiap e-mail yang dikirim aplikasi tercetak di log server. Semua akun memakai kata sandi seed `Password123!`. Dua akun pelajar tanpa riwayat check-in dibuat lewat `POST /api/auth/register` untuk pengujian ini, yaitu `dewi.pelajar@mahasehat.id` (tanggal lahir 2004-08-21) dan `eko.pelajar@mahasehat.id` (tanggal lahir 2003-02-10); keduanya langsung `Aktif` karena berusia di atas 18 tahun. Tangkapan layar setiap test case dilampirkan pada Tabel 4.6.

### 4.4.4 Use Case Melihat Statistik dan Laporan Kondisi

**ID Use Case:** *UC04*  
**Nama Use Case:** *Melihat Statistik dan Laporan Kondisi*

Tabel 4.4.4. Hasil Pengujian Use Case UC04

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC04-TC01* | *KF08* | *Normal (pelajar), langkah 1–3* | *1. Masuk sebagai pelajar.<br>2. Klik menu "Laporan Kesehatan".<br>3. Klik periode "30 Hari".<br>4. Pada kartu Catatan, klik tanggal 17 dan 19 November.* | *Akun `budi.pelajar@mahasehat.id`; data seed berisi 5 check-in pada 15–19 November 2026, catatan refleksi hanya pada 19 November* | *Statistik kondisi tampil dari data check-in, berubah sesuai periode yang dipilih, dan pola yang dipilih menampilkan informasinya* | *Periode 7 hari menampilkan grafik harian Data Mood (4, 3, 2, 3, 4), Data Tidur (7,5; 6,5; 5,5; 7; 7,5 jam), Pemicu per Hari, Data Jenis Makan, dan Faktor Pemicu Stress (Akademik 80%, Kesehatan 20%). Periode 30 hari mengelompokkan data menjadi "Minggu Ketiga" dengan rerata mood 3,2 dan tidur 6,8 jam. Tanggal 19 November menampilkan catatan refleksi yang sudah didekripsi, sedangkan 17 November menampilkan "Belum ada catatan refleksi untuk tanggal ini.", sesuai isi basis data* | *Pass* |
| *UC04-TC02* | *KF09, KF10* | *Normal (pelajar), langkah 4* | *1. Masuk sebagai pelajar.<br>2. Telusuri halaman Laporan Kesehatan pada setiap periode.<br>3. Buka Dashboard pelajar.* | *Akun `budi.pelajar@mahasehat.id`* | *Rangkuman kondisi kesehatan dan rekomendasi kesehatan ditampilkan berdasarkan periode yang dipilih* | *Halaman Laporan Kesehatan pelajar hanya berisi grafik dan catatan; rangkuman kondisi dan rekomendasi tidak ditampilkan pada periode mana pun. Dashboard menampilkan Indeks Kesehatan Mental 69/100 berlabel "Stabil" yang dihitung dari 90 hari terakhir, tetapi tanpa rekomendasi dan tidak mengikuti periode yang dipilih* | *Fail. Penyebab: `ReportPagePelajar.js` tidak memakai `ringkasan_kondisi` dan `indikator_risiko` dari `GET /api/reports/summary`, padahal kedua data tersebut sudah dipakai halaman wali. Solusi: tambahkan kartu Indikator Risiko dan Ringkasan Kondisi pada `ReportPagePelajar.html`, dengan teks rekomendasi per tingkat risiko seperti `LABEL_RISIKO` pada `ReportPageOrangTuaWali.js`* |
| *UC04-TC03* | *KF09, KF17* | *Normal (orang tua/wali)* | *1. Masuk sebagai wali.<br>2. Klik menu "Laporan Kesehatan".<br>3. Gunakan periode 7 hari.* | *Akun `santoso.wali@mahasehat.id` (wali Budi Pratama)* | *Laporan rangkuman kondisi pelajar yang diwalikan tampil tanpa catatan pribadi pelajar* | *Halaman menampilkan "Ringkasan kondisi Budi Pratama", Indikator Risiko "Rendah" beserta penjelasannya, Ringkasan Kondisi "Rata-rata mood 3.2 dari 5, rata-rata tidur 6.8 jam, 0 hari tanpa check-in", kartu rerata, Tren Mood, dan Tren Tidur. Catatan refleksi tidak ditampilkan dan ada pesan "Demi privasi pelajar, catatan pribadi dan detail check-in tidak ditampilkan." Temuan: kartu "Pola Makan 1.0 x / Hari, Rata-rata frekuensi makan" berisi rata-rata jumlah pemicu stres per hari (lihat catatan temuan T-01)* | *Pass* |
| *UC04-TC04* | *KF06, KF10* | *Normal (orang tua/wali), pola tidak biasa* | *1. Masuk sebagai wali.<br>2. Klik menu "Laporan Kesehatan".* | *Akun `ratna.wali@mahasehat.id` (wali Citra Lestari); data seed Citra berisi 3 check-in pada 13–15 November 2026 dengan mood 2, 1, 2 dan tidur 4; 3,5; 3,5 jam, lalu tidak check-in lagi* | *Pola di luar ambang batas ditandai, dan jumlah hari tanpa check-in dihitung dari check-in terakhir sampai hari ini* | *Indikator Risiko "Tinggi" dengan saran "Disarankan berbicara dengan pelajar dan mempertimbangkan konsultasi dengan tenaga kesehatan." Ringkasan "Rata-rata mood 1.7 dari 5, rata-rata tidur 3.7 jam, 4 hari tanpa check-in"; kartu Tanpa Check-In bernilai 4 hari (15 sampai 19 November)* | *Pass* |
| *UC04-TC05* | *KF08* | *Alternatif 1: Data check-in belum dapat divisualisasikan* | *1. Masuk sebagai pelajar yang belum pernah check-in.<br>2. Klik menu "Laporan Kesehatan".<br>3. Klik menu "Dashboard" pada *sidebar* untuk kembali.* | *Akun `dewi.pelajar@mahasehat.id` tanpa data check-in* | *Muncul pemberitahuan bahwa data check-in belum mencukupi, dan pengguna dapat kembali ke halaman sebelumnya* | *Grafik tidak ditampilkan. Kartu "Data belum cukup" berisi pesan "Data check-in belum cukup untuk divisualisasikan. Isi daily check-in secara rutin agar laporan dapat ditampilkan." beserta tombol "Isi Check-In". Halaman tidak punya tombol "Kembali" khusus; kembali ke Dashboard lewat menu *sidebar* berhasil* | *Pass* |


### 4.4.5 Use Case Menentukan Tenaga Kesehatan

**ID Use Case:** *UC05*  
**Nama Use Case:** *Menentukan Tenaga Kesehatan*

Tabel 4.4.5. Hasil Pengujian Use Case UC05

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC05-TC01* | *KF11, KF12* | *Normal* | *1. Masuk sebagai pelajar yang belum pernah memberi jawaban izin lokasi.<br>2. Klik menu "Konsultasi".<br>3. Klik "Izinkan" pada dialog Akses lokasi.<br>4. Klik "Lihat Detail" pada kartu Siti Rahmawati.* | *Akun `dewi.pelajar@mahasehat.id`; lokasi perangkat disimulasikan di koordinat -6,8985, 107,6100 dengan mengganti `navigator.geolocation` sebelum tombol "Izinkan" diklik* | *Daftar tenaga kesehatan beserta lokasi dan estimasi biaya tampil bersama permintaan izin lokasi; setelah izin diberikan, jarak ke setiap fasilitas tampil; profil tenaga kesehatan yang dipilih tampil* | *Dialog "Akses lokasi" tampil di atas daftar 3 tenaga kesehatan yang memuat nama fasilitas dan tarif per sesi (Rp75.000, Rp150.000, Rp250.000). Setelah izin diberikan, daftar diurutkan dari yang terdekat: dr. Hendra Wijaya 0,6 km, Siti Rahmawati 0,8 km, Nadia Kusuma 1,6 km. Jarak ini sama dengan perhitungan Haversine manual (0,61; 0,78; 1,56 km). Dialog detail Siti menampilkan fasilitas, alamat, jarak 0,8 km, tarif, jam reguler, dan tombol "Jadwalkan". Temuan: Nomor STR tampil "-" (lihat catatan temuan T-02)* | *Pass* |
| *UC05-TC02* | *KF11* | *Alternatif 1: Akses Lokasi Tidak Diberikan* | *1. Hapus jawaban izin lokasi yang tersimpan (`localStorage` kunci `lokasiAktif`), lalu muat ulang halaman.<br>2. Klik "Jangan Izinkan".<br>3. Klik "Lihat Detail" pada kartu Nadia Kusuma.* | *Akun `dewi.pelajar@mahasehat.id`* | *Lokasi pelajar tidak diakses, daftar tenaga kesehatan tetap tampil tanpa informasi jarak, dan profil yang dipilih tetap tampil* | *Daftar 3 tenaga kesehatan tetap tampil tanpa jarak, dengan keterangan "3 tenaga kesehatan.". Setelah halaman dimuat ulang, log jaringan hanya mencatat `GET /api/tenaga-kesehatan/`, tanpa `PUT /api/tenaga-kesehatan/lokasi-pelajar`. Dialog detail Nadia menampilkan "Jarak: Lokasi tidak diizinkan"* | *Pass* |


### 4.4.6 Use Case Mengajukan Jadwal Konsultasi

**ID Use Case:** *UC06*  
**Nama Use Case:** *Mengajukan Jadwal Konsultasi*

Tabel 4.4.6. Hasil Pengujian Use Case UC06

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC06-TC01* | *KF13* | *Normal* | *1. Pada halaman Cari Tenaga Kesehatan, klik "Lihat Detail" pada dr. Hendra Wijaya, lalu "Jadwalkan".<br>2. Pilih slot Sabtu, 21 November 2026 pukul 14.00 WIB.<br>3. Isi kolom Keluhan utama.<br>4. Klik "Buat Janji".<br>5. Periksa baris jadwal pada tabel `jadwal_konsultasi`.* | *Akun `dewi.pelajar@mahasehat.id`; keluhan "Mood turun naik dan susah tidur sejak awal semester."* | *Formulir pengajuan menampilkan jadwal yang tersedia, dan pengajuan tersimpan untuk ditinjau tenaga kesehatan* | *Dialog "Buat janji" menampilkan 2 slot dr. Hendra (20 November 10.00 WIB dan 21 November 14.00 WIB). Setelah dikirim, muncul pesan "Pengajuan konsultasi dengan dr. Hendra Wijaya, Sp.KJ terkirim. Tenaga kesehatan akan meninjau permohonanmu." Baris `JDW-005` kini terisi `id_pelajar` Dewi dengan `status_ketersediaan = false` dan `status_pengajuan = 'Diajukan'`* | *Pass* |
| *UC06-TC02* | *KF13, KF14* | *Alternatif 1: Jadwal Konsultasi Tidak Lagi Tersedia* | *1. Dewi membuka formulir janji Nadia Kusuma (slot 20 November 15.00 WIB dan 22 November 09.30 WIB).<br>2. Selagi formulir terbuka, akun Eko mengajukan slot 22 November 09.30 WIB lewat `POST /api/konsultasi`.<br>3. Dewi memilih slot 22 November 09.30 WIB, mengisi keluhan, lalu klik "Buat Janji".<br>4. Dewi klik "Buat Janji" lagi dengan slot yang tersisa.* | *Akun `dewi.pelajar@mahasehat.id` dan `eko.pelajar@mahasehat.id`; keluhan Dewi "Sering cemas dan sulit fokus belajar dua minggu terakhir."* | *Muncul pemberitahuan bahwa jadwal yang dipilih sudah tidak tersedia beserta pilihan jadwal lain; jadwal lain yang dipilih tersimpan sebagai pengajuan* | *Server menolak pengajuan pertama (409). Formulir menampilkan "Slot ini sudah diajukan pelajar lain." dan slot 22 November dihapus dari pilihan sehingga tersisa 20 November 15.00 WIB. Pengajuan kedua berhasil dan baris `JDW-006` tersimpan "Diajukan" atas nama Dewi. Catatan: ketersediaan diperiksa saat pengajuan dikirim, bukan saat slot dipilih seperti langkah 2 skenario SKPL* | *Pass* |
| *UC06-TC03* | *KF14* | *Normal, langkah 3: ketersediaan diperbarui selama formulir dibuka* | *1. Dewi membuka formulir janji Nadia Kusuma.<br>2. Akun Eko mengajukan slot 22 November 09.30 WIB lewat `POST /api/konsultasi`.<br>3. Formulir dibiarkan terbuka 30 detik tanpa dikirim.<br>4. Periksa daftar slot dan log jaringan.* | *Akun `dewi.pelajar@mahasehat.id` dan `eko.pelajar@mahasehat.id`* | *Slot yang sudah diambil pelajar lain hilang dari formulir tanpa perlu mengirim pengajuan* | *Setelah 30 detik, slot 22 November 09.30 WIB masih tampil dan masih bisa dipilih. Log jaringan hanya mencatat dua `GET /api/tenaga-kesehatan/NAKES-003` saat dialog detail dan dialog janji dibuka; tidak ada permintaan pembaruan berkala* | *Fail. Penyebab: `bukaJanji()` pada `CariTenagaKesehatanPage.js` memuat slot satu kali saat dialog dibuka. Solusi: muat ulang slot secara berkala (misalnya setiap 15 detik selama `#Modal_Janji` terbuka) dan setiap kali slot dipilih, lalu hapus slot yang sudah tidak tersedia dari pilihan* |


### 4.4.7 Use Case Mengelola Pengajuan Konsultasi

**ID Use Case:** *UC07*  
**Nama Use Case:** *Mengelola Pengajuan Konsultasi*

Tabel 4.4.7. Hasil Pengujian Use Case UC07

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC07-TC01* | *KF15* | *Normal, persetujuan* | *1. Masuk sebagai tenaga kesehatan.<br>2. Klik menu "Konsultasi".<br>3. Pilih pengajuan Dewi Anggraini dan tinjau detailnya.<br>4. Klik "Setujui Permohonan".<br>5. Periksa baris jadwal pada tabel `jadwal_konsultasi`.* | *Akun `nadia.psikolog@mahasehat.id`; pengajuan `JDW-006` (Dewi) dan `JDW-007` (Eko) hasil UC06* | *Daftar pengajuan masuk tampil beserta detail dan tombol aksi; setelah disetujui, status pengajuan menjadi "Disetujui"* | *Halaman Manajemen Konsultasi menampilkan 2 pengajuan berstatus "Menunggu" (Dewi 20 November 15.00 WIB, Eko 22 November 09.30 WIB) beserta keluhan, dan panel detail memuat tombol "Setujui Permohonan", "Jadwalkan Ulang", dan "Tolak". Setelah disetujui, muncul pesan "Permohonan konsultasi Dewi Anggraini berhasil disetujui.", tombol berubah menjadi "Telah Disetujui", dan penanda pada menu Konsultasi turun dari 2 menjadi 1. Baris `JDW-006` berstatus `'Disetujui'`* | *Pass* |
| *UC07-TC02* | *KF16* | *Normal, notifikasi persetujuan ke pelajar* | *1. Setelah UC07-TC01, periksa log server.<br>2. Masuk sebagai Dewi dan buka Dashboard.* | *Akun `dewi.pelajar@mahasehat.id`; `SMTP_HOST` kosong sehingga e-mail apa pun tercetak di log server* | *Pelajar menerima notifikasi bahwa pengajuannya disetujui* | *Log server tidak mencatat e-mail apa pun, dan aplikasi tidak menampilkan notifikasi. Jadwal yang disetujui hanya muncul pada kartu "Jadwal konsultasi" di Dashboard Dewi (Nadia Kusuma, Jumat 20 November 2026, 15.00 WIB) saat Dewi membuka dashboard sendiri* | *Fail. Penyebab: `KonsultasiController.ubahStatus` hanya mengubah status tanpa mengirim notifikasi. Solusi: setelah status berubah, kirim e-mail ke pelajar dengan `src/utils/kirimEmail.js` dan tandai jadwal yang baru disetujui pada dashboard pelajar* |
| *UC07-TC03* | *KF15, KF16* | *Alternatif 1: Reschedule Jadwal Konsultasi* | *1. Pilih pengajuan Eko Saputra.<br>2. Klik "Jadwalkan Ulang".<br>3. Isi tanggal 24/11/2026 dan pilih waktu "10.00 - 11.00 WIB".<br>4. Klik "Simpan Jadwal Baru".* | *Akun `nadia.psikolog@mahasehat.id`; pengajuan `JDW-007`* | *Formulir jadwal alternatif tampil; setelah dikirim, status pengajuan menjadi `Rescheduled` (pengganti status "Menunggu Konfirmasi Ulang", Tabel B.1 butir 5 Tugas 9) dan pelajar menerima notifikasi tawaran jadwal baru* | *Dialog "Jadwalkan Ulang Sesi Konsultasi" tampil dengan input tanggal dan empat pilihan jam (bukan daftar slot yang tersedia). Penyimpanan selalu gagal: server membalas 400 "Tanggal (YYYY-MM-DD) dan jam (HH:MM) wajib diisi." dan status tetap "Diajukan". Pesan galat tampil di belakang lapisan dialog sehingga sulit dibaca. Sebagai pembanding, `PUT /api/konsultasi/JDW-007/jadwal` dengan `waktu` "10.00" juga ditolak, sedangkan dengan "10:00" berhasil dan status menjadi `Rescheduled`; tidak ada e-mail ke pelajar yang tercetak di log* | *Fail. Penyebab: nilai opsi jam pada `ManajemenKonsultasiPage.html` memakai titik ("10.00 - 11.00 WIB"), sehingga `ManajemenKonsultasiPage.js` mengirim "10.00", padahal `KonsultasiController.jadwalUlang` hanya menerima format HH:MM. Solusi: ubah nilai opsi menjadi "09:00", "10:00", "13:00", dan "15:00" (atau ganti titik dengan titik dua sebelum dikirim), tampilkan pesan galat di atas dialog, dan kirim notifikasi ke pelajar seperti solusi UC07-TC02* |


**Catatan temuan UC04–UC07** (tidak menggagalkan skenario SKPL, tetapi perlu diperbaiki):

- **T-01.** Pada laporan wali, kartu "Pola Makan" berlabel "x / Hari, Rata-rata frekuensi makan" diisi `rerata_pemicu`, yaitu rata-rata jumlah pemicu stres per hari (`ReportPageOrangTuaWali.js`, `Value_RerataMakan`). Data seed Budi memiliki pemicu 1, 1, 2, 1, 0 per hari, sehingga kartu menampilkan 1.0.
- **T-02.** Dialog profil tenaga kesehatan selalu menampilkan Nomor STR "-" karena endpoint daftar `GET /api/tenaga-kesehatan` tidak mengirim `nomor_str`; kolom itu hanya dikirim oleh endpoint detail. Jam reguler "Senin–Jumat, 08.00–17.00" juga masih teks tetap di HTML.

### 4.4.8 Use Case Menerima dan Menindaklanjuti Notifikasi Darurat

**ID Use Case:** *UC08*  
**Nama Use Case:** *Menerima dan Menindaklanjuti Notifikasi Darurat*

Tabel 4.4.8. Hasil Pengujian Use Case UC08

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC08-TC01* | *KF18, KF19, KF20, KF21* | *Normal* | *1. Jalankan evaluasi darurat sehingga status pelajar memicu notifikasi aktif<br>2. Login sebagai orang tua/wali pada LoginPage.html<br>3. Amati pop-up notifikasi darurat pada DashboardPageOrangTuaWali.html, lalu klik tombol "Saya sudah menerima"<br>4. Buka halaman NotifikasiDarurat.html dan klik tombol "Sudah Ditindaklanjuti"* | *Akun wali ratna.wali@mahasehat.id (sandi Password123!) atas pelajar PLJ-003 (Citra Lestari) yang berstatus darurat (status_darurat = TRUE)* | *Modal darurat tampil dengan ringkasan kondisi Citra; klik "Saya sudah menerima" mencatat status "Diterima"; klik "Sudah Ditindaklanjuti" menampilkan kartu "Status Darurat Dipulihkan" dan mengubah status_darurat kembali ke FALSE* | *Modal darurat tampil pada dashboard wali, status berubah ke "Diterima" disertai toast notifikasi, halaman NotifikasiDarurat.html menampilkan "Status Darurat Dipulihkan" (Card_Selesai), dan status_darurat Citra kembali normal* | *Pass* |
| *UC08-TC02* | *KF18, KF19* | *Alternatif 1: Notifikasi Darurat Tidak Direspons (> 24 Jam)* | *1. Atur baris notifikasi_darurat Citra ke status 'Terkirim' dengan waktu_kirim = NOW() - INTERVAL '25 hours'<br>2. Jalankan NotifikasiDaruratController.jalankanEvaluasiHarian() dan inspeksi log pengiriman serta skema tabel pelajar* | *Notifikasi PLJ-003 belum direspons selama 25 jam (> 24 jam) milik wali ratna.wali@mahasehat.id* | *Sistem mengirim ulang pengingat (reminder) ke orang tua/wali dan meneruskan eskalasi notifikasi ke kontak darurat cadangan / layanan darurat bila tetap tidak direspons* | *Pengiriman ulang reminder ke ratna.wali@mahasehat.id berhasil (jumlahDikirimUlang: 1), namun tidak ada eskalasi ke kontak darurat cadangan maupun layanan darurat* | *Fail karena skema tabel pelajar (hanya memiliki nomor_telepon_wali & email_wali) dan NotifikasiDaruratController belum mengimplementasikan penyimpanan serta logika eskalasi ke kontak darurat cadangan/layanan darurat. Usulan perbaikan: tambahkan kolom kontak darurat cadangan di pelajar dan logika penerusan otomatis pada jalankanEvaluasiHarian().* |

### 4.4.9 Use Case Masuk Akun Pengguna

**ID Use Case:** *UC09*  
**Nama Use Case:** *Masuk Akun Pengguna*

Tabel 4.4.9. Hasil Pengujian Use Case UC09

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC09-TC01* | *KF22, KF23* | *Normal* | *1. Buka LoginPage.html<br>2. Isi kolom e-mail dan kata sandi dengan kredensial aktif<br>3. Klik tombol "Masuk"* | *E-mail budi.pelajar@mahasehat.id, kata sandi Password123!* | *Kredensial tervalidasi, token JWT tersimpan, dan pengguna diarahkan ke DashboardPagePelajar.html* | *Autentikasi berhasil dan peramban diarahkan ke DashboardPagePelajar.html dengan nama pengguna Budi Santoso tampil di dashboard* | *Pass* |
| *UC09-TC02* | *KF22, KF23* | *Alternatif 1: Kredensial Tidak Valid* | *1. Buka LoginPage.html<br>2. Masukkan kata sandi salah lalu klik "Masuk"<br>3. Perbaiki dengan kata sandi yang benar dan klik "Masuk"* | *E-mail budi.pelajar@mahasehat.id, sandi salah SalahPassword1!, lalu ulang dengan Password123!* | *Percobaan pertama ditolak dan menampilkan pesan kesalahan pada #Alert_Error; percobaan kedua berhasil masuk ke DashboardPagePelajar.html* | *Percobaan pertama tetap di LoginPage.html dan menampilkan #Alert_Error; setelah diisi Password123!, login berhasil menuju DashboardPagePelajar.html* | *Pass* |
| *UC09-TC03* | *KF22, KF23* | *Alternatif 2: Akun Belum Terverifikasi* | *1. Buka LoginPage.html<br>2. Isi kredensial akun pelajar < 18 tahun yang belum dikonfirmasi wali<br>3. Klik tombol "Masuk"* | *E-mail andi.siswa@mahasehat.id, kata sandi Password123! (status "Belum Terverifikasi")* | *Sistem menolak akses masuk (HTTP 403) dan menampilkan pesan bahwa akun masih menunggu konfirmasi orang tua/wali* | *Akses masuk ditolak dan #Alert_Error menampilkan pesan bahwa akun belum dikonfirmasi oleh orang tua/wali* | *Pass* |
| *UC09-TC04* | *KF22, KF23* | *Alternatif 3: Lupa Password* | *1. Buka ResetPasswordPage.html, isi e-mail terdaftar dan klik "Kirim tautan"<br>2. Buka tautan /reset-password?token=... dari log server<br>3. Isi kata sandi baru & konfirmasi lalu klik "Simpan sandi baru"<br>4. Login kembali di LoginPage.html memakai sandi baru* | *E-mail nadia.psikolog@mahasehat.id, kata sandi baru SandiBaru123!* | *Tahap konfirmasi terkirim (#Step_Terkirim) tampil, token reset memunculkan formulir sandi baru (#Step_KataSandiBaru), dialog berhasil (#Popup_SandiDiganti) muncul, dan login dengan SandiBaru123! masuk ke DashboardPageTenagaKesehatan.html* | *Seluruh langkah reset berhasil hingga dialog konfirmasi muncul dan login dengan SandiBaru123! mengarahkan ke DashboardPageTenagaKesehatan.html* | *Pass* |

### 4.4.10 Use Case Keluar Akun Pengguna

**ID Use Case:** *UC10*  
**Nama Use Case:** *Keluar Akun Pengguna*

Tabel 4.4.10. Hasil Pengujian Use Case UC10

| ID Pengujian | ID KF | Skenario | Prosedur Pengujian | Masukan | Hasil yang Diharapkan | Hasil Pengujian | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *UC10-TC01* | *KF24* | *Normal* | *1. Login sebagai budi.pelajar@mahasehat.id dan buka SettingPagePelajar.html<br>2. Klik tombol #Btn_Keluar<br>3. Pada modal #Popup_KonfirmasiKeluar, klik #Btn_KonfirmasiKeluar* | *Klik tombol keluar lalu konfirmasi keluar pada sesi aktif budi.pelajar@mahasehat.id* | *Modal konfirmasi keluar muncul, endpoint logout mengakhiri sesi/token, dan halaman diarahkan kembali ke LoginPage.html* | *Modal #Popup_KonfirmasiKeluar terbuka, lalu setelah dikonfirmasi sesi dihapus dan peramban diarahkan ke LoginPage.html* | *Pass* |
| *UC10-TC02* | *KF24* | *Alternatif 1: Membatalkan Keluar Akun* | *1. Login sebagai budi.pelajar@mahasehat.id dan buka SettingPagePelajar.html<br>2. Klik tombol #Btn_Keluar<br>3. Pada modal #Popup_KonfirmasiKeluar, klik #Btn_Batal* | *Klik tombol batal pada dialog konfirmasi keluar* | *Modal konfirmasi tertutup, sesi login tetap aktif, dan pengguna tetap berada pada halaman SettingPagePelajar.html* | *Modal tertutup, sesi tetap bertahan, dan pengguna masih berada di SettingPagePelajar.html* | *Pass* |

<br>

## 4.5 Pengujian Kebutuhan Non-Fungsional (KNF)

Setiap KNF pada Tabel 3.2 SKPL diuji secara terukur berdasarkan parameter yang telah didefinisikan. Setiap pengujian memuat target terukur, metode dan alat yang sesuai dengan parameter (misalnya Chrome DevTools untuk *response time* dan inspeksi basis data untuk *security*), serta hasil aktual berupa angka atau data. KNF yang belum dipenuhi atau tidak diimplementasikan dicantumkan beserta alasan dan rencana perbaikan.

Tabel 4.5. Hasil Pengujian KNF

| ID Pengujian | ID KNF | Parameter | Target Terukur | Metode dan Alat | Hasil Aktual | Kesimpulan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *KNF01-TC01* | *KNF01* | *Security* | *Seluruh riwayat check-in dan catatan kesehatan pengguna tersimpan terenkripsi menggunakan algoritma AES-256 (bukan plain-text)* | *Inspeksi langsung tabel `check_in` dan `riwayat_kesehatan` pada basis data PostgreSQL melalui pgAdmin serta pemeriksaan implementasi `utils/encryption.js`* | *Data pada kolom riwayat kesehatan tersimpan dalam bentuk ciphertext dengan format IV dan ciphertext heksadesimal. Implementasi menggunakan AES-256-CBC dengan kunci 256-bit dan IV acak 16 byte.* | *Pass* |
| *KNF02-TC01* | *KNF02* | *Security* | *Wali hanya dapat mengakses ringkasan kondisi pelajar dan tidak dapat mengakses teks jurnal pribadi pelajar* | *Login menggunakan akun wali, memeriksa respons endpoint `/api/reports/summary` dan mencoba mengakses `/api/reports/riwayat` menggunakan token autentikasi wali melalui DevTools Console* | *Endpoint ringkasan berhasil diakses dengan respons 200/304 dan hanya menampilkan data ringkasan. Sementara itu, endpoint riwayat mengembalikan respons 403 Forbidden ketika diakses menggunakan token wali.* | *Pass* |
| *KNF03-TC01* | *KNF03* | *Performance* | *Waktu respons sistem dalam menampilkan rekomendasi tenaga kesehatan maksimal 2.000 ms* | *Pengukuran waktu respons request endpoint `/api/tenaga-kesehatan/` sebanyak lima kali melalui Chrome DevTools Network dengan fitur Disable cache aktif* | *Lima pengukuran menghasilkan waktu respons 126 ms, 107 ms, 18 ms, 8 ms, dan 12 ms. Rata-rata waktu respons adalah 54,2 ms dengan waktu maksimum 126 ms.* | *Pass* |
| *KNF04-TC01* | *KNF04* | *Performance* | *Waktu respons sistem dalam menampilkan grafik laporan kesehatan maksimal 1.500 ms* | *Pengukuran waktu respons request endpoint `/api/reports/summary` sebanyak lima kali melalui Chrome DevTools Network dengan fitur Disable cache aktif* | *Lima pengukuran menghasilkan waktu respons 126 ms, 106 ms, 198 ms, 142 ms, dan 130 ms. Rata-rata waktu respons adalah 140,4 ms dengan waktu maksimum 198 ms.* | *Pass* |
| *KNF05-TC01* | *KNF05* | *Availability* | *Tingkat ketersediaan minimal 99,5% (24/7, downtime maksimal 3,6 jam/bulan)* | *Pengujian ketersediaan layanan (healthcheck) dengan mengakses endpoint ```/api/health``` serta halaman utama aplikasi secara langsung melalui peramban Google Chrome pada lingkungan lokal (```localhost:3000```), sebanyak 20 kali* | *Layanan aktif dan merespons normal (20/20, 100% berhasil diakses) dengan keluaran JSON ```"success": true, "service": "MahaSehat API Server", "status": "OK"``` tanpa galat atau downtime selama sesi pengujian* | *Pass* |
| *KNF06-TC01* | *KNF06* | *Reliability* | *Sistem melakukan percobaan pengiriman ulang (retry attempt) notifikasi darurat secara otomatis hingga 3 kali apabila terjadi gangguan koneksi/transmisi* | *Simulasi kegagalan koneksi/SMTP (127.0.0.1:1) saat notifikasi darurat terpicu pada NotifikasiDaruratController.sendEmergencyNotification() dan inspeksi log serta tabel notifikasi_darurat* | *Sistem melakukan 1 kali kirim awal + 3 kali retry (connect ECONNREFUSED 127.0.0.1:1), mengembalikan false, dan mencatat jumlah_percobaan = 4 serta status = 'Gagal Terkirim' di PostgreSQL* | *Pass* |
| *KNF07-TC01* | *KNF07* | *Ergonomy* | *Pengisian daily check-in oleh pengguna pelajar selesai dalam waktu <= 60 detik dengan <= 4 langkah navigasi antarmuka* | *Pengujian alur pengisian daily check-in dan pencatatan waktu menggunakan stopwatch serta penghitungan langkah antarmuka, 3 kali pengulangan* | *Selesai dalam 31,48 detik dengan 5 langkah (dihitung mulai dari langkah pengisian suasana hati hingga konfirmasi simpan)* | *Fail, halaman daily check-in terdiri dari 5 langkah, yaitu isi mood, jam tidur, pola makan, catatan harian, dan ringkasan. Bagian pola tidur dan pola makan dapat digabung menjadi 1* |
| *KNF08-TC01* | *KNF08* | *Portability* | *Dapat diakses dan berjalan secara responsif pada Google Chrome 100+, Safari 15+, dan Firefox 100+ di perangkat Android 8.0+, iOS 14+, dan Windows 10/11* | *Pengujian fungsional dan tampilan responsif lintas peramban pada Windows 11 (Google Chrome & Microsoft Edge) serta emulasi perangkat mobile Android (Samsung Galaxy A55) dan iOS (iPhone 16 Pro Max) melalui Chrome DevTools Device Toolbar* | *Pass pada Windows 11 (Google Chrome & Microsoft Edge), emulasi Android (Samsung Galaxy A55), dan emulasi iOS (iPhone 16 Pro Max) dengan tata letak dan navigasi responsif (Peramban Safari 15+ serta Firefox 100+ fisik belum diuji karena keterbatasan perangkat uji)* | *Pass* |
| *KNF09-TC01* | *KNF09* | *Memory* | *Penggunaan memori lokal (client-side memory usage) pada peramban maksimal sebesar 150 MB* | *Pengukuran JS Heap Snapshot menggunakan Chrome DevTools (tab Memory) pada 5 halaman utama (```ReportPagePelajar```, ```DashboardPagePelajar```, ```CariTenagaKesehatanPage```, ```SettingPagePelajar```, ```LoginPage```)* | *Rata-rata 8,24 MB, minimum 5,8 MB, dan maksimum 10,6 MB (seluruhnya jauh di bawah batas 150 MB)* | *Pass* |
| *KNF10-TC01* | *KNF10* | *Safety* | *Menampilkan pop-up tombol rujukan darurat resmi saat kondisi ambang batas darurat terpenuhi tanpa menghalangi pengguna menutup tampilan atau mencari bantuan* | *Inspeksi antarmuka DashboardPagePelajar.html dan DashboardPageOrangTuaWali.html saat pelajar PLJ-003 (Citra) berstatus status_darurat = TRUE, serta inspeksi emergency-alert.js* | *Pada DashboardPagePelajar.html milik Citra (status_darurat = TRUE), tidak tampil pop-up rujukan darurat resmi; emergency-alert.js hanya aktif untuk peran wali (pengecekan isWali()) dan menahan penutupan modal (cancel dicegah) tanpa tombol rujukan darurat resmi* | *Fail karena antarmuka pelajar belum memiliki komponen pop-up rujukan darurat non-blocking saat status_darurat = TRUE, dan modal pada emergency-alert.js bersifat khusus wali tanpa tombol tutup/rujukan layanan darurat resmi. Usulan perbaikan: tambahkan banner/modal non-blocking berisi tombol rujukan layanan krisis resmi beserta tombol tutup di dashboard pelajar.* |
| *KNF11-TC01* | *KNF11* | *Ergonomy* | *Halaman login menampilkan formulir masuk yang sederhana dan mudah digunakan (kolom email/username, kata sandi, dan tombol masuk)* | *Inspeksi antarmuka dan uji kegunaan formulir login pada ```LoginPage.html``` melalui Google Chrome* | *Formulir login tampil sederhana dan terstruktur dengan field email dan kata sandi yang jelas, mudah diisi, dan menampilkan pesan kesalahan yang sesuai saat data tidak valid/kosong* | *Pass* |
| *KNF12-TC01* | *KNF12* | *Security* | *Sistem memvalidasi autentikasi, membatasi akses dashboard sesuai role pengguna, dan mengakhiri sesi saat logout sehingga token tidak dapat dipakai kembali* | *Uji login multi-peran (Pelajar/Wali/Nakes), percobaan akses endpoint API lintas peran tanpa otorisasi (/api/emergency/wali, /api/reports/riwayat, /api/konsultasi/masuk, /api/reports/summary), serta pengujian logout dan pemakaian ulang token lama* | *Ketiga login peran mengembalikan HTTP 200; seluruh 4 percobaan akses endpoint lintas peran ditolak HTTP 403; POST /api/auth/logout menaikkan versi_token = 1 dan pemakaian ulang token lama ditolak HTTP 401 (Catatan minor: proteksi peran ditegakkan pada API backend melalui authorizeRoles(), sementara skrip HTML statis klien baru memeriksa keberadaan token di localStorage)* | *Pass* |

<br>

## 4.6 Tangkapan Layar dan Bukti Hasil Pengujian

Bukti pengujian dilampirkan sesuai ID Pengujian pada Subbab 4.2 sampai 4.5, berupa tangkapan layar aplikasi, keluaran *test runner*, laporan *coverage* untuk setiap kelas Mendalam, atau hasil alat ukur.

Tabel 4.6. Bukti Hasil Pengujian

| ID Pengujian | Bukti Hasil Pengujian |
| :--- | :--- |
| *C01, C02, C03, C11, C24, C27 (Unit Test)* | *![UT-AuthDarurat-Runner](./assets/UT-AuthDarurat-Runner.png)* |
| *C01, C11, C24, C27 (Coverage Mendalam)* | *![UT-AuthDarurat-Coverage](./assets/UT-AuthDarurat-Coverage.png)* |
| *INT-TC01 – INT-TC16* | *![INT-Runner](./assets/INT-Runner.png)* |
| *UC01-TC01* | *![UC01-TC01-1](./assets/UC01-TC01-1.png)<br><br>![UC01-TC01-2](./assets/UC01-TC01-2.png)![UC01-TC01-3](./assets/UC01-TC01-3.png)* |
| *UC01-TC02* | *![UC01-TC02-1](./assets/UC01-TC02-1.png)<br><br>![UC01-TC02-2](./assets/UC01-TC02-2.png)* |
| *UC02-TC01* | *![UC02-TC01-1](./assets/UC02-TC01-1.png)<br><br>![UC02-TC01-2](./assets/UC02-TC01-2.png)<br><br>![UC02-TC01-3](./assets/UC02-TC01-3.png)* |
| *UC02-TC02* | *![UC02-TC02](./assets/UC02-TC02.png)* |
| *UC03-TC01* | *![UC03-TC01-1](./assets/UC03-TC01-1.png)<br><br>![UC03-TC01-2](./assets/UC03-TC01-2.png)<br><br>![UC03-TC01-3](./assets/UC03-TC01-3.png)<br><br>![UC03-TC01-4](./assets/UC03-TC01-4.png)<br><br>![UC03-TC01-5](./assets/UC03-TC01-5.png)<br><br>![UC03-TC01-6](./assets/UC03-TC01-6.png)<br><br>![UC03-TC01-7](./assets/UC03-TC01-7.png)* |
| *UC03-TC02* | *![UC03-TC02-1](./assets/UC03-TC02-1.png)<br><br>![UC03-TC02-2](./assets/UC03-TC02-2.png)<br><br>[UC03-TC02-3](./assets/UC03-TC02-3.png)* |
| *UC04-TC01* | *![UC04-TC01-1](./assets/UC04-TC01-1.jpg)<br><br>![UC04-TC01-2](./assets/UC04-TC01-2.jpg)<br><br>![UC04-TC01-3](./assets/UC04-TC01-3.jpg)* |
| *UC04-TC02* | *![UC04-TC02](./assets/UC04-TC02.jpg)* |
| *UC04-TC03* | *![UC04-TC03](./assets/UC04-TC03.jpg)* |
| *UC04-TC04* | *![UC04-TC04](./assets/UC04-TC04.jpg)* |
| *UC04-TC05* | *![UC04-TC05-1](./assets/UC04-TC05-1.jpg)<br><br>![UC04-TC05-2](./assets/UC04-TC05-2.jpg)* |
| *UC05-TC01* | *![UC05-TC01-1](./assets/UC05-TC01-1.jpg)<br><br>![UC05-TC01-2](./assets/UC05-TC01-2.jpg)<br><br>![UC05-TC01-3](./assets/UC05-TC01-3.jpg)* |
| *UC05-TC02* | *![UC05-TC02-1](./assets/UC05-TC02-1.jpg)<br><br>![UC05-TC02-2](./assets/UC05-TC02-2.jpg)* |
| *UC06-TC01* | *![UC06-TC01-1](./assets/UC06-TC01-1.jpg)<br><br>![UC06-TC01-2](./assets/UC06-TC01-2.jpg)* |
| *UC06-TC02* | *![UC06-TC02-1](./assets/UC06-TC02-1.jpg)<br><br>![UC06-TC02-2](./assets/UC06-TC02-2.jpg)<br><br>![UC06-TC02-3](./assets/UC06-TC02-3.jpg)* |
| *UC06-TC03* | *![UC06-TC03](./assets/UC06-TC03.jpg)* |
| *UC07-TC01* | *![UC07-TC01-1](./assets/UC07-TC01-1.jpg)<br><br>![UC07-TC01-2](./assets/UC07-TC01-2.jpg)* |
| *UC07-TC02* | *![UC07-TC02](./assets/UC07-TC02.jpg)* |
| *UC07-TC03* | *![UC07-TC03-1](./assets/UC07-TC03-1.jpg)<br><br>![UC07-TC03-2](./assets/UC07-TC03-2.jpg)* |
| *UC08-TC01* | *![UC08-TC01-1](./assets/UC08-TC01-1.png)<br><br>![UC08-TC01-2](./assets/UC08-TC01-2.png)<br><br>![UC08-TC01-3](./assets/UC08-TC01-3.png)* |
| *UC08-TC02* | *![UC08-TC02](./assets/UC08-TC02.png)* |
| *UC09-TC01* | *![UC09-TC01-1](./assets/UC09-TC01-1.png)<br><br>![UC09-TC01-2](./assets/UC09-TC01-2.png)* |
| *UC09-TC02* | *![UC09-TC02-1](./assets/UC09-TC02-1.png)<br><br>![UC09-TC02-2](./assets/UC09-TC02-2.png)* |
| *UC09-TC03* | *![UC09-TC03](./assets/UC09-TC03.png)* |
| *UC09-TC04* | *![UC09-TC04-1](./assets/UC09-TC04-1.png)<br><br>![UC09-TC04-2](./assets/UC09-TC04-2.png)<br><br>![UC09-TC04-3](./assets/UC09-TC04-3.png)* |
| *UC10-TC01* | *![UC10-TC01-1](./assets/UC10-TC01-1.png)<br><br>![UC10-TC01-2](./assets/UC10-TC01-2.png)* |
| *UC10-TC02* | *![UC10-TC02](./assets/UC10-TC02.png)* |
| *KNF01-TC01* | *![KNF01-TC01](./assets/KNF01-TC01.png)* |
| *KNF02-TC01* | *![KNF02-TC01](./assets/KNF02-TC01.png)* |
| *KNF03-TC01* | *![KNF03-TC01](./assets/KNF03-TC01.png)* |
| *KNF04-TC01* | *![KNF04-TC01](./assets/KNF04-TC01.png)* |
| *KNF05-TC01* | *![KNF05-TC01](./assets/KNF05-TC01.png)* |
| *KNF06-TC01* | *![KNF06-TC01](./assets/KNF06-TC01.png)* |
| *KNF07-TC01* | *![KNF07-TC01-1](./assets/UC03-TC01-2.png)![KNF07-TC01-2](./assets/UC03-TC01-3.png)<br><br>![KNF07-TC01-3](./assets/UC03-TC01-4.png)<br><br>![KNF07-TC01-4](./assets/UC03-TC01-5.png)<br><br>![KNF07-TC01-5](./assets/UC03-TC01-6.png)* |
| *KNF08-TC01* | *![KNF08-TC01](./assets/KNF08-TC01.png)* |
| *KNF09-TC01* | *![KNF09-TC01](./assets/KNF09-TC01.png)* |
| *KNF10-TC01* | *![KNF10-TC01](./assets/KNF10-TC01.png)* |
| *KNF11-TC01* | *![KNF11-TC01-1](./assets/KNF11-TC01-1.png)<br><br>![KNF11-TC01-2](./assets/KNF11-TC01-2.png)* |
| *KNF12-TC01* | *![KNF12-TC01](./assets/KNF12-TC01.png)* |
| *...* | *...* |

<br>

---

# BAB 5: Traceability

Petakan setiap KF ke KNF, use case, kelas perancangan, file implementasi, dan test case. Tabel traceability berikut akan menjadi sarana verifikasi KF. Setiap KF memiliki minimal satu test case dan dinyatakan terpenuhi apabila **seluruh** test case terkaitnya berkesimpulan `Pass`. KF yang tidak diimplementasikan tetap dicantumkan beserta alasannya.

Tabel 5.1. Matriks Kerunutan KF terhadap Implementasi dan Pengujian

| KF ID | KNF Terkait | Use Case ID | Kelas Terkait | Implementasi File Terkait | Test Case (UC) | Test Case (Unit/Integrasi/KNF) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| KF ID | KNF Terkait | Use Case ID | Kelas Terkait | Implementasi File Terkait | Test Case (UC) | Test Case (Unit/Integrasi/KNF) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *KF01* | *KNF08* | *UC01* | *C01 - Pengguna, C02 - Pelajar, C03 - OrangTuaWali, C04 - TenagaKesehatan, C05 - RiwayatKesehatan, C10 - RegistrationPage, C11 - AuthController* | *```src/models/Pengguna.js```, ```src/models/Pelajar.js```, ```src/models/OrangTuaWali.js```, ```src/models/TenagaKesehatan.js```, ```src/models/RiwayatKesehatan.js```, ```src/frontend/views/RegistrationPagePelajar.html```, ```src/controllers/authController.js```* | *UC01-TC01, UC01-TC02* | *C01-UT01 s.d. C01-UT12, C11-UT01 s.d. C11-UT03, INT-TC01, KNF08-TC01* |
| *KF02* | *-* | *UC02* | *C02 - Pelajar, C03 - OrangTuaWali, C11 - AuthController, C12 - KonfirmasiRegistrasiPage* | *```src/models/Pelajar.js```, ```src/models/OrangTuaWali.js```, ```src/controllers/authController.js```, ```src/frontend/views/KonfirmasiRegistrasiPage.html```* | *UC02-TC01, UC02-TC02* | *C03-UT04, C11-UT04 s.d. C11-UT07, INT-TC01* |
| *KF03* | *KNF05* | *UC03* | *C02 - Pelajar, C15 - NotifikasiPengingatController* | *Tidak diimplementasikan: scheduler (```src/jobs/scheduler.js```) hanya menjalankan evaluasi notifikasi darurat, bukan pengingat check-in harian* | *UC03-TC01, UC03-TC02* | *KNF05-TC01* |
| *KF04* | *KNF07, KNF09* | *UC03* | *C02 - Pelajar, C06 - CheckIn, C13 - CheckInPage, C14 - CheckInController* | *```src/models/CheckIn.js```, ```src/frontend/views/CheckInPage.html```, ```src/controllers/checkInController.js```* | *UC03-TC01, UC03-TC02* | *C02-UT02, C06-UT01 s.d. C06-UT12, C14-UT17 s.d. C14-UT34, INT-TC04, KNF07-TC01, KNF09-TC01* |
| *KF05* | *KNF07* | *UC03* | *C06 - CheckIn, C13 - CheckInPage, C14 - CheckInController* | *```src/models/CheckIn.js```, ```src/frontend/views/CheckInPage.html```, ```src/controllers/checkInController.js```* | *UC03-TC01, UC03-TC02* | *C06-UT03 s.d. C06-UT11, C14-UT17 s.d. C14-UT21, C14-UT28 s.d. C14-UT31, INT-TC05, KNF07-TC01* |
| *KF06* | *-* | *UC04* | *C03 - OrangTuaWali, C06 - CheckIn, C07 - LaporanKesehatan, C16 - ReportPage, C17 - ReportController* | *```src/models/CheckIn.js```, ```src/models/LaporanKesehatan.js```, ```src/controllers/ReportController.js```* | *UC04-TC01, UC04-TC03, UC04-TC04* | *C07-UT02, C07-UT11, C07-UT16, C17-UT02, C17-UT10* |
| *KF07* | *KNF01, KNF09* | *UC03* | *C06 - CheckIn, C14 - CheckInController* | *```src/models/CheckIn.js```, ```src/controllers/checkInController.js```, ```src/utils/encryption.js```* | *UC03-TC01, UC03-TC02* | *C14-UT01 s.d. C14-UT16, C14-UT22 s.d. C14-UT25, INT-TC04, KNF01-TC01, KNF09-TC01* |
| *KF08* | *KNF04, KNF08* | *UC04* | *C06 - CheckIn, C07 - LaporanKesehatan, C16 - ReportPage, C17 - ReportController* | *```src/models/LaporanKesehatan.js```, ```src/frontend/views/ReportPagePelajar.html```, ```src/frontend/views/ReportPageOrangTuaWali.html```, ```src/frontend/views/ReportChart.js```, ```src/controllers/ReportController.js```* | *UC04-TC01, UC04-TC03, UC04-TC05* | *C07-UT10, C17-UT02, C17-UT11, INT-TC06, KNF04-TC01, KNF08-TC01* |
| *KF09* | *KNF02 | *UC04* | *C02 - Pelajar, C03 - OrangTuaWali, C07 - LaporanKesehatan, C16 - ReportPage, C17 - ReportController* | *```src/models/LaporanKesehatan.js```, ```src/frontend/views/ReportPagePelajar.html```, ```src/frontend/views/ReportPageOrangTuaWali.html```, ```src/controllers/ReportController.js```* | *UC04-TC02, UC04-TC03, UC04-TC04* | *C03-UT01 s.d. C03-UT03, C17-UT01 s.d. C17-UT07, INT-TC06, INT-TC07, KNF02-TC01* |
| *KF10* | *-* | *UC04* | *C07 - LaporanKesehatan, C17 - ReportController* | *```src/models/LaporanKesehatan.js```, ```src/controllers/ReportController.js```* | *UC04-TC02, UC04-TC04* | *C07-UT01 s.d. C07-UT17, C17-UT02, C17-UT07* |
| *KF11* | *KNF03, KNF08* | *UC05* | *C02 - Pelajar, C04 - TenagaKesehatan, C08 - FasilitasKesehatan, C18 - CariTenagaKesehatanPage, C19 - ProfilTenagaKesehatanPage, C20 - TenagaKesehatanController* | *```src/models/TenagaKesehatan.js```, ```src/models/FasilitasKesehatan.js```, ```src/frontend/views/CariTenagaKesehatanPage.html```, ```src/controllers/TenagaKesehatanController.js```* | *UC05-TC01, UC05-TC02* | *C04-UT01 s.d. C04-UT14, C08-UT01 s.d. C08-UT06, C20-UT23 s.d. C20-UT42, KNF03-TC01, KNF08-TC01* |
| *KF12* | *KNF03* | *UC05* | *C02 - Pelajar, C08 - FasilitasKesehatan, C18 - CariTenagaKesehatanPage, C20 - TenagaKesehatanController* | *```src/frontend/views/CariTenagaKesehatanPage.html```, ```src/controllers/TenagaKesehatanController.js```, ```src/utils/distance.js```* | *UC05-TC01, UC05-TC02* | *C02-UT03, C20-UT01 s.d. C20-UT24, C20-UT30 s.d. C20-UT33, C20-UT39 s.d. C20-UT41, INT-TC08, KNF03-TC01* |
| *KF13* | *-* | *UC06* | *C02 - Pelajar, C04 - TenagaKesehatan, C09 - JadwalKonsultasi, C19 - ProfilTenagaKesehatanPage, C21 - PengajuanKonsultasiPage, C22 - JadwalKonsultasiController* | *```src/models/JadwalKonsultasi.js```, ```src/frontend/views/CariTenagaKesehatanPage.html```, ```src/controllers/KonsultasiController.js```* | *UC06-TC01, UC06-TC02, UC06-TC03* | *C02-UT05, C09-UT01 s.d. C09-UT16, C23-UT01 s.d. C23-UT10, INT-TC09* |
| *KF14* | *-* | *UC06* | *C09 - JadwalKonsultasi, C19 - ProfilTenagaKesehatanPage, C21 - PengajuanKonsultasiPage, C22 - JadwalKonsultasiController* | *```src/models/JadwalKonsultasi.js```, ```src/frontend/views/CariTenagaKesehatanPage.js```, ```src/controllers/KonsultasiController.js```* | *UC06-TC02, UC06-TC03* | *C04-UT07, C04-UT08, C09-UT02 s.d. C09-UT04, C09-UT15, C23-UT06, C23-UT07, INT-TC09* |
| *KF15* | *-* | *UC07* | *C02 - Pelajar, C04 - TenagaKesehatan, C09 - JadwalKonsultasi, C21 - PengajuanKonsultasiPage, C23 - KonsultasiController* | *```src/models/JadwalKonsultasi.js```, ```src/frontend/views/ManajemenKonsultasiPage.html```, ```src/controllers/KonsultasiController.js```* | *UC07-TC01, UC07-TC03* | *C09-UT08 s.d. C09-UT24, C23-UT11 s.d. C23-UT24, INT-TC10* |
| *KF16* | *-* | *UC07* | *C04 - TenagaKesehatan, C09 - JadwalKonsultasi, C23 - KonsultasiController* | *```src/models/JadwalKonsultasi.js```, ```src/controllers/KonsultasiController.js```* | *UC07-TC01, UC07-TC02, UC07-TC03* | *C09-UT10, C09-UT11, C09-UT13, C09-UT19, C23-UT15, C23-UT16, C23-UT20, INT-TC10* |
| *KF17* | *KNF02* | *UC04* | *C02 - Pelajar, C03 - OrangTuaWali, C07 - LaporanKesehatan, C16 - ReportPage, C17 - ReportController* | *```src/models/LaporanKesehatan.js```, ```src/frontend/views/ReportPageOrangTuaWali.html```, ```src/controllers/ReportController.js```* | *UC04-TC03, UC04-TC04* | *C03-UT01, C17-UT04, INT-TC07, KNF02-TC01* |
| *KF18* | *KNF10* | *UC08* | *C02 - Pelajar, C07 - LaporanKesehatan, C24 - NotifikasiDaruratController* | *```src/models/LaporanKesehatan.js```, ```src/models/NotifikasiDarurat.js```, ```src/controllers/NotifikasiDaruratController.js```, ```src/jobs/jalankanEvaluasiDarurat.js```* | *UC08-TC01, UC08-TC02* | *C02-UT04, C07-UT12 s.d. C07-UT17, C24-UT08 s.d. C24-UT10, INT-TC11, KNF10-TC01* |
| *KF19* | *KNF05, KNF06, KNF10* | *UC08* | *C02 - Pelajar, C03 - OrangTuaWali, C24 - NotifikasiDaruratController* | *```src/controllers/NotifikasiDaruratController.js```, ```src/utils/kirimEmail.js```* | UC08-TC01, UC08-TC02* | *C24-UT01 s.d. C24-UT04, C24-UT08 s.d. C24-UT10, INT-TC11, INT-TC14, INT-TC15, KNF05-TC01, KNF06-TC01, KNF10-TC01* |
| *KF20* | *-* | *UC08* | *C03 - OrangTuaWali, C24 - NotifikasiDaruratController* | *```src/controllers/NotifikasiDaruratController.js```* | *UC08-TC01* | *C24-UT05, C24-UT06, INT-TC12* |
| *KF21* | *-* | *UC08* | *C03 - OrangTuaWali, C24 - NotifikasiDaruratController* | *```src/controllers/NotifikasiDaruratController.js```* | *UC08-TC01* | *C24-UT07, INT-TC12* |
| *KF22* | *KNF11* | *UC09* | *C01 - Pengguna, C25 - LoginPage* | *```src/frontend/views/LoginPage.html, src/frontend/views/LoginPage.js```* | *UC09-TC01 s.d. UC09-TC04* | *KNF11-TC01* |
| *KF23* | *KNF12* | *UC09* | *C01 - Pengguna, C02 - Pelajar, C03 - OrangTuaWali, C04 - TenagaKesehatan, C11 - AuthController, C25 - LoginPage, C26 - ResetPasswordPage, C27 - PasswordController, C28 - DashboardPage* | *```src/models/Pengguna.js```, ```src/controllers/authController.js```, ```src/controllers/passwordController.js```, ```src/frontend/views/LoginPage.html```, ```src/frontend/views/ResetPasswordPage.html```, ```src/frontend/views/DashboardPagePelajar.html```, ```src/frontend/views/DashboardPageOrangTuaWali.html```, ```src/frontend/views/DashboardPageTenagaKesehatan.html```* | *UC09-TC01 s.d. UC09-TC04* | *C01-UT07 s.d. C01-UT12, C11-UT08 s.d. C11-UT14, C27-UT01 s.d. C27-UT07, INT-TC02, INT-TC03, KNF12-TC01* |
| *KF24* | *KNF12* | *UC10* | *C01 - Pengguna, C11 - AuthController, C25 - LoginPage, C29 - SettingPage* | *```src/controllers/authController.js```, ```src/frontend/views/SettingPagePelajar.html```, ```src/frontend/views/session.js```, ```src/frontend/views/LoginPage.html```* | *UC10-TC01, UC10-TC02* | *C01-UT12, C11-UT13, C11-UT14, INT-TC02, KNF12-TC01* |

Tabel 5.2. Matriks Kerunutan KNF terhadap Pengujian

| ID KNF | Parameter | KF/UC Terkait | Test Case |
| :--- | :--- | :--- | :--- |
| *KNF01* | *Security* | *KF07 / UC03* | *KNF01-TC01* |
| *KNF02* | *Security* | *KF09, KF17 / UC04* | *KNF02-TC01* |
| *KNF03* | *Response time* | *KF11, KF12 / UC05* | *KNF03-TC01* |
| *KNF04* | *Response time* | *KF08 / UC04* | *KNF04-TC01* |
| *KNF05* | *Availability* | *KF03, KF19 / UC03, UC08 (ketersediaan layanan sistem)* | *KNF05-TC01* |
| *KNF06* | *Reliability* | *KF18, KF19 / UC08* | *KNF06-TC01* |
| *KNF07* | *Ergonomy* | *KF04, KF05, KF07 / UC03* | *KNF07-TC01* |
| *KNF08* | *Portability* | *KF01, KF08, KF11 / UC01, UC04, UC05 (seluruh antarmuka web)* | *KNF08-TC01* |
| *KNF09* | *Memory* | *KF04, KF07 / UC03 (seluruh antarmuka sisi klien)* | *KNF09-TC01* |
| *KNF10* | *Safety* | *KF18, KF19 / UC08* | *KNF10-TC01* |
| *KNF11* | *Ergonomy* | *KF22 / UC09* | *KNF11-TC01* |
| *KNF12* | *Security* | *KF22, KF23, KF24 / UC09, UC10* | *KNF12-TC01* |
