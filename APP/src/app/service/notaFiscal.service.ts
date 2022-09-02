import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {

  constructor(private http: HttpClient) {}

  cadastrarNotaFiscal(body: {}) {
    return this.http.post('http://localhost:8080/api/nota-fiscal', body);
  }

  buscarNotasfiscais(){
    return this.http.get('http://localhost:8080/api/nota-fiscal');
  }

  buscarNotaFiscal(id: String){
    return this.http.get(`http://localhost:8080/api/nota-fiscal/${id}`);
  }

  editarNotaFiscal(id: String, body: {}){
    return this.http.put(`http://localhost:8080/api/nota-fiscal/${id}`, body);
  }

  deletarNotaFiscal(id: String){
    return this.http.delete(`http://localhost:8080/api/nota-fiscal/${id}`);
  }
}