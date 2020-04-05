// ejercicio dom

'use strict'

// crear un formulario y largar los datos a un contenedor

var formulario = document.querySelector('#formulario');
var boxdashed = document.querySelector('.dashed');
boxdashed.style.display = "none";

formulario.addEventListener('submit', function(){
    console.log("evento submit capturado");    

    // variables
    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = parseInt(document.querySelector('#edad').value);
    

    if(nombre.trim() == ''){
        document.querySelector('#errornombre').innerHTML = "el nombre no es valido";
        return false;
    }else{
        document.querySelector('#errornombre').style.display = "none";
    }

    if(apellidos.trim() == ''){
        alert("El apellido no es valido");
        return false;
    }

    if(edad == '' || edad <= 0 || isNaN(edad)){
        alert("El asdasd no es valido");
        return false;
    }
    


    var datosusuario = [nombre, apellidos, edad];
    var indice;

    //acciones
    boxdashed.style.display = "block";

    //largar los datos a un contenedor
    for(indice in datosusuario){
        var parrafo = document.createElement("p");    
        parrafo.append(datosusuario[indice]);
        boxdashed.append(parrafo);
    }
});
