import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ItensService {

    constructor(private http: HttpClient) { }

    cadastrarFio(body: {}) {
        return this.http.post('http://localhost:8080/api/fio', body);
    }

    buscarFios() {
        return this.http.get('http://localhost:8080/api/fio');
    }

    buscarFioId(id: string) {
        return this.http.get(`http://localhost:8080/api/fio/${id}`);
    }
}
