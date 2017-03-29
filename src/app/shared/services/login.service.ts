import { Injectable } from '@angular/core';
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

  constructor(private fb: AngularFire) { }

  get state() {
    return this.fb.auth.asObservable();
  }

  login(email: string, password: string) {
    this.fb.auth.login({email, password},
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
    );
  }

  logout() {
    this.fb.auth.logout();
  }

}
