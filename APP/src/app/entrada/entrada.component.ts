import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Output() changeModal = new EventEmitter()
  @Input() tipo = 2
  constructor() { }
  fecharModal(){
    this.changeModal.emit()
  }
  ngOnInit(): void {

    
  }

  



}
