
// 11 condicional swich
// nos permite hacer muchas condiciones de manera organizada

'use strict'

var edad = 555;
var imprime = "";

switch(edad){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad" ;
    break;

    case 27:
        imprime = "ya sos un adulto";
    break;

    case 40:
        imprime = "crisis de los 40";
    break;

    default:
        imprime = "tu edad es neutra";
    break;
}

console.log(imprime);
