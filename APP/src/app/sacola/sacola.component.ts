import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor() {
    var self = this;
    if(localStorage.getItem("carrinho")) {
      this.listaSacola = JSON.parse(localStorage.getItem('carrinho') as string) || [];
    } else {
      this.listaSacola = [];
    }
    
    window.addEventListener("beforeunload", function () {
      localStorage.setItem('carrinho', JSON.stringify(self.listaSacola));
    });
  }

  valorTotal = 0;

  listaSacola = [
    {
      codigo: 1,
      nome: "Camisa",
      descricao: "Camisa Boa",
      quantidade: 1,
      valor: 20
    },
    {
      codigo: 2,
      nome: "Calça",
      descricao: "Calça Boa",
      quantidade: 4,
      valor: 10
    }
  ]

  ngOnInit(): void {
    this.calculaValor();
  }

  calculaValor() {
    this.valorTotal = 0;
    var self = this;
    this.listaSacola.forEach((e) => {
      self.valorTotal += e.valor * e.quantidade;
    })
  }

  excluirMalha(index: number) {
    this.listaSacola.splice(index, 1);
    this.calculaValor();
  }

  modificaQtd(opcao: number, index: number) {
    switch(opcao) {
      case 1:
        if(this.listaSacola[index].quantidade > 1) {
          this.listaSacola[index].quantidade--;
        }
        break;
      case 2:
        this.listaSacola[index].quantidade++;
        break;
    }
    this.calculaValor();
  }

}
