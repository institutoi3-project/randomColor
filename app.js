let boton= document.querySelector("button");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

function aleator(min, max){
    return Math.floor( Math.random()*(max-min) +min );
}

function generarFondoAleatorio(){
    let r= aleator(0,255)
    let g= aleator(0,255)
    let b= aleator(0,255)
    color2.textContent = `rgb(${r}, ${g}, ${b})`
    color1.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    document.querySelector("main").style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

boton.addEventListener("click", generarFondoAleatorio)