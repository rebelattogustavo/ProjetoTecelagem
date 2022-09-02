import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemMaquinaService {

  constructor(private http: HttpClient) {}

  cadastrarItemMaquina(body: {}) {
    return this.http.post('http://localhost:8080/api/item-maquina', body);
  }

  buscarItemMaquina(){
    return this.http.get('http://localhost:8080/api/item-maquina');
  }

  buscarItemMaquinaId(id: String){
    return this.http.get(`http://localhost:8080/api/item-maquina/${id}`);
  }
}
