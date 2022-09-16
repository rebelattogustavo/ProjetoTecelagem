import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FioService } from '../service/fio.service';
import { MalhaService } from '../service/malha.service';

interface Fio {
  descricao: string;
}

@Component({
  selector: 'app-cadastroMalha',
  templateUrl: './cadastroMalha.component.html',
  styleUrls: ['./cadastroMalha.component.css']
})

export class CadastroMalhaComponent implements OnInit {
  @Output() modalCadastroMalha = new EventEmitter()
  constructor(private malhaService: MalhaService, private fioService: FioService) { }
  nome = "";
  quantidade = "";
  descricao = "";
  fios = "";
  listaFio: Fio[] = [];


  fechaModal(){
    this.modalCadastroMalha.emit()
  }

  enviarCadastro(){
    // this.malhaService.buscarMalhas();
    let malhaCadastrada;
    this.malhaService.cadastrarMalha({descricao: this.nome, valor: this.quantidade}).subscribe(e => malhaCadastrada = Object.values(e));
    console.log(malhaCadastrada);
  }



  ngOnInit(): void {
    let fiozinho;
    this.fioService.buscarFios().subscribe((fios: Fio[]) => {
      this.listaFio = fios
      
      console.log(this.listaFio);
    });
  
  }

  tipo = 2;
}
