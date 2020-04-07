//multiples datos sin usar el or (combine, o sea, escribe esto)
type alfanumerico = string | number;

// string o multiples datos (utilizando el or  --> | )
let cadena: string | number = "victorrobles.es";
cadena = 12;

// numero 
let numero: number = 12;

//boleano
let verdadero_falso: boolean =  true;

// any
let cualquiera: any = "hola";

// arrays
var lenguajes : Array<string>= ["php", "js", "css"];
let years: any[] = ["ahre",13,14]

//let vs var
var numero1 = 10;
var numero2 = 13;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero , verdadero_falso, cualquiera, lenguajes, years);