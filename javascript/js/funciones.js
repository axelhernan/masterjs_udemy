// funciones
// son un grupo de ordenes con una orden en concreto
// funcion es una agrupacion reutilizable de un conjunto de instrucciones
// es un conjunto de ordenes que se van a ejecutar cuando ejecuto una funcion

'use strict'

function calculadora (){
    console.log('hola soy la calculadora');
    console.log('si soy yo');
}

//invoca a la funcion
calculadora();calculadora();calculadora();calculadora();

// funciones con parametros 

'use strict'

function calculadora2 (numero1, numero2){
    console.log("suma: " + (numero1+numero2));
    console.log("resta: " + (numero1-numero2));
    console.log("multiplicacion: " + (numero1*numero2));
    console.log("division: " + (numero1/numero2));

    console.log("***********");
    return "hola soy la calculadora !!!"
}

calculadora2(12, 8);
calculadora2(98, 2);

// funciones con parametros opcionales

'use strict'

function calculadora3(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        console.log("suma: " + (numero1 + numero2));
        console.log("resta: " + (numero1 - numero2));
        console.log("multiplicacion: " + (numero1 * numero2));
        console.log("division: " + (numero1 / numero2));
        console.log("***********");
    } else {
        document.write("suma: " + (numero1 + numero2) + "<br />");
        document.write("resta: " + (numero1 - numero2) + "<br />");
        document.write("multiplicacion: " + (numero1 * numero2) + "<br />");
        document.write("division: " + (numero1 / numero2) + "<br />");
        document.write("***********");
    }

}

calculadora3(12, 8);
calculadora3(2, 5, true)

// funciones dentro de otras 

'use strict'

function porConsola (numero1, numero2){
    console.log("suma: " + (numero1 + numero2));
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " + (numero1 * numero2));
    console.log("division: " + (numero1 / numero2));
    console.log("***********");
}

function porPantalla (numero1, numero2){
    document.write("suma: " + (numero1 + numero2) + "<br />");
    document.write("resta: " + (numero1 - numero2) + "<br />");
    document.write("multiplicacion: " + (numero1 * numero2) + "<br />");
    document.write("division: " + (numero1 / numero2) + "<br />");
    document.write("***********");
}
function calculadora4(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
       porConsola(numero1,numero2)
    } else {
       porPantalla(numero1,numero2)
    }

}

calculadora4(12, 8);
calculadora4(2, 5, true)

//funciones anonimas
//no tiene ningun nombre y se puede usar una variable 
//se usa par ahacer callbacks (funciones que se hacen dentro de otra )
//es una funcion que no tiene nombre 

'use strict'

var pelicula = function(nombre){
    return "la pelicula es: " + nombre;
}

//callback:es una funcion anonima que le pasa como parametro a otra funcion

function sumame (numero1, numero2, sumaymuestra, sumapor2){
    var sumar = numero1 + numero2;
    sumaymuestra(sumar);
    sumapor2(sumar);
    return sumar;
}


sumame(5, 7, dato =>{
    console.log("la suma es:", dato);
},
dato =>{
    console.log("la suma por dos es:", (dato*2))
}
)

// FUNCIONES DE FLECHA
//usas => en vez de function

// ambito global 

var texto = "hola mundo soy una variable global";
var numero = "12";

function holamundo(texto) {
    var hola_mundo = "texto dentro de funcion"
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo)
}

holamundo(texto);
// funciones texto js

'use strict'

var numero = 444;
var texto1 = "buenvenido al curso de javascript de victor";
var texto2 = "es un curso bueno";
var dato = typeof numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// calcular longitud de un texto
var nombre = "axel valdez";
console.log(nombre.length);

// concatenar - unir texto
var textototal = texto1.concat("" + texto2);
console.log(textototal);

//funciones de texto de busqueda 
'use strict'

var numero = 444;
var texto1 = "buenvenido al curso de javascript de victor";
var texto2 = "es un curso bueno";

var busqueda = texto1.indexOf("curso"); //busca la primera coincidencia
    busqueda = texto1.lastIndexOf("curso"); //busca la lastima coincidencia
    busqueda = texto1.search("curso"); // busca la o las palabras
    busqueda = texto1.match("curso"); // hace un array con las palabras
    busqueda = texto1.substr(14, 5); // que te saque la palabra los caracteres desde el 14 hasta el 5
    busqueda = texto1.charAt(4); // sabe para sacar una letra en concreto
    busqueda = texto1.startsWith("victor");// busca desde el inicio un texto y tira true o false 
    busqueda = texto1.includes("javascript");// busca una palabra exacta 
    
console.log(busqueda);


//funciones de texto de reemplazo 
'use strict'

var numero = 444;
var texto1 = "    buenvenido al curso de javascript de victor          ";
var texto2 = "es un curso bueno";

var busqueda = texto1.replace("curso", "ahre"); // reemplaza el texto del primero con el segundo
    busqueda = texto1.slice(14, 22)//nos permite separar string a partir del caracter que yo quiera
    busqueda = texto1.split("   "); //sirve para recortar las palabras y meterlas en un array
    busqueda = texto1.trim(); //puedo llamar al metodo trim recorta o quita espacios
console.log(busqueda);

// plantillas de texto
'use strict'

var nombre = prompt ("mete tu nombre");
var apellidos = prompt ("mete tus apellidos");

var texto = `
    <h1>hola que tal</h1>
    <h3>mi nombre es: ${nombre}</h3>
    <h3>mi nombre es: ${apellidos}</h3>
`
;


document.write(texto);