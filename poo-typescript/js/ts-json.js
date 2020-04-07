// json  para modificar 
var bicicleta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "disco",
    velocidadMaxima: "60km",

    //modificar un atributo del json con una funcion
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("azul")