<h1>
IF2150 REKAYASA PERANGKAT LUNAK
<br>
TUGAS 5
<br>
DESKRIPSI PERANCANGAN PERANGKAT LUNAK (DPPL)
</h1>
<br>

## *Mahasehat: Mental Health Monitoring App for Students*
<img alt="Logo Perangkat Lunak" src="./assets/logo-mahasehat.png" width="35%">

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

## Daftar Perubahan

| Revisi | Deskripsi |
| :--- | :--- |
| *A* | *Menyesuaikan beberapa atribut dan metode/aplikasi pada daftar kelas perancangan keseluruhan dengan diagram sekuens.* |
| *B* |  |
| *C* |  |
| ... |  |

---

<br>

> **Petunjuk pengerjaan:** *[Silahkan hapus bagian ini setelah selesai mengerjakan]*
>
> Dokumen ini melanjutkan **Deskripsi Perancangan Perangkat Lunak**. Gunakan nama, ID, kebutuhan, dan use case yang konsisten dengan kedua dokumen tersebut. Contoh pola ID baru di bawah dapat disesuaikan dengan kesepakatan kelompok, ID yang sudah ada tetap dipertahankan.

<br>

---


# BAB 1: Pendahuluan

## 1.1 Tujuan Penulisan Dokumen
Dokumen Deskripsi Perangkat Lunak (DPPL) merupakan lanjutan dari SKPL yang berisi rancangan atau desain teknis bagaimana perangkat lunak tersebut akan dibangun. DPPL digunakan sebagai acuan bagi tim pengembang dalam proses implementasi sistem, serta bagi pihak terkait untuk memahami fitur dan kebutuhan perangkat lunak yang telah ditentukan.

## 1.2 Lingkup Masalah
Mahasehat merupakan aplikasi berbasis web yang membantu pelajar dalam memantau dan memahami kondisi kesehatan mental sehari-hari serta memperoleh akses terhadap layanan kesehatan mental. Aplikasi ini menyediakan fitur pencatatan suasana hati, pola tidur, aktivitas fisik, pola makan, tingkat stres, dan refleksi harian. Data tersebut digunakan dan disajikan dalam bentuk statistik dan laporan untuk melihat perkembangan kondisi pelajar sehingga pelajar dapat mengenali pola atau perubahan pada kondisi kesehatan mentalnya. Selain pemantauan mandiri, Mahasehat menyediakan akses terhadap layanan kesehatan mental melalui tenaga kesehatan. Pelajar dapat mencari tenaga kesehatan sesuai kebutuhan, melihat jadwal yang tersedia, serta mengajukan konsultasi. Selain itu, orang tua/wali dilibatkan dalam pemantauan kondisi pelajar melalui informasi dan notifikasi tertentu, sementara tenaga kesehatan dapat mengakses informasi kesehatan yang relevan untuk mendukung proses konsultasi.

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
| *Algoritma* | *Algo-CXX-XX* | *Mewakili singkatan kata "Algoritma", diikuti ID kelas dan dua digit unik untuk membedakan tiap algoritma.* |
| *Query* | *Q-CXX-XX* | *Mewakili singkatan kata "Query", diikuti ID kelas dan dua digit unik untuk membedakan tiap query.* |
| *Antarmuka* | *I-XX* | *Mewakili singkatan kata "Interface", diikuti dua digit unik untuk membedakan tiap layar antarmuka.* |

## 1.5 Referensi

