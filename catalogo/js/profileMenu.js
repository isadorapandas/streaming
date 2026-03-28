import { profiles } from './data.js';

export function initProfileMenu() {
    const profileMenuBtn = document.getElementById('profile-menu-btn');
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
    const currentProfile = localStorage.getItem('perfilAtivoNome') || 'Robin';

    if (!profileMenuBtn || !profileDropdownMenu) return;

    // Toggle menu ao clicar no botão
    profileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdownMenu.classList.toggle('show');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!profileMenuBtn.contains(e.target) && !profileDropdownMenu.contains(e.target)) {
            profileDropdownMenu.classList.remove('show');
        }
    });

    // Renderizar perfis no menu
    renderProfileMenu(currentProfile);
}

function renderProfileMenu(currentProfile) {
    const profileDropdownMenu = document.getElementById('profile-dropdown-menu');
    const otherProfiles = profiles.filter(p => p.name !== currentProfile);

    profileDropdownMenu.innerHTML = '';

    otherProfiles.forEach(profile => {
        const profileItem = document.createElement('div');
        profileItem.className = 'profile-item';
        profileItem.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}">
            <span>${profile.name}</span>
        `;

        profileItem.addEventListener('click', () => {
            switchProfile(profile.name, profile.image);
        });

        profileDropdownMenu.appendChild(profileItem);
    });
}

function switchProfile(profileName, profileImage) {
    try {
        localStorage.setItem('perfilAtivoNome', profileName);
        localStorage.setItem('perfilAtivoImagem', profileImage);
    } catch (e) {
        console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
    }

    // Recarregar a página para aplicar o novo perfil
    location.reload();
}
