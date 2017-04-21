import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { Route } from '../../models';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  routes: Route[] = [
    {icon: 'add', title: 'Crear', route: ['/admin', 'clients', 'new']},
    {icon: 'settings', title: 'Gestionar', route: ['/admin', 'clients', 'management']}
  ];

  constructor(private media: TdMediaService) { }

  ngOnInit() {
    this.media.broadcast();
  }

}
