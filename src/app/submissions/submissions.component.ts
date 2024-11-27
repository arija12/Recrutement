import { Component, OnInit } from '@angular/core';
import {Candidat} from '../candidat'
import { Router } from '@angular/router';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  candidats: Candidat[];

  listCandidat = [
    { nom: 'eya',email:'eya@gmail.com',metier:'ing',entreprise:'iodev',source:'linkedin',status:'Tech',comment:'ffdfd',cv:'ddfdfdd',annee:'02',mobile:'+21658211902',dispo:'tjrs dispo',date:'',place:'distance'},
    { nom: 'arij',email:'omayma@gmail.com',metier:'ing',entreprise:'iodev',source:'linkedin',status:'Vivier',comment:'ffdfd',cv:'ddfdfdd',annee:'02',mobile:'+21658211902',dispo:'tjrs dispo',date:'',place:'distance' },
];
  constructor(private router:Router) { }

  ngOnInit(): void {

   
      
    }
    addNew(){
      this.router.navigateByUrl("/addUser")
    }
    dash(){
      this.router.navigateByUrl("/dashbord")
    }
    getCandidat(){
      this.router.navigateByUrl("/addUser")
    }
    deleteCandidat(){
      
    }
    decisionEntretein(){
      this.router.navigateByUrl("/decisionEntretien")
    }
    viewDecisionEntretein(){
      this.router.navigateByUrl("/listDecision")
    }
  
  }


