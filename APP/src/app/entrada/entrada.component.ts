import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Output() changeModal = new EventEmitter()
  constructor() { }
  fecharModal(){
    this.changeModal.emit()
  }
  ngOnInit(): void {

    
  }

  



}
