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
import { DetalhesMaquinaComponent } from './maquina/detalhes-maquina/detalhes-maquina.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastroComponent,
    HeaderComponent,
    SidenavComponent,
    ComponentesExternosComponent,
    EntradaComponent,
    MaquinaComponent,
    DetalhesMaquinaComponent,
    HistoricoEntradaComponent
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
