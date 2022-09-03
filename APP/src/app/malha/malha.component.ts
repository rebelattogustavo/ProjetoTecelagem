import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-malha',
  templateUrl: './malha.component.html',
  styleUrls: ['./malha.component.css']
})
export class MalhaComponent implements OnInit {

  @Input() malha = { id: "0", descricao: "", valor: 0 };

  constructor() { }

  modalVenda = false;
  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";
  quantidade = 1;

  sacola = [{ id: "0", descricao: "a", valor: 3 }]

  ngOnInit(): void {
  }

  abrirModal() {
    this.modalVenda = true;
  }

  fechaModal() {
    this.modalVenda = false;
  }

  modificaQtd(opcao: number) {
    if (opcao == 1) {
      if (this.quantidade > 1) {
        this.quantidade--;
      }
    } else {
      this.quantidade++;
    }
  }

  vender() {

    if (typeof (this.quantidade) != 'number' || typeof (this.pesoTotal) != 'number') {
      alert("OS tipos não são válidos!")
    } else if (this.cliente == "") {
      alert("Preencha o Cliente!")
    } else if (this.nota == "") {
      alert("Preencha a nota fiscal!");
    } else {
      //Fazer fetch do saída malhas
      this.modalVenda = false;
    }
  }

  getPreco(valor: number) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  adicionaSacola() {
    this.modalVenda = false;
    this.sacola = JSON.parse(localStorage.getItem('carrinho') as string) || [];
    let malhaNova = {
      id: this.malha.id, descricao: this.malha.descricao, valor: this.malha.valor, quantidade: this.quantidade
    }
    this.sacola.push(malhaNova);
    localStorage.setItem('carrinho', JSON.stringify(this.sacola));
  }


}
