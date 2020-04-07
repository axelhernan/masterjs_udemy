// parametros de rest y spread
'use strict'

//rest
function listadofrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("fruta 1:", fruta1);
    console.log("fruta 2:", fruta2)
    console.log(resto_de_frutas);
}
listadofrutas("naranja", "manzana", "coco", "melon");

//spread
var frutas = ["kiwi", "sandia"]
listadofrutas(...frutas, "palta", "banana")
