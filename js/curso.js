// eventos
// son funciones que se ejecutan cada vez que sucede algo

//eventos del mouse (click a algo, mouse a otra cosa, etc)

// evento click (hay un problema con firefox, el resto funciona, firefox escupe otro bg)
function cambiarColor(){
    console.log("Me has dado click");
    console.log(boton.style.background);

    var pat = /green/i;
    if(pat.test(boton.style.background)){
        boton.style.background = "red";
    }else {
        boton.style.background = "green";
    }
    return true;
}

//evenlistener (Escucha eventos)
var boton = document.querySelector("#boton");

// evento click
boton.addEventListener('click', function(){
    cambiarColor();
});

// evento mouseover
boton.addEventListener('mouseover',function(){
    boton.style.background = "pink";
});

//evento mouseout
boton.addEventListener('mouseout',function(){
    boton.style.background = "white";
});

var input = document.querySelector("#camponombre");

//focus
input.addEventListener('focus',function(){
   console.log("[focus] estas dentro del input");
});

//blur
input.addEventListener('blur',function(){
   console.log("[blur] estas fuera del input");
});

// keydown (cuando estas pulsando una tecla)
input.addEventListener('keydown', function(event){
    console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.KeyCode));
 });

//keypress
input.addEventListener('keypress', function(event){
    console.log("[keypress] tecla presionada ", String.fromCharCode(event.KeyCode));
 });


//keyup
input.addEventListener('keyup', function(event){
    console.log("[keyup] tecla presionada ", String.fromCharCode(event.KeyCode));
 });
