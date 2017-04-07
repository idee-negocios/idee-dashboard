import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../services';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(): boolean {
    console.log('can activate', this.loginService.isLoggedIn());
    return this.loginService.isLoggedIn();
  }
}
