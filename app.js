// app.js

// Pastikan DOM sudah sepenuhnya dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen-elemen HTML
    const arkhanBtn = document.getElementById('arkhanBtn');
    const jaeminBtn = document.getElementById('jaeminBtn');
    const animatedText = document.querySelector('.animated-text');
    const buttonContainer = document.querySelector('.button-container');

    // Penanganan klik untuk tombol Arkhan
    // Memastikan tombol Arkhan ada sebelum menambahkan event listener
    if (arkhanBtn) {
        arkhanBtn.addEventListener('click', function() {
            // Tambahkan kelas untuk animasi klik
            this.classList.add('clicked'); 
            
            // Atur waktu tunggu agar animasi klik selesai sebelum aksi selanjutnya
            setTimeout(() => {
                // Hapus kelas animasi klik
                this.classList.remove('clicked'); 
                
                // Ubah teks utama
                if (animatedText) {
                    animatedText.textContent = 'Selamat! Sekarang Hazel cantiknya Arkhan!'; 
                    // Hentikan animasi fade in/out pada teks
                    animatedText.style.animation = 'none'; 
                    // Pastikan teks terlihat penuh
                    animatedText.style.opacity = '1'; 
                }

                // Sembunyikan tombol Jaemin dan Arkhan setelah pilihan dibuat
                if (jaeminBtn) {
                    jaeminBtn.style.display = 'none';
                }
                this.style.display = 'none'; // Sembunyikan tombol Arkhan itu sendiri

                console.log('Arkhan selected!'); // Pesan konsol untuk debugging
            }, 300); // Durasi animasi klik (0.3 detik)
        });
    }

    // Penanganan klik untuk tombol Jaemin (yang akan bergerak)
    // Memastikan tombol Jaemin dan container-nya ada
    if (jaeminBtn && buttonContainer) {
        jaeminBtn.addEventListener('click', function() {
            // Tambahkan kelas untuk animasi klik
            this.classList.add('clicked'); 
            
            // Atur waktu tunggu agar animasi klik selesai sebelum tombol bergerak
            setTimeout(() => {
                // Hapus kelas animasi klik
                this.classList.remove('clicked'); 

                // Dapatkan dimensi container dan tombol untuk menghitung posisi acak
                const containerRect = buttonContainer.getBoundingClientRect();
                const buttonRect = this.getBoundingClientRect(); 

                // Hitung posisi acak baru agar tombol tetap di dalam container
                // `Math.random()` menghasilkan angka antara 0 dan 1
                // Kita kalikan dengan lebar/tinggi container dikurangi lebar/tinggi tombol
                // untuk memastikan tombol tidak keluar batas
                const newX = Math.random() * (containerRect.width - buttonRect.width);
                const newY = Math.random() * (containerRect.height - buttonRect.height);

                // Terapkan posisi baru menggunakan `transform: translate()`
                // Ini umumnya lebih baik untuk animasi dibanding `left` dan `top`
                this.style.transform = `translate(${newX}px, ${newY}px)`;

                console.log("Jaemin is moving again!"); // Pesan konsol untuk debugging
            }, 150); // Durasi animasi klik (0.15 detik), lebih cepat agar responsif
        });
    }
});
