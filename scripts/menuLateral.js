let menuLateral = document.querySelector("nav > ul");
let botaoMenu = document.getElementById("menuRetratil");
let tamanhoTela = window.screen.width;

function abrirMenu(){
    if(botaoMenu.checked){
        menuLateral.style.animation ="animacaoMenuON 1s linear forwards";
        
    }else{
        menuLateral.style.animation ="animacaoMenuOFF 1s linear forwards";
        botaoMenu.checked=false;
    }
}

function fecharMenuRedirect(caminho){
    if(botaoMenu.checked){
        menuLateral.style.animation ="animacaoMenuOFF 1s linear forwards";
        botaoMenu.checked=false;  
        setTimeout(() => {
            redirecionar(caminho);
        }, 1000);
    }else{
        redirecionar(caminho);
    }
}
function redirecionar(caminho){
    window.location.href=caminho;
}
