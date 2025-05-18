# EduBot - Chatbot Sederhana

Proyek chatbot sederhana dengan frontend HTML dan backend Node.js + Express + MongoDB.

## Fitur
- Input pertanyaan dari user
- Respon dummy dari bot
- Simpan percakapan ke database MongoDB

## Cara Jalankan
1. Clone repo ini
2. Jalankan `npm install`
3. Buat file `.env` dan isi:
   ```
   MONGO_URI=mongodb://localhost:27017/chatbot
   ```
4. Jalankan backend:
   ```
   npm start
   ```
5. Buka `client/index.html` di browser
