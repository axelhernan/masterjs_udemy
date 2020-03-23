// funciones texto js

//funciones de texto de busqueda 
'use strict'

var numero = 444;
var texto1 = "buenvenido al curso de javascript de victor";
var texto2 = "es un curso bueno";

var busqueda = texto1.indexOf("curso"); //busca la primera coincidencia
    busqueda = texto1.lastIndexOf("curso"); //busca la lastima coincidencia
    busqueda = texto1.search("curso"); // busca la o las palabras
    busqueda = texto1.match("curso"); // hace un array con las palabras

console.log(busqueda);