- Dokumen APL: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M6/K03_G04_APL.md
- Dokumen SKPL: https://github.com/cynthiawinda/IF2150-RPL-K03-G04/blob/main/docs/M5/K03_G04_SKPL.md
- Diagram UML: [https://www.drawio.com/](https://www.drawio.com/)
- https://nodejs.org/docs/latest-v20.x/api/
- https://expressjs.com/
- https://www.postgresql.org/docs/15/
- https://developers.google.com/maps/documentation/geolocation/
- https://developers.google.com/calendar/api
- Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022

## 1.6 Deskripsi Umum Dokumen (Ikhtisar)
BAB 1 membahas pendahuluan, yang berisi tujuan, lingkup masalah, definisi, istilah, serta singkatan, aturan penomoran, referensi, dan deskripsi umum dokumen. BAB 2 membahas perancangan arsitektur, yang mencakup rancangan lingkungan implementasi, style/pattern arsitektur acuan, identifikasi komponen, serta model arsitektur perangkat lunak. BAB 3 membahas realisasi use case yang mencakup identifikasi kelas tiap use case, sequence diagram, serta class diagram. BAB 4 membahas diagram kelas keseluruhan, dan BAB 5 membahas matriks kerunutan.

<br>

---

# BAB 2: Perancangan Arsitektur

## 2.1 Rancangan Lingkungan Implementasi

Perangkat lunak Mahasehat dirancang dan diimplementasikan berbasis web (*web-based*) menggunakan model *client-server*.

Tabel 2.1. Rancangan Lingkungan Implementasi

| Komponen Lingkungan | Perangkat / Teknologi |
| :--- | :--- |
| *OS (Server)* | Ubuntu Server 22.04 LTS |
| *OS (Client)* | Multiplatform (Android, iOS, Windows, macOS) |
| *Backend* | JavaScript / TypeScript (Node.js, Express.js) |
| *Frontend* | HTML5, CSS3, JavaScript |
| *DBMS* | PostgreSQL 15+ |
| *Filing System* | ext4 & JWT |
| *Dev Tools* | VS Code, Git, GitHub, Postman, pgAdmin 4, PlantUML |
| *External APIs* | Google Maps API, Google Calendar API, Nodemailer (SMTP) |

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
<img alt="Logical View" src="./assets/diagram/logical-view.png" width="100%">
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

Tabel 3.1. Identifikasi Kelas Use Case [UC01]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *RegistrasiPage* | *RegistrasiPage* |
| 2 | *AuthController* | *AuthController* |
| 3 | *Pengguna* | *Pengguna* |

### 3.1.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC01]" src="./assets/diagram/SD_UC01_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.1.1. Sequence Diagram [UC01]</i>
</p>

- **Skenario Alternatif 1: Masukan Pengguna Tidak Valid**

<p align="center">
<img alt="Sequence Diagram [UC01] - [Masukan Pengguna Tidak Valid]" src="./assets/diagram/SD_UC01_alt.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.1.2. Sequence Diagram [UC01] - [Masukan Pengguna Tidak Valid]</i>
</p>

### 3.1.3 Diagram Kelas

<p align="center">
<img alt="Diagram kelas UC01" src="./assets/diagram/CD_UC01.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.1.3. Diagram Kelas [Melakukan Registrasi Akun]</i>
</p>

## 3.2 Use Case Mengonfirmasi Registrasi Akun

**ID Use Case:** *UC02*  
**Nama Use Case:** *Mengonfirmasi Registrasi Akun*

### 3.2.1 Identifikasi Kelas

Tabel 3.2. Identifikasi Kelas Use Case [UC02]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *KonfirmasiRegistrasiPage* | *KonfirmasiRegistrasiPage* |
| 2 | *AuthController* | *AuthController* |
| 3 | *OrangTuaWali* | *OrangTuaWali* |
| 4 | *Pelajar* | *Pelajar* |

### 3.2.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC02]" src="./assets/diagram/SD_UC02_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.2.1. Sequence Diagram [UC02]</i>
</p>

- **Skenario Alternatif 1: Orang Tua/Wali Tidak Mengonfirmasi Registrasi Akun**

<p align="center">
<img alt="Sequence Diagram [UC01] - [Orang Tua/Wali Tidak Mengonfirmasi Registrasi Akun]" src="./assets/diagram/SD_UC02_alt.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.2.2. Sequence Diagram [UC02] - [Orang Tua/Wali Tidak Mengonfirmasi Registrasi Akun]</i>
</p>

### 3.2.3 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas UC02" src="./assets/diagram/CD_UC02.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.2.3. Diagram Kelas [Mengonfirmasi Registrasi Akun]</i>
</p>


## 3.3 Use Case Melakukan Daily Check-in

**ID Use Case:** *UC03*  
**Nama Use Case:** *Melakukan Daily Check-in*

### 3.3.1 Identifikasi Kelas


Tabel 3.1. Identifikasi Kelas Use Case [UC03]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *Pelajar* | *Pelajar* |
| 2 | *CheckIn* | *CheckIn* |
| 3 | *CheckInPage* | *CheckInPage* |
| 4 | *CheckInController* | *CheckInController* |
| 5 | *NotificationPengingatController* | *NotificationPengingatController* |

### 3.3.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/SD_UC03_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.3.1. Sequence Diagram [UC03]</i>
</p>

- **Skenario Alternatif 1: Pelajar Tidak Mengisi Catatan Refleksi Harian**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/SD_UC03_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.3.2. Sequence Diagram [UC03] - [Pelajar Tidak Mengisi Catatan Refleksi Harian]</i>
</p>

### 3.3.3 Diagram Kelas

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/CD_UC03.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.3.3. Diagram Kelas [Melakukan Daily Check-In]</i>
</p>

## 3.4 Use Case Melihat Statistik dan Laporan Kondisi

**ID Use Case:** *UC04*  
**Nama Use Case:** *Melihat Statistik dan Laporan Kondisi*

### 3.4.1 Identifikasi Kelas

Tabel 3.4. Identifikasi Kelas Use Case [UC04]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *Pelajar* | *Pelajar* |
| 2 | *OrangTuaWali* | *OrangTuaWali* |
| 3 | *CheckIn* | *CheckIn* |
| 4 | *LaporanKesehatan* | *LaporanKesehatan* |
| 5 | *ReportPage* | *ReportPage* |
| 6 | *ReportController* | *ReportController* |

### 3.4.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/SD_UC04_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.4.1. Sequence Diagram [UC04]</i>
</p>

- **Skenario Alternatif 1: Data Check-In Belum Dapat Divisualisasikan**

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/SD_UC04_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.4.2. Sequence Diagram [UC04] - [Data Check-In Belum Dapat Divisualisasikan]</i>
</p>

### 3.4.3 Diagram Kelas

<p align="center">
<img alt="Contoh Logical View pada P/L E-Commerce" src="./assets/diagram/CD_UC04.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.4.3. Diagram Kelas [Melihat Statistik dan Laporan Kondisi]</i>
</p>

## 3.5 Use Case Menentukan Tenaga Kesehatan

**ID Use Case:** *UC05*  
**Nama Use Case:** *Menentukan Tenaga Kesehatan*

### 3.5.1 Identifikasi Kelas

Tabel 3.5. Identifikasi Kelas Use Case [UC05]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *CariTenagaKesehatanPage* | *CariTenagaKesehatanPage* |
| 2 | *ProfilTenagaKesehatanPage* | *ProfilTenagaKesehatanPage* |
| 3 | *TenagaKesehatanController* | *TenagaKesehatanController* |
| 4 | *Pelajar* | *Pelajar* |
| 5 | *TenagaKesehatan* | *TenagaKesehatan* |
| 6 | *FasilitasKesehatan* | *FasilitasKesehatan* |

### 3.5.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC05]" src="./assets/diagram/SD_UC05_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.5.1. Sequence Diagram [UC05]</i>
</p>

Pelajar membuka halaman pencarian, lalu `TenagaKesehatanController` memuat daftar `TenagaKesehatan` dan `FasilitasKesehatan`, kemudian mengambil profil, lokasi, dan estimasi biaya konsultasi untuk disusun menjadi daftar ringkasan. Setelah pelajar memberikan izin akses lokasi, lokasi perangkat dicatat pada `Pelajar`, lalu controller mengambil lokasi setiap fasilitas kesehatan dan menghitung jaraknya melalui `calculateDistances()`. Ketika pelajar memilih salah satu tenaga kesehatan, controller mengambil profilnya dan menampilkannya melalui `ProfilTenagaKesehatanPage`.

- **Skenario Alternatif 1: Akses Lokasi Tidak Diberikan**

<p align="center">
<img alt="Sequence Diagram [UC05] - [Akses Lokasi Tidak Diberikan]" src="./assets/diagram/SD_UC05_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.5.2. Sequence Diagram [UC05] - [Akses Lokasi Tidak Diberikan]</i>
</p>

Langkah 1 dan langkah 3 sama dengan skenario normal sehingga dirujuk dengan fragmen `ref`. Ketika pelajar menolak izin akses lokasi, `processLocationPermission(false, null)` masuk ke cabang `[izinLokasi = false]`: lokasi tidak disimpan dan jarak tidak dihitung, sehingga halaman tetap menampilkan daftar tenaga kesehatan tanpa informasi jarak.

### 3.5.3 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas [Menentukan Tenaga Kesehatan]" src="./assets/diagram/CD_UC05.png" width="80%">
</p>
<p align="center">
<i>Gambar 3.5.3. Diagram Kelas [Menentukan Tenaga Kesehatan]</i>
</p>

## 3.6 Use Case Mengajukan Jadwal Konsultasi

**ID Use Case:** *UC06*  
**Nama Use Case:** *Mengajukan Jadwal Konsultasi*

### 3.6.1 Identifikasi Kelas

Tabel 3.6. Identifikasi Kelas Use Case [UC06]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *ProfilTenagaKesehatanPage* | *ProfilTenagaKesehatanPage* |
| 2 | *PengajuanKonsultasiPage* | *PengajuanKonsultasiPage* |
| 3 | *JadwalKonsultasiController* | *JadwalKonsultasiController* |
| 4 | *Pelajar* | *Pelajar* |
| 5 | *TenagaKesehatan* | *TenagaKesehatan* |
| 6 | *JadwalKonsultasi* | *JadwalKonsultasi* |

### 3.6.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC06]" src="./assets/diagram/SD_UC06_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.6.1. Sequence Diagram [UC06]</i>
</p>

`ProfilTenagaKesehatanPage` meminta jadwal yang tersedia kepada `JadwalKonsultasiController`, dan `TenagaKesehatan` menyusun daftar jadwalnya dengan menanyakan ketersediaan setiap `JadwalKonsultasi`. Controller kemudian menampilkan formulir pengajuan pada `PengajuanKonsultasiPage`, sedangkan profil dan jadwal yang tersedia ditampilkan pada halaman profil. Jadwal yang dipilih pelajar diperiksa kembali sebelum ditampilkan pada formulir, dan selama formulir dibuka ketersediaan jadwal diperbarui berulang (fragmen `loop`). Saat pengajuan dikirim, `Pelajar` yang mengajukan konsultasi: `JadwalKonsultasi` memeriksa ketersediaannya sendiri, lalu mengubah status ketersediaan dan status pengajuannya menjadi "Diajukan" agar dapat ditinjau tenaga kesehatan.

- **Skenario Alternatif 1: Jadwal Konsultasi Tidak Lagi Tersedia**

<p align="center">
<img alt="Sequence Diagram [UC06] - [Jadwal Konsultasi Tidak Lagi Tersedia]" src="./assets/diagram/SD_UC06_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.6.2. Sequence Diagram [UC06] - [Jadwal Konsultasi Tidak Lagi Tersedia]</i>
</p>

Ketika `isAvailable()` mengembalikan `false`, cabang `[jadwal tidak tersedia]` menampilkan pemberitahuan dan memuat ulang pilihan jadwal lain. Pelajar kemudian memilih jadwal baru yang diperiksa ulang hingga tersedia. Langkah awal serta pengisian dan pengiriman formulir sama dengan skenario normal sehingga dirujuk dengan fragmen `ref`.

### 3.6.3 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas [Mengajukan Jadwal Konsultasi]" src="./assets/diagram/CD_UC06.png" width="80%">
</p>
<p align="center">
<i>Gambar 3.6.3. Diagram Kelas [Mengajukan Jadwal Konsultasi]</i>
</p>

## 3.7 Use Case Mengelola Pengajuan Konsultasi

**ID Use Case:** *UC07*  
**Nama Use Case:** *Mengelola Pengajuan Konsultasi*

### 3.7.1 Identifikasi Kelas

Tabel 3.7. Identifikasi Kelas Use Case [UC07]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *PengajuanKonsultasiPage* | *PengajuanKonsultasiPage* |
| 2 | *KonsultasiController* | *KonsultasiController* |
| 3 | *JadwalKonsultasi* | *JadwalKonsultasi* |
| 4 | *Pelajar* | *Pelajar* |
| 5 | *TenagaKesehatan* | *TenagaKesehatan* |

### 3.7.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC07]" src="./assets/diagram/SD_UC07_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.7.1. Sequence Diagram [UC07]</i>
</p>

- **Skenario Alternatif 1: Reschedule Jadwal Konsultasi**

<p align="center">
<img alt="Sequence Diagram [UC07] - [Reschedule Jadwal Konsultasi]" src="./assets/diagram/SD_UC07_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.7.2. Sequence Diagram [UC07] - [Reschedule Jadwal Konsultasi]</i>
</p>

### 3.7.3 Diagram Kelas
<p align="center">
<img alt="Diagram Kelas [Mengelola Pengajuan Konsultasi]" src="./assets/diagram/CD_UC07.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.7.3. Diagram Kelas [Mengelola Pengajuan Konsultasi]</i>
</p>

## 3.8 Use Case Menerima dan Menindaklanjuti Notifikasi Darurat

**ID Use Case:** *UC08*
**Nama Use Case:** *Menerima dan Menindaklanjuti Notifikasi Darurat*

### 3.8.1 Identifikasi Kelas

Tabel 3.8. Identifikasi Kelas Use Case [UC08]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *Pelajar* | *Pelajar* |
| 2 | *OrangTuaWali* | *OrangTuaWali* |
| 3 | *LaporanKesehatan* | *LaporanKesehatan* |
| 4 | *NotifikasiDaruratController* | *NotifikasiDaruratController* |

### 3.8.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC08]" src="./assets/diagram/SD_UC08_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.8.1. Sequence Diagram [UC08]</i>
</p>

- **Skenario Alternatif 1: Notifikasi Darurat Tidak Direspon**

<p align="center">
<img alt="Sequence Diagram [UC08] - Notifikasi Darurat Tidak Direspon" src="./assets/diagram/SD_UC08_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.8.2. Sequence Diagram [UC08] - Notifikasi Darurat Tidak Direspon</i>
</p>

### 3.8.3 Diagram Kelas
<p align="center">
<img alt="Diagram Kelas [Menerima dan Menindaklanjuti Notifikasi Darurat]" src="./assets/diagram/CD_UC08.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.8.3. Diagram Kelas [Menerima dan Menindaklanjuti Notifikasi Darurat]</i>
</p>

## 3.9 Use Case Masuk Akun Pengguna

**ID Use Case:** *UC09*  
**Nama Use Case:** *Masuk Akun Pengguna*

### 3.9.1 Identifikasi Kelas

Tabel 3.9. Identifikasi Kelas Use Case [UC09]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *Pengguna* | *Pengguna* |
| 2 | *LoginPage* | *LoginPage* |
| 3 | *AuthController* | *AuthController* |
| 4 | *ResetPasswordPage* | *ResetPasswordPage* |
| 5 | *PasswordController* | *PasswordController* |
| 6 | *DashboardPage* | *DashboardPage* |

### 3.9.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC09]" src="./assets/diagram/SD_UC09_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.9.1. Sequence Diagram [UC09]</i>
</p>

- **Skenario Alternatif 1: Kredensial Tidak Valid**

<p align="center">
<img alt="Sequence Diagram [UC09] - [Kredensial Tidak Valid]" src="./assets/diagram/SD_UC09_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.9.2. Sequence Diagram [UC09] - [Kredensial Tidak Valid]</i>
</p>

- **Skenario Alternatif 2: Akun Belum Terverifikasi**

<p align="center">
<img alt="Sequence Diagram [UC09] - [Akun Belum Terverifikasi]" src="./assets/diagram/SD_UC09_alt2.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.9.3. Sequence Diagram [UC09] - [Akun Belum Terverifikasi]</i>
</p>

- **Skenario Alternatif 3: Lupa Password**

<p align="center">
<img alt="Sequence Diagram [UC09] - [Lupa Password]" src="./assets/diagram/SD_UC09_alt3.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.9.4. Sequence Diagram [UC09] - [Lupa Password]</i>
</p>

### 3.9.3 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas [Masuk Akun Pengguna]" src="./assets/diagram/CD_UC09.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.9.5. Diagram Kelas [Masuk Akun Pengguna]</i>
</p>

## 3.10 Use Case Keluar Akun Pengguna

**ID Use Case:** *UC10*  
**Nama Use Case:** *Keluar Akun Pengguna*

### 3.10.1 Identifikasi Kelas

Tabel 3.10. Identifikasi Kelas Use Case [UC10]

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
|:--- | :--- | :--- |
| 1 | *Pengguna* | *Pengguna* |
| 2 | *SettingPage* | *SettingPage* |
| 3 | *AuthController* | *AuthController* |
| 4 | *LoginPage* | *LoginPage* |

### 3.10.2 Sequence Diagram

- **Skenario Normal**

<p align="center">
<img alt="Sequence Diagram [UC10]" src="./assets/diagram/SD_UC10_normal.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.10.1. Sequence Diagram [UC10]</i>
</p>

- **Skenario Alternatif 1: Membatalkan Keluar Akun**

<p align="center">
<img alt="Sequence Diagram [UC10] - [Membatalkan Keluar Akun]" src="./assets/diagram/SD_UC10_alt1.png" width="50%">
</p>
<p align="center">
<i>Gambar 3.10.2. Sequence Diagram [UC10] - [Membatalkan Keluar Akun]</i>
</p>

### 3.10.3 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas [Keluar Akun Pengguna]" src="./assets/diagram/CD_UC10.png" width="35%">
</p>
<p align="center">
<i>Gambar 3.10.3. Diagram Kelas [Keluar Akun Pengguna]</i>
</p>

<br>

---

# BAB 4: Diagram Kelas Keseluruhan

## 4.1 Diagram Kelas

<p align="center">
<img alt="Diagram Kelas Keseluruhan" src="./assets/diagram/diagram-kelas-keseluruhan.png" width="50%">
</p>
<p align="center">
<i>Gambar 4.1. Diagram Kelas Perancangan Keseluruhan Mahasehat</i>
</p>

Tabel 4.1. Daftar Kelas Perancangan Keseluruhan

| ID Kelas | Nama Kelas | Atribut | Metode/Operasi |
| :--- | :--- | :--- | :--- |
| *C01* | *Pengguna* | *idPengguna, username, email, password, role, statusAkun* | *findByUsernameorEmail(), findByEmail(), verifyPassword(), setPassword(), getRole(), getStatusAkun()* |
| *C02* | *Pelajar* | *idPelajar, nama, lokasiSaatIni, statusDarurat, tanggalLahir, nomorTelepon* | *getCheckInHistory(), setCheckIn(), getLokasiSaatIni(), updateEmergencyStatus()* |
| *C03* | *OrangTuaWali* | *idWali, nama, email, nomorTelepon* | *-* |
| *C04* | *TenagaKesehatan* | *idTenagaKesehatan, nama, email, nomorTelepon, jenisTenagaKesehatan, lokasi* | *getProfil()* |
| *C05* | *RiwayatKesehatan* | *riwayatKesehatan* | *-* |
| *C06* | *CheckIn* | *idCheckIn, tanggalCheckIn, skalaMood, jamTidur, jamBangun, polaMakan, pemicuStres, catatanRefleksi* | *createCheckIn(), getCheckInData(), validateData()* |
| *C07* | *LaporanKesehatan* | *periode, ringkasanKondisi, indikatorRisiko, jumlahHariTidakCheckIn* | *evaluateThreshold(), detectEmergency()* |
| *C08* | *FasilitasKesehatan* | *idFasilitas, namaFasilitas, lokasi, estimasiBiaya* | *getLokasi(), getEstimasiBiaya()* |
| *C09* | *JadwalKonsultasi* | *idJadwal, tanggal, waktu, statusKetersediaan, statusPengajuan* | *getDate(), getTime(), getStatus(), updateAvailability(), updateStatus()* |
| *C10* | *RegistrationPage* | *inputDataPelajar, inputDataWali* | *displayFormRegistrasi(), getDataPelajar(), getDataWali(), submitRegistrasi()* |
| *C11* | *AuthController* | *currentUser* | *validateData(), registerAccount(), login(), logout(), validateConfirmation(), confirmAccount(), validateCredentials(), checkAccountStatus(), startSession(), endSession()* |
| *C12* | *KonfirmasiRegistrasiPage* | *dataRegistrasi, statusKonfirmasi* | *displayDataRegistrasi(), confirmRegistrasi()* |
| *C13* | *CheckInPage* | *moodInput, sleepDurationInput, dietInput, triggerInput, reflectionInput* | *showPage(), getInput(), showError(), showSuccessMessage()* |
| *C14* | *CheckInController* | *currentCheckIn* | *submitCheckIn(), validateCheckInFormat(), encryptJournal()* |
| *C15* | *NotifikasiPengingatController* | *reminderSchedule, status* | *sendDailyReminder(), checkPendingCheckIn()* |
| *C16* | *ReportPage* | *selectedPeriod, displayedChart, displayedSummary* | *showPage(), displayChart(), filterViewByRole()* |
| *C17* | *ReportController* | *currentReport* | *calculateStatistics(), buildTrendChart(), applyPrivacyRestriction()* |
| *C18* | *CariTenagaKesehatanPage* | *-* | *showPage(), requestLocationPermission(), displayResults()* |
| *C19* | *ProfilTenagaKesehatanPage* | *tenagaKesehatanDipilih* | *displayProfile(), displayAvailableSchedules()* |
| *C20* | *TenagaKesehatanController* | *-* | *loadTenagaKesehatan(), processLocationPermission(), calculateDistances(), selectTenagaKesehatan()* |
| *C21* | *PengajuanKonsultasiPage* | *selectedTenagaKesehatan, filteredDate, displayedSchedule, jadwalDipilih, dataPengajuan* | *displayForm(), displaySelectedSchedule(), showUnavailableWarning(), getFormData(), filterDate(), displayAvailableSchedule(), chooseSchedule(), fillForm(), submitForm(), showSuccessMessage()* |
| *C22* | *JadwalKonsultasiController* | *tenagaKesehatanDipilih, daftarJadwal, pelajarAktif* | *loadAvailableSchedules(), checkAvailability(), selectSchedule(), submitRequest(), refreshAvailability()* |
| *C23* | *KonsultasiController* | *-* | *approvePengajuan(), reschedule()* |
| *C24* | *NotifikasiDaruratController* | *-* | *sendEmergencyNotification(), loadEmergencyDetail(), confirmReceived(), markFollowUp()* |
| *C25* | *LoginPage* | *usernameOrEmailInput, passwordInput* | *showPage(), getInput(), showError(), selectForgotPassword()* |
| *C26* | *ResetPasswordPage* | *emailInput, newPasswordInput, confirmPasswordInput* | *getInput(), showError(), showEmailForm(), showNewPasswordForm(), showMessage()* |
| *C27* | *PasswordController* | *-* | *sendResetLink(), resetPassword(), generateResetLink(), validateNewPassword()* |
| *C28* | *DashboardPage* | *currentUser, role* | *displayDashboard(), displayUserInfo()* |
| *C29* | *SettingPage* | *-* | *showPage(), selectLogout(), showLogoutConfirmation(), confirmLogout(), cancelLogout()* |

---

# BAB 5: Perancangan Rinci Kelas

Bagian ini diisi dengan daftar seluruh kelas dalam tabel berikut:

Tabel 5.1. Daftar Kelas Perancangan dan Kelas Analisis Terkait

| No | Nama Kelas Perancangan | Nama Kelas Analisis Terkait |
| :--- | :--- | :--- |
| 1 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL atau -]* |
| 2 | *[Nama kelas perancangan]* | *[Nama kelas analisis pada SKPL atau -]* |
| ... | *...* | *...* |

