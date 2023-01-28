let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    passaImagem();
},3000)

function passaImagem(){
    count++;
    if(count>6){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;

}