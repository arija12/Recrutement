import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignModule } from '../sign/sign.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
      ReactiveFormsModule,
  ],exports:[
    NavbarComponent
  ]
  
})
export class NavbarModule { }
