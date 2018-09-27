import { Injectable } from '@angular/core';
import User from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  loggedIn : boolean = false;
  authorizedUsers : User[];
  admin : boolean = false;

  constructor() {
    this.authorizedUsers = [
      {username:'gilles',password:'tpk',role:'user'},
      {username:'florian',password:'tpk',role:'admin'}
    ]
  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }
  isAdmin():boolean{ 
    return this.admin;
  }
  authenticate(user:User):boolean{
    let authUser = this.authorizedUsers.find(item=> item.username === user.username && item.password === user.password)
    
    if(authUser){
      this.loggedIn = true;
      if(authUser.role === 'admin'){
        this.admin = true; 
      }
      return true;
    } else{
      return false
    }
  }
  logout() { 
    this.loggedIn = false;
  }
}
