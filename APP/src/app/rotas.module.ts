import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaquinaComponent } from './maquina/maquina.component';
import { FioComponent } from './fio/fio.component';
import { ItensComponent } from './itens/itens.component';
import { MalhaComponent } from './malha/malha.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComponentesExternosComponent } from './componentes-externos/componentes-externos.component';
import { EntradaComponent } from './entrada/entrada.component';
// import { HomeComponent } from './componentes-externos/home/home.component';
// import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
// import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';
import { cadastroItemComponent } from './cadastroItem/cadastroItem.component';



import { SacolaComponent } from './sacola/sacola.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TelaLoginComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'entrada',
        component: EntradaComponent
      },
      {
        path: 'cadastroItem',
        component: cadastroItemComponent
      },
      {
        path: 'home',
        component: ComponentesExternosComponent,
        children: [
          {
            path: 'maquina',
            component: MaquinaComponent
          }, {
            path: 'fio',
            component: FioComponent
          }, {
            path: 'itens',
            component: ItensComponent
          }, {
            path: 'malha',
            component: MalhaComponent
          }, {
            path: 'sacola',
            component: SacolaComponent
          }
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RotasModule { }
