import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class Fornecedor {

    constructor(private http: HttpClient) { }

    cadastrarFornecedor(body: {}) {
        return this.http.post('http://localhost:8080/api/fornecedor', body);
    }

    buscarFornecedores() {
        return this.http.get('http://localhost:8080/api/fornecedor');
    }

    buscarFornecedorId(id: string) {
        return this.http.get(`http://localhost:8080/api/fornecedor/${id}`);
    }
}
