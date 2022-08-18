import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComponentesExternosComponent } from './componentes-externos/componentes-externos.component';
import { EntradaComponent } from './entrada/entrada.component';
import { HomeComponent } from './componentes-externos/home/home.component';
import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';



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
        path: 'home',
        component: ComponentesExternosComponent,
        children: [
          {
            path: 'tela-inicial',
            component: HomeComponent
          },
          {
            path: 'maquina',
            component: HomeComponent
          }, {
            path: 'fio',
            component: HomeComponent
          }, {
            path: 'itens',
            component: HomeComponent
          }, {
            path: 'malha',
            component: HomeComponent
          }, 
          {
            path: 'historico-entrada',
            component: HistoricoEntradaComponent
          },
          {
            path: 'historico-producao',
            component: HistoricoProducaoComponent
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
