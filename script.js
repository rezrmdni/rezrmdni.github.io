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