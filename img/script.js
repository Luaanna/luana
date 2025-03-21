document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
const opcoesDeAcessebilidade=document.getElementById('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click',function(){
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcoesDeAcessebilidade.classList.toggle('apresenta-lista');


const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)

})



const aumentaFonteBotao=document.getElementById('aumentar-fonte');
const diminuiFonteBotao=document.getElementById('diminui-fonte');

const alternaContraste=document.getElementById('alterna-contraste');

let tamanhoAtualFonte=1;

aumentaFonteBotao.addEventListener('click',function(){

tamanhoAtualFonte+=0.1;
document.body.style.fontSize='${tamanhoAtualFonte}rem'

})
diminuiFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte=0.1;
document.body.style.fontSize='$(tamanhoAtualFonte)rem'
})
alternaContraste.addEventListener('click', function(){

document.body.classList.toggle('alto-contraste')
})
})

scrollReveal().reveal('#inicio',{delay:500});
scrollReveal().reveal('#tropicalia',{delay:500});
scrollReveal().reveal('#galeria',{delay:500});
scrollReveal().reveal('#contato',{delay:500});