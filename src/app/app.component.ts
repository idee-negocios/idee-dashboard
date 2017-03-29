import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';
import 'rxjs/add/observable/throw';

import { LoginService } from './shared/services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

}
