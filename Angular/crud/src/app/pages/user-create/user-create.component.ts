import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm : FormGroup; 
  user: User = {}

  constructor(private countryService: CountryService, private userService : UserService) {
    
   }

  ngOnInit() {
    this.userForm = new FormGroup({
      email:new FormControl (null,[Validators.required, Validators.email]),
        street:new FormControl (null,[Validators.required]),
        number:new FormControl (null,[Validators.required]), 
        zip:new FormControl (null,[Validators.required]), 
        town:new FormControl (null,[Validators.required]),
        country:new FormControl (null,[Validators.required])
   })
  }
  getErrorMessage(field: string) : string { 
    const errors = { 
      required:'this field is required',
      email:'this field must countain a valid email'
    }
    return Object.keys(this.userForm.controls[field].errors).map((key) => { 
      return `Rule : ${errors[key]}` })
      .toString()
    }
  
}
