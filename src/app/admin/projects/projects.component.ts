import { Component, OnInit, OnDestroy } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { Route } from '../../models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  routes: Route[] = [
    {icon: 'add', title: 'Crear', route: ['/projects', 'new']},
    {icon: 'settings', title: 'Gestionar', route: ['/projects', 'management']}
  ];

  constructor(private media: TdMediaService) { }

  ngOnInit() {
    this.media.broadcast();
  }

}