Untuk **setiap kelas**, identifikasi operasi berdasarkan tanggung jawab kelas beserta *visibility*-nya, serta atribut beserta *visibility* dan tipenya. Buat subbab tersendiri untuk setiap kelas.

## 5.1 Kelas [Nama Kelas 1]

**Nama Kelas:** *[Nama kelas]*  
**ID Kelas:** *[ID kelas]*

Tabel 5.1.1. Operasi Kelas [Nama Kelas 1]

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *[Signature operasi, termasuk parameter dan tipe kembalian]* | *[Visibility]* | *[Tanggung jawab operasi]* |
| *...* | *...* | *...* |

Tabel 5.1.2. Atribut Kelas [Nama Kelas 1]

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *[Nama atribut]* | *[Visibility]* | *[Tipe sesuai bahasa pemrograman yang digunakan]* |
| *...* | *...* | *...* |

### 5.1.1 Algoritma/Query

Bagian ini diisi untuk kerangka algoritma proses yang dianggap cukup penting. Algoritma dapat dituliskan sebagai *pseudocode*. Implementasi *skeleton code* juga dapat digunakan untuk kelas yang sudah terdefinisi pada bahasa pemrograman tertentu.

**Nama Kelas:** *[Nama kelas]*  
**Nama Operasi:** *[Signature operasi]*  
**ID Algoritma:** *[Algo-001]*

```text
[Tuliskan pseudocode algoritma operasi di sini.]
```

Jika operasi mengacu pada query tertentu, lengkapi tabel berikut. 

Tabel 5.1.1. Query Operasi [Nama Operasi]

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *[Q-001]* | *[Tuliskan query]* | *[Fungsi query]* |
| *...* | *...* | *...* |


### 5.1.2 Algoritma/Query

*[Ulangi pola 5.1.1 untuk operasi penting berikutnya pada kelas yang sama, jika ada.]*

## 5.2 Kelas [Nama Kelas Berikutnya]

*[Ulangi pola 5.1: nama dan ID kelas, tabel operasi, tabel atribut, serta subbab algoritma/query untuk operasi penting jika diperlukan.]*

## 5.11 Kelas AuthController
**Nama Kelas:** *AuthController*  
**ID Kelas:** *C11*

Tabel 5.11.1. Operasi Kelas AuthController
| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *validateData(data: String): Boolean* | *Public* | *Memvalidasi kelengkapan dan format data registrasi.* |
| *registerAccount(data: String): Boolean* | *Public* | *Menyimpan data akun baru ke basis data.* |
| *validateCredentials(usernameOrEmail: String, pass: String): Boolean* | *Private* | *Memvalidasi kredensial pengguna saat login.* |
| *checkAccountStatus(): Boolean* | *Private* | *Memeriksa status akun sebelum login berhasil.* |
| *login(usernameOrEmail: String, pass: String): Boolean* | *Public* | *Memvalidasi kredensial dan status akun, lalu memulai sesi pengguna.* |
| *logout(): Void* | *Public* | *Mengakhiri sesi login pengguna.* |
| *startSession(): Void* | *Private* | *Memulai sesi setelah autentikasi berhasil.* |
| *confirmAccount(token: String): Boolean* | *Public* | *Memvalidasi token dan mengonfirmasi registrasi akun pelajar oleh wali.* |

Tabel 5.11.2. Atribut Kelas AuthController
| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *currentUser* | *Private* | *Pengguna* |
| *sessionToken* | *Private* | *String* |

### 5.11.1 Algoritma/Query

**Nama Kelas:** *AuthController*  
**Nama Operasi:** *registerAccount(data: String)*  
**ID Algoritma:** *Algo-011*

```text
Function registerAccount(data)
    if not validateData(data) then
        return False
    end if

    encryptedPassword <- ENCRYPT_AES256(data.password)
    newUser <- new Pengguna(
        data.username,
        data.email,
        encryptedPassword,
        data.role,
        'PENDING'
    )
    DB.save(newUser)
    sendConfirmationEmail(data.emailWali)
    return True
end Function
```

Tabel 5.11.3. Query Operasi registerAccount
| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *Q-011* | *INSERT INTO users (username, email, password, role, status) VALUES (@username, @email, @hashedPassword, @role, 'PENDING');* | *Menyimpan data pengguna baru ke basis data.* |

## 5.12 Kelas KonfirmasiRegistrasiPage

**Nama Kelas:** *KonfirmasiRegistrasiPage*
**ID Kelas:** *C12*

Tabel 5.12.1. Operasi Kelas KonfirmasiRegistrasiPage
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *displayDataRegistrasi(): Void* | *Public* | *Menampilkan detail data registrasi pelajar kepada wali.* |
| *confirmRegistrasi(status: Boolean): Void* | *Public* | *Mengirimkan keputusan konfirmasi wali ke sistem.* |

Tabel 5.12.2. Atribut Kelas KonfirmasiRegistrasiPage
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *dataRegistrasi* | *Private* | *Object* |
| *statusKonfirmasi* | *Private* | *Boolean* |


## 5.13 Kelas CheckInPage
**Nama Kelas:** *CheckInPage*
**ID Kelas:** *C13*

Tabel 5.13.1. Operasi Kelas CheckInPage
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *showPage(): Void* | *Public* | *Menampilkan formulir daily check-in.* |
| *getInput(): Object* | *Public* | *Mengambil masukan indikator harian dan catatan jurnal.* |
| *showError(msg: String): Void* | *Public* | *Menampilkan pesan validasi masukan tidak sesuai.* |
| *showSuccessMessage(): Void* | *Public* | *Menampilkan pemberitahuan check-in berhasil disubmit.* |

Tabel 5.13.2. Atribut Kelas CheckInPage
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *moodInput* | *Private* | *Integer* |
| *sleepDurationInput* | *Private* | *Float* |
| *dietInput* | *Private* | *String* |
| *triggerInput* | *Private* | *String* |
| *reflectionInput* | *Private* | *Text* |


## 5.14 Kelas CheckInController
**Nama Kelas:** *CheckInController*
**ID Kelas:** *C14*

Tabel 5.14.1. Operasi Kelas CheckInController
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *submitCheckIn(data: Object): Boolean* | *Public* | *Mengolah data masukan check-in dan menyimpannya.* |
| *validateCheckInFormat(data: Object): Boolean* | *Private* | *Memeriksa nilai mood (1-5) dan durasi tidur.* |
| *encryptJournal(reflectionText: String): String* | *Private* | *Mengenkripsi catatan jurnal pribadi menggunakan AES-256.* |

Tabel 5.14.2. Atribut Kelas CheckInController
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *currentCheckIn* | *Private* | *CheckIn* |

