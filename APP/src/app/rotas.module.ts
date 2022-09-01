import { HomeComponent } from './componentes-externos/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ComponentesExternosComponent } from './componentes-externos/componentes-externos.component';
import { EntradaComponent } from './entrada/entrada.component';
// import { HomeComponent } from './componentes-externos/home/home.component';
// import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
// import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';
import { cadastroItemComponent } from './cadastroItem/cadastroItem.component';



import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';
import { SacolaComponent } from './sacola/sacola.component';
import { CadastroFioComponent } from './cadastroFio/cadastroFio.component';
import { CadastroMalhaComponent } from './cadastroMalha/cadastroMalha.component';



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
        path: 'entrada',
        component: EntradaComponent
      },
      {
        path: 'cadastroItem',
        component: cadastroItemComponent
      },
      {
        path: 'cadastroFio',
        component: CadastroFioComponent
      },
      {
        path: 'cadastroMalha',
        component: CadastroMalhaComponent
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
          },
          {
            path: 'historico-entrada',
            component: HistoricoEntradaComponent
          },
          {
            path: 'historico-producao',
            component: HistoricoProducaoComponent
          },
          {
<<<<<<< HEAD
            path: 'cadastro/funcionario', component: CadastroComponent
          },
          {
            path: 'cadastro/cliente', component: CadastroComponent
=======
            path: 'sacola',
            component: SacolaComponent
>>>>>>> d3f11d3134385f4b79193ac41eed37f9ad4176dd
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
