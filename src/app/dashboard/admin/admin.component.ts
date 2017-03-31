import { Component, OnInit } from '@angular/core';

import { Route } from '../../models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes: Route[] = [
    {icon: 'view_compact', title: 'Usuarios', description: 'Asd', url: ['/admin']},
    {icon: 'view_compact', title: 'Estadísticas', description: 'Asd', url: ['/login']},
  ];

  constructor() { }

  ngOnInit() {
  }

}
