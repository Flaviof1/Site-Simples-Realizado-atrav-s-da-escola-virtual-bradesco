'use strict'

// Seleciona o botão
const switcher = document.querySelector('.btn');

// Adiciona um ouvinte de evento para o clique no botão
switcher.addEventListener('click', function() {
    // Alterna a classe do corpo do documento entre 'dark-theme' e 'light-theme'
    document.body.classList.toggle('dark-theme');

    // Verifica se a classe atual do corpo do documento é 'light-theme' ou 'dark-theme'
    if (document.body.classList.contains('dark-theme')) {
        // Se for 'dark-theme', define o texto do botão como 'Light'
        switcher.textContent = 'Light';
    } else {
        // Se for 'light-theme', define o texto do botão como 'Dark'
        switcher.textContent = 'Dark';
    }
});



