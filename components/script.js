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

        // Adicionar evento de clique após o conteúdo ser carregado
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
    })
    .catch(error => {
        document.getElementById('content').innerHTML = `<p>${error.message}</p>`;
    });
}

// Página inicial por padrão
window.onload = function() {
    loadPage('components/pages/home.html');
};