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
Aplikasi *mobile* ini memantau kesehatan mental remaja dan mengirimkan ringkasan data ke orang tua. Remaja mencatat suasana hati serta durasi tidur, lalu mencari kontak psikolog terdekat. Orang tua memantau grafik tren perilaku anak melalui dasbor ringkasan.

### 2.1.1 Platform Target dan Justifikasi
Pengembang memilih aplikasi *mobile* Android / Cross-platform. Remaja dan orang tua berinteraksi rutin lewat ponsel pintar, memungkinkan pengiriman notifikasi pengingat jurnal dan pelacakan lokasi GPS fasilitas psikolog.

### 2.1.2 Nilai Unik (*Unique Value Proposition*)
1. **Integrasi Layanan:** Menggabungkan pencatatan kebiasaan fisik dan suasana hati dengan direktori rujukan psikolog pada satu platform terpadu.
2. **Perlindungan Privasi:** Menyajikan ringkasan grafik kondisi anak kepada orang tua tanpa membuka teks jurnal pribadi.
3. **Rujukan Terarah:** Menyediakan rincian lokasi dan jadwal konsultasi psikolog lokal.

---

## 2.2 Asumsi dan Batasan

### 2.2.1 Asumsi Pengembangan
1. **Asumsi Pengguna:** Remaja mencatat kondisi emosi dan aktivitas harian dengan jujur. Dan orang tua mampu membaca grafik ringkasan metrik pada perangkat.
2. **Asumsi Teknis:** Perangkat terhubung ke jaringan internet aktif untuk proses sinkronisasi basis data. Dan perangkat mengaktifkan modul GPS untuk pemetaan lokasi.
3. **Asumsi Data Layanan:** Tim menyusun data direktori psikolog mitra ke dalam basis data lokal untuk kebutuhan prototipe.

### 2.2.2 Batasan Sistem (*Constraints & Scope*)
1. **Cakupan Medis:** Sistem berfungsi sebagai instrumen penapisan (*screening*) awal. Psikiater memegang wewenang penuh penegakan diagnosis klinis.
2. **Penanganan Kedaruratan:** Sistem memuat daftar kontak darurat resmi untuk panggilan telepon manual tanpa layanan intervensi krisis langsung 24 jam.
3. **Privasi Data (UU PDP):** Dasbor orang tua hanya memuat kalkulasi metrik ringkas. Catatan teks jurnal pribadi anak tetap terlindungi secara penuh.
4. **Ruang Lingkup Proyek**
   - **4.1** Tim beranggotakan lima orang menuntaskan sistem dalam durasi satu semester perkuliahan.
   - **4.2** Pelacakan fisik mengandalkan masukan manual tanpa integrasi sensor *smartwatch*.
   - **4.3** Alur konsultasi dibatasi pada reservasi jadwal tanpa integrasi gerbang pembayaran (*payment gateway*).
uang lingkup solusi.

---

# BAB 3: Spesifikasi Kebutuhan dan Proses Bisnis

## 3.1 Identifikasi Aktor
Buatlah daftar seluruh aktor (pengguna) yang akan berinteraksi langsung dengan sistem solusi yang kalian kembangkan. Berikan penjelasan singkat mengenai peran dan karakteristik dari masing-masing aktor tersebut.

| Aktor | Deskripsi |
| :--- | :--- |
| *Pengguna* | *Pengguna ini bertindak sebagai pihak yang diawasi(?) oleh wali. Karakteristik yang diawasi oleh wali dari pengguna ini adalah pola hidup, kesehatan fisik, kesehatan mental, dan kebiasaan pengguna.* |
| *Wali* | *Wali merupakan pihak yang mengawasi kehidupan pengguna. Karakteristik dari wali adalah kemudahan penggunaan aplikasi, kelengkapan metrik-metrik penunjang pengawasan, dan update informasi secara real-time.* |


## 3.2 Kebutuhan Pengguna Awal
Definisikan apa yang ingin dicapai oleh pengguna saat menggunakan sistem ini dalam format *User Story* (Sebagai [Aktor], saya ingin [Aktivitas/Kebutuhan], sehingga [Tujuan/Nilai]). Pastikan kalian berfokus pada "apa yang ingin dilakukan pengguna".

| ID | Aktor | Kebutuhan / Aktivitas | Tujuan / Nilai |
| :--- | :--- | :--- | :--- |
| US-01 | *Kasir* |  *Memindai barcode barang* | *Proses pembayaran berjalan cepat dan akurat* |
| US-02 | *[Nama Aktor]* | *[Kebutuhan pengguna]* | *[Tujuan yang dicapai pengguna]* |
| ... | ... | ... | ... |

## 3.3 Deskripsi Aktivitas
Buatlah daftar seluruh aktivitas yang terdapat dalam sistem solusi, lengkap dengan ID dan penjelasan. Telusuri hubungan aktivitas tersebut dengan *user story* yang sudah dituliskan sebelumnya. Bisa dibuat dalam bentuk tabel.
| ID | Aktivitas | Penjelasan | ID User Story |
| :--- | :--- | :--- | :--- |
| A01 | *Melakukan Pemesanan* | *Pelanggan memulai proses dengan memesan produk.* | *US-01* |
| A02 | *Memproses Pesanan* | *Sistem memproses dan menyiapkan detail sesuai dengan pesanan.* | *US-02*|
| ... | ... | ... | ... |

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
- Diagram UML: https://www.drawio.com/, https://staruml.io/
- https://berkas.dpr.go.id/pusaka/files/isu_sepekan/Isu%20Sepekan---I-PUSLIT-Februari-2025-217.pdf
- https://ugm.ac.id/id/berita/23086-hasil-survei-i-namhs-satu-dari-tiga-remaja-indonesia-memiliki-masalah-kesehatan-mental/
- https://kemkes.go.id/id/alarm-kesehatan-mental-anak-ckg-temukan-ratusan-ribu-anak-bergejala-cemas-dan-depresi
- https://www.un.org/sustainabledevelopment/health/
- https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- https://keswa.kemkes.go.id/
