import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private usersService : UsersService, private router :Router) { }

  ngOnInit() {
  }
  onLogout(e){
    e.preventDefault();
    console.log('On logout');
    this.usersService.logout(); 
    this.router.navigateByUrl('/')
  }
}
