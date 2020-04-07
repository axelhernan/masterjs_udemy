// clases es un molde con el cual pueden crear infinidad de objetos con caracteristicas parecidas
// clase (molde del objeto)
var Clases = /** @class */ (function () {
    function Clases() {
    }
    // metodos (funciones o acciones del objeto)
    Clases.prototype.setColor = function (color) {
        this.color = color;
    };
    Clases.prototype.getColor = function () {
        return this.color;
    };
    return Clases;
}());
var camiseta = new Clases();
camiseta.setColor("Rojo");
console.log(camiseta.getColor());
/*
//public: pueden acceder desde cualquier propiedad o metodo, o desde la clase actual o clases que la heredan o cualquier clase

// protected: se puede acceder desde la clase que lo define o que lo herede

// private: solo desde dentro de la clase

*/ 
