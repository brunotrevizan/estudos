import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.sass']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 20;

  mudarAtivo(){
   this.ativo = !this.ativo;
  }

  constructor() { }

  ngOnInit() {
  }

}
