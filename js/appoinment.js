// Inisialisasi AOS
      AOS.init({
        once: true, // Animasi hanya berjalan sekali
      });

      // --- Mobile Menu Toggle ---
      const mobileMenuButton = document.querySelector('[data-el="mobile-menu-button"]');
      const mobileMenu = document.querySelector('[data-el="mobile-menu"]');

      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // --- Dropdown Logic (untuk semua dropdown) ---
      const dropdowns = document.querySelectorAll('[data-el="dropdown"]');

      dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('[data-el="dropdown-button"]');
        const menu = dropdown.querySelector('[data-el="dropdown-menu"]');
        const arrow = button.querySelector('svg');

        button.addEventListener('click', (event) => {
          event.stopPropagation();
          // Tutup dropdown lain yang mungkin terbuka
          dropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                  otherDropdown.querySelector('[data-el="dropdown-menu"]').classList.add('hidden');
                  otherDropdown.querySelector('[data-el="dropdown-button"] svg')?.classList.remove('rotate-180');
              }
          });
          // Toggle dropdown yang diklik
          menu.classList.toggle('hidden');
          arrow?.classList.toggle('rotate-180');
        });
      });

      // Klik di luar dropdown untuk menutupnya
      window.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
          dropdown.querySelector('[data-el="dropdown-menu"]').classList.add('hidden');
          dropdown.querySelector('[data-el="dropdown-button"] svg')?.classList.remove('rotate-180');
        });
      });