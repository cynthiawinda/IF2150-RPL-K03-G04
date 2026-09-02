<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 1
<br>
TOPIC BRAINSTORMING
</h1>
<br>

## *Nama Perangkat Lunak*

### Untuk: *Stefani Angeline Oroh*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *03* |
| Kelompok | *04*  |

| NIM | Nama |
|---|---|
| *13525021* | *Haikal Muhammad Royyan* |
| *13525066* | *Cynthia Winda Wijaya* |
| *13525081* | *Rendy Salastra Putra* |
| *13525090* | *Sophia Imelda Rogate Marpaung* |
| *13525141* | *Christabelcyne Costan* |
---

<br>
<br>

# BAB 1: Analisis Permasalahan

## 1.1 Latar Belakang Masalah
Kesehatan mental remaja menjadi salah satu isu kesehatan yang mendesak tetapi masih kurang mendapat perhatian di Indonesia. Survei nasional Indonesia-National Adolescent Mental Health Survey (I-NAMHS) pada 2022 mencatat sebanyak 15,5 juta remaja Indonesia (setara 1 dari 3 remaja usia 10-17 tahun) mengalami masalah kesehatan mental. Data terbaru program Cek Kesehatan Gratis (CKG) periode 2025-2026 dari Kementerian Kesehatan juga menemukan gejala masalah kesehatan mental seperti kecemasan dan depresi pada hampir 10% anak di Indonesia.

Dampak yang ditimbulkan tidak berakhir pada gangguan psikologis sementara saja tetapi dapat berujung pada kematian juga. Badan Riset dan Inovasi Nasional (BRIN) mencatat bahwa dari 2.112 kasus bunuh diri di Indonesia sepanjang 2012-2023, sebanyak 985 kasus atau sekitar 46,63% terjadi pada kelompok remaja. Meskipun pemerintah sudah berusaha meningkatkan akses fasilitas kesehatan, hanya sedikit remaja yang mencari bantuan profesional untuk masalah kesehatan mental mereka. Menurut peneliti utama I-NAMHS, hanya 2,6% dari remaja yang memiliki masalah kesehatan mental menggunakan fasilitas kesehatan mental atau konseling untuk membantu mengatasi masalah emosi dan perilaku mereka.

Permasalahan ini berkaitan erat dengan Tujuan Pembangunan Berkelanjutan (SDGs) ke-3 tentang Kehidupan Sehat dan Sejahtera, khususnya target 3.4 yang menekankan penurunan angka kematian dini akibat penyakit tidak menular termasuk gangguan kesehatan mental. Remaja merupakan kelompok usia yang diharapkan menjadi penopang bonus demografi menuju Indonesia Emas 2045. Jika masalah kesehatan mental pada remaja terus dibiarkan tanpa mekanisme deteksi dini dan akses penanganan yang memadai, maka risiko penurunan kualitas hidup, produktivitas, bahkan hilangnya nyawa generasi muda akan terus meningkat sehingga berdampak besar bagi masa depan bangsa.

## 1.2 Analisis Kondisi Saat Ini
Kesadaran masyarakat, terutama generasi muda, akan pentingnya kesehatan mental menunjukkan peningkatan yang signifikan dalam beberapa tahun terakhir. Namun dalam praktiknya, pemantauan kesehatan secara mandiri serta akses ke layanan profesional masih menghadapi berbagai kendala. Saat ini, sebagian besar masyarakat melakukan pemantauan kondisi emosional secara intuitif tanpa pencatatan yang terstruktur. Selain itu, pencarian lokasi layanan psikolog dan penjadwalan konsultasi sering sekali masih dilakukan secara terpisah melalui mesin pencari umum dan media sosial. Di sisi lain, meskipun sekarang terdapat beberapa solusi digital untuk pemantauan kondisi emosional pengguna dan layanan konsultasi secara daring, kebanyakan aplikasi tersebut cenderung berfokus pada satu domain saja, misalnya aplikasi khusus mood tracking, aplikasi khusus konsultasi, atau aplikasi khusus pemantauan kondisi fisik. Hal ini menyebabkan pengguna terpaksa mengunduh banyak aplikasi sehingga pemantauan terasa merepotkan dan kurang efisien. Oleh karena itu, diperlukan suatu perangkat lunak terpadu yang mampu mengintegrasikan mood tracking, pemantauan aktivitas fisik, dan layanan konsultasi serta aksesibilitas layanan psikolog terdekat dalam satu ekosistem yang mudah diakses.

