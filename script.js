const botao = document.querySelector(".navegacao__botao--responsiva");
const menu = document.querySelector(".navegacao__listagem--responsiva");
let estaAberto = false;

botao.addEventListener("click", dropdown);

function dropdown () {
    if (estaAberto == false) {
        menu.style.display = "block";
        estaAberto = true;
    } else {
       menu.style.display = "none";
       estaAberto = false;
    }  
};
