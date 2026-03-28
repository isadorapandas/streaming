document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.link-perfil');

	perfilLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			// Encontrar o elemento de nome e a imagem dentro do perfil clicado
			const item = link.closest('.profile');
			if (!item) return;

			const nomeEl = item.querySelector('.nome-perfil');
			const imgEl = item.querySelector('img');

			const nome = nomeEl ? nomeEl.textContent.trim() : '';
			let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

			// Ajusta caminho relativo para que funcione a partir de catalogo/catalogo.html
			// Se for um caminho relativo como "assets/1.webp", prefixa "../" para apontar ao root
			if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
				imgSrc = '../' + imgSrc;
			}

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				localStorage.setItem('perfilAtivoImagem', imgSrc);
			} catch (e) {
				// Silenciar erros de localStorage (ex: modo privado)
				console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
			}

			// Deixar o link navegar normalmente para catalogo.html
		});
	});
});

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