---

# BAB 2: Analisis Solusi

## 2.1 Deskripsi Perangkat Lunak
Perangkat lunak yang diusulkan merupakan sistem pemantauan kesehatan mental terintegrasi yang ditujukan bagi kalangan remaja dengan melibatkan peran orang tua/wali serta tenaga profesional secara proporsional. Sistem ini memposisikan diri sebagai platform refleksi mandiri bagi remaja sekaligus instrumen pemantauan preventif bagi orang tua. 

Dari sudut pandang remaja, aplikasi menyediakan ruang aman untuk mencatat dinamika emosi harian (*mood tracking*), menuliskan jurnal reflektif, serta mendokumentasikan pola istirahat. Dari sudut pandang orang tua/wali, aplikasi berperan sebagai dasbor pemantauan berkala yang menyajikan visualisasi tren emosional anak. Apabila sistem mendeteksi indikasi masalah emosional yang memerlukan penanganan lebih lanjut, aplikasi menyediakan jalur rujukan langsung ke direktori layanan psikolog terdekat.

### Target Platform dan Justifikasi
Perangkat lunak ini dirancang dan diimplementasikan pada platform **mobile (Android / *Cross-platform*)**. Pemilihan platform *mobile* didasari oleh beberapa pertimbangan teknis dan kebutuhan operasional:

1. **Portabilitas dan Aksesibilitas Tinggi:** Ponsel pintar merupakan perangkat personal yang selalu menyertai aktivitas harian remaja. Hal ini memungkinkan pencatatan kondisi emosional dan jurnal dilakukan secara langsung (*real-time*) tepat saat emosi dirasakan, tanpa kendala ruang dan waktu seperti pada komputer desktop.
2. **Integrasi Modul GPS:** Aplikasi memanfaatkan modul *Global Positioning System* (GPS) bawaan perangkat keras ponsel untuk menentukan titik koordinat pengguna secara presisi guna menghitung jarak serta merekomendasikan fasilitas psikolog terdekat.
3. **Kebutuhan Komunikasi Asinkron (*Push Notifications*):** Sistem mengandalkan layanan notifikasi bawaan sistem operasi *mobile* untuk mengirimkan pengingat pencatatan rutin kepada remaja, pembaruan tren berkala kepada orang tua, serta konfirmasi jadwal konsultasi secara tepat waktu.
4. **Faktor Kerahasiaan Personal:** Karakteristik ponsel sebagai *single-user device* memberikan perlindungan privasi yang lebih aman bagi remaja saat menuangkan catatan reflektifnya dibandingkan jika aplikasi diakses melalui perangkat komputer bersama keluarga.

### Nilai Keunikan (*Unique Value Proposition*)
Inovasi dan pembeda utama dari perangkat lunak ini dibandingkan solusi yang sudah beredar di pasaran meliputi:

1. **Pemantauan Kolaboratif Berbasis Privasi:** Menerapkan pemisahan data yang ketat antara anak dan orang tua. Wali hanya memperoleh visualisasi grafik indeks suasana hati dan ringkasan metrik perilaku, sedangkan isi teks narasi jurnal harian anak tetap terenkripsi dan tidak dapat diakses oleh pihak mana pun.
2. **Korelasi Pola Istirahat dan Kondisi Mental:** Mengombinasikan data durasi tidur harian dengan pencatatan suasana hati dalam satu analisis terpadu untuk membantu pengguna memahami keterkaitan antara kebiasaan fisik dan kestabilan emosi.
3. **Keterhubungan Langsung ke Layanan Profesional:** Menyediakan alur rujukan terarah menuju tenaga ahli melalui direktori psikolog terverifikasi, lengkap dengan estimasi jarak, profil praktisi, serta fasilitas reservasi jadwal temu.

---

