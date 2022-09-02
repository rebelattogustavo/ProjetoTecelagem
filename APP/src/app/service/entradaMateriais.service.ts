import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class EntradaMateriais {

    constructor(private http: HttpClient) { }

    cadastrarEntradaMaterial(body: {}) {
        return this.http.post('http://localhost:8080/api/entrada-materiais', body);
    }

    buscarEntradaMateriais() {
        return this.http.get('http://localhost:8080/api/entrada-materiais');
    }

    buscarEntradaMateriaisId(id: string) {
        return this.http.get(`http://localhost:8080/api/entrada-materiais/${id}`);
    }
}
