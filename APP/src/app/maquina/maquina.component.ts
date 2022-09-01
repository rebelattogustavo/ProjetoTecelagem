import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {

  @Input() maquina = {codigo: 0, nome: "", marca: "", ano_fabricacao: "", ano_compra: "", valor_compra: 0, rpm: 0, qtd_agulha: 0, qtd_platina: 0, qtd_gaiolas: 0, qtd_cones: 0}

  abrirDetalhes = true;
  constructor() { }

  ngOnInit(): void {
  }
  mudaModal(){
    this.abrirDetalhes = !this.abrirDetalhes;
  }

}