## 2.2 Asumsi dan Batasan

### Asumsi Pengembangan
Dasar perancangan dan operasional perangkat lunak ini dibangun di atas beberapa asumsi:

#### **Asumsi Pengguna:** 
  1. Remaja diasumsikan memiliki kesadaran dan kejujuran dalam mencatat kondisi emosional serta durasi tidur harian secara berkala.
  2. Orang tua/wali diasumsikan mampu membaca visualisasi grafik statistik pada antarmuka aplikasi dan menyepakati batas privasi anak sejak awal.
  3. Pengguna bersedia memberikan izin akses sistem pada perangkat, terutama perizinan notifikasi dan modul lokasi (GPS).
#### **Asumsi Teknis:**
  1. Perangkat ponsel pintar pengguna menjalankan sistem operasi minimum Android 8.0 (Oreo) ke atas dengan kapasitas penyimpanan yang memadai.
  2. Perangkat memiliki sensor GPS yang berfungsi normal serta konektivitas internet (data seluler atau Wi-Fi) yang stabil untuk proses sinkronisasi data ke peladen *cloud*.
#### **Asumsi Data:**
  * Informasi profil fasilitas kesehatan mental, kontak, dan jadwal praktik psikolog yang dihimpun ke dalam basis data diasumsikan valid, beroperasi aktif, dan memiliki izin praktik resmi.

### Batasan Sistem
Untuk menjaga fokus implementasi dan kepatuhan terhadap regulasi, sistem menetapkan batasan-batasan sebagai berikut:

#### **Batasan Hukum dan Regulasi:**
  1. **Kepatuhan UU PDP:** Merujuk pada Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), data catatan kesehatan mental dikategorikan sebagai data pribadi yang bersifat spesifik. Sistem wajib menerapkan enkripsi data pada tingkat penyimpanan dan transmisi, membatasi akses narasi jurnal secara ketat, serta menerapkan mekanisme persetujuan eksplisit (*explicit consent*) sebelum metrik dibagikan kepada wali.
#### **Batasan Sumber Daya:**
  1. **Waktu:** Pengembangan dibatasi oleh durasi satu semester akademik perkuliahan (sekitar 14–16 minggu kerja).
  2. **Tenaga Kerja:** Dikerjakan oleh tim kecil berskala 5 mahasiswa dengan pembagian peran kerja terdistribusi.
  3. **Anggaran Finansial (*Budget*):** Proyek dikembangkan tanpa alokasi pendanaan khusus (*zero-budget*). Seluruh infrastruktur komputasi awan, basis data, dan API pihak ketiga dibatasi pada pemanfaatan kuota tingkat gratis (*free-tier*).
#### **Batasan Ruang Lingkup Solusi:**
  1. **Batas Fungsi Medis:** Perangkat lunak bertindak murni sebagai instrumen penapisan awal (*early screening*) dan pemantauan mandiri. Sistem tidak memberikan diagnosis medis klinis ataupun peresepan obat; diagnosis definitif sepenuhnya menjadi ranah psikolog dan psikiater berlisensi.
  2. **Ketiadaan Layanan Intervensi Krisis Langsung:** Aplikasi tidak menyediakan tim tanggap darurat krisis 24 jam mandiri, melainkan hanya menyediakan tombol panggilan cepat (*direct emergency call*) ke nomor *hotline* resmi pemerintah/instansi berwenang.
  3. **Mekanisme Input Data:** Pencatatan durasi tidur dan aktivitas mengandalkan masukan mandiri (*manual input*) dari pengguna tanpa integrasi ke sensor perangkat sandang (*smartwatch/wearables*).
  4. **Ruang Lingkup Transaksi:** Fitur rujukan tenaga profesional hanya mencakup pencarian direktori dan formulir reservasi jadwal, tanpa integrasi gerbang pembayaran (*payment gateway*) di dalam aplikasi.
     
---

# BAB 3: Spesifikasi Kebutuhan dan Proses Bisnis

## 3.1 Identifikasi Aktor

