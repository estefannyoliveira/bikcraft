//ativar links do menu
const menuLinks = document.querySelectorAll('.menu-item a');

function linkAtivo(link) {
    const menuHref = link.href;
    const linkLocal = document.location.href;

    if (linkLocal.includes(menuHref)) {
        link.classList.add('linkAtivo');
    }
}

menuLinks.forEach(linkAtivo);

//ativar checked orcamento

//document.location.search busca parametros da url local
//classe URLSearchParams transforma os parametros em uma "array"
const parametroUrl = new URLSearchParams(document.location.search);

function ativarBotao(url) {
    const elementoInput = document.getElementById(url);

    if (elementoInput) {
        elementoInput.checked = true;
    }
}

parametroUrl.forEach(ativarBotao);

//perguntas frequentes

const perguntas = document.querySelectorAll('.faq button');

function ativarPergunta(event) {
    const eventoClique = event.currentTarget;
    const perguntaClicada = eventoClique.getAttribute('aria-controls');
    const resposta = document.getElementById(perguntaClicada);

    resposta.classList.toggle('ativo');
    const perguntaAtiva = resposta.classList.contains('ativo');
    eventoClique.setAttribute('aria-expanded', perguntaAtiva)
}

function cliquePergunta(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(cliquePergunta);