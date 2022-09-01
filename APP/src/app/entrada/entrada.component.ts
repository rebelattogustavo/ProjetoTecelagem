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

  entradaItens() {
    if (this.tipo == 1) {
      this.itemsService.cadastrarItem({
        descricao: this.descricao,
        quantidade: this.quantidade,
        valor: this.valor,
        fornecedor: this.fornecedor
      });
    } else {
      
    }
  }

  ngOnInit(): void {}
}
