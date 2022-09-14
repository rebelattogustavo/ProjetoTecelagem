import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MalhaService } from '../service/malha.service';

@Component({
  selector: 'app-cadastroMalha',
  templateUrl: './cadastroMalha.component.html',
  styleUrls: ['./cadastroMalha.component.css']
})

export class CadastroMalhaComponent implements OnInit {
  @Output() modalCadastroMalha = new EventEmitter()
  constructor(private malhaService: MalhaService) { }
  nome = "";
  quantidade = "";
  descricao = "";
  fios = [];

  fechaModal(){
    this.modalCadastroMalha.emit()
  }

  enviarCadastro(){
    this.malhaService.cadastrarMalha({nome: this.malhaService, quantidade: this.quantidade, descricao: this.descricao, fios: this.fios})
    .subscribe(e => {
      console.log(e)
    })
  }

  ngOnInit(): void {
  }

  tipo = 2;
}
