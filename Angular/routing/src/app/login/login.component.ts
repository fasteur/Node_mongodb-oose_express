import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm : FormGroup; 
  constructor(fb : FormBuilder ) {
    this.loginForm = fb.group({
      user: ['blabla', Validators.required], 
      email: ['blabla@gmail.com', [Validators.required, Validators.email]],
      password: ['blibli', [Validators.required, Validators.minLength(6)]],
    })
   }

  ngOnInit() {
  }
  onSubmit(objValue) { 
    console.log(this.loginForm.valid);
    console.log(objValue);
  }
  getErrorMessage(formControlName : string): string {
    const errors : any= {
      required : "Le champs est requis",
      minlength: "Le champs doit contenir 6 caractères",
      email : "Ce champs doit contenir un email valid"
    }
    return Object.keys(this.loginForm.controls[formControlName].errors).reduce(
      (prev, current, currentIndex) => { 
        console.log(prev);
        console.log(current);
        console.log(currentIndex);
        return `${prev} Rule ${currentIndex} - ${errors[current]}`;
      },''
    )

  }

}
