import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {

  constructor(private http: HttpClient) {}

  cadastrarMaquina(body: {}) {
    return this.http.post('http://localhost:8080/api/maquina', body).subscribe((e) => {console.log(e)});
  }

}