### 5.14.1 Algoritma/Query
**Nama Kelas:** *CheckInController*
**Nama Operasi:** *submitCheckIn(data: Object)*
**ID Algoritma:** *Algo-014*

```text
Function submitCheckIn(data)
    if not validateCheckInFormat(data) then
        return False
    end if
    encryptedJournal <- encryptJournal(data.reflectionInput)
    newEntry <- new CheckIn(data.idPelajar, getCurrentDate(), data.moodInput, data.sleepDurationInput, data.dietInput, data.triggerInput, encryptedJournal)
    DB.save(newEntry)
    return True
end Function

```

Tabel 5.14.3. Query Operasi submitCheckIn
| No Query | Query | Keterangan |
| --- | --- | --- |
| *Q-014* | *INSERT INTO check_in (id_pelajar, tanggal, skala_mood, jam_tidur, pola_makan, pemicu_stres, catatan_refleksi) VALUES (@idPelajar, CURRENT_DATE, @mood, @jamTidur, @polaMakan, @pemicuStres, @encryptedJournal);* | *Menyimpan rekaman check-in harian ke basis data.* |

## 5.15 Kelas NotifikasiPengingatController
**Nama Kelas:** *NotifikasiPengingatController*
**ID Kelas:** *C15*

Tabel 5.15.1. Operasi Kelas NotifikasiPengingatController
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *sendDailyReminder(idPelajar: String): Void* | *Public* | *Mengirim notifikasi pengingat ke peramban & e-mail.* |
| *checkPendingCheckIn(): List* | *Public* | *Memeriksa daftar pelajar yang belum check-in hari ini.* |

Tabel 5.15.2. Atribut Kelas NotifikasiPengingatController
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *reminderSchedule* | *Private* | *Time* |
| *status* | *Private* | *String* |

## 5.16 Kelas ReportPage
**Nama Kelas:** *ReportPage*
**ID Kelas:** *C16*

Tabel 5.16.1. Operasi Kelas ReportPage
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *showPage(): Void* | *Public* | *Menampilkan dasbor laporan dan tren statistik.* |
| *displayChart(chartData: Object): Void* | *Public* | *Visualisasi grafik mood, pola tidur, dan tren stres.* |
| *filterViewByRole(userRole: String): Void* | *Public* | *Menyembunyikan teks jurnal jika diakses oleh OrangTuaWali.* |

Tabel 5.16.2. Atribut Kelas ReportPage
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *selectedPeriod* | *Private* | *String* |
| *displayedChart* | *Private* | *Object* |
| *displayedSummary* | *Private* | *String* |

## 5.17 Kelas ReportController
**Nama Kelas:** *ReportController*
**ID Kelas:** *C17*

Tabel 5.17.1. Operasi Kelas ReportController
| Nama Operasi | Visibility (private, public) | Keterangan |
| --- | --- | --- |
| *calculateStatistics(idPelajar: String, period: String): Object* | *Public* | *Menghitung rata-rata mood, durasi tidur, dan tren.* |
| *buildTrendChart(data: Object): Object* | *Public* | *Menyusun struktur data grafik untuk tampilan web.* |
| *applyPrivacyRestriction(userRole: String, rawData: Object): Object* | *Private* | *Memfilter jurnal pribadi sesuai KNF02.* |

Tabel 5.17.2. Atribut Kelas ReportController
| Nama Atribut | Visibility (private, public) | Tipe |
| --- | --- | --- |
| *currentReport* | *Private* | *LaporanKesehatan* |

### 5.17.1 Algoritma/Query
**Nama Kelas:** *ReportController*
**Nama Operasi:** *calculateStatistics(idPelajar: String, period: String)*
**ID Algoritma:** *Algo-017*

```text
Function calculateStatistics(idPelajar, period)
    rawData <- DB.getCheckInByPeriod(idPelajar, period)
    avgMood <- SUM(rawData.skalaMood) / COUNT(rawData)
    avgSleep <- SUM(rawData.jamTidur) / COUNT(rawData)
    trendChart <- buildTrendChart(rawData)
    return { avgMood, avgSleep, trendChart }
end Function

```

Tabel 5.17.3. Query Operasi calculateStatistics
| No Query | Query | Keterangan |
| --- | --- | --- |
| *Q-017* | *SELECT tanggal, skala_mood, jam_tidur, pemicu_stres FROM check_in WHERE id_pelajar = @idPelajar AND tanggal >= @startDate ORDER BY tanggal ASC;* | *Mengambil sekumpulan data check-in berdasarkan rentang periode.* |

## 5.21 Kelas PengajuanKonsultasiPage

**Nama Kelas:** *PengajuanKonsultasiPage*  
**ID Kelas:** *C21*

Tabel 5.21.1. Operasi Kelas PengajuanKonsultasiPage

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *displayForm(idTenagaKesehatan: String, daftarJadwal: List<JadwalKonsultasi>): void* | *public* | *Menampilkan formulir pengajuan konsultasi beserta daftar jadwal tenaga kesehatan yang dipilih. Dipanggil oleh JadwalKonsultasiController setelah daftar jadwal berhasil dimuat.* |
| *displaySelectedSchedule(idJadwal: String): void* | *public* | *Menampilkan jadwal yang dipilih pelajar pada formulir pengajuan. Dipanggil setelah jadwal terbukti tersedia.* |
| *showUnavailableWarning(): void* | *public* | *Menampilkan peringatan bahwa jadwal yang dipilih tidak tersedia dan meminta pelajar memilih jadwal lain. Dipanggil jika pemeriksaan ketersediaan mengembalikan false.* |
| *getFormData(): String* | *public* | *Mengambil data yang diisi pelajar pada formulir pengajuan (jadwal dan keluhan) untuk dikirim ke JadwalKonsultasiController. Dipanggil saat pelajar menekan tombol kirim.* |
| *filterDate(tanggalBaru: Date): void* | *public* | *Menyaring jadwal berdasarkan tanggal yang dipilih tenaga kesehatan, lalu menampilkan slot waktu yang tersedia. Dipanggil pada proses reschedule jadwal konsultasi.* |
| *displayAvailableSchedule(daftarJadwal: List<JadwalKonsultasi>): void* | *public* | *Menampilkan daftar jadwal konsultasi yang tersedia. Dipanggil saat tenaga kesehatan membuka menu pengajuan konsultasi (UC07), saat ketersediaan jadwal diperbarui selama formulir dibuka, dan saat jadwal yang dipilih pelajar tidak tersedia (UC06).* |
| *chooseSchedule(idJadwal: String): void* | *public* | *Menerima aksi pelajar yang memilih jadwal konsultasi, lalu meneruskannya ke JadwalKonsultasiController untuk diperiksa ketersediaannya. Dipanggil juga saat pelajar memilih jadwal pengganti.* |
| *fillForm(keluhan: String): void* | *public* | *Menerima keluhan yang diisi pelajar pada formulir pengajuan.* |
| *submitForm(): void* | *public* | *Menerima aksi pelajar yang menekan tombol kirim, lalu mengambil data formulir dan mengirimkannya ke JadwalKonsultasiController.* |
| *showSuccessMessage(): void* | *public* | *Menampilkan pesan bahwa pengajuan tersimpan dan menunggu ditinjau tenaga kesehatan. Dipanggil setelah pengajuan berhasil dikirim.* |

Tabel 5.21.2. Atribut Kelas PengajuanKonsultasiPage

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *selectedTenagaKesehatan* | *private* | *TenagaKesehatan* |
| *filteredDate* | *private* | *Date* |
| *displayedSchedule* | *private* | *List<JadwalKonsultasi>* |
| *jadwalDipilih* | *private* | *JadwalKonsultasi* |
| *dataPengajuan* | *private* | *String* |

### 5.21.1 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *displayForm(idTenagaKesehatan, daftarJadwal)*  
**ID Algoritma:** *Algo-C21-01*

```text
Procedure displayForm(idTenagaKesehatan, daftarJadwal)
    selectedTenagaKesehatan.id ← idTenagaKesehatan
    displayedSchedule ← daftarJadwal
    UI.showConsultationForm(idTenagaKesehatan, displayedSchedule)
```

