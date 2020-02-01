
// 04 let and var
// diferencia let y var:el alcance de la variable y como actuan con los bloques, var define una variable global y let solo en bloque

// prueba con var 

'use strict'
var numero = 40;
console.log(numero); // valor 40
if (true){
     var numero = 50;
     console.log(numero); // valor 50
}
console.log(numero); // valor 50


// prueba con let actua a nivel de bloque
var texto = "curso js por robles"
console.log(texto); // valor "
if(true){
    let texto = "curso js axelin";
    console.log(texto); 
}
console.log(texto);
