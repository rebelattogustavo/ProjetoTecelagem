import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class EntradaMateriais {

    constructor(private http: HttpClient) { }

    cadastrarEntradaMaterial(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/entrada-materiais', body);
    }

    buscarEntradaMateriais() {
        return this.http.get('https://tecelagem-back-end.vercel.app/api/entrada-materiais');
    }

    buscarEntradaMateriaisId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/entrada-materiais/${id}`);
    }
}
