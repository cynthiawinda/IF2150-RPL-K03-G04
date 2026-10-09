<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
</h1>
<br>

## *Mahasehat: Mental Health Monitoring App for Students*
### *[Logo Perangkat Lunak]*

### Untuk: *Stefani Angeline Oroh*

Dipersiapkan oleh:
| Informasi | Keterangan |
| --- | --- |
| Kelas | *03* |
| Kelompok | *04*  |
| Nama Kelompok | *pakespinwheel*  |

| NIM       | Nama               |
| --------- | ------------------ |
| *13525021* | *Haikal Muhammad Royyan* |
| *13525066* | *Cynthia Winda Wijaya* |
| *13525081* | *Rendy Salastra Putra* |
| *13525090* | *Sophia Imelda Rogate Marpaung* |
| *13525141* | *Christabelcyne Costan* |
---

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Deskripsikan perubahan yang dilakukan dari dokumen sebelumnya pada dokumen ini. Jika tidak terdapat perubahan, harap kosongkan tabel.* |
| *B* |  |
| *C* |  |
| ... |  |

---

<br>

> **Petunjuk pengerjaan:** *[Silahkan hapus bagian ini setelah selesai mengerjakan]*
>
> Dokumen ini melanjutkan **Spesifikasi Kebutuhan Perangkat Lunak (SKPL)** dan **Arsitektur Perangkat Lunak (APL)**. Gunakan nama, ID, kebutuhan, dan use case yang konsisten dengan kedua dokumen tersebut. Contoh pola ID baru di bawah dapat disesuaikan dengan kesepakatan kelompok, ID yang sudah ada tetap dipertahankan.

<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Tuliskan dengan ringkas tujuan dokumen DPPL ini dibuat dan siapa saja yang akan menggunakan dokumen ini.

## 1.2 Lingkup Masalah
Tuliskan dengan ringkas nama aplikasi dan deskripsi singkatnya. Bagian ini maksimal berisi satu paragraf, dapat diambil dari SKPL.

## 1.3 Definisi, Istilah, dan Singkatan

Tabel 1.3. Definisi Istilah dan Singkatan

| Singkatan, Akronim, atau Istilah | Penjelasan |
| :--- | :--- |
| *P/L* | *Singkatan dari Perangkat Lunak, yaitu aplikasi yang memberikan perintah kepada komputer untuk menjalankan tugas tertentu.* |
| *SKPL* | *Singkatan dari Spesifikasi Kebutuhan Perangkat Lunak, yaitu dokumen yang merangkum kriteria-kriteria yang diperlukan untuk membangun aplikasi menjalankan tugasnya.* |
| *DPPL* | *Singkatan dari Deskripsi Perancangan Perangkat Lunak, yaitu dokumen lanjutan SKPL yang berisi rancangan teknis dan arsitektur perangkat lunak.* |
| *KF* | *Singkatan dari Kebutuhan Fungsional, yaitu layanan yang harus disediakan dan respon atas masukan, kadang termasuk yang tidak boleh dilakukan.* |
| *KNF* | *Singkatan dari Kebutuhan Non-Fungsional, yaitu batasan atas layanan yang harus disediakan, seberapa baik, dalam kondisi apa, dengan jaminan apa.* |
| *UC* | *Singkatan dari Use Case, yaitu pemodelan cara aktor berinteraksi dengan sistem.* |
| *Aktor* | *Merepresentasikan entitas di luar batas sistem yang berinteraksi dengan sistem.* |
| *Skenario* | *Merepresentasikan satu penelusuran konkret melalui sebuah use case, menyatakan apa saja yang terjadi pada sistem.* |
| *Kelas* | *Merepresentasikan suatu jenis objek yang memiliki atribut dan metode/operasi untuk menjalankan tanggung jawabnya.* |
| *Entity Class* | *Kelas yang merepresentasikan data inti atau objek dunia nyata yang sifatnya bertahan lama dalam sistem.* |
| *Boundary Class* | *Kelas yang mengatur komunikasi antara pengguna (aktor) atau sistem luar dengan sistem utama.* |
| *Controller Class* | *Kelas yang mengatur alur kerja dan aturan bisnis (menghubungkan Boundary dan Entity).* |
| *Kebutuhan* | *Merepresentasikan persyaratan atau ketentuan wajib yang harus dipenuhi untuk mencapai suatu tujuan dalam pembuatan sistem atau Perangkat Lunak.* |

## 1.4 Aturan Penomoran

Tabel 1.4. Aturan Penomoran

