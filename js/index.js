
        // Inisialisasi AOS
        AOS.init({
            duration: 800, // Durasi animasi dalam milidetik
            once: true,    // Animasi hanya berjalan sekali
        });

        // Inisialisasi Lucide Icons
        lucide.createIcons();

        // Fungsi untuk toggle menu mobile
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- Sticky Contact Float Logic ---
        const contactToggleButton = document.getElementById('contact-toggle-button');
        const expandedLinks = document.getElementById('expanded-links');
        const iconOpen = document.getElementById('contact-icon-open');
        const iconClose = document.getElementById('contact-icon-close');

        contactToggleButton.addEventListener('click', () => {
            expandedLinks.classList.toggle('invisible');
            expandedLinks.classList.toggle('opacity-0');
            expandedLinks.classList.toggle('translate-y-4');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
            iconOpen.classList.toggle('rotate-180');
            iconClose.classList.toggle('rotate-180');
        });
        
        lucide.createIcons();
       
         function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Jarak dari bawah layar sebelum elemen muncul

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
            } else {
        reveals[i].classList.remove('active'); // Hapus jika ingin animasi berulang saat scroll ke atas
        }
        }
     }

         window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Panggil sekali saat load untuk elemen yang sudah terlihat

  // --- JAVASCRIPT YANG DISERDERHANAKAN ---
        document.addEventListener('DOMContentLoaded', function() {
            const langSelector = document.querySelector('.language-selector');
            const langBtn = document.querySelector('.lang-btn');
            const langDropdown = document.querySelector('.lang-dropdown');

            // Skrip ini HANYA untuk menampilkan dan menyembunyikan dropdown.
            // Navigasi halaman ditangani langsung oleh atribut href di tag <a>.
            
            // Buka/tutup dropdown saat tombol diklik
            langBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // Mencegah klik menyebar ke window
                langDropdown.classList.toggle('show');
                langSelector.classList.toggle('open');
            });

            // Tutup dropdown jika mengklik di luar area
            window.addEventListener('click', () => {
                if (langDropdown.classList.contains('show')) {
                    langDropdown.classList.remove('show');
                    langSelector.classList.remove('open');
                }
            });
        });

        