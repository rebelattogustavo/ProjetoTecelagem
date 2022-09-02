import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {

  constructor(private http: HttpClient) {}

  cadastrarMaquina(body: {}) {
    return this.http.post('http://localhost:8080/api/maquina', body);
  }

  buscarMaquinas(){
    return this.http.get('http://localhost:8080/api/maquina');
  }

  buscarMaquina(id: String){
    return this.http.get(`http://localhost:8080/api/maquina/${id}`);
  }

  editarMaquina(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/maquina/${id}`, body);
  }

  deletarMaquina(id: String){
    return this.http.delete(`http://localhost:8080/api/maquina/${id}`);
  }
}
