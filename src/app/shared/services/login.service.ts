import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFire,
  FirebaseListObservable,
  AuthProviders,
  AuthMethods,
  FirebaseAuthState
} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private loggedIn: boolean;

  constructor(private router: Router,
              private fb: AngularFire) {
  }

  get state() {
    return this.fb.auth.asObservable();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string) {
    this.fb.auth.login({email, password},
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      });

    this.state.subscribe(user => {
      if(!user) {
        this.loggedIn = false;
        this.router.navigate(['']);
      } else {
        this.loggedIn = true;
        this.router.navigate(['admin']);
      }
    });
  }

  logout() {
    this.fb.auth.logout();
  }

}
