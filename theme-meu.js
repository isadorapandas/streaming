function setThemeButton(icon) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerText = icon;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');

    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    setThemeButton(isLight ? '⚫' : '⚪');
}

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        setThemeButton('⚫');
    } else {
        document.body.classList.remove('light-mode');
        setThemeButton('⚪');
    }

    // Adicionar event listeners para sombras dinâmicas nos perfis
    const profiles = document.querySelectorAll('.profile');
    const shadowClasses = ['shadow-robin', 'shadow-estelar', 'shadow-ravena', 'shadow-mutano', 'shadow-ciborg'];

    profiles.forEach((profile, index) => {
        profile.addEventListener('mouseenter', () => {
            document.body.classList.add(shadowClasses[index]);
        });
        profile.addEventListener('mouseleave', () => {
            document.body.classList.remove(shadowClasses[index]);
        });
    });
});