| Aktor | Deskripsi |
| :--- | :--- |
| Mahasiswa | Mahasiswa merupakan pengguna utama yang melakukan pencatatan kondisi diri secara mandiri, meliputi suasana hati, pola makan, tidur, aktivitas fisik, dan kondisi kesehatan lainnya. Mahasiswa dapat melihat perkembangan kondisi dirinya, memperoleh rekomendasi atas informasi kesehatannya, melakukan konsultasi dengan tenaga profesional, serta menghubungi layanan darurat ketika membutuhkan bantuan. Karakteristik dari aktor ini adalah kemudahan penggunaan, kecepatan input data, keamanan dan privasi, visualisasi informasi, akses konsultasi, dan akses bantuan darurat. |
| Orang Tua / Wali | Wali merupakan pihak yang berperan dalam memantau kondisi mahasiswa berdasarkan informasi yang dibagikan. Wali dapat melihat ringkasan perkembangan kondisi pengguna, menerima notifikasi apabila terdapat kondisi yang memerlukan perhatian, serta memperoleh informasi lain yang dapat membantu proses pengawasan. Karakteristik dari aktor ini adalah kemudahan penggunaan, kelengkapan metrik pemantauan, kemudahan memahami kondisi pengguna, notifikasi, dan informasi real-time. |
| Psikolog | Psikolog merupakan tenaga ahli yang memberikan layanan konsultasi dan pendampingan psikologis kepada pengguna. Psikolog dapat melihat informasi kesehatan dan riwayat kondisi yang telah diberikan oleh pengguna, melakukan konsultasi, memberikan asesmen atau rekomendasi, serta memantau perkembangan kondisi psikologis pengguna. Karakteristik dari aktor ini adalah kemudahan penggunaan, kelengkapan data psikologis, riwayat kondisi pengguna, keamanan data, dan kemudahan konsultasi. |
| Psikiater | Psikiater merurpakan tenaga medis yang memberikan konsultasi dan penanganan terkait kondisi kesehatan jiwa pengguna. Psikiater dapat mengakses informasi yang relevan dengan persetujuan pengguna, melakukan asesmen, memberikan rekomendasi penanganan, serta melakukan tindak lanjut terhadap kondisi pengguna. Karakteristik dari aktor ini adalah kemudahan penggunaan, kelengkapan riwayat kesehatan, akurasi informasi, keamanan data medis, dan kemudahan konsultasi. |
| Instansi Pemerintah | Instansi Pemerintah merupakan pihak yang menerima permintaan bantuan ketika pengguna mengalami kondisi darurat. Mereka dapat menerima informasi yang diperlukan untuk proses penanganan, seperti identitas pengguna, lokasi, dan jenis keadaan darurat. Karakteristik dari aktor ini adalah kecepatan menerima laporan, kelengkapan informasi darurat, akurasi lokasi, informasi real-time, dan kemudahan koordinasi. |
| Administrator | Administrator merupakan pihak yang bertanggung jawab terhadap pengelolaan sistem, akun pengguna, data layanan, serta operasional aplikasi. Karakteristik dari aktor ini adalah kemudahan pengelolaan sistem, kemudahan pengelolaan akun dan hak akses, kemudahan pemantauan sistem, keamanan data, serta kemudahan pengelolaan informasi.|


## 3.2 Kebutuhan Pengguna Awal


