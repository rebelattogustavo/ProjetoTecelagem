import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Fio {
    id: number,
    descricao: string;
  }
  
@Injectable({
    providedIn: 'root',
})
export class FioService {

    constructor(private http: HttpClient) { }

    cadastrarFio(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/fio', body);
    }

    buscarFios(): Observable<Fio[]> {
        return this.http.get<Fio[]>('https://tecelagem-back-end.vercel.app/api/fio');
    }

    buscarFioId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/fio/${id}`);
    }
}
