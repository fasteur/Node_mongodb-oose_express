import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {  UsersService } from './users.service'; 
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private usersService : UsersService) { 

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log(this.usersService.isAdmin());
      
      if(this.usersService.isAdmin()){
        return true;
      } else { 
        console.log('alert');
        alert('you don\'t have admin role!!')
        return false;
      }
    
  }
}
