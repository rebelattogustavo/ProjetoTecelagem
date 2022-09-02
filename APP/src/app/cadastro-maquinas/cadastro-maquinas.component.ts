import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastroMaquinas',
  templateUrl: './cadastro-maquinas.component.html',
  styleUrls: ['./cadastro-maquinas.component.css']
})
export class cadastroMaquinasComponent implements OnInit {
  @Output() modalcadastroMaquinas = new EventEmitter()

  constructor() { }
  fechaModal(){
    this.modalcadastroMaquinas.emit()
  }
  ngOnInit(): void {


  }
  tipo = 1;






}