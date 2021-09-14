import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'information-circle-outline',
      name: 'Información',
      redirecTo: '/informacion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){

    this.menuController.open('first');

  }

}
