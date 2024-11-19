function loadPage(page) {
    fetch(page)
    .then(response => {
        if (!response.ok) {
            throw new Error('Página não encontrada');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('content').innerHTML = data;

        const buttons = document.querySelectorAll('.toggle-button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetDiv = document.getElementById(targetId);
                if (targetDiv.classList.contains('hidden')) {
                    targetDiv.classList.remove('hidden');
                } else {
                    targetDiv.classList.add('hidden');
                }
            });
        });

        const themeButton = document.getElementById('mudar-tema');
        themeButton.addEventListener('click', toggleTheme);

    })
    .catch(error => {
        document.getElementById('content').innerHTML = `<p>${error.message}</p>`;
    });
}

function toggleTheme() {
    const root = document.documentElement;
    const themeIcon = document.getElementById('theme');
    const isDarkMode = root.style.getPropertyValue('--bg-color') === '#505050';

    if (isDarkMode) {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--txt-color', '#000000');
        root.style.setProperty('--header-color', '#b6b6b6');
        root.style.setProperty('--bg-alternative-color', '#505050');
        root.style.setProperty('--txt-alternative-color', '#e9e9e9');
        root.style.setProperty('--bg-destaque', '#1302fd');
        root.style.setProperty('--bg-destaque2', '#0b00a0');
        root.style.setProperty('--txt-destaque', '#51e2f5');
        root.style.setProperty('--icon-color', 'invert(0)');

        themeIcon.src = 'components/images/lightbulb.svg';
        themeIcon.alt = 'Mudar para tema escuro';

    } else {
        root.style.setProperty('--bg-color', '#505050');
        root.style.setProperty('--txt-color', '#e9e9e9');
        root.style.setProperty('--header-color', '#333');
        root.style.setProperty('--bg-alternative-color', '#ffffff');
        root.style.setProperty('--txt-alternative-color', '#000000');
        root.style.setProperty('--bg-destaque', '#4f9e00');
        root.style.setProperty('--bg-destaque2', '#418100');
        root.style.setProperty('--txt-destaque', '#90f036');
        root.style.setProperty('--icon-color', 'invert(1)');

        themeIcon.src = 'components/images/lightbulb-fill.svg';
        themeIcon.alt = 'Mudar para tema claro';
    }
}

window.onload = function() {
    loadPage('components/pages/home.html');
};