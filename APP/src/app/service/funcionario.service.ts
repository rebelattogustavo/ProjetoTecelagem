import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(body: {}) {
    return this.http.post('http://localhost:8080/api/funcionario', body);
  }

  buscarFuncionarios(){
    return this.http.get('http://localhost:8080/api/funcionario');
  }

  buscarFuncionario(id: String){
    return this.http.get(`http://localhost:8080/api/funcionario/${id}`);
  }

  editarFuncionario(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/funcionario/${id}`, body);
  }

  deletarFuncionario(id: String){
    return this.http.delete(`http://localhost:8080/api/funcionario/${id}`);
  }
}