import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  stateDetalhes = false
  tipoModalEntrada = 1
  fio = []
  malha = [
    {
      codigo: 1,
      descricao: "Malha Boa",
      valor: 200
    }
  ]
  maquina = []
  itens = []

  fiosFiltrados = [];
  malhasFiltradas = [{
    codigo: 1,
    descricao: "Malha Boa",
    valor: 200
  }];
  maquinasFiltradas = [];
  itensFiltrados = [];

  textPesquisa = "";

  lista = "";

  openModalDetalhes(){
    this.stateDetalhes = !this.stateDetalhes
  }
  ngOnInit(): void {
    this.lista = this.router.url.split("/", 3)[2];
    this.fiosFiltrados = this.fio;
    this.malhasFiltradas = this.malha;
    this.maquinasFiltradas = this.maquina;
    this.itensFiltrados = this.itens;
  }
  stateEntrada = false
  changeModalEntrada(number: number){
    this.tipoModalEntrada = number
    this.stateEntrada = !this.stateEntrada
  }
}