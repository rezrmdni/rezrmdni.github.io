function showSidebar() {
    document.getElementById('sidebar').style.transform = 'translateX(0)';
    document.getElementById('overlay').style.display = 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').style.transform = 'translateX(100%)';
    document.getElementById('overlay').style.display = 'none';
}

window.addEventListener('scroll', function() {
    var notes = document.getElementById('notes');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        notes.style.display = 'block';
    } else {
        notes.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-toggle');
    const body = document.body;

    // Load saved preference
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        toggle.checked = true;
        body.classList.add('dark');
        toggle.setAttribute('aria-checked', 'true');
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark');
            toggle.setAttribute('aria-checked', 'true');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            toggle.setAttribute('aria-checked', 'false');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sertifImgs = document.querySelectorAll('.sertif-img');
    const modal = document.getElementById('sertif-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.getElementById('close-modal');
    const modalDownload = document.getElementById('modal-download');

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
});