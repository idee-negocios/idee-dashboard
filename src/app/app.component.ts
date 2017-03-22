import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdMediaService } from '@covalent/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(public router: Router,
              public media: TdMediaService,
              private fb: AngularFire ) {
    this.fb.auth.subscribe(auth => console.log(auth))

    this.fb.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    })

    this.fb.database.list('/idee-dashboard/hola').push({c: true});

    this.fb.database.list('/idee-dashboard').subscribe(list => {
      console.log(list);
    });
  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
