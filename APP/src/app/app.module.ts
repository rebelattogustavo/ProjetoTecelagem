import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RotasModule } from './rotas.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
