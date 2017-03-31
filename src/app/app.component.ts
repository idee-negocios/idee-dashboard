import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import 'rxjs/add/observable/throw';
import { MdIconRegistry} from '@angular/material';

import { LoginService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,
              private domSanitizer: DomSanitizer,
              private iconRegistry: MdIconRegistry) {
    // Logo
    this.iconRegistry.addSvgIconInNamespace('assets', 'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));

  }

}
