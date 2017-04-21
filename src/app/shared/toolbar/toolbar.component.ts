import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

import { Route } from '../../models';
import { LoginService } from '../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  routes: Route[] = [
    {icon: 'account_balance', title: 'Contabilidad', route: ['']},
    {icon: 'wb_cloudy', title: 'Servidores', route: ['']},
    {icon: 'grid_on', title: 'Calendario', route: ['']},
    {icon: 'account_circle', title: 'Usuarios', route: ['']},
    {icon: 'supervisor_account', title: 'Clientes', route: ['/admin', 'clients']},
    {icon: 'work', title: 'Proyectos', route: ['/admin', 'projects']},
    {icon: 'extension', title: 'Herramientas', route: ['']},
    {icon: 'folder', title: 'Documentos', route: ['']},
    {icon: 'person_pin', title: 'Empleados', route: ['']},
    {icon: 'trending_up', title: 'Estadísticas', route: ['']},
    {icon: 'access_time', title: 'Tiempo', route: ['/admin', 'time']},
  ].sort((a, b) => a.title < b.title ? -1 : 1);

  constructor(public media: TdMediaService,
              private loginService: LoginService) {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.media.broadcast();
  }

  logout() {
    this.loginService.logout();
  }

}
