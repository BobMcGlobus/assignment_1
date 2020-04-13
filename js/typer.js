
const text= document.querySelector('.billo');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent ='';
for(let p=0; p < splitText.length; p++){
text.innerHTML += '<span>' + splitText[p] + '</span>';
}
let char =0;
let timer = setInterval(onTick, 60);
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length){
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer=null;
    setTimeout(typer, 1000);
}




var i = 0;
var txt = 'Lorem ipsum dump type stuff';

function typer() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typer, 200);
    }else{
        document.getElementById("typing").innerHTML = "";
        i = 0;
        setTimeout(typer, 200);
    }
}
