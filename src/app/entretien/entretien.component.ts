import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {

  formGroup: FormGroup;
  
  constructor(
  
    public FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createForm()
    
  }
  createForm(){

    this.formGroup= this.FormBuilder.group({
     
    username:[''],
    date:[''],
    place:[''],
    

    })
  }
}
