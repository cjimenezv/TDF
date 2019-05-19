import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Registro } from '../modelo/registro';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  _url: string = "http://localhost:8080//registrar";

  constructor( private _httpclient: HttpClient) { }

  registrar(registro: Registro){
      return this._httpclient.post<any>(this._url,registro)
          .pipe(  catchError( this.controlExcepcion )  )
      ;
  }

  controlExcepcion( _error: HttpErrorResponse ){
      return throwError(_error);
  }

}
