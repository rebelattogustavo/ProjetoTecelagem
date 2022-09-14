import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  cadastrarCliente(body: {}) {
    return this.http.post('http://localhost:8080/api/cliente', body);
  }

  buscarClientes(){
    return this.http.get('http://localhost:8080/api/cliente');
  }

  buscarCliente(id: String){
    return this.http.get(`http://localhost:8080/api/cliente/${id}`);
  }

  editarCliente(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/cliente/${id}`, body);
  }

  deletarCliente(id: String){
    return this.http.delete(`http://localhost:8080/api/cliente/${id}`);
  }
}