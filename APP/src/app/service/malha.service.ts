import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MalhaService {

  constructor(private http: HttpClient) {}

  cadastrarMalha(body: {}) {
    return this.http.post('http://localhost:8080/api/malha', body);
  }

  buscarMalhas(){
    return this.http.get('http://localhost:8080/api/malha');
  }

  buscarMalhaId(id: String){
    return this.http.get(`http://localhost:8080/api/malha/${id}`);
  }
}
