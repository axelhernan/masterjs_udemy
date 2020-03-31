// dom document object mode
'use strict'
function cambiacolor(color){
    caja.style.background = color;
}

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola"


console.log(caja);

// meter elementos dentro de una etiqueta 
var todoslosdivs = document.getElementsByTagName('div');
var contenidotexto = todoslosdivs[2]; //mostrar el contenido de una etiqueta exacta
contenidotexto.innerHTML = "boca la concha de tu madre"; //modificar el contenido de ese div exacto

var valor;

for(valor in todoslosdivs){
    if(typeof todoslosdivs[valor].textContent == 'string'){
        var parrafo =  document.createElement ("p");
        var texto = document.createTextNode(todoslosdivs[valor].textContent);
        parrafo.appendChild(texto); // append añade antes
        document.querySelector("#miseccion").prepend(parrafo); // prepend añade despues de la etiqueta
    }
}