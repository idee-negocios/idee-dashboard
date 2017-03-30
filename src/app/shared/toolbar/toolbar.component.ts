import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

import { LoginService } from '../services/index';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDesktop: boolean;
  sidenavWidth: string;
  sidenavMode: string;

  selectedProject: string;
  buttonName: string;

  constructor(public media: TdMediaService,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
    this.media.registerQuery('gt-xs').subscribe((desktop: boolean) => {
      this.isDesktop = desktop;
      this.sidenavWidth = desktop ? '350px' : '100%';
      this.sidenavMode = desktop ? 'side' : 'over';
    });

    this.media.broadcast();

    this.buttonName = 'PROYECTOS';
  }

  selectProject() {
    this.buttonName = 'John Jarana';
    this.selectedProject = 'John Jarana';
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
    this.router.navigate(['/login']);
  }
}
