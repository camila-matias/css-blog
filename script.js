const botaoMenu = document.querySelector(".navegacao__botao--responsiva");
const listaMenu = document.querySelector(".navegacao__listagem--responsiva");
let menuAberto = false;

botaoMenu.addEventListener("click", mudarMenu);

function mudarMenu () {
    if (menuAberto == false) {
        listaMenu.style.display = "block";
        menuAberto = true;
    } else {
       listaMenu.style.display = "none";
       menuAberto = false;
    }  
};
