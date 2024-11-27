import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-services/auth-service/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { passwordMatchValidator } from '../add/password-match.directive';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})


export class SignComponent   {

  signUpForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword:['', Validators.required]
   }, {
    
    validators: passwordMatchValidator
  })


 constructor(
  private authService: AuthService, 
  private formBuilder: FormBuilder,
  private router:Router
  ) {}
  

  get userName () {
    return this.signUpForm.controls['fullName'];
  }

  get email() {
    return this.signUpForm.controls['email'];
  }

  get password() {
    return this.signUpForm.controls['password'];
  }

  get confirmPassword() {
    return this.signUpForm.controls['confirmPassword'];
  }


  
  signUp() {
    const postData = { ...this.signUpForm.value };
    delete postData.confirmPassword;
    this.authService.register(postData as User).subscribe(
      response => {
        console.log(response);

        this.router.navigate(['/login'])
      },
      error => {
        console.error('Erreur lors de l\'inscription:', error);
      }
    )
  }

}


    
    









