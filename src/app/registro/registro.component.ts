import { Component, OnInit } from '@angular/core';
import { Registro } from '../modelo/registro';
import { RegistroService } from '../servicios/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /**DEINIMOS UN ARREGLO PARA MOSTRAR LOS DATOS EN UN COMBO BOX */
  Topicos: string[] = ['Angular', 'React', 'Mongo DB', 'Spring IO']; 

  /**INSTANCIAMOS UNA CLASE DEL TIPO REGISTRO PARA DESPLEGARLA EN EL FORMULARIO */
  public registro1: Registro = new Registro('', 'cjimenez@gmail.com', 
                                              3505390207, 'React','tarde',true);

  /**VARIABLE PARA CAPTURAR LOS ERRORES FRUTO DE UNA EXCEPCIONDEL SERVICIO REST */

  public mensajeErrorHTTP: string = "";

  constructor( private _servicioRegistro: RegistroService ) { }

  ngOnInit() {
  }

  enviarDatos(){
    this._servicioRegistro.registrar( this.registro1 )
            .subscribe(
                data => console.log('Sucess!!...:' + data),
                error => this.mensajeErrorHTTP = error.statusText
            );
  }

}
