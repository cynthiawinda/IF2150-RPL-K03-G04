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
Sistem ini merupakan aplikasi berbasis web yang dirancang untuk memantau kesehatan mental kalangan pelajar secara berkala, mencakup siswa sekolah hingga mahasiswa perguruan tinggi. Masalah yang sering terjadi adalah kebiasaan pelajar memendam tekanan emosional dan beban akademik seorang diri, baik bagi yang tinggal bersama keluarga maupun yang sedang merantau, sehingga pihak wali kerap terlambat menyadari memburuknya kondisi psikologis mereka. Untuk menjembatani masalah tersebut, aplikasi ini menyediakan ruang pencatatan mandiri yang privat bagi pelajar, dasbor ringkasan perkembangan bagi orang tua atau wali tanpa melanggar ruang pribadi pengguna, serta jalur rujukan ke layanan konseling profesional terdekat.

Secara umum, alur kerja sistem terbagi ke dalam tiga fitur utama:

1. **Pencatatan Harian Pelajar:** Fitur ini digunakan pelajar setiap hari untuk mencatat kondisi yang sedang dialami. Pelajar memilih tingkatan suasana hati dari angka 1 (sangat buruk) sampai 5 (sangat baik), memasukkan perkiraan jam tidur malam sebelumnya, memilih faktor pemicu emosi harian (seperti tugas akademik, ujian, perkuliahan, pertemanan, atau masalah keluarga), serta menuliskan cerita bebas pada kolom buku harian digital.
2. **Dasbor Pemantau Orang Tua atau Wali:** Sistem mengolah data angka pencatatan harian menjadi visualisasi grafik mingguan yang mudah dibaca oleh orang tua atau pihak wali. Dari dasbor ini, wali dapat melihat pola naik-turun suasana hati dan rata-rata jam istirahat pelajar. Sistem menerapkan pembatasan data yang tegas, yaitu wali hanya memiliki akses terhadap grafik rangkuman data dan tidak dapat membaca isi tulisan curhat atau buku harian pribadi yang ditulis oleh pelajar.
3. **Pencarian Tempat Konseling dan Bantuan Awal:** Apabila catatan suasana hati pelajar menunjukkan penurunan berkelanjutan selama beberapa hari berturut-turut, sistem secara otomatis memunculkan kuesioner singkat untuk mengevaluasi tingkat stres atau kejenuhan (*burnout*). Jika hasil evaluasi mengindikasikan perlunya konsultasi lanjutan, sistem menyajikan daftar fasilitas kesehatan mental atau tempat praktik psikolog terdekat, lengkap dengan alamat, kontak, kisaran biaya layanan, dan formulir untuk membuat janji temu.

### Bentuk Aplikasi dan Alasan Pemilihan
Aplikasi ini dibangun berbasis situs web yang dioptimalkan khusus untuk tampilan layar ponsel (*mobile-friendly*), dengan pertimbangan praktis berikut:

1. **Kemudahan Akses Lintas Perangkat:** Pelajar dapat langsung membuka tautan aplikasi melalui peramban ponsel di sela-sela jam pelajaran atau kuliah, serta dapat menyematkan ikon pintasan aplikasi di menu utama ponsel tanpa membebani kapasitas memori penyimpanan. Di sisi lain, orang tua, wali, maupun pihak konselor dapat membuka dasbor dengan nyaman melalui layar laptop atau tablet.
2. **Pemanfaatan Fitur Lokasi Bawaan Ponsel:** Penentuan jarak ke fasilitas kesehatan atau psikolog terdekat memanfaatkan fitur pembaca lokasi yang sudah menjadi standar bawaan pada peramban web pengguna. Pendekatan ini membuat sistem tidak memerlukan modul atau program tambahan yang rumit untuk menghitung perkiraan jarak tempuh.
3. **Tetap Ringan dan Memiliki Pengingat:** Berkas tampilan web disimpan di penyimpanan lokal peramban sehingga halaman tetap dapat dibuka dengan responsif meskipun koneksi internet di area sekolah, kampus, atau tempat tinggal sedang lambat. Aplikasi juga dilengkapi fitur pengingat rutin melalui notifikasi peramban agar pelajar konsisten mengisi catatan harian.
4. **Pengembangan dan Pengujian Efisien:** Berbasis situs web mempermudah alur kerja tim pengembang dalam melakukan uji coba berkala bersama dosen pembimbing maupun pengguna. Perbaikan antarmuka atau pembaruan kode dapat langsung dicoba secara daring melalui tautan web tanpa perlu membuat dan membagikan berkas instalasi aplikasi secara berulang.

### Keunggulan Sistem
1. **Menjaga Batas Privasi Pengguna:** Kendala utama pada aplikasi pemantau keluarga adalah enggannya pelajar bersikap jujur karena merasa diawasi secara penuh. Sistem ini menerapkan pemisahan data yang ketat, yaitu isi tulisan curhat tersimpan aman dan hanya bisa diakses oleh pelajar yang bersangkutan, sedangkan wali hanya menerima visualisasi tren emosi dan durasi tidur. Pelajar juga memegang kendali penuh untuk menyetujui, menautkan, atau memutus izin akses pemantauan wali sewaktu-waktu.
2. **Menghubungkan Pola Istirahat dengan Kondisi Emosi:** Berbeda dengan aplikasi buku harian biasa yang hanya memuat teks, sistem ini menyandingkan data durasi tidur dengan perubahan suasana hati harian dalam grafik mingguan hingga bulanan. Visualisasi ini membantu pelajar memahami secara nyata dampak kurang tidur terhadap penurunan konsentrasi dan kestabilan emosi mereka.
3. **Alur Bantuan yang Konkret dan Terpadu:** Sistem tidak berhenti sebatas pencatatan grafik suasana hati. Ketika terdeteksi indikasi tekanan emosional yang berkepanjangan, aplikasi langsung mengarahkan pengguna ke pilihan solusi nyata berupa daftar fasilitas kesehatan mental terdekat beserta formulir pendaftaran jadwal konsultasi, sehingga pengguna tidak perlu mencari rujukan secara terpisah.

