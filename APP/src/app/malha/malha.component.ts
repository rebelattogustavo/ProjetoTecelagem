import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-malha',
  templateUrl: './malha.component.html',
  styleUrls: ['./malha.component.css']
})
export class MalhaComponent implements OnInit {

  @Input() malha = {codigo: 0, descricao: "", fornecedor: "", valor: 0};

  constructor() { }

  modalVenda = false;
  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";
  quantidade = 1;

  ngOnInit(): void {
  }

  abrirModal() {
    this.modalVenda = true;
  }

  fechaModal() {
    this.modalVenda = false;
  }

  modificaQtd(opcao: number) {
    if(opcao == 1) {
      if(this.quantidade > 1) {
        this.quantidade--;
      }
    } else {
      this.quantidade++;
    }
  }

  vender() {
    //Fazer fetch do saída malhas
    this.modalVenda = false;
  }

  getPreco(valor: number) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }


}
