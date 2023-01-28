let menuLateral = document.querySelector("nav > ul");
let botaoMenu = document.getElementById("menuRetratil");

function abrirMenu(){
    if(botaoMenu.checked){
        menuLateral.style.animation ="animacaoMenuON 1s ease-in-out 0s 1 normal forwards";
        
    }else{
        menuLateral.style.animation ="animacaoMenuOFF 1s ease-in-out 0s 1 normal forwards";
        botaoMenu.checked=false;
    }
}

function fecharMenuRedirect(caminho){
    if(botaoMenu.checked){
        menuLateral.style.animation ="animacaoMenuOFF 1s ease-in-out 0s 1 normal forwards";
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
