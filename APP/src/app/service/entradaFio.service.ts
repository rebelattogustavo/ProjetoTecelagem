import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EntradaFioService {

  constructor(private http: HttpClient) {}

  cadastrarEntradaFio(body: {}) {
    return this.http.post('http://localhost:8080/api/entrada-fio', body);
  }

  buscarEntradaFio(){
    return this.http.get('http://localhost:8080/api/entrada-fio');
  }

  buscarEntradaFioId(id: String){
    return this.http.get(`http://localhost:8080/api/entrada-fio/${id}`);
  }
}
