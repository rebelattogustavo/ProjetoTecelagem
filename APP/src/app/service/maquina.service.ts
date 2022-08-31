import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {

  constructor(private http: HttpClient) {}

  buscarMaquinas() {
    return this.http.get('/api/maquina');
  }

}
