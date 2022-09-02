import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor(private router: Router) {
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

  modalVenda = false;
  valorTotal = 0;

  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";

  listaSacola = [
    {
      codigo: 1,
      descricao: "Camisa Boa",
      quantidade: 1,
      valor: 20
    },
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
    localStorage.setItem('carrinho', JSON.stringify(this.listaSacola));
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
    localStorage.setItem('carrinho', JSON.stringify(this.listaSacola));
    this.calculaValor();
  }

  abrirModalVenda() {
    if(this.listaSacola.length > 0) {
      this.modalVenda = true;
    }
  }

  fechaModal() {
    this.modalVenda = false;
  }

  vender() {
    for (const malha of this.listaSacola) {
      //Fazer fetch para cada malha (saída malha)
      //Fazer alguma forma de encontrar o cliente pelo CNPJ
    }
    localStorage.removeItem('carrinho')
    this.router.navigate(['/home/tela-inicial']);
  }

}
