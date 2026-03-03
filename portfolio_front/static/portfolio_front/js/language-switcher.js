// Language Switcher
const SUPPORTED_LANGUAGES = ['en', 'de'];
const DEFAULT_LANGUAGE = 'en';

// Pobierz zapisany język z localStorage lub użyj domyślny
function getSavedLanguage() {
    const saved = localStorage.getItem('portfolio-language');
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
}

// Ustaw język
function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    
    localStorage.setItem('portfolio-language', lang);
    updateLanguage(lang);
    updateActiveButton(lang);
}

// Zaktualizuj wszystkie teksty na stronie
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-de]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            // Sprawdź czy element zawiera HTML
            if (text.includes('<') && text.includes('>')) {
                element.innerHTML = text;
            } else {
                // Dla elementów z ikonami i tekstem
                if (element.querySelector('.btn-text')) {
                    element.querySelector('.btn-text').textContent = text;
                } else {
                    element.textContent = text;
                }
            }
        }
    });
}

// Zaktualizuj aktywny przycisk
function updateActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            btn.style.background = 'linear-gradient(135deg, #9d4edd 0%, #ff006e 100%)';
        } else {
            btn.style.background = 'rgba(157, 78, 221, 0.5)';
        }
    });
}

// Dodaj event listenery do przycisków
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Ustawić język przy załadowaniu strony
    const currentLang = getSavedLanguage();
    updateLanguage(currentLang);
    updateActiveButton(currentLang);
});