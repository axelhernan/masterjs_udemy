import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	 public zapatillas: Array<Zapatilla>;
	 constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojo', 50, true),
            new Zapatilla('Reebook classic', 'Reebook', 'Blanco', 120, true),
            new Zapatilla('Nike classic', 'Nike', 'Rojo', 40, true),
            new Zapatilla('Adidas classic', 'Adidas', 'Rojo', 89, false)
        ];
	}

	getTexto(){
		return "hola mundo desde un servicio";
	}
	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}

}