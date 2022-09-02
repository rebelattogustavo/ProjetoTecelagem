import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProducaoService {

  constructor(private http: HttpClient) {}

  cadastrarProducao(body: {}) {
    return this.http.post('http://localhost:8080/api/producao', body);
  }

  buscarProducao(){
    return this.http.get('http://localhost:8080/api/producao');
  }

  buscarProducaoId(id: String){
    return this.http.get(`http://localhost:8080/api/producao/${id}`);
  }
}
