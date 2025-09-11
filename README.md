# Proyek API Ulasan Film - Kelompok 5

## Anggota Kelompok
- Salam Rizqi Mulia
- Moh. Jevon Attaillah
- Achmad Alfarizy Satriya Gautama

## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film dari Studio Ghibli, dengan data film yang direferensikan dari Ghibli API publik.

## Cara Menjalankan Proyek
1. Clone repository ini : `git clone https://github.com/salambaee/api-ulasan-film.git`
2. Masuk ke direktori : `cd api-ulasan-film`
3. Install dependensi : `npm install`
4. Jalankan server : `node server.js`
Server akan berjalan di `http://localhost:3300`

## Daftar Endpoint
- `GET /status`: Cek status API
- `GET /reviews`: Mengambil semua ulasan
- `GET /reviews/:id`: Mengambil ulasan spesifik
- `POST /reviews/:id`: Memperbarui ulasan
- `DELETE /reviews/:id`: Menghapus ulasan