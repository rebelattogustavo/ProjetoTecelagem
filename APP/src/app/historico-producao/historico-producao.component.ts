import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { FuncionarioService } from '../service/funcionario.service';
import { MaquinaService } from '../service/maquina.service';
import { ProducaoService } from '../service/producao.service';

@Component({
  selector: 'app-historico-producao',
  templateUrl: './historico-producao.component.html',
  styleUrls: ['./historico-producao.component.css']
})
export class HistoricoProducaoComponent implements OnInit {
    @Output() statusModalDetalhes = new EventEmitter;
  constructor(private router: Router,
    private producaoService: ProducaoService,
    private funcionarioService: FuncionarioService,
    private clienteService: ClienteService,
    private maquinaService: MaquinaService) { }

    producao = [
      {
        id: "",
        pesoRolo: 0.0,
        defeito: "",
        clienteId: "",
        funcionarioId: "",
        maquinaId: "",
        status: "",
        data: ""
      }
    ]
    listaProducoes = [
      {
       
      }
    ];

    clienteNome = "";
    funcionario = "";
    maquinaNome = "";
    funcionarioNome = "";
    cliente = [
      {

      }
    ];

    close(){
        this.statusModalDetalhes.emit()
    }
  ngOnInit(): void {

    this.producao = [];
    this.clienteNome = "";
    this.maquinaNome = "";
    this.funcionarioNome = "";
    this.cliente = [];
    this.listaProducoes = [];

    console.log("bbb")
    for(let e of this.listaProducoes){
      console.log("aa: ");
    }
}

async getProducoes(){
  await this.producaoService.buscarProducao().subscribe(e => {
    this.producao = Object.values(e);
    this.listaProducoes = this.producao;
    console.log(this.listaProducoes);
  });
}

}
