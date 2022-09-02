import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastroFio',
  templateUrl: './cadastroFio.component.html',
  styleUrls: ['./cadastroFio.component.css']
})
export class CadastroFioComponent implements OnInit {
 @Output() modalCadastroFio = new EventEmitter()
  constructor() { }
  fechaModal(){
    this.modalCadastroFio.emit()
  }
  ngOnInit(): void {
  }

}
