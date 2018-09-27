import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import User from '../interface/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  returnURL : string; 
  constructor(fb:FormBuilder, 
          private userService:UsersService,
          private router: Router,
          private route: ActivatedRoute) {

    this.loginForm = fb.group({
      username:['', Validators.required],
      password : ['',[Validators.required, Validators.minLength(3)]]
    })
   }
  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    this.returnURL = this.route.snapshot.queryParams['returnURL'] || '/'
  }
  getValidationError(field:string):string{
    const errors= {
      required: "le champs est requis",
      minlength:"le champs doit comporter au moins 3 caractères"
    }
    return Object.keys(this.loginForm.controls[field].errors).reduce((prev,current)=>{
      return `${prev} - ${errors[current]}`;
    },'')
  }

  onLogin(user:User){
    
     if(this.userService.authenticate(user)) {
      
       console.log(this.router.navigateByUrl(this.returnURL))

       this.router.navigateByUrl(this.returnURL)
     }
  }
}
