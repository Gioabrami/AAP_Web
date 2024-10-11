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
    })
    .catch(error => {
        document.getElementById('content').innerHTML = `<p>${error.message}</p>`;
    });
}

// Página inicial por padrão
window.onload = function() {
    loadPage('components/pages/home.html');
};