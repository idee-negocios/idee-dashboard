import { Component, OnInit, Input } from '@angular/core';

import { Route } from '../../models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() routes: Route[];

  constructor() { }

  ngOnInit() { }

}
