// 03 uso estricto

/*
'use strict'
var pais = "Argentina"
console.log(pais)
*/

// 04 let and var
// diferencia let y var:el alcance de la variable y como actuan con los bloques, var define una variable global y let solo en bloque

// prueba con var 
/*
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
*/

//05 constantes
// su contenido nunca va a cambiar, es como una variable pero su valor no puede cambiar

/*
'use strict'

var web = "https://encender.cor.works/login";
const ip = "192.168.1.1";

web = "https://encender.cor.works";
ip = "1333";

console.log(web, ip)
*/


// 11 condicional swich
// nos permite hacer muchas condiciones de manera organizada

/*
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

*/


