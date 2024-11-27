import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent implements OnInit {
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


  constructor(private fb: FormBuilder,private router:Router) {
 
   }
   jobForm = this.fb.group({
    status: [''],
  })
  ngOnInit(): void {
  }
  addStatus(){
   this.listStatus.push({value:this.jobForm.value['status']})
   setTimeout(()=>{                           
    this.router.navigateByUrl('/addUser')
}, 3000);
  
  }

}
