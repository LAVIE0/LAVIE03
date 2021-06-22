
var modal = document.querySelectorAll('a[href^="#"]');
var div = document.querySelector('.modal-overlay');

function adicionarClasse(){
    div.classList.add('ativo');
    }
modal[0].addEventListener('click', adicionarClasse)
var div2 = document.querySelector('.modal-overlay1');

function adicionarClasse1(){
    div2.classList.add('ativo')
}
modal[1].addEventListener('click', adicionarClasse1)

var div3 = document.querySelector('.modal-overlay2');

function adicionarClasse2(){
div3.classList.add('ativo');
}
function sairModal(){
    div.classList.remove('ativo');   
    div2.classList.remove('ativo');
    div3.classList.remove('ativo');
}
modal[2].addEventListener('click', adicionarClasse2)


function entrouMouse(){
    let imagens = document.querySelector("#img01").src = "img/hover1.svg";
    let texto = document.querySelector("#p01").innerHTML = "Converse com a madrinha";
}
function saiuMouse(){
    let imagens = document.querySelector("#img01").src = "img/Asset 2.svg";
    let texto = document.querySelector("#p01").innerHTML = " ";
}
function entrouMouse01(){
    let imagens = document.querySelector("#img02").src = "img/hover2.svg";
    let texto = document.querySelector("#p02").innerHTML = "Solicitar troca de madrinha";
}
function saiuMouse01(){
    let imagens = document.querySelector("#img02").src = "img/Asset 3.svg";
    let texto = document.querySelector("#p02").innerHTML = " ";
}




