import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProviders } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from '../shared/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  loginSubscription: Subscription;
  loading: boolean = true;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginSubscription = this.loginService.state.subscribe(user => {
      if(user && user.provider === AuthProviders.Password
         && user.auth.email
         && !user.anonymous) {
        // Logged in
        this.router.navigate(['project', '0', 'contacts']);
      }

      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.loginService.login(email, password);
  }

}
