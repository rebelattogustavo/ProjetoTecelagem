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
