import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Usuario } from '../shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  
     lista = [
    {nome: "Otavio", usuario: "otavio", senha: "123"},
    {nome: "Vinicius", usuario: "vinicius", senha: "123"},
    {nome: "Camilly", usuario: "camilly", senha: "123"},
    {nome: "Felipe", usuario: "felipe", senha: "123"},
    {nome: "Matheus", usuario: "matheus", senha: "123"},
    {nome: "Eduarda", usuario: "eduarda", senha: "123"},
    {nome: "Diego", usuario: "diego", senha: "123"},
    {nome: "Gustavo", usuario: "gustavo", senha: "123"},
  ]

  buscarClientes(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/cliente');
  }

  buscarCliente(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`);
  }

  editarCliente(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`, body);
  }

  deletarCliente(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`);
  }
}