Tabel 5.21.1.1. Query Operasi displayForm(idTenagaKesehatan, daftarJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.2 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *displaySelectedSchedule(idJadwal)*  
**ID Algoritma:** *Algo-C21-02*

```text
Procedure displaySelectedSchedule(idJadwal)
    jadwalDipilih ← NULL
    i ← 1
    while (i ≤ length(displayedSchedule)) and (jadwalDipilih = NULL) do
        if (displayedSchedule[i].idJadwal = idJadwal) then
            jadwalDipilih ← displayedSchedule[i]
        i ← i + 1
    if (jadwalDipilih ≠ NULL) then
        UI.showSelectedSchedule(jadwalDipilih)
```

Tabel 5.21.2.1. Query Operasi displaySelectedSchedule(idJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.3 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *showUnavailableWarning()*  
**ID Algoritma:** *Algo-C21-03*

```text
Procedure showUnavailableWarning()
    UI.showWarning("Jadwal yang dipilih tidak tersedia, silakan pilih jadwal lain.")
```

Tabel 5.21.3.1. Query Operasi showUnavailableWarning()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.4 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *getFormData()*  
**ID Algoritma:** *Algo-C21-04*

```text
Function getFormData() → String
    dataPengajuan ← UI.getFieldValue("keluhan")
    → dataPengajuan
```

Tabel 5.21.4.1. Query Operasi getFormData()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.5 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *filterDate(tanggalBaru)*  
**ID Algoritma:** *Algo-C21-05*

```text
Procedure filterDate(tanggalBaru)
    filteredDate ← tanggalBaru
    CreateList(hasil)
    i traversal [1..length(displayedSchedule)]
        if (displayedSchedule[i].tanggal = filteredDate) then
            InsertLast(hasil, displayedSchedule[i])
    UI.showTimeSlots(hasil)
```

Tabel 5.21.5.1. Query Operasi filterDate(tanggalBaru)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.6 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *displayAvailableSchedule(daftarJadwal)*  
**ID Algoritma:** *Algo-C21-06*

```text
Procedure displayAvailableSchedule(daftarJadwal)
    displayedSchedule ← daftarJadwal
    UI.showScheduleList(displayedSchedule)
```

Tabel 5.21.6.1. Query Operasi displayAvailableSchedule(daftarJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.7 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *chooseSchedule(idJadwal)*  
**ID Algoritma:** *Algo-C21-07*

```text
Procedure chooseSchedule(idJadwal)
    tersedia ← JadwalKonsultasiController.selectSchedule(idJadwal)
    if (tersedia = true) then
        displaySelectedSchedule(idJadwal)
    else
        showUnavailableWarning()
        daftarJadwal ← JadwalKonsultasiController.refreshAvailability(selectedTenagaKesehatan.id)
    displayAvailableSchedule(daftarJadwal)
```

Tabel 5.21.7.1. Query Operasi chooseSchedule(idJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.8 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *fillForm(keluhan)*  
**ID Algoritma:** *Algo-C21-08*

```text
Procedure fillForm(keluhan)
    UI.setFieldValue("keluhan", keluhan)
    while (UI.isFormOpen() = true) do
        daftarJadwal ← JadwalKonsultasiController.refreshAvailability(selectedTenagaKesehatan.id)
        displayAvailableSchedule(daftarJadwal)
```

Tabel 5.21.8.1. Query Operasi fillForm(keluhan)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.9 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *submitForm()*  
**ID Algoritma:** *Algo-C21-09*

```text
Procedure submitForm()
    dataPengajuan ← getFormData()
    berhasil ← JadwalKonsultasiController.submitRequest(jadwalDipilih.idJadwal, dataPengajuan)
    if (berhasil = true) then
        showSuccessMessage()
    else
        UI.showWarning("Pengajuan gagal dikirim, silakan coba lagi.")
```

Tabel 5.21.9.1. Query Operasi submitForm()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.21.10 Algoritma/Query

**Nama Kelas:** *PengajuanKonsultasiPage*  
**Nama Operasi:** *showSuccessMessage()*  
**ID Algoritma:** *Algo-C21-09*

```text
Procedure showSuccessMessage()
    UI.showMessage("Pengajuan tersimpan dan menunggu ditinjau tenaga kesehatan.")
```

Tabel 5.21.9.1. Query Operasi showSuccessMessage()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.22 Kelas JadwalKonsultasiController

**Nama Kelas:** *JadwalKonsultasiController*  
**ID Kelas:** *C22*

Tabel 5.22.1. Operasi Kelas JadwalKonsultasiController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *loadAvailableSchedules(idTenagaKesehatan: String): List<JadwalKonsultasi>* | *public* | *Mengambil daftar jadwal yang tersedia milik tenaga kesehatan berdasarkan ID tenaga kesehatan, lalu menampilkannya pada formulir pengajuan konsultasi. Dipanggil oleh ProfilTenagaKesehatanPage saat pelajar membuka profil tenaga kesehatan.* |
| *checkAvailability(idJadwal: String): Boolean* | *private* | *Memeriksa apakah jadwal masih tersedia melalui JadwalKonsultasi. Hanya dipanggil secara internal oleh selectSchedule().* |
| *selectSchedule(idJadwal: String): Boolean* | *public* | *Memproses jadwal yang dipilih pelajar dengan memeriksa ketersediaannya. Mengembalikan true jika jadwal tersedia dan false jika tidak tersedia. Dipanggil oleh PengajuanKonsultasiPage saat pelajar memilih jadwal.* |
| *submitRequest(idJadwal: String, keluhan: String): Boolean* | *public* | *Mengirim pengajuan konsultasi pelajar dengan jadwal dan keluhan yang diisi, lalu meneruskannya ke Pelajar untuk direservasi. Mengembalikan true jika pengajuan berhasil disimpan. Dipanggil oleh PengajuanKonsultasiPage saat pelajar menekan tombol kirim.* |
| *refreshAvailability(idTenagaKesehatan: String): List<JadwalKonsultasi>* | *public* | *Memperbarui daftar jadwal tersedia milik tenaga kesehatan. Dipanggil oleh PengajuanKonsultasiPage selama formulir pengajuan dibuka, atau saat jadwal yang dipilih ternyata tidak tersedia.* |

Tabel 5.22.2. Atribut Kelas JadwalKonsultasiController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *-* | *-* | *-* |
| *tenagaKesehatanDipilih* | *private* | *TenagaKesehatan* |
| *daftarJadwal* | *private* | *List<JadwalKonsultasi>* |
| *pelajarAktif* | *private* | *Pelajar* |

### 5.22.1 Algoritma/Query

**Nama Kelas:** *JadwalKonsultasiController*  
**Nama Operasi:** *loadAvailableSchedules(idTenagaKesehatan)*  
**ID Algoritma:** *Algo-C22-01*

```text
Function loadAvailableSchedules(idTenagaKesehatan) → List
    tenagaKesehatanDipilih ← TenagaKesehatan.findById(idTenagaKesehatan)
    daftarJadwal ← tenagaKesehatanDipilih.getJadwalTersedia()
    PengajuanKonsultasiPage.displayForm(idTenagaKesehatan, daftarJadwal)
    → daftarJadwal
```

Tabel 5.22.1.1. Query Operasi loadAvailableSchedules(idTenagaKesehatan)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.22.2 Algoritma/Query

**Nama Kelas:** *JadwalKonsultasiController*  
**Nama Operasi:** *checkAvailability(idJadwal)*  
**ID Algoritma:** *Algo-C22-02*

```text
Function checkAvailability(idJadwal: String) → Boolean
    jadwal ← NULL
    i ← 1
    while (i ≤ length(daftarJadwal)) and (jadwal = NULL) do
        if (daftarJadwal[i].idJadwal = idJadwal) then
            jadwal ← daftarJadwal[i]
        i ← i + 1
    if (jadwal = NULL) then
        hasil ← false
    else
        hasil ← jadwal.isAvailable()
    → hasil
```

Tabel 5.22.2.1. Query Operasi checkAvailability(idJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.22.3 Algoritma/Query

**Nama Kelas:** *JadwalKonsultasiController*  
**Nama Operasi:** *selectSchedule(idJadwal)*  
**ID Algoritma:** *Algo-C22-03*

```text
Function selectSchedule(idJadwal) → Boolean
    hasil ← checkAvailability(idJadwal)
    → hasil
``` 

Tabel 5.22.3.1. Query Operasi selectSchedule(idJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.22.4 Algoritma/Query

**Nama Kelas:** *JadwalKonsultasiController*  
**Nama Operasi:** *submitRequest(idJadwal, keluhan)*  
**ID Algoritma:** *Algo-C22-04*

```text
Function submitRequest(idJadwal, keluhan) → Boolean
    jadwal ← NULL
    i ← 1
    while (i ≤ length(daftarJadwal)) and (jadwal = NULL) do
        if (daftarJadwal[i].idJadwal = idJadwal) then
            jadwal ← daftarJadwal[i]
        i ← i + 1
    if (jadwal = NULL) then
        hasil ← false
    else
        hasil ← pelajarAktif.ajukanKonsultasi(jadwal, keluhan)
    → hasil
```

Tabel 5.22.4.1. Query Operasi submitRequest(idJadwal, keluhan)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.22.5 Algoritma/Query

**Nama Kelas:** *JadwalKonsultasiController*  
**Nama Operasi:** *refreshAvailability(idTenagaKesehatan)*  
**ID Algoritma:** *Algo-C22-05*

```text
Function refreshAvailability(idTenagaKesehatan) → List
    daftarJadwal ← tenagaKesehatanDipilih.getJadwalTersedia()
    → daftarJadwal
```

Tabel 5.22.5.1. Query Operasi refreshAvailability(idTenagaKesehatan)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.23 Kelas KonsultasiController

**Nama Kelas:** *KonsultasiController*  
**ID Kelas:** *C23*

Tabel 5.23.1. Operasi Kelas KonsultasiController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *approvePengajuan(idJadwal: String): Boolean* | *public* | *Menyetujui pengajuan konsultasi berdasarkan ID jadwal, dengan mengubah status jadwal konsultasi menjadi “Disetujui”. Dipanggil oleh PengajuanKonsultasiPage saat tenaga kesehatan menekan tombol setuju pengajuan. Mengembalikan true jika status berhasil diperbarui.* |
| *reschedule(idJadwal: String, tanggalBaru: Date, waktuBaru: Time): Boolean* | *public* | *Mengubah jadwal konsultasi berdasarkan ID jadwal ke tanggal dan waktu baru, lalu mengubah status jadwal menjadi “Rescheduled”. Dipanggil oleh PengajuanKonsultasiPage saat tenaga kesehatan memilih jadwal baru dan menekan tombol kirim reschedule. Mengembalikan true jika jadwal berhasil diperbarui.* |

Tabel 5.23.2. Atribut Kelas KonsultasiController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.23.1 Algoritma/Query

**Nama Kelas:** *KonsultasiController*  
**Nama Operasi:** *approvePengajuan(idJadwal)*  
**ID Algoritma:** *Algo-C23-01*

```text
Function approvePengajuan(idJadwal) → Boolean
    if (idJadwal = NULL) then
        raise Error("ID jadwal harus diisi.")
    hasil ← JadwalKonsultasi.updateStatus(idJadwal, "Disetujui")
    → hasil
```

Tabel 5.23.1.1. Query Operasi approvePengajuan(idJadwal)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.23.2 Algoritma/Query

**Nama Kelas:** *KonsultasiController*  
**Nama Operasi:** *reschedule(idJadwal, tanggalBaru, waktuBaru)*  
**ID Algoritma:** *Algo-C23-02*

```text
Function reschedule(idJadwal, tanggalBaru, waktuBaru) → Boolean
    if (idJadwal = NULL) or (tanggalBaru = NULL) or (waktuBaru = NULL) then
        raise Error("ID jadwal, tanggal baru, dan waktu baru harus diisi.")
    hasil ← JadwalKonsultasi.updateSchedule(idJadwal, tanggalBaru, waktuBaru)
    → hasil
```

Tabel 5.23.2.1. Query Operasi reschedule(idJadwal, tanggalBaru, waktuBaru)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.24 Kelas NotifikasiDaruratController

**Nama Kelas:** *NotifikasiDaruratController*  
**ID Kelas:** *C24*

Tabel 5.24.1. Operasi Kelas NotifikasiDaruratController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *sendEmergencyNotification(): void* | *public* | *Mengirim notifikasi darurat kepada orang tua/wali. Dipanggil saat orang tua/wali tidak merespons notifikasi darurat hingga batas waktu, setelah pengiriman ulang (reminder).* |
| *loadEmergencyDetail(idWali: String): String* | *public* | *Mengambil detail notifikasi darurat untuk orang tua/wali tertentu, berupa ringkasan kondisi pelajar yang ditampilkan pada pop-up notifikasi darurat. Dipanggil saat orang tua/wali membuka notifikasi darurat.* |
| *confirmReceived(idNotifikasi: String): Boolean* | *public* | *Mencatat status notifikasi sebagai “Diterima” beserta waktu konfirmasi. Dipanggil saat orang tua/wali menekan tombol “Konfirmasi Diterima”. Mengembalikan true jika status berhasil dicatat.* |
| *markFollowUp(idNotifikasi: String): Boolean* | *public* | *Mencatat status tindak lanjut sebagai “Sudah Ditindaklanjuti” beserta waktu tindak lanjut, lalu memperbarui status darurat pelajar menjadi tidak darurat. Dipanggil saat orang tua/wali menekan tombol “Tandai Sudah Ditindaklanjuti”. Mengembalikan true jika berhasil.* |

Tabel 5.24.2. Atribut Kelas NotifikasiDaruratController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *-* | *-* | *-* |

### 5.24.1 Algoritma/Query

**Nama Kelas:** *NotifikasiDaruratController*  
**Nama Operasi:** *sendEmergencyNotification()*  
**ID Algoritma:** *Algo-C24-01*

```text
Procedure sendEmergencyNotification()
    NOTIFICATION_SERVICE.sendEmergencyToOrangTuaWali()
```

Tabel 5.24.1.1. Query Operasi sendEmergencyNotification()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.24.2 Algoritma/Query

**Nama Kelas:** *NotifikasiDaruratController*  
**Nama Operasi:** *loadEmergencyDetail(idWali)*  
**ID Algoritma:** *Algo-C24-02*

```text
Function loadEmergencyDetail(idWali) → String
    if (idWali = NULL) then
        raise Error("ID wali harus diisi.")
    isEmergency ← LaporanKesehatan.detectEmergency()
    if (isEmergency = true) then
        hasil ← LaporanKesehatan.ringkasanKondisi
    else
        hasil ← ""
    → hasil
```

Tabel 5.24.2.1. Query Operasi loadEmergencyDetail(idWali)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.24.3 Algoritma/Query

**Nama Kelas:** *NotifikasiDaruratController*  
**Nama Operasi:** *confirmReceived(idNotifikasi)*  
**ID Algoritma:** *Algo-C24-03*

```text
Function confirmReceived(idNotifikasi) → Boolean
    if (idNotifikasi = NULL) then
        raise Error("ID notifikasi harus diisi.")
    DB_SERVICE.updateStatusDiterima(idNotifikasi)
    → true
```

Tabel 5.24.3.1. Query Operasi confirmReceived(idNotifikasi)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *Q-C24-01* | *UPDATE notifikasi_darurat<br>SET status = 'Diterima',<br>waktu_konfirmasi = NOW()<br>WHERE id = @idNotifikasi;* | *Mencatat status notifikasi sebagai “Diterima” beserta waktu konfirmasi. Digunakan oleh confirmReceived() saat orang tua/wali menekan tombol “Konfirmasi Diterima”.* |


### 5.24.4 Algoritma/Query

**Nama Kelas:** *NotifikasiDaruratController*  
**Nama Operasi:** *markFollowUp(idNotifikasi)*  
**ID Algoritma:** *Algo-C24-04*

```text
Function markFollowUp(idNotifikasi) → Boolean
    if (idNotifikasi = NULL) then
        raise Error("ID notifikasi harus diisi.")
    DB_SERVICE.updateStatusTindakLanjut(idNotifikasi)
    Pelajar.updateEmergencyStatus(false)
    → true
``` 

Tabel 5.24.4.1. Query Operasi markFollowUp(idNotifikasi)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *Q-C24-02* | *UPDATE notifikasi_darurat<br>SET status_tindak_lanjut = 'Sudah Ditindaklanjuti',<br>waktu_tindak_lanjut = NOW()<br>WHERE id = @idNotifikasi;* | *Mencatat status tindak lanjut sebagai “Sudah Ditindaklanjuti” beserta waktu tindak lanjut. Digunakan oleh markFollowUp() saat orang tua/wali menekan tombol “Tandai Sudah Ditindaklanjuti”.* |


## 5.25 Kelas LoginPage

**Nama Kelas:** *LoginPage*  
**ID Kelas:** *C25*

Tabel 5.25.1. Operasi Kelas LoginPage

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *showPage(): void* | *public* | *Menampilkan halaman masuk akun beserta kolom username/e-mail, password, dan tombol “Lupa Password”. Dipanggil saat pengguna memilih menu masuk akun dan saat pengguna kembali dari proses reset password.* |
| *getInput(): String[]* | *public* | *Mengambil username/e-mail dan password yang diisi pengguna setelah menekan tombol masuk. Hasilnya dipakai untuk memanggil login() di AuthController.* |
| *showError(message: String): void* | *public* | *Menampilkan pesan kesalahan kepada pengguna. Dipanggil jika kredensial tidak valid (pengguna diminta input ulang) atau jika akun belum aktif karena menunggu konfirmasi orang tua/wali (akses masuk ditolak).* |
| *selectForgotPassword(): void* | *public* | *Menerima aksi pengguna yang menekan tombol “Lupa Password”, lalu memicu penampilan halaman input e-mail pada ResetPasswordPage.* |

Tabel 5.25.2. Atribut Kelas LoginPage

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *usernameOrEmailInput* | *private* | *String* |
| *passwordInput* | *private* | *String* |

### 5.25.1 Algoritma/Query

**Nama Kelas:** *LoginPage*  
**Nama Operasi:** *showPage()*  
**ID Algoritma:** *Algo-C25-01*

```text
Procedure showPage()
    UI.showLoginPage()
```

Tabel 5.25.1.1. Query Operasi showPage()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.25.2 Algoritma/Query

**Nama Kelas:** *LoginPage*  
**Nama Operasi:** *getInput()*  
**ID Algoritma:** *Algo-C25-02*

```text
Function getInput() → String[]
    usernameOrEmailInput ← UI.getFieldValue("usernameOrEmail")
    passwordInput ← UI.getFieldValue("password")
    → [usernameOrEmailInput, passwordInput]
``` 

Tabel 5.25.2.1. Query Operasi getInput()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.25.3 Algoritma/Query

**Nama Kelas:** *LoginPage*  
**Nama Operasi:** *showError(message)*  
**ID Algoritma:** *Algo-C25-03*

```text
Procedure showError(message)
    UI.showError(message)
``` 

Tabel 5.25.3.1. Query Operasi showError(message)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.25.4 Algoritma/Query

**Nama Kelas:** *LoginPage*  
**Nama Operasi:** *selectForgotPassword()*  
**ID Algoritma:** *Algo-C25-04*

```text
Procedure selectForgotPassword()
    ResetPasswordPage.showEmailForm()
```

Tabel 5.25.4.1. Query Operasi selectForgotPassword()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.26 Kelas ResetPasswordPage

**Nama Kelas:** *ResetPasswordPage*  
**ID Kelas:** *C26*

Tabel 5.26.1. Operasi Kelas ResetPasswordPage

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *getInput(): String[]* | *public* | *Mengambil data yang diisi pengguna pada formulir, yaitu e-mail atau password baru beserta konfirmasinya. Dipanggil setelah pengguna menekan tombol kirim atau simpan.* |
| *showError(message: String): void* | *public* | *Menampilkan pesan kesalahan dan meminta pengguna menginput ulang e-mail. Dipanggil jika e-mail tidak terdaftar.* |
| *showEmailForm(): void* | *public* | *Menampilkan halaman input e-mail untuk reset password. Dipanggil oleh LoginPage setelah pengguna menekan tombol “Lupa Password”.* |
| *showNewPasswordForm(): void* | *public* | *Menampilkan halaman input password baru dan konfirmasi password. Dipanggil saat pengguna membuka tautan reset password dari e-mail.* |
| *showMessage(message: String): void* | *public* | *Menampilkan pesan informasi kepada pengguna, yaitu pesan tautan reset telah dikirim atau pesan password berhasil diubah.* |

Tabel 5.26.2. Atribut Kelas ResetPasswordPage

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *emailInput* | *private* | *String* |
| *newPasswordInput* | *private* | *String* |
| *confirmPasswordInput* | *private* | *String* |

### 5.26.1 Algoritma/Query

**Nama Kelas:** *ResetPasswordPage*  
**Nama Operasi:** *getInput()*  
**ID Algoritma:** *Algo-C26-01*

```text
Function getInput() → String[]
    emailInput ← UI.getFieldValue("email")
    newPasswordInput ← UI.getFieldValue("newPassword")
    confirmPasswordInput ← UI.getFieldValue("confirmPassword")
    → [emailInput, newPasswordInput, confirmPasswordInput]
```

Tabel 5.26.1.1. Query Operasi getInput()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.26.2 Algoritma/Query

**Nama Kelas:** *ResetPasswordPage*  
**Nama Operasi:** *showError(message)*  
**ID Algoritma:** *Algo-C26-02*

```text
Procedure showError(message)
    UI.showError(message)
```

Tabel 5.26.1.1. Query Operasi showError(message)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.26.3 Algoritma/Query

**Nama Kelas:** *ResetPasswordPage*  
**Nama Operasi:** *showEmailForm()*  
**ID Algoritma:** *Algo-C26-03*

```text
Procedure showEmailForm()
    UI.showEmailForm()
``` 

Tabel 5.26.1.1. Query Operasi showEmailForm()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.26.4 Algoritma/Query

**Nama Kelas:** *ResetPasswordPage*  
**Nama Operasi:** *showNewPasswordForm()*  
**ID Algoritma:** *Algo-C26-04*

```text
Procedure showNewPasswordForm()
    UI.showNewPasswordForm()
```

Tabel 5.26.1.1. Query Operasi showNewPasswordForm()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.26.5 Algoritma/Query

**Nama Kelas:** *ResetPasswordPage*  
**Nama Operasi:** *showMessage(message)*  
**ID Algoritma:** *Algo-C26-05*

```text
Procedure showMessage(message)
    UI.showMessage(message)
```

Tabel 5.26.1.1. Query Operasi showMessage(message)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.27 Kelas PasswordController

**Nama Kelas:** *PasswordController*  
**ID Kelas:** *C27*

Tabel 5.27.1. Operasi Kelas PasswordController

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *sendResetLink(email: String): Boolean* | *public* | *Memeriksa apakah e-mail terdaftar, lalu mengirim tautan reset password ke e-mail tersebut. Mengembalikan true jika tautan terkirim dan false jika e-mail tidak terdaftar. Dipanggil oleh ResetPasswordPage setelah pengguna mengirim e-mail.* |
| *resetPassword(newPassword: String, confirmPassword: String): Boolean* | *public* | *Memperbarui password pengguna dengan password baru. Mengembalikan true jika password berhasil diperbarui. Dipanggil oleh ResetPasswordPage setelah pengguna menyimpan password baru.* |
| *generateResetLink(email: String): String* | *private* | *Membuat tautan reset password untuk e-mail yang terdaftar. Hanya dipanggil secara internal oleh sendResetLink().* |
| *validateNewPassword(newPassword: String, confirmPassword: String): Boolean* | *private* | *Memeriksa apakah password baru sesuai ketentuan keamanan dan sama dengan konfirmasi password. Hanya dipanggil secara internal oleh resetPassword() sebelum password disimpan.* |

Tabel 5.27.2. Atribut Kelas PasswordController

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *-* | *-* | *-* |

### 5.27.1 Algoritma/Query

**Nama Kelas:** *PasswordController*  
**Nama Operasi:** *sendResetLink(email)*  
**ID Algoritma:** *Algo-C27-01*

```text
Function sendResetLink(email) → Boolean
    if (email = NULL) then
        raise Error("E-mail harus diisi.")
    pengguna ← Pengguna.findByEmail(email)
    if (pengguna = NULL) then
        hasil ← false
    else
        resetLink ← generateResetLink(email)
        EMAIL_SERVICE.sendResetLinkEmail(email, resetLink)
        hasil ← true
    → hasil
```

Tabel 5.27.1.1. Query Operasi sendResetLink(email)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.27.2 Algoritma/Query

**Nama Kelas:** *PasswordController*  
**Nama Operasi:** *resetPassword(newPassword, confirmPassword)*  
**ID Algoritma:** *Algo-C27-02*

```text
Function resetPassword(newPassword, confirmPassword) → Boolean
    if (newPassword = NULL) or (confirmPassword = NULL) then
        raise Error("Password baru dan konfirmasi harus diisi.")
    if (validateNewPassword(newPassword, confirmPassword) = false) then
        hasil ← false
    else
        pengguna ← SECURITY.getUserFromResetToken()
        hasil ← pengguna.setPassword(newPassword)
    → hasil
```

Tabel 5.27.2.1. Query Operasi resetPassword(newPassword, confirmPassword)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.27.3 Algoritma/Query

**Nama Kelas:** *PasswordController*  
**Nama Operasi:** *generateResetLink(email)*  
**ID Algoritma:** *Algo-C27-03*

```text
Function generateResetLink(email) → String
    token ← SECURITY.createResetToken(email)
    resetLink ← APP_URL + "/reset-password?token=" + token
    → resetLink
```

Tabel 5.27.3.1. Query Operasi generateResetLink(email)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.27.4 Algoritma/Query

**Nama Kelas:** *PasswordController*  
**Nama Operasi:** *validateNewPassword(newPassword, confirmPassword)*  
**ID Algoritma:** *Algo-C27-04*

```text
Function validateNewPassword(newPassword, confirmPassword) → Boolean
    if (newPassword ≠ confirmPassword) then
        hasil ← false
    else if (newPassword.length < 8) then
        hasil ← false
    else
        hasil ← true
    → hasil
```

Tabel 5.27.4.1. Query Operasi validateNewPassword(newPassword, confirmPassword)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.28 Kelas DashboardPage

**Nama Kelas:** *DashboardPage*  
**ID Kelas:** *C28*

Tabel 5.28.1. Operasi Kelas DashboardPage

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *displayDashboard(currentUser: Pengguna, role: String): void* | *public* | *Menampilkan dashboard sesuai peran pengguna. Dipanggil oleh AuthController setelah sesi login berhasil dimulai, dengan data pengguna dan perannya sebagai parameter.* |
| *displayUserInfo(): void* | *private* | *Menampilkan informasi pengguna yang sedang login pada dashboard. Hanya dipanggil secara internal oleh displayDashboard().* |

Tabel 5.28.2. Atribut Kelas DashboardPage

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *currentUser* | *private* | *Pengguna* |
| *role* | *private* | *String* |

### 5.28.1 Algoritma/Query

**Nama Kelas:** *DashboardPage*  
**Nama Operasi:** *displayDashboard(currentUser, role)*  
**ID Algoritma:** *Algo-C28-01*

```text
Procedure displayDashboard(currentUser, role)
    if (currentUser = NULL) or (role = NULL) then
        raise Error("Data pengguna dan peran harus diisi.")
    this.currentUser ← currentUser
    this.role ← role
    UI.showDashboard(role)
    displayUserInfo()
```

Tabel 5.28.1.1. Query Operasi displayDashboard(currentUser, role)

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.28.2 Algoritma/Query

**Nama Kelas:** *DashboardPage*  
**Nama Operasi:** *displayUserInfo()*  
**ID Algoritma:** *Algo-C28-02*

```text
Procedure displayUserInfo()
	UI.showUserInfo(currentUser)
```

Tabel 5.28.2.1. Query Operasi displayUserInfo()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


## 5.29 Kelas SettingPage

**Nama Kelas:** *SettingPage*  
**ID Kelas:** *C29*

Tabel 5.29.1. Operasi Kelas SettingPage

| Nama Operasi | Visibility (private, public) | Keterangan |
| :--- | :--- | :--- |
| *showPage(): void* | *public* | *Menampilkan halaman pengaturan/profil kepada pengguna. Dipanggil saat pengguna memilih menu pengaturan/profil dan saat pengguna kembali ke halaman ini setelah membatalkan keluar akun.* |
| *selectLogout(): void* | *public* | *Menerima aksi pengguna yang menekan tombol keluar akun (logout), lalu memicu penampilan konfirmasi keluar akun.* |
| *showLogoutConfirmation(): void* | *private* | *Menampilkan pop up konfirmasi keluar akun kepada pengguna. Hanya dipanggil secara internal oleh selectLogout().* |
| *confirmLogout(): void* | *public* | *Memproses aksi pengguna yang menekan tombol konfirmasi keluar, lalu meneruskan permintaan logout ke AuthController.* |
| *cancelLogout(): void* | *public* | *Memproses aksi pengguna yang menekan tombol batal, menutup pop up konfirmasi, dan mempertahankan sesi login pengguna.* |

Tabel 5.29.2. Atribut Kelas SettingPage

| Nama Atribut | Visibility (private, public) | Tipe |
| :--- | :--- | :--- |
| *-* | *-* | *-* |

### 5.29.1 Algoritma/Query

**Nama Kelas:** *SettingPage*  
**Nama Operasi:** *showPage()*  
**ID Algoritma:** *Algo-C29-01*

```text
Procedure showPage()
	UI.showSettingPage()
```

Tabel 5.29.1.1. Query Operasi showPage()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.29.2 Algoritma/Query

**Nama Kelas:** *SettingPage*  
**Nama Operasi:** *selectLogout()*  
**ID Algoritma:** *Algo-C29-02*

```text
Procedure selectLogout()
	showLogoutConfirmation()
```

Tabel 5.29.2.1. Query Operasi selectLogout()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.29.3 Algoritma/Query

**Nama Kelas:** *SettingPage*  
**Nama Operasi:** *showLogoutConfirmation()*  
**ID Algoritma:** *Algo-C29-03*

```text
Procedure showLogoutConfirmation()
	UI.showPopup(“Apakah Anda yakin ingin keluar akun?”)
```

Tabel 5.29.3.1. Query Operasi showLogoutConfirmation()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.29.4 Algoritma/Query

**Nama Kelas:** *SettingPage*  
**Nama Operasi:** *confirmLogout(): void*  
**ID Algoritma:** *Algo-C29-04*

```text
Procedure confirmLogout()
    AuthController.logout()
```

Tabel 5.29.4.1. Query Operasi confirmLogout()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |


### 5.29.5 Algoritma/Query

**Nama Kelas:** *SettingPage*  
**Nama Operasi:** *cancelLogout()*  
**ID Algoritma:** *Algo-C29-05*

```text
Procedure cancelLogout()
	UI.closePopup()
	showPage()
```

Tabel 5.29.5.1. Query Operasi cancelLogout()

| No Query | Query | Keterangan |
| :--- | :--- | :--- |
| *-* | *-* | *-* |

<br>

---

# BAB 6: Perancangan Antarmuka

## 6.1 Rancangan Antarmuka I-01

**Antarmuka:** *I-01*  
**Nama Layar:** *RegistrationPagePelajar*

<p align="center">
<img alt="Rancangan Antarmuka I-01 - RegistrationPagePelajar" src="./assets/antarmuka/registration-page-pelajar.png" width="50%">
</p>
<p align="center">
<i>Gambar 6.1. Rancangan Antarmuka I-01 - RegistrationPagePelajar</i>
</p>

Tabel 6.1. Spesifikasi Objek Antarmuka I-01

| Id_Objek | Jenis | Konten | Keterangan |
| :--- | :--- | :--- | :--- |
| *Panel_Right* | *Side Panel/Container* | *Berisi semua elemen formulir registrasi* | *Wadah(container) utama di sisi kanan untuk menampung semua komponen interaktif formulir registrasi pelajar.* |
| *Panel_Left* | *Side Panel/Container* | *Berisi logo MahaSehat dan teks sapaan* | *Wadah (container) visual di sisi kiri layar untuk branding dan teks penyambutan pengguna*. |
| *Logo_App* | *Image/Logo* | *Logo MahaSehat* | *Menampilkan identitas/logo aplikasi MahaSehat di bagian atas panel kiri.* |
| *Text_Greeting* | *Label/Text Header* | *Teks "Selamat Datang!"* | *Teks judul sapaan pembuka bagi pengguna yang membuka halaman registrasi.* |
| *Tab_Role_Pelajar* | *Button/Tab* | *Teks "Pelajar"* | *Menampilkan formulir pendaftaran khusus peran Pelajar (keadaan aktif).* |
| *Label_Nama* | *Text* | *Teks "Nama"* | *Label untuk field input nama.* |
| *Input_Nama* | *Input Text Field* | *Placeholder "Nama"* | *Tempat pengguna (pelajar) memasukkan nama mereka.* |
| *Label_Email* | *Text* | *Teks "Email"* | *Label untuk field input email.* |
| *Input_Email* | *Input Text Field* | *Placeholder "Email"* | *Tempat pengguna (pelajar) memasukkan alamat email mereka.* |
| *Label_NomorTelp* | *Text* | *Teks "Nomor Telepon"* | *Label untuk field input nomor telepon.* |
| *Input_NomorTelp* | *Input Text Field* | *Placeholder "Nomor Telepon"* | *Tempat pengguna (pelajar) memasukkan nomor telepon mereka.* |
| *Group_TglLahir* | *Group/Container* | *Label "Tanggal Lahir" dan 3 input field (Bulan, Tanggal, Tahun)* | *Kelompok elemen untuk mengumpulkan data tanggal lahir pengguna (pelajar).* |
| *Input_BulanLahir* | *Input Text Field* | *Placeholder "Bulan"* | *Tempat pengguna (pelajar) memasukkan bulan lahir mereka.* |
| *Input_TanggalLahir* | *Input Text Field* | *Placeholder "Tanggal"* | *Tempat pengguna (pelajar) memasukkan tanggal lahir mereka.* |
| *Input_TahunLahir* | *Input Text Field* | *Placeholder "Tahun"* | *Tempat pengguna (pelajar) memasukkan tahun lahir mereka.* |
| *Label_NomorTelpOrangTuaWali* | *Text* | *Teks "Nomor Telepon Orang Tua/Wali"* | *Label untuk field input nomor telepon orang tua/wali pelajar.* |
| *Input_NomorTelpOrangTuaWali* | *Input Text Field* | *Placeholder "Nomor Telepon Orang Tua/Wali"* | *Tempat pengguna (pelajar) memasukkan nomor telepon orang tua/wali mereka.* |
| *Label_RiwayatKesehatan* | *Text* | *Teks "Riwayat Kesehatan"* | *Label untuk field input riwayat kesehatan.* |
| *Input_RiwayatKesehatan* | *Input Text Field* | *Placeholder "Riwayat Kesehatan"* | *Tempat pengguna (pelajar) memasukkan riwayat kesehatan mereka.* |
| *Label_KataSandi* | *Text* | *Teks "Kata Sandi"* | *Label untuk field kata sandi.* |
| *Input_KataSandi* | *Input Text Field* | *Placeholder "Kata Sandi"* | *Tempat pengguna (pelajar) memasukkan kata sandi mereka. Tipe input "password".* |
| *Label_KonfirmasiKataSandi* | *Text* | *Teks "Konfirmasi Kata Sandi"* | *Label untuk field konfirmasi kata sandi.* |
| *Input_KonfirmasiKataSandi* | *Input Text Field* | *Placeholder "Konfirmasi Kata Sandi"* | *Tempat pengguna (pelajar) memasukkan ulang kata sandi mereka untuk memastikan kecocokan dengan input sebelumnya. Tipe input "password".* |
| *Btn_Daftar* | *Button* | *"Daftar"* | *Jika diklik, akan memulai validasi data. Jika valid, akun pelajar berhasil diajukan dan konfirmasi persetujuan orang tua/wali akan dikirim bagi pelajar di bawah umur.* |
| *Link_Masuk* | *Link Text* | *"Sudah memiliki akun? Masuk"* | *Mengarahkan pengguna yang sudah memiliki akun ke masuk akun.* |

## 6.2 Rancangan Antarmuka I-02
**Antarmuka:** *I-02*  
**Nama Layar:** *RegistrationPageOrangTuaWali*

<p align="center">
<img alt="Rancangan Antarmuka I-02 - RegistrationPageOrangTuaWali" src="./assets/antarmuka/registration-page-orangtuawali.png" width="50%">
</p>
<p align="center">
<i>Gambar 6.2. Rancangan Antarmuka I-02 - RegistrationPageOrangTuaWali</i>
</p>

Tabel 6.2. Spesifikasi Objek Antarmuka I-02

| Id_Objek | Jenis | Konten | Keterangan |
| :--- | :--- | :--- | :--- |
| *Panel_Right* | *Side Panel/Container* | *Berisi semua elemen formulir registrasi* | *Wadah(container) utama di sisi kanan untuk menampung semua komponen interaktif formulir registrasi orang tua/wali.* |
| *Panel_Left* | *Side Panel/Container* | *Berisi logo MahaSehat dan teks sapaan* | *Wadah (container) visual di sisi kiri layar untuk branding dan teks penyambutan pengguna*. |
| *Logo_App* | *Image/Logo* | *Logo MahaSehat* | *Menampilkan identitas/logo aplikasi MahaSehat di bagian atas panel kiri.* |
| *Text_Greeting* | *Label/Text Header* | *Teks "Selamat Datang!"* | *Teks judul sapaan pembuka bagi pengguna yang membuka halaman registrasi.* |
| *Tab_Role_OrangTuawali* | *Button/Tab* | *Teks "Orang Tua/Wali"* | *Menampilkan formulir pendaftaran khusus peran Orang Tua/Wali (keadaan aktif).* |
| *Label_Nama* | *Text* | *Teks "Nama"* | *Label untuk field input nama.* |
| *Input_Nama* | *Input Text Field* | *Placeholder "Nama"* | *Tempat pengguna (orang tua/wali) memasukkan nama mereka.* |
| *Label_Email* | *Text* | *Teks "Email"* | *Label untuk field input email.* |
| *Input_Email* | *Input Text Field* | *Placeholder "Email"* | *Tempat pengguna (orang tua/wali) memasukkan alamat email mereka.* |
| *Label_NomorTelp* | *Text* | *Teks "Nomor Telepon"* | *Label untuk field input nomor telepon.* |
| *Input_NomorTelp* | *Input Text Field* | *Placeholder "Nomor Telepon"* | *Tempat pengguna (orang tua/wali) memasukkan nomor telepon mereka.* |
| *Label_KataSandi* | *Text* | *Teks "Kata Sandi"* | *Label untuk field kata sandi.* |
| *Input_KataSandi* | *Input Text Field* | *Placeholder "Kata Sandi"* | *Tempat pengguna (orang tua/wali) memasukkan kata sandi mereka. Tipe input "password".* |
| *Label_KonfirmasiKataSandi* | *Text* | *Teks "Konfirmasi Kata Sandi"* | *Label untuk field konfirmasi kata sandi.* |
| *Input_KonfirmasiKataSandi* | *Input Text Field* | *Placeholder "Konfirmasi Kata Sandi"* | *Tempat pengguna (orang tua/wali) memasukkan ulang kata sandi mereka untuk memastikan kecocokan dengan input sebelumnya. Tipe input "password".* |
| *Btn_Daftar* | *Button* | *"Daftar"* | *Jika diklik, akan memulai validasi data. Jika valid, akun orang tua/wali berhasil dibuat.* |
| *Link_Masuk* | *Link Text* | *"Sudah memiliki akun? Masuk"* | *Mengarahkan pengguna yang sudah memiliki akun ke masuk akun.* |

## 6.3 Rancangan Antarmuka I-03

**Antarmuka:** *I-03*  
**Nama Layar:** *RegistrationPageTenagaKesehatan*

<p align="center">
<img alt="Rancangan Antarmuka I-03 - RegistrationPageTenagaKesehatan" src="./assets/antarmuka/registration-page-tenagakesehatan.png" width="50%">
</p>
<p align="center">
<i>Gambar 6.3. Rancangan Antarmuka I-03 - RegistrationPageTenagaKesehatan</i>
</p>

Tabel 6.3. Spesifikasi Objek Antarmuka I-03

| Id_Objek | Jenis | Konten | Keterangan |
| :--- | :--- | :--- | :--- |
| *Panel_Right* | *Side Panel/Container* | *Berisi semua elemen formulir registrasi* | *Wadah(container) utama di sisi kanan untuk menampung semua komponen interaktif formulir registrasi tenaga kesehatan.* |
| *Panel_Left* | *Side Panel/Container* | *Berisi logo MahaSehat dan teks sapaan* | *Wadah (container) visual di sisi kiri layar untuk branding dan teks penyambutan pengguna*. |
| *Logo_App* | *Image/Logo* | *Logo MahaSehat* | *Menampilkan identitas/logo aplikasi MahaSehat di bagian atas panel kiri.* |
| *Text_Greeting* | *Label/Text Header* | *Teks "Selamat Datang!"* | *Teks judul sapaan pembuka bagi pengguna yang membuka halaman registrasi.* |
| *Tab_Role_TenagaKesehatan* | *Button/Tab* | *Teks "Tenaga Kesehatan"* | *Menampilkan formulir pendaftaran khusus peran Tenaga Kesehatan (keadaan aktif).* |
| *Label_Nama* | *Text* | *Teks "Nama"* | *Label untuk field input nama.* |
| *Input_Nama* | *Input Text Field* | *Placeholder "Nama"* | *Tempat pengguna (tenaga kesehatan) memasukkan nama mereka.* |
| *Label_Email* | *Text* | *Teks "Email"* | *Label untuk field input email.* |
| *Input_Email* | *Input Text Field* | *Placeholder "Email"* | *Tempat pengguna (tenaga kesehatan) memasukkan alamat email mereka.* |
| *Label_NomorTelp* | *Text* | *Teks "Nomor Telepon"* | *Label untuk field input nomor telepon.* |
| *Input_NomorTelp* | *Input Text Field* | *Placeholder "Nomor Telepon"* | *Tempat pengguna (tenaga kesehatan) memasukkan nomor telepon mereka.* |
| *Label_JenisTenagaKesehatan* | *Text* | *Teks "Jenis Tenaga Kesehatan"* | *Label untuk field input jenis tenaga kesehatan.* |
| *Input_JenisTenagaKesehatan* | *Input Text Field* | *Placeholder "Jenis Tenaga Kesehatan"* | *Tempat pengguna (tenaga kesehatan) memasukkan jenis pekerjaan mereka.* |
| *Label_Lokasi* | *Text* | *Teks "Lokasi"* | *Label untuk field input lokasi.* |
| *Input_Lokasi* | *Input Text Field* | *Teks "Lokasi"* | *Tempat pengguna (tenaga kesehatan) memasukkan lokasi kerja mereka.* |
| *Label_KataSandi* | *Text* | *Teks "Kata Sandi"* | *Label untuk field kata sandi.* |
| *Input_KataSandi* | *Input Text Field* | *Placeholder "Kata Sandi"* | *Tempat pengguna (tenaga kesehatan) memasukkan kata sandi mereka. Tipe input "password".* |
| *Label_KonfirmasiKataSandi* | *Text* | *Teks "Konfirmasi Kata Sandi"* | *Label untuk field konfirmasi kata sandi.* |
| *Input_KonfirmasiKataSandi* | *Input Text Field* | *Placeholder "Konfirmasi Kata Sandi"* | *Tempat pengguna (tenaga kesehatan) memasukkan ulang kata sandi mereka untuk memastikan kecocokan dengan input sebelumnya. Tipe input "password".* |
| *Btn_Daftar* | *Button* | *"Daftar"* | *Jika diklik, akan memulai validasi data. Jika valid, akun tenaga kesehatan berhasil dibuat.* |
| *Link_Masuk* | *Link Text* | *"Sudah memiliki akun? Masuk"* | *Mengarahkan pengguna yang sudah memiliki akun ke masuk akun.* |

## 6.Y Rancangan Antarmuka Keseluruhan

Tuliskan daftar gambar seluruh antarmuka. Berikan ID unik untuk setiap tampilan dan gunakan ID yang sama pada subbab perancangan antarmuka masing-masing.

Tabel 6.Y. Rancangan Antarmuka Keseluruhan

| No | Tampilan Antarmuka |
| :--- | :--- |
| *[I-01]* | <img src="./assets/diagram/contoh-design.png" alt="Contoh Desain" width="400"> |
| *[I-02]* | *[Sisipkan gambar antarmuka I-02]* |
| *[I-XX]* | *[Sisipkan gambar antarmuka berikutnya]* |

<br>

---

# BAB 7: Matriks Kerunutan

Tabel 7.1. Matriks Kerunutan Kelas terhadap Use Case

| Kelas | Use Case Terkait |
| :--- | :--- |
| *[C01 - Pengguna]* | *[UC01 - Melakukan Registrasi Akun, UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Pengguna]* |
| *[C02 - Pelajar]* | *[UC01 - Melakukan Registrasi Akun, UC03 - Melakukan Daily Check-In, UC04 - Melihat Statistik dan Laporan Kondisi, UC05 - Menentukan Tenaga Kesehatan, UC06 - Mengajukan Jadwal Konsultasi, UC08 - Menerima dan Menindaklanjuti Notifikasi Darurat, UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Pengguna]* |
| *[C03 - OrangTuaWali]* | *[UC02 - Mengonfirmasi Registrasi Akun, UC04 - Melihat Statistik dan Laporan Kondisi, UC08 - Menerima dan Menindaklanjuti Notifikasi Darurat, UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Penggua]* |
| *[C04 - TenagarKesehatan]* | *[UC05 - Menentukan Tenaga Kesehatan, UC07 - Mengelola Pengajuan Konsultasi, UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Pengguna]* |
| *[C05 - RiwayatKesehatan]* | *[UC01 - Melakukan Registrasi Akun]* |
| *[C06 - CheckIn]* | *[UC03 - Melakukan Daily Check-In, UC04 - Melihat Statistik dan Laporan Kondisi]* |
| *[C07 - LaporanKesehatan]* | *[UC04 - Melihat Statistik dan Laporan Kondisi, UC08 - Menerima dan Menindaklanjuti Notifikasi Darurat]* |
| *[C08 - FasilitasKesehatan]* | *[UC05 - Menentukan Tenaga Kesehatan]* |
| *[C09 - JadwalKonsultasi]* | *[UC06 - Mengajukan Jadwal Konsultasi, UC07 - Mengelola Pengajuan Konsultasi]* |
| *[C10 - RegistrationPage]* | *[UC01 - Melakukan Registrasi Akun]* |
| *[C11 - AuthController]* | *[UC01 - Melakukan Registrasi Akun, UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Pengguna]* |
| *[C12 - KonfirmasiRegistrasiPage]* | *[UC02 - Mengonfirmasi Registrasi Akun]* |
| *[C13 - CheckInPage]* | *[UC03 - Melakukan Daily Check-In]* |
| *[C14 - CheckInController]* | *[UC03 - Melakukan Daily Check-In]* |
| *[C15 - NotifikasiPengingatController]* | *[UC03 - Melakukan Daily Check-In]* |
| *[C16 - ReportPage]* | *[UC04 - Melihat Statistik dan Laporan Kondisi]* |
| *[C17 - ReportController]* | *[UC04 - Melihat Statistik dan Laporan Kondisi]* |
| *[C18 - CariTenagaKesehatanPage]* | *[UC05 - Menentukan Tenaga Kesehatan]* |
| *[C19 - ProfilTenagaKesehatanPage]* | *[UC05 - Menentukan Tenaga Kesehatan, UC06 - Mengajukan Jadwal Konsultasi]* |
| *[C20 - TenagaKesehatanController]* | *[UC05 - Menentukan Tenaga Kesehatan]* |
| *[C21 - PengajuanKonsultasiPage]* | *[UC06 - Mengajukan Jadwal Konsultasi, UC07 - Mengelola Pengajuan Konsultasi]* |
| *[C22 - JadwalKonsultasiController]* | *[UC06 - Mengajukan Jadwal Konsultasi]* |
| *[C23 - KonsultasiController]* | *[UC07 - Mengelola Pengajuan Konsultasi]* |
| *[C24 - NotifikasiDaruratController]* | *[UC08 - Menerima dan Menindaklanjuti Notifikasi Darurat]* |
| *[C25 - LoginPage]* | *[UC09 - Masuk Akun Pengguna, UC10 - Keluar Akun Pengguna]* |
| *[C26 - ResetPasswordPage]* | *[UC09 - Masuk Akun Pengguna]* |
| *[C27 - PasswordController]* | *[UC09 - Masuk Akun Pengguna]* |
| *[C28 - DashboardPage]* | *[UC09 - Masuk Akun Pnegguna]* |
| *[C29 - SettingPage]* | *[UC10 - Keluar Akun Pengguna]* |
