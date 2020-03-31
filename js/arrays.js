// arrays, arreglos o matrices
// es una coleccion de datos

'use strict'

var nombre = "Axelin hernan";
var nombres = ["Axel Hernan", "Roni Ezequiel", "Ramon Antonio", 52, true];
var lenguajes = new Array("php", "js", "go", "java");

// crear un ul / li con array 

document.write("<h1>lenguajes de programacion del 2018</h1>");
document.write("<ul>")
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>")

}
document.write("</ul>")

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

// array's multiples
// son arrays dentro de otros arrays, dentro de uno pued
//operaciones con array 
var categorias = ['accion', 'terror', 'commedia'];
var peliculas = ['la verdad duele', 'la vida es bella', 'gran torino'];
var cine = [categorias, peliculas];

// ordenar un array
peliculas.sort();
peliculas.reverse();
console.log(peliculas);

var indice = peliculas.indexOf('gran torino');

if(indice > 1){
    peliculas.splice(indice, 1);
}

//convierte un array en texto 
var peliculas_string = peliculas.join();
console.log(peliculas_string)

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);


//busquedas
var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "php");

var precios = [20, 30, 40, 50, 60];
var busqueda3 = precios.some( precios => precios >= "90" ); //cumpla una condicion concreta (mayuor o menor)


console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);