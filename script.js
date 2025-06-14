function showSidebar() {
    document.getElementById('sidebar').style.transform = 'translateX(0)';
    document.getElementById('overlay').style.display = 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').style.transform = 'translateX(100%)';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const darkToggle = document.getElementById('dark-toggle');
    const body = document.body;

    // Cek preferensi dark mode dari localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        if (darkToggle) {
            darkToggle.checked = true;
            darkToggle.setAttribute('aria-checked', 'true');
        }
    } else {
        body.classList.remove('dark');
        if (darkToggle) {
            darkToggle.checked = false;
            darkToggle.setAttribute('aria-checked', 'false');
        }
    }

    // Toggle dark mode
    if (darkToggle) {
        darkToggle.addEventListener('change', function() {
            if (darkToggle.checked) {
                body.classList.add('dark');
                darkToggle.setAttribute('aria-checked', 'true');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark');
                darkToggle.setAttribute('aria-checked', 'false');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Sertif modal
    const sertifImgs = document.querySelectorAll('.sertif-img');
    const modal = document.getElementById('sertif-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.getElementById('close-modal');
    const modalDownload = document.getElementById('modal-download');

    if (sertifImgs && modal && modalTitle && modalImg && modalDesc && closeModal && modalDownload) {
        sertifImgs.forEach(img => {
            img.addEventListener('click', function() {
                modalTitle.textContent = img.getAttribute('data-title');
                modalImg.src = img.src;
                modalDesc.textContent = img.getAttribute('data-desc');
                modalDownload.href = img.src;
                modalDownload.setAttribute('download', img.getAttribute('data-title') || 'sertifikat');
                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Navbar hamburger toggle & close
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    // Toggle menu
    navbarToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        navbarMenu.classList.add('active');
    });

    // Klik di luar menu menutup menu
    document.addEventListener('click', function (e) {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});