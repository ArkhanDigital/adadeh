// app.js

document.addEventListener('DOMContentLoaded', () => {
    const arkhanBtn = document.getElementById('arkhanBtn');
    const jaeminBtn = document.getElementById('jaeminBtn');
    const animatedText = document.querySelector('.animated-text'); // Pastikan ini terpilih dengan benar
    const buttonContainer = document.querySelector('.button-container');

    // Fungsi untuk tombol Arkhan
    if (arkhanBtn) {
        arkhanBtn.addEventListener('click', function() {
            this.classList.add('clicked'); 
            
            setTimeout(() => {
                this.classList.remove('clicked'); 
                
                // --- BAGIAN PENTING UNTUK DIPERIKSA ---
                if (animatedText) { // Pastikan elemen animatedText ditemukan
                    animatedText.textContent = 'Selamat! Sekarang Hazel cantiknya Arkhan!'; // **Ini yang akan mengubah teks**
                    animatedText.style.animation = 'none'; // Hentikan animasi agar teks tetap terlihat
                    animatedText.style.opacity = '1'; // Pastikan opasitasnya 1 (terlihat penuh)
                } else {
                    // Tambahan: Pesan alert jika elemen teks tidak ditemukan (untuk debugging)
                    alert('Selamat! Sekarang Hazel cantiknya Arkhan!'); 
                    console.error('Elemen teks dengan kelas .animated-text tidak ditemukan!');
                }
                // --- AKHIR BAGIAN PENTING ---

                // Sembunyikan tombol Jaemin dan Arkhan
                if (jaeminBtn) {
                    jaeminBtn.style.display = 'none';
                }
                this.style.display = 'none'; 

                console.log('Arkhan selected!');
            }, 300); 
        });
    }

    // Fungsi untuk tombol Jaemin (berpindah saat diklik)
    if (jaeminBtn && buttonContainer) {
        jaeminBtn.addEventListener('click', function() {
            this.classList.add('clicked'); 
            
            setTimeout(() => {
                this.classList.remove('clicked'); 

                const containerRect = buttonContainer.getBoundingClientRect();
                const buttonRect = this.getBoundingClientRect(); 

                const newX = Math.random() * (containerRect.width - buttonRect.width);
                const newY = Math.random() * (containerRect.height - buttonRect.height);

                this.style.transform = `translate(${newX}px, ${newY}px)`;

                console.log("Jaemin is moving again!"); 
            }, 150); 
        });
    }
});
