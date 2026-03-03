// Intersection Observer dla animacji wjazdu elementów
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Obserwuj wszystkie elementy z klasą fade-in-up
document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Smooth scroll do sekcji
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



// Animacja przycisku na hover
document.querySelectorAll('.custom-btn, .custom-btn-outline').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dodaj aktualny rok do footera
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2026', year);
    }
});

// Preload animacji
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});