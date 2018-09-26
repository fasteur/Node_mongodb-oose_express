import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  isLoggedIn 
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Logged in guard');
   
    if(this.isLoggedIn) { 
      console.log('Ok you can pass');
      return true
    } else { 
      console.log('No way for you');
      return false;
    }
  }
}
