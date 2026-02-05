## Blog Project – React + Vite

Proyek ini adalah aplikasi blog sederhana yang mengambil data dari Notion API menggunakan React + Vite.  
Dokumen ini ditujukan untuk student yang ingin menjalankan proyek ini di komputer lokal.

---

### 1. Prasyarat

- **Node.js** versi terbaru LTS (disarankan \>= 18)
- **npm** (otomatis ter-install bersama Node.js)
- Koneksi internet untuk mengambil data dari Notion API

Untuk cek versi:

```bash
node -v
npm -v
```

---

### 2. Clone repository

```bash
git clone <URL_REPO_KAMU>
cd blog-project
```

Pastikan nama folder yang kamu masuki sesuai dengan nama repo di GitHub (misalnya `blog-project`).

---

### 3. Instalasi dependency

Di dalam folder proyek, jalankan:

```bash
npm install
```

Perintah ini akan meng-install semua library yang dibutuhkan agar proyek bisa dijalankan.

---

### 4. Konfigurasi environment variable

Project ini menggunakan Notion API (melalui `notion-api.splitbee.io`) dan membutuhkan konfigurasi environment:

1. **Buat file `.env.local` di root proyek**  
   Kamu bisa menyalin dari contoh:

   ```bash
   cp .env.example .env.local
   ```

2. Setelah itu, buka file `.env.local` dan pastikan isinya seperti berikut:

   ```bash
   VITE_NOTION_API_BASE_URL=https://notion-api.splitbee.io/v1
   VITE_NOTION_BLOG_TABLE_ID=your_notion_blog_table_id
   ```

3. Ganti `your_notion_blog_table_id` dengan **ID tabel Notion** yang kamu gunakan (kalau memakai Notion table milik pengajar, isi dengan ID yang diberikan).

> **Catatan penting:**  
> - File `.env.local` **jangan di-commit** ke Git, dan sudah di-ignore di `.gitignore`.  
> - Setiap kali kamu mengubah file `.env.local`, sebaiknya **restart dev server** Vite.

---

### 5. Menjalankan proyek di lokal

Setelah dependency ter-install dan `.env.local` sudah diisi:

```bash
npm run dev
```

Kemudian buka URL yang tampil di terminal, biasanya:

```text
http://localhost:5173
```

Kamu sekarang seharusnya bisa melihat halaman home blog dan daftar artikel yang diambil dari Notion.

---

### 6. Struktur folder singkat

- `src/components` : berisi komponen UI seperti `Header`, `BlogList`, dan `Loading`.
- `src/pages` : berisi halaman utama (`Home`) dan halaman detail blog (`Blog`).
- `src/services/blog.service.js` : fungsi untuk memanggil Notion API menggunakan konfigurasi dari environment variable.

---

### 7. Tips troubleshooting

- **Blank page / error di console browser**
  - Cek apakah `.env.local` sudah dibuat dan diisi dengan benar.
  - Pastikan `VITE_NOTION_BLOG_TABLE_ID` berisi ID tabel Notion yang valid.
- **Perubahan env tidak terdeteksi**
  - Matikan dev server (`Ctrl + C` di terminal), lalu jalankan lagi `npm run dev`.

Jika masih mengalami masalah, screenshot error di terminal atau di browser console, lalu diskusikan dengan pengajar/mentor.
