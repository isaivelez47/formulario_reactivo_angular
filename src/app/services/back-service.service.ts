import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackServiceService {

  datos: {} = {};
  respuestaSimulacro: {} = {};

  constructor(
    private http?: HttpClient
  ) { }

  simulacion(body): any {
    return this.http.post('https://accenture-form.herokuapp.com/simulation', body);
  }

  getResultados() {
    return this.respuestaSimulacro;
  }

  setJson(json) {
    this.datos = json;
  }

  getDatos() {
    return this.datos;
  }
}
