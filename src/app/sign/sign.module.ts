import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignComponent } from './sign.component';



@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    FormsModule,
   
   FormsModule,
   HttpClientModule,
     ReactiveFormsModule,
  ],exports:[
    SignComponent
  ]
})
export class SignModule { }
