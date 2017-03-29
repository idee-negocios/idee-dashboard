import { Injectable } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  AuthProviders,
  AuthMethods
} from 'angularfire2';

@Injectable()
export class LoginService {

  constructor(private fb: AngularFire) { }

  login() {
    this.fb.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

}
