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

  constructor(private fb: AngularFire) {
    this.fb.auth.subscribe(user => {
      console.log(user);
    });
  }

  login(email: string, password: string): Observable<FirebaseAuthState> {
    this.fb.auth.login({email, password},
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
    );

    return this.fb.auth.asObservable();
  }

  logout() {
    this.fb.auth.logout();
  }

}
