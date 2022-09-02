import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MalhaClienteService {

  constructor(private http: HttpClient) {}

  cadastrarMalhaCliente(body: {}) {
    this.http.post('http://localhost:8080/api/malha-cliente', body).subscribe();
  }

  buscarMalhaClientes(body: {}){
    this.http.get('http://localhost:8080/api/malha-cliente', body).subscribe();
  }

  buscarMalhaClienteId(id: String,body: {}){
    this.http.get(`http://localhost:8080/api/malha-cliente/${id}`, body).subscribe();
  }



}
