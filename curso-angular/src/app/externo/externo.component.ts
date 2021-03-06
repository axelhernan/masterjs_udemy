import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user: any;
	public userId: any;

	constructor(private _peticionesService: PeticionesService) {
		this.userId = 1;
	}


  ngOnInit(){
    this.fecha = new Date();
  	this.cargaUsuario();
  }

  cargaUsuario(){
  	this._peticionesService.getUser(this.userId).subscribe(
  		result => {
  			this.user = result.data
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);  	
  }

}
