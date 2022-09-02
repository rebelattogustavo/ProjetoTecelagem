import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SaidaMalhaService {

  constructor(private http: HttpClient) {}

  cadastrarSaidaMalha(body: {}) {
    return this.http.post('http://localhost:8080/api/saida-malha', body);
  }

  buscarSaidasMalhas(){
    return this.http.get('http://localhost:8080/api/saida-malha');
  }

  buscarSaidaMalha(id: String){
    return this.http.get(`http://localhost:8080/api/saida-malha/${id}`);
  }

  editarSaidaMalha(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/saida-malha/${id}`, body);
  }

  deletarSaidaMalha(id: String){
    return this.http.delete(`http://localhost:8080/api/saida-malha/${id}`);
  }
}