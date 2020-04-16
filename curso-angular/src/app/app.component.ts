import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}