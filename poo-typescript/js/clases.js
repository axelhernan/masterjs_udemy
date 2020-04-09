// clases es un molde con el cual pueden crear infinidad de objetos con caracteristicas parecidas
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de: " + logo);
        };
    };
}
// clase (molde del objeto)
var Clases = /** @class */ (function () {
    // metodos (funciones o acciones del objeto)
    function Clases(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Clases.prototype.setColor = function (color) {
        this.color = color;
    };
    Clases.prototype.getColor = function () {
        return this.color;
    };
    return Clases;
}());
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Clases));
var camiseta = new Clases("hoas", "asda", "asdasd", "asd", 12);
console.log(camiseta);
var sudadera_nike = new Sudadera("rojo", "mangalarga", "asdas", "asda", 122);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor(true);
console.log(sudadera_nike);
/*
//public: pueden acceder desde cualquier propiedad o metodo, o desde la clase actual o clases que la heredan o cualquier clase

// protected: se puede acceder desde la clase que lo define o que lo herede

// private: solo desde dentro de la clase

*/
/*
// constructor
es un metodo especial dentro de una clase y se le da un valor inicial a un atributo
o propiedades del objteo al crearlo, puede recibir parametros y nunca devuelve ningun dato
es el primer metodo que se ejecuta siempre cuando se crea un objeto y sirve para cambiar el valor de una clase
*/
/*
// interface: es un contrato que definimos que propiedes y metodos va a tener una clase
*/
/*
// herencia: es un mecanismo basico en el cual una clase hija puede heredar las caracteristicas que tiene la clase padre
*/
/*
//Decoradores
es un patron de diseño que nos permite, mediante unos meta datos que nosotros le definimos a una clase, hacer una copia de esa misma clase y modificarla o haga una cosa o una funcion de los parametros
*/ 
