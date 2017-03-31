import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';

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

  constructor(public media: TdMediaService,
              public sidenavService: SidenavService) {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.media.broadcast();
  }
}
