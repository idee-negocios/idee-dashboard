import { Component, OnInit, OnDestroy } from '@angular/core';

import { SidenavService } from '../../shared/services';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.set([
      {icon: 'add', title: 'Crear', route: ['/projects', 'new']},
      {icon: 'settings', title: 'Gestionar', route: ['/projects', 'management']},
    ]);
  }

  ngOnDestroy() {
    this.sidenavService.clean();
  }

}
