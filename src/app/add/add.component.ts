import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../services/user.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'] 
})
export class AddComponent implements OnInit {
  listStatus = [
    { value: 'OK' },
    { value: 'KO' },
    { value: 'Tech' },
    { value: 'Vivier'},
    { value: 'Entretien Planifié' },
    { value: 'Entretien ' },
    { value: 'Non Planifié' },
    { value: 'Hided,organisé par défaut' }
];

myForm: FormGroup;


selectedCar: string;
  signForm: any;
username: any;
email: any;
job: any;
asyncValidator: any;

  constructor(
    private router: Router,
    public userService:userService,
    public FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createForm()
    
  }

  
  createForm(){

    this.myForm= this.FormBuilder.group({
     
    "username":[null,],
    "email":[''],
    "job":[''],
    "source":[''],
    "experience":[''],
    "phone":[''],
    "status":[''],
    "cv":[''],

    })
  }
  navigate(){
    this.save();
    this.router.navigateByUrl("/entretien")
  }

  //bech nemmchi men page le page
  getListStatus(){
    this.router.navigateByUrl("/listStatus")
  }
  save(){
    this.userService.add(this.myForm.value ).subscribe(res =>{
console.log(res)
debugger;
    })
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
}