---

## 2.2 Asumsi dan Batasan

### Asumsi Pengembangan

#### Asumsi Pengguna
1. Pelajar mengisi data suasana hati, waktu tidur, dan pilihan aktivitas harian secara mandiri dan jujur sesuai dengan kondisi yang dialami.
2. Orang tua atau wali memahami cara membaca grafik perkembangan sederhana yang ditampilkan pada dasbor, serta menghargai batas privasi catatan tertulis pelajar.
3. Pengguna memberikan izin akses saat peramban meminta otorisasi pembacaan lokasi dan izin pengiriman notifikasi pengingat harian.

#### Asumsi Teknis
1. Pengguna menjalankan aplikasi melalui peramban web modern versi terkini (seperti Google Chrome, Mozilla Firefox, atau Safari).
2. Perangkat pengguna memiliki fungsi penunjuk lokasi yang aktif (melalui sensor GPS atau jaringan seluler/Wi-Fi).
3. Perangkat pengguna terhubung ke internet agar catatan yang diisi di ponsel bisa tersimpan ke sistem.

#### Asumsi Data
1. Data alamat fasilitas layanan kesehatan mental, nomor kontak klinik, dan izin praktik tenaga psikolog yang dihimpun ke dalam sistem merupakan data resmi yang masih aktif dan valid di wilayah uji coba.

### Batasan Sistem

#### Batasan Aturan dan Perlindungan Data
1. Berdasarkan Pasal 25 UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) yang mewajibkan izin orang tua bagi pelajar di bawah 18 tahun, sedangkan pelajar di atas usia tersebut dapat mendaftar langsung secara mandiri. Selain itu, karena catatan emosi termasuk data kesehatan pribadi menurut Pasal 4 UU PDP, datanya wajib dilindungi dan pembagian grafik ke akun wali hanya berjalan atas persetujuan pelajar.

#### Batasan Pengerjaan Proyek
1. **Waktu Pengerjaan:** Proses perancangan, pembuatan antarmuka, penulisan kode program, hingga pengujian sistem dibatasi dalam rentang waktu satu semester akademik (sekitar 14 sampai 16 minggu).
2. **Kapasitas Tim Pengembang:** Aplikasi dikembangkan oleh kelompok yang terdiri atas lima mahasiswa Teknik Informatika, dengan pembagian tugas yang diselaraskan bersama beban perkuliahan paralel lainnya.
3. **Biaya Pengembangan:** Proyek ini dikerjakan tanpa anggaran khusus, sehingga kebutuhan server dan penyimpanan data sepenuhnya mengandalkan layanan gratis (*free-tier*).

#### Batasan Fitur dan Ruang Lingkup
1. **Batasan Fungsi Medis:** Sistem ini murni berfungsi sebagai sarana pencatatan mandiri dan deteksi dini tingkat stres, bukan instrumen medis untuk menetapkan diagnosis gangguan kejiwaan formal ataupun memberikan resep obat. Penetapan diagnosis dan tindakan medis lanjutan tetap sepenuhnya berada di bawah wewenang psikolog atau psikiater berlisensi.
2. **Batasan Layanan Darurat:** Sistem tidak menyediakan tenaga medis atau operator yang berjaga selama 24 jam. Untuk situasi darurat, aplikasi hanya menyediakan tombol pintasan yang langsung mengarahkan panggilan ke kontak bantuan resmi, seperti saluran kesehatan jiwa 119 ekstensi 8.
3. **Pencatatan Aktivitas Istirahat Manual:** Sistem tidak terhubung langsung ke sensor jam tangan pintar (*smartwatch*). Durasi waktu tidur dan pemilihan jenis pemicu aktivitas diisi secara manual oleh pelajar pada formulir harian.
4. **Peniadaan Transaksi Finansial di Aplikasi:** Fitur konsultasi hanya mencakup pencarian informasi ketersediaan jadwal dan pengisian formulir reservasi temu. Sistem tidak memproses transaksi pembayaran secara daring. Seluruh biaya konsultasi diselesaikan langsung oleh pengguna di tempat fasilitas layanan yang dipilih.
5. **Cakupan Wilayah Terbatas:** Basis data fasilitas kesehatan dan daftar tenaga psikolog pada tahap awal percontohan ini dibatasi pada area regional tertentu (wilayah Bandung Raya dan sekitarnya) menggunakan data publik terverifikasi yang dihimpun oleh tim pengembang., sistem menyajikan daftar fasilitas kesehatan mental atau tempat praktik psikolog terdekat, lengkap dengan alamat, kontak, kisaran biaya layanan, dan formulir untuk membuat janji temu.
  
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