| ID | Aktor | Kebutuhan / Aktivitas | Tujuan / Nilai |
| :--- | :--- | :--- | :--- |
| US-01 | *Mahasiswa* |  *Membuat akun dan mendaftarkan informasi awal serta kontak wali* | *Mempermudah penggunaan aplikasi dan menyediakan informasi yang diperlukan untuk pemantauan* |
| US-02 | *Mahasiswa* | *Mendapatkan pengingat untuk melakukan daily check-in* | *Menjaga konsistensi pencatatan kondisi diri* |
| US-03 | *Mahasiswa* | *Mencatat kondisi mood, aktivitas fisik, pola makan, dan tidur secara berkala* | *Memantau kondisi kesehatan fisik dan mental sehari-hari* |
| US-04 | *Mahasiswa* | *Melihat hasil pengolahan dan statistik kondisi diri* | *Memahami pola dan perubahan kondisi kesehatan dari waktu ke waktu* |
| US-05 | *Mahasiswa / Wali* | *Mendapatkan laporan rangkuman kondisi kesehatan secara berkala* | *Memahami perkembangan kondisi diri dan mengetahui kondisi yang perlu diperhatikan* |
| US-06 | *Mahasiswa* | *Mendapatkan rekomendasi psikolog atau psikiater* | *Menemukan tenaga profesional yang sesuai dengan kebutuhan dan preferensi.* |
| US-07 | *Mahasiswa / Psikolog / Psikiater* | *Menjadwalkan dan mengonfirmasi konsultasi* | *Mempermudah pengguna mendapatkan layanan konsultasi dengan tenaga profesional* |
| US-08 | *Wali* | *Menerima notifikasi ketika terjadi kondisi darurat atau pola kebiasaan yang aneh* | *Membantu wali memantau kondisi pengguna dan memberikan bantuan/perhatian yang diperlukan* |
| US-09 | *Wali* | *Mengonfirmasi penerimaan dan tindak lanjut notifikasi darurat* | *Memastikan penindaklanjutan kondisi darurat* |


## 3.3 Deskripsi Aktivitas
Berikut adalah daftar seluruh aktivitas yang terdapat dalam sistem solusi, lengkap dengan ID dan penjelasan.
| ID | Aktivitas | Penjelasan | ID User Story |
| :--- | :--- | :--- | :--- |
| A01 | *Melakukan Registrasi* | *User membuat akun termasuk riwayat kesehatan mental dan mendaftarkan kontak keluarga/wali.* | *US-01* |
| A02 | *Mengirim Reminder* | *Sistem mengirim notifikasi pengingat jika user belum check-in di waktu tertentu.* | *US-02* |
| A03 | *Melakukan Daily Check-in* | *User mengisi kebutuhan daily check-in, mulai dari skala mood harian, mengisi detail aktivitas fisik, hingga pola makan dan tidur harian.* | *US-03* |
| A04 | *Memantau Daily Check-in* | *Sistem memantau user rutin melakukan daily check-in setiap hari atau tidak.* | *US-02* |
| A05 | *Menyimpan Data* | *Sistem menyimpan histori daily check-in user ke database untuk keperluan analisis dan laporan.* | *US-03* |
| A06 | *Mengolah Data* | *Sistem menghitung dan menganalisis statistik input daily check-in user dalam suatu periode.* | *US-04* |
| A07 | *Menyusun Laporan* | *Sistem membuat dokumen rangkuman laporan terstruktur terkait kondisi kesehatan mental user dalam suatu periode, termasuk prediksi kondisi darurat.* | *US-05* |
| A08 | *Memberi Rekomendasi Tenaga Medis* | *Sistem memberikan pilihan psikolog/psikiater berdasarkan lokasi, biaya, dan analisis kondisi user.* | *US-06* |
| A09 | *Merencanakan Konsultasi* | *User memilih tenaga medis sesuai preferensinya lalu menjadwalkan konsultasi melalui sistem.* | *US-07* |
| A10 | *Mengonfirmasi Konsultasi* | *Tenaga medis mengecek jadwal konsultasi lalu mengonfirmasi pengajuan konsultasi user.* | *US-07* |
| A11 | *Mengirim Laporan* | *Sistem mengirimkan laporan dalam suatu periode kepada user dan/atau keluarga/wali.* | *US-05* |
| A12 | *Mendeteksi Kondisi Darurat* | *Sistem menandai kondisi darurat ketika ketidakaktifan check-in berhari-hari disertai tren laporan kesehatan memburuk.* | *US-05/US-08* |
| A13 | *Mengirim Notifikasi Darurat* | *Sistem mengirim notifikasi atau pesan ke kontak keluarga/wali yang terdaftar saat kondisi darurat terdeteksi.* | *US-08* |
| A14 | *Mengonfirmasi Notifikasi Darurat* | *Keluarga/wali mengonfirmasi telah menerima dan menindaklanjuti notifikasi darurat.* | *US-09* |

