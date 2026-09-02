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
Perangkat lunak ini merupakan sistem pemantauan kesehatan mental berbasis web yang mengintegrasikan pencatatan kondisi mandiri pelajar, dasbor analitik tren bagi orang tua atau wali, serta direktori rujukan fasilitas kesehatan mental. Sistem menjembatani kebutuhan pelajar dalam mendokumentasikan dinamika emosional harian secara privat, sekaligus memberikan visibilitas bagi wali untuk mendeteksi dini indikasi gangguan psikologis.

Sistem membagi interaksi pengguna ke dalam tiga subsistem utama:
1. **Subsistem Pencatatan Mandiri Pelajar (*Student Self-Logging*):** Pelajar mengisi data harian (*daily check-in*) yang mencakup skala suasana hati kuantitatif (skala 1 sampai 5), durasi tidur, label aktivitas pemicu (*tags*), serta catatan refleksi teks bebas (*journaling*).
2. **Subsistem Dasbor Pemantauan Wali (*Guardian Oversight Dashboard*):** Sistem mengolah data kuantitatif pelajar menjadi grafik deret waktu (*time-series*) yang menampilkan fluktuasi suasana hati mingguan dan rata-rata durasi tidur harian. Dasbor ini menerapkan pemisahan data. Wali hanya membaca visualisasi statistik agregat tanpa akses terhadap teks jurnal reflektif pelajar.
3. **Subsistem Penapisan dan Rujukan Layanan (*Screening & Referral Directory*):** Saat parameter suasana hati menunjukkan penurunan berkelanjutan dalam kurun waktu evaluasi tertentu, antarmuka menyajikan kuesioner penapisan lanjutan dan membuka direktori faskes kesehatan jiwa terdekat berbasis lokasi pengguna, lengkap dengan profil praktisi dan formulir reservasi jadwal temu.

### Target Platform dan Justifikasi
Sistem dibangun pada platform **Web berbasis *Progressive Web App* (PWA) dengan pendekatan *Mobile-First*** berdasarkan pertimbangan teknis berikut:

1. **Aksesibilitas Multi-Aktor:** Pelajar mengakses modul pencatatan melalui peramban ponsel pintar atau menyematkannya ke layar utama (*Add to Home Screen*) tanpa kewajiban mengunduh berkas instalasi dari toko aplikasi. Pada saat yang sama, wali dan tenaga profesional dapat membaca grafik visualisasi data dan jadwal konsultasi melalui peramban desktop atau tablet.
2. **Pemanfaatan *HTML5 Geolocation API*:** Penentuan titik koordinat pengguna untuk kalkulasi jarak fasilitas psikolog terdekat menggunakan antarmuka standar *HTML5 Geolocation API*. Pendekatan ini meniadakan ketergantungan pada SDK pemetaan *native* platform tertentu dan mendukung komputasi jarak spasial (seperti formula *Haversine*) di tingkat peramban maupun peladen.
3. **Penyimpanan Lokal dan Layanan Latar Belakang (*Service Worker & Web Push*):** Arsitektur PWA memanfaatkan *Service Worker* dan *Cache Storage API* untuk mengelola aset statis aplikasi, menjaga ketersediaan antarmuka saat konektivitas jaringan pengguna tidak stabil di lingkungan sekolah atau tempat tinggal. Pemanfaatan *Push API* dan *Notification API* menangani pengiriman pengingat jadwal pencatatan harian pelajar dan pemberitahuan tren kondisi kepada wali.
4. **Efisiensi Siklus Pengembangan dan Distribusi Kode:** Arsitektur web berbasis komputasi awan mendukung alur integrasi dan distribusi berkelanjutan (*Continuous Integration/Continuous Deployment* - CI/CD). Pengujian fungsionalitas dan demonstrasi sistem dapat dilakukan langsung melalui tautan peramban (*URL*) tanpa kompilasi paket aplikasi biner pada berbagai variasi sistem operasi perangkat penguji.

### Nilai Keunikan (*Unique Value Proposition*)
Dibandingkan aplikasi pemantau suasana hati yang telah ada, sistem ini membawa beberapa nilai pembeda:

1. **Pemisahan Akses Data Berbasis Peran (*Role-Based Access Control* - RBAC):** Sistem memisahkan hak akses antara pelajar dan wali. Catatan narasi jurnal pelajar tersimpan dengan enkripsi tingkat data (*field-level encryption*) yang terikat pada kunci sesi pelajar. Akun wali hanya menerima visualisasi statistik tren afektif dan metrik durasi tidur tanpa kemampuan membuka teks jurnal. Pelajar memiliki kendali penuh untuk menautkan atau memutus tautan pemantauan wali sewaktu-waktu.
2. **Korelasi Multivariat Durasi Tidur dan Suasana Hati:** Sistem memetakan hubungan antara durasi tidur harian dan kestabilan emosi pengguna dalam rentang waktu 7 hingga 30 hari. Visualisasi analitik ini membantu pelajar mengenali dampak pola istirahat fisik terhadap kestabilan emosional harian.
3. **Alur Rujukan Layanan Profesional Terpadu:** Sistem menggabungkan deteksi dini berbasis log data dengan direktori layanan terverifikasi. Pengguna dapat menelusuri data faskes terdekat, memeriksa profil kualifikasi praktisi, melihat estimasi biaya, dan mengisi formulir reservasi jadwal temu dalam satu ekosistem aplikasi.

