import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MaquinaService } from '../service/maquina.service';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Output() changeModal = new EventEmitter()
  @Input() tipo = 2
  constructor(
    private maquinaService: MaquinaService
  ) { }
  fecharModal(){
    this.changeModal.emit()
  }


  buscarMaquina(){
    this.maquinaService.buscarMaquinas();
  }

  ngOnInit(): void {
    
  }


  



}
