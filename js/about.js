// Fade in saat halaman dimuat
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Fade in saat scroll
document.addEventListener('DOMContentLoaded', () => {
    // Target semua elemen dengan class 'content-section'
    const sections = document.querySelectorAll('.content-section');

    // Tambahkan class 'fade-in' ke setiap section
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Setup Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2 // Efek akan muncul saat 20% elemen terlihat
    });

    // Terapkan observer ke semua section
    sections.forEach(section => {
        observer.observe(section);
    });
});