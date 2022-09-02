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

  quantidade = 0;
  fornecedor = '';
  peso = 0;
  valor = 0;
  descricao = '';
  rolosCaixa = 0;
  nome = "";

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

  ngOnInit(): void {}
}
