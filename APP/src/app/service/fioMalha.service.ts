import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FioMalha {

    constructor(private http: HttpClient) { }

    cadastrarFioMalha(body: {}) {
        return this.http.post('http://localhost:8080/api/fio-malha', body);
    }

    buscarFioMalha() {
        return this.http.get('http://localhost:8080/api/fio-malha');
    }

    buscarFioMalhaId(id: string) {
        return this.http.get(`http://localhost:8080/api/fio-malha/${id}`);
    }
}
