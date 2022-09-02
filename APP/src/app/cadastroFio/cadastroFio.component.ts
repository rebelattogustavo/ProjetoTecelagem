import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FioService } from '../service/fio.service';

@Component({
  selector: 'app-cadastroFio',
  templateUrl: './cadastroFio.component.html',
  styleUrls: ['./cadastroFio.component.css']
})
export class CadastroFioComponent implements OnInit {
 @Output() modalCadastroFio = new EventEmitter()
  constructor(private fioService: FioService) { }
  fechaModal(){
    this.modalCadastroFio.emit()
  }
  enviarCadastro(){
    // this.fioService.cadastrarFio()
    // .subscribe(e =>{
    //   e
    // })
  }
  ngOnInit(): void {
  }

}
