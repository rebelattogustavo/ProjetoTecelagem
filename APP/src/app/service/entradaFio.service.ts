import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EntradaFioService {

  constructor(private http: HttpClient) {}

  cadastrarEntradaFio(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/entrada-fio', body);
  }

  buscarEntradaFio(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/entrada-fio');
  }

  buscarEntradaFioId(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/entrada-fio/${id}`);
  }
}
