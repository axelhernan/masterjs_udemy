// clases es un molde con el cual pueden crear infinidad de objetos con caracteristicas parecidas

//interfaz
interface ClasesBase{
    setColor(color);
    getColor();
}

//decorador
function estampar (logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de: " +logo)
        }
    }
}


// clase (molde del objeto)
class Clases implements ClasesBase {
    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // metodos (funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color
    }

}

// clase hija
class Sudadera extends Clases{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Clases("hoas", "asda", "asdasd", "asd", 12);
console.log(camiseta);

var sudadera_nike = new Sudadera("rojo", "mangalarga", "asdas", "asda", 122);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor(true);
console.log(sudadera_nike)

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