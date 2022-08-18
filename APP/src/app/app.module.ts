import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentesExternosComponent } from './componentes-externos/componentes-externos.component';
import { HeaderComponent } from './componentes-externos/header/header.component';
import { SidenavComponent } from './componentes-externos/sidenav/sidenav.component';
import { RotasModule } from './rotas.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './componentes-externos/home/home.component';
import { FioComponent } from './fio/fio.component';
import { MalhaComponent } from './malha/malha.component';
import { ItensComponent } from './itens/itens.component';

import { DetalhesMaquinaComponent } from './maquina/detalhes-maquina/detalhes-maquina.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastroComponent,
    HeaderComponent,
    SidenavComponent,
    ComponentesExternosComponent,
    EntradaComponent,
    HomeComponent,
    FioComponent,
    MalhaComponent,
    MaquinaComponent,
    ItensComponent,
    DetalhesMaquinaComponent,
    HistoricoEntradaComponent,
    HistoricoProducaoComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
