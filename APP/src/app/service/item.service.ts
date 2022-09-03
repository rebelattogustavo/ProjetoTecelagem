import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItensService {

  constructor(private http: HttpClient) {}

  cadastrarItem(body: {}) {
    this.http.post('https://tecelagem-back-end.vercel.app/api/item', body).subscribe();
  }

  buscarItens(){

  }

  cadastrarEntradaMaterial(body: {}){
    return this.http.post('https://tecelagem-back-end.vercel.app/api/entrada-materiais', body).subscribe();
  }

}
