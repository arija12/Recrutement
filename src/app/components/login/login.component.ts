import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  loginForm: FormGroup;

  
  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router ) {
    

    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }



  login() {
    const { email, password } = this.loginForm.value;
    this.authService.logi(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/admin']);
         } else {
         
        }
      },
      error => {
        console.error('Erreur lors de l\'inscription:', error);
      }

    )
  }
}



