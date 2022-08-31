import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

<<<<<<< HEAD
  constructor() {
=======
  constructor(private router: Router) {
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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

<<<<<<< HEAD
=======
  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";

>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
  listaSacola = [
    {
      codigo: 1,
      nome: "Camisa",
      descricao: "Camisa Boa",
      quantidade: 1,
      valor: 20
    },
<<<<<<< HEAD
    {
      codigo: 2,
      nome: "Calça",
      descricao: "Calça Boa",
      quantidade: 4,
      valor: 10
    }
=======
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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

  abrirModalVenda() {
    if(this.listaSacola.length > 0) {
      this.modalVenda = true;
    }
  }

  fechaModal() {
    this.modalVenda = false;
  }

<<<<<<< HEAD
=======
  vender() {
    for (const malha of this.listaSacola) {
      //Fazer fetch para cada malha (saída malha)
      //Fazer alguma forma de encontrar o cliente pelo CNPJ
    }
    this.router.navigate(['/home']);
  }

>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
}
