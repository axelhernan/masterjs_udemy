//local storage
// podes guardar info en la sesion de la web

'use strict'

// comprobar si esta disponible el local storage en el navegador

if(typeof(Storage) !== 'undefined'){
    console.log('localstorage disponible');
}else{
    console.log('localstorage incompatible');
}

// guardar datos en el local storage
localStorage.setItem("titulo", "curso de javascript de axelin");

// recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos, tengo que convertir el json en string
var usuario = {
    nombre: "Axel hernan",
    apellido: "valdez",
    web: "axel@encender.com"
};
localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" " + userjs.nombre + " " + userjs.apellido);

//borrar datos
localStorage.clear();