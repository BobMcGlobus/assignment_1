var i = 0;
var txt = 'orem ipsum dump type stuff';

function typer() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typer, 200);
    }else{
        document.getElementById("typing").innerHTML = "L";
        i = 0;
        setTimeout(typer, 200);
    }
}
