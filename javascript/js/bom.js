// bom - browser objest model
// como puedo trabajar con los elementos del navegador

'use strict'
function getbom(){
    
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href);
}

function redireccionar(url){
    window.location.href = url;
}

function abrirventana(url){
    window.open(url,"", "width=300,height=300")
}

getbom();