import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastroMalha',
  templateUrl: './cadastroMalha.component.html',
  styleUrls: ['./cadastroMalha.component.css']
})
export class CadastroMalhaComponent implements OnInit {

  @Output() modalCadastroMalha = new EventEmitter()
  constructor() { }
  fechaModal(){
    this.modalCadastroMalha.emit()
  }
  ngOnInit(): void {


  }
  tipo = 2;






}
