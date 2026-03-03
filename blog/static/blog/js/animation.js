// interaktywne animacje
document.addEventListener('DOMContentLoaded', function() {
    // Pulsujący efekt na hover
    const floatItems = document.querySelectorAll('.float-item');
    
    floatItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.3) rotate(360deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.animation = '';
            this.style.transform = '';
        });
    });

    // klikniecie na tekst
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactSection.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }

    // scroll
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.addEventListener('mousedown', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    contentWrapper.addEventListener('mouseup', function() {
        this.style.filter = '';
    });
});