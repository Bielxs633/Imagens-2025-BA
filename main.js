//? Faz com que o navegardor não te deixe errar coisas simples (ex: não definir uma variável)
"use strict"

const botaoTrocarImagem = document.getElementById('trocar-img')
let numero = 0
let url = ""

function trocarImagem(){
    if(numero === 12){
        numero = 0
    }
    numero++
    url = `url(./imgs/img${numero}.png)`
    document.documentElement.style.setProperty('--imagem-fundo' , url)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)