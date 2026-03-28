import { categories, profileCategories } from './data.js';
import { createCarousel } from './components/Carousel.js';
import { initProfileMenu } from './profileMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Inicializar menu de perfis
    initProfileMenu();

    const container = document.getElementById('main-content');
    const selectedProfile = nomePerfil || 'Robin';
    const categoriesToRender = profileCategories[selectedProfile] || categories;

    if (container) {
        categoriesToRender.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
