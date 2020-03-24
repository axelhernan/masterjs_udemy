// for each

'use strict'

var nombre = "Axelin hernan";
var nombres = ["Axel Hernan", "Roni Ezequiel", "Ramon Antonio", 52, true];
var lenguajes = new Array("php", "js", "go", "java");

document.write("<h1>lenguajes de programacion del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>" + indice + " " + elemento + "</li>");
});



document.write("</ul>")