import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comodo } from '../../models/comodo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public comodos: Comodo[];

  constructor(public navCtrl: NavController) {

    this.comodos = [
      {nome: `Quarto`},
      {nome: `Cozinha`},
      {nome: `Banheiro`},
      {nome: `Sala`},
      {nome: `Area de Servico`}

    ] 
    
  }

}
