import { Component, OnInit } from '@angular/core';

import { Route } from '../../models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes: Route[] = [
    {icon: 'account_balance', title: 'Contabilidad', url: ['/admin']},
    {icon: 'wb_cloudy', title: 'Servidores', description: 'Asd', url: ['/login']},
    {icon: 'grid_on', title: 'Calendario', description: 'Asd', url: ['/admin']},
    {icon: 'account_circle', title: 'Usuarios', description: 'Asd', url: ['/admin']},
    {icon: 'supervisor_account', title: 'Clientes', description: 'Asd', url: ['/admin']},
    {icon: 'work', title: 'Proyectos', description: 'Asd', url: ['/admin', 'projects']},
    {icon: 'extension', title: 'Herramientas', description: 'Asd', url: ['/admin']},
    {icon: 'folder', title: 'Documentos', description: 'Asd', url: ['/admin']},
    {icon: 'person_pin', title: 'Empleados', description: 'Asd', url: ['/admin']},
    {icon: 'trending_up', title: 'Estadísticas', description: 'Asd', url: ['/admin']}
  ].sort((a, b) => a.title < b.title ? -1 : 1);

  constructor() { }

  ngOnInit() {
  }

}
