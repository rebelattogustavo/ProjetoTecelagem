import { HomeComponent } from './componentes-externos/home/home.component';
import { DetalhesMaquinaComponent } from './maquina/detalhes-maquina/detalhes-maquina.component';
import { FioComponent } from './fio/fio.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { MalhaComponent } from './malha/malha.component';
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
import { ItensComponent } from './itens/itens.component';

import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';
import { SacolaComponent } from './sacola/sacola.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastroComponent,
    HeaderComponent,
    SidenavComponent,
    ComponentesExternosComponent,
    EntradaComponent,
    SacolaComponent,
    ItensComponent,
    MalhaComponent,
    MaquinaComponent,
    FioComponent,
    DetalhesMaquinaComponent,
<<<<<<< HEAD
    HistoricoEntradaComponent,
    HistoricoProducaoComponent,

=======
    HomeComponent
>>>>>>> d3f11d3134385f4b79193ac41eed37f9ad4176dd
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
