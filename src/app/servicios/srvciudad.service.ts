import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvciudadService {

  constructor() { }

  getCiudades(){
    return [{"cod_depto":"05","cod_mpio":"05002","dpto":"Antioquia","nom_mpio":"Abejorral"},
            {"cod_depto":"41","cod_mpio":"41006","dpto":"Huila","nom_mpio":"Acevedo"},
            {"cod_depto":"41","cod_mpio":"41013","dpto":"Huila","nom_mpio":"Agrado"},
            {"cod_depto":"76","cod_mpio":"76243","dpto":"Valle del Cauca","nom_mpio":"El Águila"},
            {"cod_depto":"20","cod_mpio":"20011","dpto":"Cesar","nom_mpio":"Aguachica"},
            {"cod_depto":"68","cod_mpio":"68013","dpto":"Santander","nom_mpio":"Aguada"},
            {"cod_depto":"17","cod_mpio":"17013","dpto":"Caldas","nom_mpio":"Aguadas"},
            {"cod_depto":"85","cod_mpio":"85010","dpto":"Casanare","nom_mpio":"Aguazul"},
            {"cod_depto":"15","cod_mpio":"15720","dpto":"Boyacá","nom_mpio":"Sativanorte"}
    ];
  }


}
