// clases es un molde con el cual pueden crear infinidad de objetos con caracteristicas parecidas

// clase (molde del objeto)
class Clases {
    // propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color
    }

}

var camiseta = new Clases();
camiseta.setColor("Rojo");

console.log(camiseta.getColor());

/*
//public: pueden acceder desde cualquier propiedad o metodo, o desde la clase actual o clases que la heredan o cualquier clase

// protected: se puede acceder desde la clase que lo define o que lo herede

// private: solo desde dentro de la clase

*/