document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box-hidden');
    
    serviceBoxes.forEach(box => {
        // Domyślnie ukryj paragraf
        const paragraph = box.querySelector('p.service-description');
        if (paragraph) {
            paragraph.style.opacity = '0';
            paragraph.style.height = '0';
            paragraph.style.overflow = 'hidden';
            paragraph.style.margin = '0';
        }
        
        // Przy wjechaniu myszą - pokaż tekst
        box.addEventListener('mouseenter', function() {
            const p = this.querySelector('p.service-description');
            if (p) {
                p.style.opacity = '1';
                p.style.height = 'auto';
                p.style.marginBottom = '0';
            }
        });
        
        // Przy wyjechaniu myszą - ukryj tekst
        box.addEventListener('mouseleave', function() {
            const p = this.querySelector('p.service-description');
            if (p) {
                p.style.opacity = '0';
                p.style.height = '0';
                p.style.overflow = 'hidden';
                p.style.margin = '0';
            }
        });
    });
});