---

## 2.2 Asumsi dan Batasan

### Asumsi Pengembangan

#### **Asumsi Pengguna:**
1. Pelajar mengisi data suasana hati, durasi tidur, dan aktivitas harian secara berkala sesuai kondisi aktual tanpa manipulasi data buatan.
2. Orang tua atau wali memiliki pemahaman dasar dalam membaca grafik visualisasi data pada peramban serta menyetujui batasan privasi terkait kerahasiaan teks jurnal pelajar.
3. Pengguna memberikan izin akses saat peramban meminta otorisasi pembacaan koordinat lokasi (*geolocation*) dan penerimaan notifikasi (*push notifications*).

#### **Asumsi Teknis:**
1. Perangkat keras pengguna menjalankan peramban modern yang mematuhi standar W3C untuk spesifikasi *Service Worker*, IndexedDB, dan Web Storage (antara lain peramban berbasis Chromium, Gecko, atau WebKit versi mutakhir).
2. Perangkat pengguna memiliki modul sensor penentu lokasi yang aktif (GPS atau triangulasi jaringan seluler/Wi-Fi).
3. Koneksi internet pengguna berfungsi memadai pada interval waktu tertentu untuk sinkronisasi data lokal ke peladen komputasi awan.

#### **Asumsi Data:**
1. Data master fasilitas kesehatan mental, kontak resmi, alamat fisik, dan izin praktik tenaga psikolog yang dihimpun dalam basis data berstatus legal, aktif beroperasi, serta terverifikasi pada wilayah percontohan.

### Batasan Sistem

#### **Batasan Regulasi dan Hukum:**
1. **Kepatuhan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP):** Rekam kesehatan mental dikelola sebagai data pribadi spesifik. Sesuai Pasal 25 UU PDP mengenai pemrosesan data anak, sistem mewajibkan persetujuan orang tua atau wali (*parental consent*) pada saat pendaftaran akun pelajar. Sistem menerapkan enkripsi data pada jalur transmisi (TLS 1.3) dan pada media penyimpanan (*encryption at-rest*), serta memberi hak otonomi kepada pelajar untuk menyetujui pembagian ringkasan metrik ke akun wali.

#### **Batasan Sumber Daya:**
1. **Waktu:** Seluruh tahapan rekayasa perangkat lunak, mulai dari analisis kebutuhan hingga pengujian sistem, dibatasi dalam kurun waktu satu semester akademik perkuliahan (14 sampai 16 minggu kerja).
2. **Tenaga Kerja:** Proyek dikerjakan oleh tim pengembang yang terdiri atas lima mahasiswa sarjana Teknik Informatika dengan pembagian peran kerja terdistribusi di tengah beban mata kuliah paralel lainnya.
3. **Anggaran:** Pengembangan berjalan tanpa dukungan pendanaan eksternal (*zero-budget*). Pemanfaatan infrastruktur peladen awan (*serverless runtime*), basis data, dan antarmuka pihak ketiga dibatasi pada kuota gratis (*free-tier*).

#### **Batasan Ruang Lingkup Solusi:**
1. **Batas Fungsi Medis:** Sistem berfungsi sebagai sarana pendataan mandiri dan penapisan awal (*early screening*), bukan instrumen diagnosis klinis psikiatri maupun peresepan obat-obatan. Penegakan diagnosis dan intervensi medis tetap menjadi wewenang psikolog klinis dan psikiater berlisensi.
2. **Ketiadaan Layanan Tanggap Krisis 24 Jam:** Sistem tidak menyediakan tim operator atau regu tanggap krisis darurat mandiri. Fitur kedaruratan dibatasi pada penyediaan tombol pengalihan panggilan telepon (*intent call* `tel:`) ke nomor saluran siaga (*hotline*) resmi pemerintah (seperti layanan darurat kesehatan jiwa Kemenkes RI 119 ekstensi 8).
3. **Pencatatan Aktivitas Fisik Manual:** Sistem tidak menyediakan modul komunikasi nirkabel (seperti Web Bluetooth API) ke sensor perangkat sandang (*smartwatch* atau *sleep tracker*). Seluruh data durasi istirahat dan aktivitas mengandalkan masukan manual oleh pelajar.
4. **Peniadaan Modul Transaksi Finansial:** Fitur rujukan ke tenaga profesional mencakup pencarian ketersediaan slot waktu, penyerahan formulir data awal, dan konfirmasi jadwal konsultasi. Sistem tidak mengintegrasikan gerbang pembayaran (*payment gateway*). Transaksi finansial diselesaikan di luar sistem pada fasilitas layanan terkait.
5. **Cakupan Wilayah Data Direktori:** Basis data fasilitas kesehatan mental dan profil praktisi dibatasi pada kawasan percontohan regional tertentu (area Bandung Raya dan sekitarnya) menggunakan data sekunder terverifikasi, tanpa sinkronisasi langsung ke sistem basis data keanggotaan organisasi profesi nasional.
   
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
