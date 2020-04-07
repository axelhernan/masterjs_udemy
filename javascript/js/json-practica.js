// json javascript objet notation

'use strict'

var pelicula = {
    titulo: 'batman vs superman',
    year: '2017',
    pais: 'Estados unidos'
};

var peliculas = [{
    titulo: 'la verdad duele',
    year: '2016',
    pais: 'Francia'
}, pelicula];

var caja_peliculas = document.querySelector("#peliculas");
var index;

for(index in peliculas){
    var paragraph = document.createElement("p");
    paragraph.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(paragraph)
}