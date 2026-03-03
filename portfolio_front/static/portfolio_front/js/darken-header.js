document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const header = document.querySelector('header.masthead');
        if (header) {
            // Nakładaj ciemną warstwę na tło bez wpływu na tekst
            header.style.transition = 'background-color 2s ease-in';
            header.style.backgroundBlendMode = 'multiply';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    }, 500); // 1500 milisekund = 1.5 sekundy (pół sekundy przed napisem)
});