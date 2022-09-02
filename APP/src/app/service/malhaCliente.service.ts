import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MalhaClienteService {

  constructor(private http: HttpClient) {}

  cadastrarMalhaCliente(body: {}) {
    return this.http.post('http://localhost:8080/api/malha-cliente', body);
  }

  buscarMalhaClientes(){
    return this.http.get('http://localhost:8080/api/malha-cliente');
  }

  buscarMalhaCliente(id: String){
    return this.http.get(`http://localhost:8080/api/malha-cliente/${id}`);
  }

  editarMalhaCliente(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/malha-cliente/${id}`, body);
  }

  deletarMalhaCliente(id: String){
    return this.http.delete(`http://localhost:8080/api/malha-cliente/${id}`);
  }
}