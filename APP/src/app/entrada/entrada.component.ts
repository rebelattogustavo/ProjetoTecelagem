import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
<<<<<<< HEAD
  
=======
  @Output() changeModal = new EventEmitter()
  @Input() tipo = 2
>>>>>>> fb611e9e25fdc589573755812c9117a7dcd9ca2b
  constructor() { }
  fecharModal(){
    this.changeModal.emit()
  }
  ngOnInit(): void {
    
    
  }
  tipo = 1;


  



}
