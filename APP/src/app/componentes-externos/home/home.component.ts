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
  malha = []
  maquina = []
  itens = []

  fiosFiltrados = [];
  malhasFiltradas = [];
  maquinasFiltradas = [];
  itensFiltrados = [];

  textPesquisa = "";

  lista = "";

  openModalDetalhes(){
    this.stateDetalhes = !this.stateDetalhes
  }
  ngOnInit(): void {
    this.lista = this.router.url.split("/", 3)[2];
  }
  stateEntrada = false
  stateFio = false
  stateCadastro = false
  stateMaquina = false
  stateMalha = false
  stateItem = false
  changeModalCadastroMalha(){
    this.stateMalha = !this.stateMalha
  }
  changeModalCadastroFio(){
    this.stateFio = !this.stateFio
  }
  changeModalCadastroItem(){
    this.stateItem = !this.stateItem
  }
  changeModalCadastroMaquina(){
    this.stateMaquina = !this.stateMaquina
  }
  changeModalEntrada(number: number){
    this.tipoModalEntrada = number
    this.stateEntrada = !this.stateEntrada
  }
}