| Hal/Bagian | Penomoran | Keterangan |
| :--- | :--- | :--- |
| *Kebutuhan Fungsional* | *KFXX* | *Mewakili singkatan kata "Kebutuhan Fungsional", diikuti dua digit unik untuk membedakan tiap KF.* |
| *Kebutuhan Non-Fungsional* | *KNFXX* | *Mewakili singkatan kata "Kebutuhan Non-Fungsional", diikuti dua digit unik untuk membedakan tiap KNF.* |
| *Aktor* | *AXX* | *Mewakili singkatan kata "Aktor", diikuti dua digit unik untuk membedakan tiap aktor.* |
| *Use Case* | *UCXX* | *Mewakili singkatan kata "Use Case", diikuti dua digit unik untuk membedakan tiap UC.* |
| *Kelas* | *CXX* | *Mewakili singkatan kata "Class", diikuti dua digit unik untuk membedakan tiap kelas.* |
| *Kebutuhan* | *RXX* | *Mewakili singkatan kata "Requirement", diikuti dua digit unik untuk membedakan tiap kebutuhan.* |

## 1.5 Referensi
Cantumkan dokumentasi P/L yang dirujuk oleh dokumen ini, **minimal dokumen SKPL dan APL**. Tambahkan buku, panduan, atau dokumentasi lain apabila digunakan.
- Diagram UML: [https://www.drawio.com/](https://www.drawio.com/)
- https://nodejs.org/docs/latest-v20.x/api/
- https://expressjs.com/
- https://www.postgresql.org/docs/15/
- https://developers.google.com/maps/documentation/geolocation/
- https://developers.google.com/calendar/api
- Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
Tuliskan sistematika pembahasan dokumen ini secara ringkas dan runut, dengan maksimal 1 paragraf.

<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

Sebutkan *operating system*, DBMS, *development tools*, *filing system*, dan bahasa pemrograman yang digunakan.

## 2.2 Style/Pattern Arsitektur Acuan

Arsitektur acuan yang dipilih untuk pengembangan perangkat lunak Mahasehat adalah **MVC (_Model-View-Controller_)**. Pola ini memisahkan logika aplikasi ke dalam tiga komponen utama yang saling terhubung, yaitu _Model_, _View_, dan _Controller_.
1. _Model (`<<entity>>`)_
Bertanggung jawab dalam merepresentasikan dan mengelola data serta logika yang berkaitan dengan entitas pada sistem. Model menangani data yang digunakan dalam proses bisnis dan menyediakan akses terhadap data tanpa bergantung pada bagaimana data tersebut ditampilkan kepada pengguna.
2. _View (`<<boundary>>`)_
Bertanggung jawab dalam menyajikan antarmuka pengguna (_User Interface_) berbasis web responsif kepada aktor, yaitu Pelajar, Orang Tua/Wali, dan Tenaga Kesehatan. View menerima masukan dari pengguna, meneruskannya kepada _Controller_, serta menampilkan hasil pemrosesan dalam bentuk formulir, grafik, informasi, maupun notifikasi.
3. _Controller (`<<control>>`)_
Bertanggung jawab sebagai perantara antara _View_ dan _Model_. _Controller_ menerima request atau aksi dari pengguna melalui _View_, mengatur alur pemrosesan, melakukan validasi yang diperlukan, memanggil _Model_ untuk mengakses atau mengolah data, serta mengembalikan hasil pemrosesan kepada _View_.

<br><br>
Pemilihan pola MVC didasarkan pada karakteristik sistem Mahasehat, terutama keberagaman aktor, pemisahan hak akses, pengolahan data kesehatan, serta kebutuhan keamanan dan responsivitas sistem yang telah didefinisikan pada SKPL:
1. Pemisahan antarmuka dan hak akses pengguna
Mahasehat memiliki tiga jenis aktor, yaitu Pelajar, Orang Tua/Wali, dan Tenaga Kesehatan, yang memiliki kebutuhan serta hak akses berbeda. MVC memungkinkan antarmuka pengguna dipisahkan dari proses pengolahan data sehingga setiap kebutuhan pengguna dapat ditangani melalui _View_ dan _Controller_ yang sesuai. Contohnya pada UC04 (Melihat Statistik dan Laporan Kondisi), Pelajar dapat melihat laporan kondisi personal, sedangkan Orang Tua/Wali hanya memperoleh data ringkasan sesuai hak aksesnya. Pemisahan ini didukung oleh ReportPage sebagai View dan ReportController sebagai Controller yang mengatur kalkulasi statistik serta pembatasan akses data berdasarkan peran pengguna. Hal ini juga selaras dengan KNF02 yang mengharuskan data yang diberikan kepada Orang Tua/Wali tidak mencakup teks jurnal pribadi Pelajar.
2. Pemisahan pengolahan data dan antarmuka
Mahasehat mengolah berbagai data dari _daily check-in_, seperti skala mood dan pola tidur, menjadi grafik tren, rangkuman kondisi, serta indikator risiko. Pemisahan antara _Model_, _View_, dan _Controller_ memungkinkan proses pengolahan data tersebut dilakukan tanpa mencampurkannya dengan kode antarmuka pengguna. Sebagai contoh, LaporanKesehatan berperan dalam merepresentasikan hasil pengolahan laporan, sedangkan ReportController mengatur kalkulasi statistik, pembuatan grafik, serta evaluasi ambang batas. Sementara itu, ReportPage bertanggung jawab menampilkan hasil tersebut kepada pengguna.
3. Mendukung keamanan dan kebutuhan non-fungsional
Mahasehat menangani data kesehatan dan catatan _daily check-in_ yang bersifat sensitif. Pemisahan tanggung jawab dalam MVC memudahkan pengelolaan akses dan pemrosesan data secara terstruktur sehingga logika keamanan tidak perlu ditempatkan langsung pada antarmuka pengguna. Hal ini mendukung KNF01 mengenai enkripsi data kesehatan dan check-in menggunakan AES-256 serta KNF02 mengenai pembatasan akses data berdasarkan hak pengguna.
4. Mendukung aplikasi _web_ responsif
Mahasehat dirancang sebagai aplikasi web responsif yang digunakan oleh pengguna melalui peramban pada berbagai perangkat. Pemisahan View dari proses bisnis memungkinkan antarmuka dikembangkan secara responsif tanpa mengubah logika pengolahan data pada _Controller_ dan _Model_. Hal ini sesuai dengan KNF07 dan KNF08 yang menekankan kemudahan dan kecepatan proses _daily check-in_ serta kompatibilitas pada berbagai peramban dan perangkat.

<br><br>
<p align="center">
<img alt="Arsitektur MVC" src="./assets/diagram/arsitektur-mvc.png" width="70%">
</p>
<p align="center">
<i>Gambar 1. Arsitektur MVC</i>
</p>
<br><br>

Tabel 1.1. Spesifikasi Lingkungan Operasi Perangkat Lunak
| Komponen | Spesifikasi |
| :--- | :--- |
| *Server Application* | Node.js v20.x LTS or Express.js |
| *Database Management System (DBMS)* | PostgreSQL 15+ |
| *Client Side (Perangkat Pengguna)* | Web browser modern |
| *External APIs & Services* | Geolocation API & Google Maps Platform |
| *External APIs & Services* | Google Calendar API |
| *External APIs & Services* | SMTP or Mail Service (Nodemailer/SendGrid) |
| *Operating System for Server* | Ubuntu Server 22.04 LTS or Linux Cloud Environment |
| *Protokol Keamanan* | HTTPS dengan sertifikat SSL/TLS & enkripsi AES-256 |

Kaitan teknologi dengan pola MVC yang dipilih:
1. Node.js dan Express.js sebagai lingkungan _Controller_
Node.js dan Express.js digunakan sebagai lingkungan _server-side_ untuk menjalankan logika aplikasi. Pada implementasi MVC, _route handler_ dan komponen _Controller_ yang dibangun menggunakan Express.js menangani _request_ dari _View_, mengatur alur pemrosesan, serta menghubungkan _View_ dengan _Model_.
2. PostgreSQL sebagai penyimpanan data _Model_
PostgreSQL digunakan sebagai DBMS untuk menyimpan data yang direpresentasikan oleh _Model_, seperti data pengguna, _daily check-in_, laporan kesehatan, fasilitas kesehatan, dan jadwal konsultasi. Dengan demikian, _Model_ menjadi bagian yang mengelola representasi dan akses terhadap data sistem.
3. Web UI sebagai _View_
Antarmuka berbasis _web_ responsif pada peramban pengguna berperan sebagai _View_ dalam pola MVC. Komponen seperti CheckInPage, ReportPage, dan PengajuanKonsultasiPage menyediakan antarmuka untuk menerima masukan pengguna serta menampilkan hasil pemrosesan sistem.
4. External APIs & Services sebagai integrasi yang diakses melalui _Controller_
Layanan eksternal seperti Geolocation API, Google Maps Platform, Google Calendar API, dan Mail Service digunakan untuk mendukung fungsi pencarian tenaga kesehatan, penjadwalan konsultasi, serta pengiriman notifikasi. Integrasi tersebut ditangani melalui alur pemrosesan pada _Controller_ sehingga detail layanan eksternal tidak perlu ditangani langsung oleh _View_.


## 2.3 Identifikasi Komponen / Modul / Subsistem

Tabel 2.3. Identifikasi Komponen/Modul/Subsistem

| Nama Komponen/Modul/Subsistem | Jenis                 | Penjelasan                                                                                                           |
| :---------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| *Pengguna*                 | *Model*                | *Merepresentasikan data akun pengguna yang dimiliki ketiga aktor.*     |
| *CheckIn*                 | *Model*                | *Merepresentasikan data hasil daily check-in pelajar berupa skala mood, durasi tidur, pola makan, faktor pemicu stress, catatan jurnal, dan tanggal pencatatannya.*     |
| *Pelajar*                 | *Model*                | *Merepresentasikan data akun pelajar yang melakukan registrasi, check-in harian, melihat statistik kondisi kesehatan, dan menentukan jadwal konsultasi dengan tenaga kesehatan.*     |
| *LaporanKesehatan*                 | *Model*                | *Menyimpan dan mengolah data hasil check-in menjadi data tren mingguan/bulanan, menyusun rangkuman kondisi kesehatan, dan menerapkan logika ambang batas untuk mendeteksi kondisi darurat pada pelajar.*     |
| *OrangTuaWali*                 | *Model*                | *Merepresentasikan data akun pengguna orang tua/wali yang mengonfirmasi registrasi akun pelajar di bawah umur, memantau laporan kondisi kesehatan pelajar, dan menerima serta menindaklanjuti notifikasi darurat.*     |
| *FasilitasKesehatan*                 | *Model*                | *Merepresentasikan data fasilitas kesehatan atau klinik yang direkomendasikan pada fitur pencarian, termasuk lokasi dan estimasi biaya konsultasi.*     |
| *TenagaKesehatan*                 | *Model*                | *Merepresentasikan data akun pengguna psikolog/psikiater yang dapat dipilih pelajar dari daftar rekomendasi dan meninjau pengajuan konsultasi yang masuk.*     |
| *JadwalKonsultasi*                 | *Model*                | *Merepresentasikan data pengajuan jadwal konsultasi antara pelajar dan tenaga kesehatan beserta statusnya.*     |
| *RiwayatKesehatan*                 | *Model*                | *Merepresentasikan data riwayat kesehatan mental dan kontak orang tua/wali yang diisi pelajar ketika proses registrasi akun.*     |
| *RegistrationPage*                 | *View*                | *Menampilkan formulir registrasi akun bagi pelajar.*     |
| *CariTenagaKesehatanPage*                 | *View*                | *Menampilkan daftar tenaga kesehatan, lokasi fasilitas kesehatan, estimasi biaya konsultasi, dan informasi jarak.*     |
| *ProfilTenagaKesehatanPage*               | *View*                | *Menampilkan profil tenaga kesehatan yang dipilih pelajar.*     |
| *CheckInPage*               | *View*                | *Menampilkan formulir pengisian daily check-in bagi pelajar.*     |
| *PengajuanKonsultasiPage*               | *View*                | *Menampilkan formulir pengajuan konsultasi serta jadwal yang dipilih oleh pelajar.*     |
| *ReportPage*                         | *View*                 | *Merepresentasikan antarmuka visualisasi grafik statistik, tren mingguan/bulanan, dan rangkuman kondisi.*                                                                                                                |
| *LoginPage*                         | *View*                 | *Merepresentasikan antarmuka login untuk pengguna serta fitur lupa password.*                                                                                                                |
| *ResetPasswordPage*                         | *View*                 | *Merepresentasikan antarmuka untuk memasukkan e-mail serta password baru.*                                                                                                                |
| *DashboardPage*                         | *View*                 | *Merepresentasikan antarmuka halaman utama setelah pengguna berhasil masuk akun.*                                                                                                                |
| *SettingPage*                         | *View*                 | *Merepresentasikan antarmuka halaman pengaturan/profil yang menyediakan opsi keluar akun.*                                                                                                                |
| *AuthController*                         | *Controller*                 | *Mengatur proses registrasi,login, dan logout, memvalidasi data akun pengguna, mengatur proses konfirmasi, perubahan status registrasi akun, sesi login, dan mengakhiri sesi login pengguna.*                                                                                                                |
| *TenagaKesehatanController*                         | *Controller*                 | *Mengatur proses pencarian tenaga kesehatan, pemrosesan izin akses lokasi, perhitungan jarak ke fasilitas kesehatan, dan pemilihan tenaga kesehatan.*                                                                                                                |
| *CheckInController*                         | *Controller*                 | *Mengatur proses penerimaan masukan, validasi format masukan, dan penyimpanan data check-in.*                                                                                                                |
| *JadwalKonsultasiController*                         | *Controller*                 | *Mengatur proses pemuatan jadwal, pengecekan dan pembaruan ketersediaan, dan pemilihan jadwal.*                                                                                                                |
| *NotifikasiPengingatController*                         | *Controller*                 | *Mengatur penjadwalan dan pengiriman notifikasi pengingat harian ke peramban pengguna.*                                                                                                                |
| *KonsultasiController*                         | *Controller*                 | *Mengatur proses pengelolaan pengajuan konsultasi, termasuk persetujuan dan perubahan jadwal.*                                                                                                                |
| *ReportController*                         | *Controller*                 | *Mengatur kalkulasi data statistik, pembuatan grafik, pembatasan filter privasi wali, serta evaluasi ambang batas.*                                                                                                                |
| *NotifikasiDaruratController*                         | *Controller*                 | *Mengatur pengiriman notifikasi darurat, pengambilan detail kondisi darurat, pencatatan konfirmasi penerimaan, dan pencatatan tindak lanjut.*                                                                                                                |
| *PasswordController*                         | *Controller*                 | *Mengatur reset password, termasuk pengiriman tautan reset.*                                                                                                                |
## 2.4 Model Arsitektur Perangkat Lunak

Pada bab ini, arsitektur perangkat lunak Mahasehat dimodelkan melalui dua *architectural view* yang saling melengkapi. *Logical View* (3.1) memperlihatkan pembagian komponen dan hubungan antarkomponen yang menyediakan fitur aplikasi, sedangkan *Physical View* (3.2) memperlihatkan perangkat atau *node* tempat setiap komponen dijalankan beserta jalur komunikasinya. Kedua *view* memuat 29 komponen pada Tabel 2.1 dengan nama yang sama persis, yaitu 9 *Model*, 10 *View*, dan 9 *Controller*, serta mengikuti pola MVC yang dipilih pada BAB 1. Setiap garis pada diagram diberi label agar hubungan antarkomponen dapat dipahami tanpa penjelasan tambahan.

### 2.4.1 View Logical

Logical View digunakan untuk mendeskripsikan abstraksi utama dalam aplikasi Mahasehat beserta hubungan antarobjek/kelas yang mendukung kebutuhan fungsional sistem. View ini berfokus pada hubungan antarobjek yang digunakan untuk menyediakan fitur dalam aplikasi.

Logical View cocok digunakan pada Mahasehat karena dapat membantu pembaca memahami pembagian fungsi dan hubungan layanan yang mendukung kebutuhan aplikasi. Mahasehat memiliki berbagai objek yang saling berhubungan dalam mendukung fungsi utamanya, salah satunya pemantauan kesehatan mental dan layanan konsultasi. Objek seperti Pelajar, OrangTuaWali, TenagaKesehatan, RiwayatKesehatan, dan JadwalKonsultasi memiliki keterhubungan satu sama lain dalam menyediakan layanan dalam aplikasi

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/logical-view.png" width="100%">
</p>
<p align="center">
<i>Gambar 2. Logical View</i>
</p>

### 2.4.2 View Physical
*Physical View* menggambarkan pemetaan komponen perangkat lunak ke perangkat (*node*) tempat komponen dijalankan beserta jalur komunikasinya.

*Physical View* dipilih untuk Mahasehat karena aplikasi ini adalah aplikasi web *client-server* yang bergantung pada layanan eksternal (lokasi, kalender, e-mail) dan menangani data kesehatan sensitif yang harus dilindungi saat transmisi dan penyimpanan. Pertanyaan yang dijawab oleh *view* ini adalah: di perangkat atau *node* mana setiap komponen dijalankan, dan melalui protokol apa komponen-komponen itu berkomunikasi. Jawabannya menunjukkan lingkungan operasi pada Tabel 1.1 dan penempatan komponen yang mendukung KNF01, KNF05, KNF08, dan KNF09. *View* ini menggambarkan seluruh sistem dan memuat 29 komponen pada Tabel 2.1 dengan nama yang sama persis, yaitu 9 *Model*, 11 *View*, dan 9 *Controller*, serta mengikuti pola MVC yang dipilih pada BAB 1.

<p align="center">
<img alt="UML Deployment Diagram Mahasehat" src="./assets/diagram/uml-deployment-diagram.png" width="100%">
</p>
<p align="center">
<i>Gambar 3. Physical View Mahasehat (UML Deployment Diagram)</i>
</p>

Gambar 3 menggambarkan lingkungan operasi pada Tabel 1.1 dalam tiga *deployment node*. Ketiga layanan pihak ketiga ditempatkan pada batas `«externalSystem»`, bukan dianggap sebagai satu *node* milik Mahasehat, karena perangkat dan lingkungan eksekusinya berada di luar kendali perangkat lunak. Pembagian MVC terlihat pada artefak: *View* berada pada artefak sisi klien, sedangkan *Controller* dan *Model* berada pada artefak sisi server. Basis data diletakkan sejajar dengan *Model* sebagai pemilik akses data, dan layanan eksternal diletakkan sejajar dengan *Controller* sebagai pemilik integrasi, sehingga setiap jalur komunikasi dapat ditelusuri ke komponen asalnya tanpa garis yang saling bersilangan.

Notasi pada Gambar 3:

| Elemen UML | Penggunaan pada Mahasehat |
| :--- | :--- |
| `«device»` | Perangkat pengguna, server aplikasi, dan server basis data sebagai tiga *deployment node*. |
| `«executionEnvironment»` | Web browser modern, Node.js v20.x LTS or Express.js pada Linux, dan PostgreSQL 15+. |
| `«artifact»` | `Web UI Responsif` dan `Mahasehat Server Application` sebagai artefak yang dideploy. |
| `«component»` | Seluruh 29 komponen Tabel 2.1 yang diwujudkan oleh kedua artefak. |
| `«database»` | `MahasehatDB` sebagai penyimpanan persisten bagi seluruh *Model*. Nama ini adalah nama artefak deployment, bukan komponen tambahan pada Tabel 2.1. |
| `«externalSystem»` | Batas bagi Geolocation API/Google Maps, Google Calendar, dan Mail Service yang tidak dikelola Mahasehat. |
| `«constraint»` | Batas kompatibilitas dan memori klien (KNF08–KNF09), ketersediaan server aplikasi (KNF05), serta enkripsi data saat tersimpan (KNF01). |
| Garis berpanah | *Communication path* yang diberi protokol dan, untuk layanan eksternal, keluar dari *controller* yang bertanggung jawab. Garis putus-putus menunjukkan komunikasi event atau pemanggilan layanan eksternal. |

Komponen pada tiap artefak disusun berurutan satu per satu sesuai Tabel 2.1 hanya untuk mencantumkan seluruh komponen; urutan baris tidak menyatakan relasi antarkomponen. Hubungan logis antarkomponen dijelaskan pada Logical View (3.1) dan diagram kelas M4.

### 2.4.2.1 Pemetaan Komponen ke *Node*

Tabel 3.4. Pemetaan komponen ke *node*

| *Node* | *Execution environment* (Tabel 1.1) | Artefak | Keterangan (komponen Tabel 2.1 yang ditempatkan) |
| :--- | :--- | :--- | :--- |
| Node 1: Perangkat Pengguna (`«device»`) | *Client Side (Perangkat Pengguna)*: Web browser modern. Sesuai KNF08: Chrome 100+, Safari 15+, dan Firefox 100+ pada Android 8.0+, iOS 14+, dan Windows 10/11 | Antarmuka web responsif (halaman *View*) | Seluruh *View*: `RegistrationPage`, `KonfirmasiRegistrasiPage`, `LoginPage`, `ResetPasswordPage`, `DashboardPage`, `SettingPage`, `CheckInPage`, `ReportPage`, `CariTenagaKesehatanPage`, `ProfilTenagaKesehatanPage`, `PengajuanKonsultasiPage`. Kendala: memori sisi klien maksimal 150 MB (KNF09) |
| Node 2: Server Aplikasi (`«device»`) | *Server Application*: Node.js v20.x LTS or Express.js; *Operating System for Server*: Ubuntu Server 22.04 LTS or Linux Cloud Environment | Aplikasi *server-side* berisi *route handler* dan logika *Controller* | Seluruh *Controller*: `AuthController`, `PasswordController`, `NotifikasiDaruratController`, `NotifikasiPengingatController`, `CheckInController`, `ReportController`, `TenagaKesehatanController`, `KonsultasiController`, `JadwalKonsultasiController`. Kendala: ketersediaan minimal 99,5% (KNF05) |
| Node 2: Server Aplikasi (`«device»`) | Sama dengan baris di atas | Kelas *Model* yang merepresentasikan dan mengakses data | Seluruh *Model*: `Pengguna`, `RiwayatKesehatan`, `OrangTuaWali`, `Pelajar`, `CheckIn`, `LaporanKesehatan`, `FasilitasKesehatan`, `TenagaKesehatan`, `JadwalKonsultasi` |
| Node 3: Server Basis Data (`«device»`) | *Database Management System (DBMS)*: PostgreSQL 15+ | Skema basis data dan data persisten milik seluruh *Model* | Data kesehatan dan *check-in* dienkripsi AES-256 saat tersimpan sesuai KNF01 |
| Batas sistem eksternal (`«externalSystem»`, di luar P/L) | *External APIs & Services*; bukan lingkungan eksekusi yang dikelola Mahasehat | Antarmuka API dan layanan pihak ketiga | Geolocation API & Google Maps Platform, Google Calendar API, SMTP or Mail Service (Nodemailer/SendGrid). Tidak termasuk Tabel 2.1 |

### 2.4.2.2 Jalur Komunikasi

Tabel 3.5. Jalur komunikasi antar-*node*

| Dari → Ke | Label pada Gambar 3 | Keterangan |
| :--- | :--- | :--- |
| Node 1 ↔ Node 2 | HTTPS (SSL/TLS): *request/response* | *View* di peramban mengirim *request* ke *route handler Controller*, kemudian server mengembalikan hasil pemrosesan melalui kanal terenkripsi yang sama. |
| Node 2 → Node 1 | HTTPS: data pengingat → notifikasi peramban | `NotifikasiPengingatController` mengirim data pengingat harian ke peramban pelajar sesuai spesifikasi komponen pada SKPL dan Tabel 2.1, dan peramban mengarahkan pelajar ke `CheckInPage` (UC03). Jalur ini tidak menambahkan layanan *push* eksternal yang tidak disebutkan dalam SKPL. |
| Node 2 ↔ Node 3 | Model: SQL baca / tulis | *Model* membaca dan menulis data ke PostgreSQL. Panah ini berasal dari *Model*, bukan dari *Controller*, karena *Controller* hanya mengakses data melalui *Model*. SKPL menetapkan AES-256 untuk data kesehatan dan *check-in* saat tersimpan, bukan untuk seluruh data tanpa pengecualian. |
| Controller → Geolocation API & Google Maps Platform | HTTPS API: lokasi & jarak | `TenagaKesehatanController` memanggil Geolocation API dan Google Maps Platform untuk lokasi dan jarak ke fasilitas kesehatan (KNF03). |
| Controller → Google Calendar API | HTTPS API: jadwal | `JadwalKonsultasiController` memanggil Google Calendar API untuk ketersediaan dan pengajuan jadwal. |
| Controller → SMTP or Mail Service | SMTP/API: kode verifikasi | `AuthController` mengirim kode verifikasi dan konfirmasi registrasi melalui Mail Service. |
| Controller → SMTP or Mail Service | SMTP/API: tautan reset | `PasswordController` mengirim tautan reset *password* melalui Mail Service. |
| Controller → SMTP or Mail Service | SMTP/API: notifikasi darurat; retry <= 3x | `NotifikasiDaruratController` mengirim notifikasi darurat melalui Mail Service. Saat transmisi gagal, *controller* ini mengulang pengiriman otomatis maksimal tiga kali sesuai KNF06. |
| Controller → SMTP or Mail Service | SMTP/API: pengingat harian | `NotifikasiPengingatController` juga mengirim pengingat harian melalui Mail Service, karena SKPL pada bagian lingkungan operasi menyebut *Mail Server* digunakan untuk mengirim pengingat, notifikasi darurat, dan informasi akun. Pengingat ini melengkapi jalur notifikasi peramban di atas. |

### 2.4.2.3 Alasan Penempatan

1. ***View* di sisi klien, *Controller* dan *Model* di sisi server.** *View* berupa antarmuka web responsif yang dijalankan pada kombinasi peramban dan sistem operasi dalam KNF08. Logika bisnis dan akses data ditempatkan di server agar tidak bergantung pada perangkat pengguna. Batas memori sisi klien maksimal 150 MB (KNF09) dicantumkan sebagai kendala deployment; penempatan ini membantu mengurangi beban klien, tetapi pemenuhannya tetap harus diukur saat implementasi.
2. **Hak akses dan privasi ditegakkan di server (KNF02).** Pembatasan data orang tua/wali, termasuk tidak diberikannya teks jurnal pelajar, dijalankan oleh *Controller* pada Node 2, bukan oleh *View* di perangkat pengguna yang berada di luar kendali sistem.
3. **Basis data dipisahkan dari server aplikasi.** Pemisahan ini memberi batas perlindungan dan pengelolaan tersendiri untuk data kesehatan (AES-256, KNF01), sekaligus memungkinkan strategi pencadangan dan penskalaan diterapkan secara terpisah. Pemisahan *node* saja belum menjamin ketersediaan 99,5% (KNF05); pencapaiannya tetap memerlukan pemantauan, pencadangan, dan mekanisme pemulihan pada tahap implementasi dan operasi.
4. **Layanan eksternal hanya diakses dari server.** Kunci API dan detail layanan eksternal tidak ditangani langsung oleh *View*, sesuai pernyataan pada BAB 1 bahwa integrasi layanan eksternal ditangani melalui *Controller*. Setiap koneksi ke layanan eksternal pada Gambar 3 keluar dari baris *controller* pemilik integrasinya agar keputusan deployment dapat ditelusuri kembali ke Tabel 2.1.
5. **Komunikasi peramban ke server memakai kanal terenkripsi.** Jalur Node 1 ↔ Node 2 memakai HTTPS dengan sertifikat SSL/TLS sesuai protokol keamanan pada Tabel 1.1, sedangkan data kesehatan dan *check-in* yang tersimpan di basis data dienkripsi AES-256 (KNF01). Pengamanan koneksi antara server aplikasi dan basis data tidak ditetapkan pada SKPL sehingga diputuskan pada tahap implementasi.

<br>

---


# BAB 3: Realisasi Use Case

## 3.1 Use Case Melakukan Registrasi Akun

**ID Use Case:** *UC01*  
**Nama Use Case:** *Melakukan Registrasi Akun*

### 3.1.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.1.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.1.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.2 Use Case Mengonfirmasi Registrasi Akun

**ID Use Case:** *UC02*  
**Nama Use Case:** *Mengonfirmasi Registrasi Akun*

### 3.2.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.2.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.2.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.3 Use Case Melakukan Daily Check-in

**ID Use Case:** *UC03*  
**Nama Use Case:** *Melakukan Daily Check-in*

### 3.3.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.3.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.3.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.4 Use Case Melihat Statistik dan Laporan Kondisi

**ID Use Case:** *UC04*  
**Nama Use Case:** *Melihat Statistik dan Laporan Kondisi*

### 3.4.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.4.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.4.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.5 Use Case Menentukan Tenaga Kesehatan

**ID Use Case:** *UC05*  
**Nama Use Case:** *Menentukan Tenaga Kesehatan*

### 3.5.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.5.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.5.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.6 Use Case Mengajukan Jadwal Konsultasi

**ID Use Case:** *UC06*  
**Nama Use Case:** *Mengajukan Jadwal Konsultasi*

### 3.6.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.6.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.6.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.7 Use Case Mengelola Pengajuan Konsultasi

**ID Use Case:** *UC07*  
**Nama Use Case:** *Mengelola Pengajuan Konsultasi*

### 3.7.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.7.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.7.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.8 Use Case Menerima dan Menindaklanjuti Notifikasi Darurat

**ID Use Case:** *UC08*  
**Nama Use Case:** *Menerima dan Menindaklanjuti Notifikasi Darurat*

### 3.8.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.8.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.8.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.9 Use Case Masuk Akun Pengguna

**ID Use Case:** *UC09*  
**Nama Use Case:** *Masuk Akun Pengguna*

### 3.9.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.9.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.9.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.

## 3.10 Use Case Keluar Akun Pengguna

**ID Use Case:** *UC10*  
**Nama Use Case:** *Keluar Akun Pengguna*

### 3.10.1 Identifikasi Kelas

Identifikasi kelas yang terkait dengan use case tersebut. Kelas di tahap perancangan dapat berbeda dengan dengan kelas di tahap analisis. Dapat menggunakan tabel di bawah:

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL]* |
| ... | *...* | *...* |

