import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';

import { RegistroService } from './servicios/registro.service';
import { SrvciudadService } from './servicios/srvciudad.service'
import { Myboot1Component } from './myboot1/myboot1.component';
import { CiudadComponent } from './ciudad/ciudad.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    Myboot1Component,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistroService, SrvciudadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
