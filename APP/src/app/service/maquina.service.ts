import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {

  constructor(private http: HttpClient) {}

  buscarMaquinas() {
    return this.http.get('http://localhost:8080/api/maquina').subscribe((e) => {console.log(e)});
  }

}
