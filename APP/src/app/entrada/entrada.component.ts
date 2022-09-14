import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ItensService } from '../service/item.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {
  @Output() changeModal = new EventEmitter();
  @Input() tipo = 2;
  constructor(private itemsService: ItensService) {}
  fecharModal() {
    this.changeModal.emit();
  }

  quantidade = 1;
  fornecedor = '';
  peso = 1;
  valor = 1;
  descricao = '';
  rolosCaixa = 0;
  nome = "";

  notaFiscal = "";

  //Inserir um novo item
  //Inserir a entrada_item
  //Verificar se o item existe
  //Caso existir, somar a quantidade
  //Cadastrar nota fiscal

  entradaItens() {
    if (this.tipo == 1) {
      console.log(this.itemsService.cadastrarItem({
        quantidade: this.quantidade,
        tipo: this.nome
      }));
      // this.itemsService.cadastrarEntradaMaterial({
      //   descricao: this.descricao,
      //   fornecedorId: this.fornecedor,
      //   // itemId: novoItem.id,
      //   // notaFiscalId: notaFiscal.id,
      //   quantidade: this.quantidade,
      //   valorTotalGasto: this.valor
      // })
    } else {
      
    }
  }

  mudarQtd(opcao: number) {
    if(opcao == 1) {
      if(this.quantidade > 1) {
        this.quantidade--;
      }
    } else {
      this.quantidade++;
    }
  }

  mudarValor(opcao: number) {
    if(opcao == 1) {
      if(this.valor > 1) {
        this.valor--;
      }
    } else {
      this.valor++;
    }
  }

  mudarRolos(opcao: number) {
    if(opcao == 1) {
      if(this.rolosCaixa > 1) {
        this.rolosCaixa--;
      }
    } else {
      this.rolosCaixa++;
    }
  }

  ngOnInit(): void {}
}
