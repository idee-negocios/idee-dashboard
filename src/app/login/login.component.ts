import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProviders } from 'angularfire2';

import { LoginService } from '../shared/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.loginService.login(email, password).subscribe(user => {
      if(user.provider === AuthProviders.Password
         && user.auth.email
         && !user.anonymous) {
        // Logged in
        console.log(user);
      } else {
        // Error
        console.log('Nop', user);
      }
    }, err => console.log(err));

    // this.router.navigate(['contact']);
  }

}
