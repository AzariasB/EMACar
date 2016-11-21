import { Injectable } from '@angular/core';
import { 
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
 } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private userService : UserService,
              private router : Router) {}

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    let url :string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) :boolean{
    if(this.userService.isLoggedIn())return true;

    console.log('not connected');
    this.router.navigate(['/login']);
    return false;
  }
}