"use strict";

const botaoTrocarImagem = document.getElementById('trocar-img');
const inputImagem = document.getElementById('img');
let numero = 0;
let url = "";

// Função para trocar imagem ao clicar no botão
function trocarImagem() {
    if (numero === 9) {
        numero = 0;
    }
    numero++;
    url = `url(./imgs/img${numero}.png)`;
    document.documentElement.style.setProperty('--imagem-fundo', url);
}

// Função para trocar imagem baseado na pesquisa
function trocarImagemPorPesquisa() {
    const pesquisa = parseInt(inputImagem.value);
    if (pesquisa >= 1 && pesquisa <= 9) {
        numero = pesquisa - 1; // Ajusta para o índice da imagem (0-8)
        url = `url(./imgs/img${pesquisa}.png)`;
        document.documentElement.style.setProperty('--imagem-fundo', url);
    } else {
        alert("Número de imagem inválido. Por favor, digite um número entre 1 e 9.");
    }
}

// Evento de clique no botão para trocar a imagem
botaoTrocarImagem.addEventListener('click', trocarImagem);

// Evento de pressionamento da tecla Enter no campo de pesquisa
inputImagem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        trocarImagemPorPesquisa();
    }
});
