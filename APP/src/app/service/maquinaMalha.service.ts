import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaMalhaService {

  constructor(private http: HttpClient) {}

  cadastrarMaquinaMalha(body: {}) {
    return this.http.post('http://localhost:8080/api/maquina-malha', body);
  }

  buscarMaquinasMalhas(){
    return this.http.get('http://localhost:8080/api/maquina-malha');
  }

  buscarMaquinaMalha(id: String){
    return this.http.get(`http://localhost:8080/api/maquina-malha/${id}`);
  }

  editarMaquinaMalha(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/maquina-malha/${id}`, body);
  }

  deletarMaquinaMalha(id: String){
    return this.http.delete(`http://localhost:8080/api/maquina-malha/${id}`);
  }
}