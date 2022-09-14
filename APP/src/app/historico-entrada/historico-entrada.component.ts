import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historico-entrada',
  templateUrl: './historico-entrada.component.html',
  styleUrls: ['./historico-entrada.component.css']
})
export class HistoricoEntradaComponent implements OnInit {
    @Output() statusModalDetalhes = new EventEmitter;
  constructor() { }
    close(){
        this.statusModalDetalhes.emit()
    }
  ngOnInit(): void {
    
  }

}
