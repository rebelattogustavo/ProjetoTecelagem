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
<<<<<<< HEAD


  abrirEntrada = false;
  abrirDetalhes = false;
  mudaModalEntrada(){
    console.log("PIOjfpoisdjaojip")
    this.abrirEntrada = !this.abrirEntrada;
  } 
  mudaModalDetalhes(){
    this.abrirDetalhes = !this.abrirDetalhes;
  }

=======
  stateEntrada = false
  changeModalEntrada(number: number){
    this.tipoModalEntrada = number
    this.stateEntrada = !this.stateEntrada
  }
>>>>>>> fb611e9e25fdc589573755812c9117a7dcd9ca2b
}
