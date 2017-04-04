import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

import { Route } from '../../models';
import { LoginService, SidenavService } from '../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  isDesktop: boolean;
  sidenavWidth: string;
  sidenavMode: string;

  selectedProject: string;
  buttonName: string;

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

  constructor(public media: TdMediaService,
              public sidenavService: SidenavService) {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.media.broadcast();
  }
}
