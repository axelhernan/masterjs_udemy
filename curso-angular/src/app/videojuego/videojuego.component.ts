import {  Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  //propiedades
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "Componente de videojuegos";
    this.listado = "listado de los juegos mas populares";
    console.log("se ha cargado el componente videojuegos");
  }

  ngOnInit() {
    console.log('OnInit ejecutado');
  }

  ngDoCheck(){
      console.log('DoCheck ejecutado');
  }

  ngOnDestroy(){
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo del componente";
  }


}

// hooks: son eventos que se ejecutan en un evento dado dependiendo del estado que este el componente
// oninit: se implementa porque es una interfaz, metodo para cargar un componente
// docheck: cuando se produzca un cambio en un componente
// ondestroy: este metodo sirve para que se ejecute algo antes de eliminar una instancia del componente
