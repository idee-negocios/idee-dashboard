import { Component, OnInit } from '@angular/core';

import { LoginService } from '../shared/services';
import { Route } from '../models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes: Route[] = [
    {icon: 'account_balance', title: 'Contabilidad', route: ['']},
    {icon: 'wb_cloudy', title: 'Servidores', description: 'Asd', route: ['login']},
    {icon: 'grid_on', title: 'Calendario', description: 'Asd', route: ['']},
    {icon: 'account_circle', title: 'Usuarios', description: 'Asd', route: ['']},
    {icon: 'supervisor_account', title: 'Clientes', description: 'Asd', route: ['']},
    {icon: 'work', title: 'Proyectos', description: 'Asd', route: ['projects']},
    {icon: 'extension', title: 'Herramientas', description: 'Asd', route: ['']},
    {icon: 'folder', title: 'Documentos', description: 'Asd', route: ['']},
    {icon: 'person_pin', title: 'Empleados', description: 'Asd', route: ['']},
    {icon: 'trending_up', title: 'Estadísticas', description: 'Asd', route: ['']}
  ].sort((a, b) => a.title < b.title ? -1 : 1);

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }

}