## 3.4 Model Proses Bisnis
Model proses bisnis aplikasi dirancang untuk memfasilitasi pencatatan kondisi harian oleh remaja sekaligus memberikan pemantauan terarah kepada orang tua/wali dengan tetap menjaga privasi data pribadi remaja. Proses bisnis utama pada sistem terbagi menjadi dua alur, yaitu **alur pencatatan harian dan pemantauan orang tua/wali** serta **alur pencarian rujukan layanan psikolog terdekat**.

### 3.4.1 Alur Pencatatan Harian dan Pemantauan Orang Tua/Wali
Alur ini menggambarkan proses ketika remaja melakukan pencatatan kondisi harian berupa suasana hati (*mood*) dan durasi tidur. Data tersebut kemudian divalidasi dan diolah oleh sistem menjadi metrik serta grafik tren yang dapat diakses oleh orang tua/wali yang telah terhubung. Orang tua/wali hanya dapat melihat ringkasan kondisi dan tren tanpa dapat mengakses isi narasi jurnal pribadi remaja.
(flowchart masih dibuat)
Berdasarkan diagram tersebut, remaja menjadi aktor utama dalam proses pencatatan data harian. Sistem bertanggung jawab melakukan validasi, penyimpanan, dan pengolahan data menjadi informasi berupa metrik serta tren. Selanjutnya, wali memperoleh notifikasi dan dapat memantau kondisi remaja melalui dashboard. Untuk menjaga privasi, isi narasi jurnal pribadi tidak ditampilkan pada dashboard wali.

### 3.4.2 Alur Pencarian Rujukan Layanan Psikolog Terdekat
Alur ini menggambarkan proses pencarian layanan psikolog ketika remaja membutuhkan bantuan profesional. Sistem memanfaatkan lokasi perangkat setelah pengguna memberikan izin akses GPS untuk mencari fasilitas psikolog yang tersedia di sekitar lokasi pengguna. Pengguna kemudian dapat melihat informasi fasilitas dan melakukan reservasi jadwal tanpa adanya transaksi pembayaran secara langsung di dalam sistem.
(flowchart masih dibuat)
Pada alur ini, remaja berinteraksi langsung dengan sistem untuk mencari layanan psikolog berdasarkan lokasi. Sistem menentukan lokasi pengguna, mencocokkannya dengan direktori fasilitas psikolog, kemudian memberikan rekomendasi berdasarkan kedekatan lokasi dan ketersediaan jadwal. Setelah memilih fasilitas dan jadwal yang sesuai, remaja dapat melakukan reservasi. Proses pembayaran tidak termasuk dalam ruang lingkup sistem.


# Referensi

1. **Republik Indonesia.** (2022). *Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi*. JDIH BPK RI. https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
2. **Kementerian Kesehatan Republik Indonesia.** (2025). *Informasi Layanan dan Panduan Kesehatan Jiwa*. Portal Ayo Sehat Kemenkes RI. https://ayosehat.kemkes.go.id/topik-penyakit/kesehatan-mental
3. **Kementerian Kesehatan Republik Indonesia.** (2025). *Alarm Kesehatan Mental Anak, CKG Temukan Ratusan Ribu Anak Bergejala Cemas dan Depresi*. https://kemkes.go.id/id/alarm-kesehatan-mental-anak-ckg-temukan-ratusan-ribu-anak-bergejala-cemas-dan-depresi
4. **Universitas Gadjah Mada.** (2022). *Hasil Survei I-NAMHS: Satu dari Tiga Remaja Indonesia Memiliki Masalah Kesehatan Mental*. https://ugm.ac.id/id/berita/23086-hasil-survei-i-namhs-satu-dari-tiga-remaja-indonesia-memiliki-masalah-kesehatan-mental/
5. **Pusat Analisis Keparlemenan BK DPR RI.** (2025). *Isu Sepekan: Penanganan Masalah Kesehatan Mental Remaja di Indonesia*. https://berkas.dpr.go.id/pusaka/files/isu_sepekan/Isu%20Sepekan---I-PUSLIT-Februari-2025-217.pdf
6. **United Nations.** (2015). *Sustainable Development Goal 3: Good Health and Well-Being*. https://www.un.org/sustainabledevelopment/health/
