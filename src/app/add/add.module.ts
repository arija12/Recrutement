import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    
   
  ],
  exports: [
    
  ]

})
export class AddModule { }
