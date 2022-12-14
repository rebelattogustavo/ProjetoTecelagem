import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  olho1: number = 1;
  olho2: number = 1;

  usuario: string = "";
  cnpj: string = "";
  cpf: string = "";
  dataNascimento: Date = new Date();
  turno: string = ""

  senhaUser: string = "";
  repetirSenhaUser: string = "";

  senhaIncorreta: number = 0;
  dadosIncorretos: number = 0;
  rota = "";
  tipoTela = false;
  ngOnInit() {
    this.rota = "";
    this.rota = this.router.url;
    if (this.rota == '/home/cadastro/cliente') {
      this.tipoTela = false
    } else{
      this.tipoTela = true
    }
    console.log(this.rota)
  }

  entrar() {
    console.log("a")
    this.router.navigate(['']);
  }

  cadastrar() {
    if (this.cnpj && this.usuario && this.senhaUser) {
      if (this.senhaUser == this.repetirSenhaUser && this.senhaUser != '' && this.senhaUser) {
        localStorage.setItem('cadastro', '1');

        const user = {
          nome: this.usuario,
          cnpj: this.cnpj,
          senha: this.senhaUser,
          tipo: 0
        }

        //Usar serviço para cadastrar
        this.router.navigate(['']);
      } else {
        this.senhaIncorreta = 1;
        setTimeout(() => {
          this.senhaIncorreta = 0;
        }, 5000)
      }
    } else {
      this.dadosIncorretos = 1;
      setTimeout(() => {
        this.dadosIncorretos = 0;
      }, 5000)
    }
  }

  trocarOlho(input: number) {

    let divOlho: HTMLImageElement;
    let input2: HTMLInputElement

    switch (input) {
      case 1:
        divOlho = document.querySelector("#olho1") as HTMLImageElement;
        input2 = document.querySelector("#inputSenha1") as HTMLInputElement;
        if (this.olho1 == 1) {
          this.olho1 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
      case 2:
        divOlho = document.querySelector("#olho2") as HTMLImageElement;
        input2 = document.querySelector("#inputSenha2") as HTMLInputElement
        if (this.olho2 == 1) {
          this.olho2 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
    }
  }

  fechar() {
    this.senhaIncorreta = 0;
  }

}