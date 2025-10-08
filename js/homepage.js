document.addEventListener('DOMContentLoaded', function () {
    // Fade in saat halaman dimuat
    document.body.classList.add('loaded');

    // Inisialisasi observer untuk scroll effect
    const fadeElements = document.querySelectorAll('.fade-in, .latest-products, .collection-showcase, .product-item');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Terapkan class fade-in dan observer ke semua elemen target
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Smooth scroll behavior untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});