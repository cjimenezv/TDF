import { Component, OnInit } from '@angular/core';
import { SrvciudadService } from '../servicios/srvciudad.service';
import { Estciudad } from '../modelo/estciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  public listaCiudades: Estciudad[];


  constructor( private _serviciociudad: SrvciudadService ) { }

  ngOnInit() {
    this.listaCiudades = this._serviciociudad.getCiudades();
  }


}
