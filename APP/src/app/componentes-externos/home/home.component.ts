import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  tipoModalEntrada = 1
  fio = []
  malha = []
  maquina = []
  itens = []

  ngOnInit(): void {
    console.log(this.router.url)
  }
  stateEntrada = false
  changeModalEntrada(number: number){
    this.tipoModalEntrada = number
    this.stateEntrada = !this.stateEntrada
  }
}
