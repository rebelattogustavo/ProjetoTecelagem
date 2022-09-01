import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItensService {

  constructor(private http: HttpClient) {}

  cadastrarItem(body: {}) {
    return this.http.post('http://localhost:8080/api/item', body).subscribe();
  }

}
