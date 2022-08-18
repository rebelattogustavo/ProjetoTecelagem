import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {
  abrirDetalhes = true;
  constructor() { }

  ngOnInit(): void {
  }
  mudaModal(){
    this.abrirDetalhes = !this.abrirDetalhes;
  }

}
