import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaFioService {

  constructor(private http: HttpClient) {}

  cadastrarMaquinaFio(body: {}) {
    return this.http.post('http://localhost:8080/api/maquina-fio', body);
  }

  buscarMaquinasFios(){
    return this.http.get('http://localhost:8080/api/maquina-fio');
  }

  buscarMaquinaFio(id: String){
    return this.http.get(`http://localhost:8080/api/maquina-fio/${id}`);
  }

  editarMaquinaFio(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/maquina-fio/${id}`, body);
  }

  deletarMaquinaFio(id: String){
    return this.http.delete(`http://localhost:8080/api/maquina-fio/${id}`);
  }
}