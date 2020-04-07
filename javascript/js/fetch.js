// fetch (ajax)  y peticiones a servicios / api rest
'use strict'

var divusuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#singleuser");
var div_profesor = document.querySelector("#profesor");


//llamar a la lista externa
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
        return getInfo();
    })
    .then(data =>{
        div_profesor.innerHTML = data;
    })
    
    //capturar errores en las promesas
    .catch(error => {
        console.log(error);
    });

// funcion para llamar a lista externa con un return
function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

// funcion para llamar a una expecifico 
function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

// crear una promesa de 0 
function getInfo(){
    var profesor = {
        nombre: 'victor',
        apellido: 'robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject)=>{
       var profesor_string = JSON.stringify(profesor);
       if(typeof profesor_string != 'string') return reject('Error');// en caso que salga mal
       return resolve(profesor_string);//en caso que salga bien 
    })
}

// promesas 
function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('p');
        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
        divusuarios.appendChild(nombre);
        document.querySelector('.cargando').style.display = "none";
    });
}

// funcion para llamar mostrar a alguien especifico
function mostrarJanet(user) {
    let nombre = document.createElement('p');
    let avatar = document.createElement('img');
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";    
    div_usuario.appendChild(nombre);
    div_usuario.appendChild(avatar);
    document.querySelector('#singleuser .cargando').style.display = "none";
}

// capturar errores en js
try{
    var year = 2020;
    console.log(yer);
}catch(error){
    console.log("hay un error en el codigo");
}

var year = 2020;
console.log(yer);