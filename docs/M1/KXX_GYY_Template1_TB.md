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
Abstraksikan solusi perangkat lunak yang diusulkan dari sudut pandang pengguna. Jelaskan target platform yang akan digunakan (misalnya: desktop application) beserta alasan pemilihannya. Deskripsikan juga nilai unik (inovasi inti) dari perangkat lunak kalian dan apa yang membedakannya dari solusi yang sudah ada.

## 2.2 Asumsi dan Batasan
Definisikan secara tegas asumsi (baik teknis maupun dari sisi pengguna) yang menjadi dasar pengembangan. Tuliskan batasan seperti regulasi/hukum, keterbatasan sumber daya, dan ruang lingkup solusi.

---

# BAB 3: Spesifikasi Kebutuhan dan Proses Bisnis

## 3.1 Identifikasi Aktor
Buatlah daftar seluruh aktor (pengguna) yang akan berinteraksi langsung dengan sistem solusi yang kalian kembangkan. Berikan penjelasan singkat mengenai peran dan karakteristik dari masing-masing aktor tersebut.

| Aktor | Deskripsi |
| :--- | :--- |
| *Kasir* | *Pengguna ini bertindak sebagai pihak yang bertanggung jawab untuk memproses transaksi harian dan melayani pembayaran pelanggan. Karakteristik dari pengguna ini adalah mengutamakan kecepatan dan keakuratan saat bertransaksi.* |
| ... | ... |


## 3.2 Kebutuhan Pengguna Awal
Definisikan apa yang ingin dicapai oleh pengguna saat menggunakan sistem ini dalam format *User Story* (Sebagai [Aktor], saya ingin [Aktivitas/Kebutuhan], sehingga [Tujuan/Nilai]). Pastikan kalian berfokus pada "apa yang ingin dilakukan pengguna".

| ID | Aktor | Kebutuhan / Aktivitas | Tujuan / Nilai |
| :--- | :--- | :--- | :--- |
| US-01 | *Kasir* |  *Memindai barcode barang* | *Proses pembayaran berjalan cepat dan akurat* |
| US-02 | *[Nama Aktor]* | *[Kebutuhan pengguna]* | *[Tujuan yang dicapai pengguna]* |
| ... | ... | ... | ... |

## 3.3 Model Proses Bisnis
Buatlah *Activity Diagram* atau *Swimlane Diagram* yang menunjukkan alur kerja proses bisnis dari sistem solusi. Diagram ini harus memvisualisasikan bagaimana alur operasional di dunia nyata berjalan lebih efisien dengan adanya interaksi antara aktor (yang didefinisikan pada poin 3.1) dan sistem perangkat lunak. Perhatikan notasi yang digunakan dalam pembuatannya.
<br>

<p align="center">
<img alt="Contoh Activity Diagram" src="./assets/diagram/diagram-act-1.avif" width="70%">
</p>
<p align="center">
<i>Gambar 1. Contoh Activity Diagram</i>
</p>

<br>

# Referensi
- Diagram UML: https://www.drawio.com/, https://staruml.io/
- https://berkas.dpr.go.id/pusaka/files/isu_sepekan/Isu%20Sepekan---I-PUSLIT-Februari-2025-217.pdf 
- https://ugm.ac.id/id/berita/23086-hasil-survei-i-namhs-satu-dari-tiga-remaja-indonesia-memiliki-masalah-kesehatan-mental/ 
- https://kemkes.go.id/id/alarm-kesehatan-mental-anak-ckg-temukan-ratusan-ribu-anak-bergejala-cemas-dan-depresi
- https://www.un.org/sustainabledevelopment/health/