### 3.10.2 Sequence Diagram

Buat *sequence diagram* untuk **setiap skenario use case**, mencakup skenario normal dan alternatif pada subbab 4.4 SKPL. Diagram melibatkan kelas-kelas yang telah diidentifikasi pada SKPL. 

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif [Nomor]: [Nama Skenario]**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-sequence_diagram.png" width="50%">
</p>
<p align="center">
<i>Gambar X. Sequence Diagram [UC01] - [Nama skenario alternatif]</i>
</p>

### 3.10.3 Diagram Kelas

Buatlah diagram kelas untuk use case ini yang terdiri atas kelas-kelas dari 3.1.1. **Setiap kelas pada diagram wajib menampilkan atribut dan metode/operasi langsung di dalam kotak kelasnya**, sehingga tidak perlu membuat tabel daftar atribut dan metode per kelas pada subbab ini. Daftar lengkap atribut dan metode seluruh kelas disajikan pada Tabel 4.1 (Bab 4).

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh_class-diagram2.jpg" width="35%">
</p>
<p align="center">
<i>Gambar X. Diagram Kelas [Nama Uce Case]</i>
</p>

Pada diagram, pastikan:
- Atribut dituliskan beserta visibilitas dan tipe datanya, misalnya `- email: String`.
- Operasi dituliskan beserta visibilitas, parameter, dan tipe kembaliannya, misalnya `+ login(email: String, password: String): Boolean`.
- Relasi antarkelas (asosiasi, agregasi, komposisi, generalisasi, dan dependensi) digambarkan lengkap dengan multiplisitas.
- Semua operasi yang dipanggil pada sequence diagram 3.1.2 (skenario normal dan alternatif) ada pada kelas yang bersangkutan.
- Kelas yang sama dengan kelas di use case lain memakai nama, atribut, dan metode yang konsisten.
<br>

---

# BAB 4: Diagram Kelas Keseluruhan

## 4.1 Diagram Kelas

**Bagian ini diisi dengan diagram kelas keseluruhan.**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/contoh-class_diargam.png" width="35%">
</p>
<p align="center">
<i>Gambar 4.1. Diagram Kelas Perancangan Keseluruhan [Nama P/L]</i>
</p>

Tabel 4.1. Daftar Kelas Perancangan Keseluruhan

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *[C01]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C02]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *[C03]* | *[Nama kelas]* | *[Daftar atribut]* | *[Daftar metode/operasi]* |
| *...* | *...* | *...* | *...* |

<br>

---

# BAB 5: Matriks Kerunutan

Petakan kelas perancangan dengan use case yang terkait. Gunakan **BAB 6 Traceability pada dokumen SKPL** sebagai acuan keterkaitan kelas analisis dan use case, lalu sesuaikan dengan realisasi use case dan kelas perancangan pada BAB 3–BAB 5 DPPL.

Tabel 7.1. Matriks Kerunutan Kelas terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *[ID kelas - Nama kelas]* | *[ID UC - Nama use case]* |
| *...* | *...* |
