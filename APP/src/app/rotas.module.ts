import { HomeComponent } from './componentes-externos/home/home.component';
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
        path: 'home',
        component: ComponentesExternosComponent,
        children: [
          {
            path: '',
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
