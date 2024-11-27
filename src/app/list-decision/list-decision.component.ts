import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-decision',
  templateUrl: './list-decision.component.html',
  styleUrls: ['./list-decision.component.css']
})
export class ListDecisionComponent implements OnInit {

  
  listDecision = [
    { nom: 'omayma',compteRendu:'so good',fonctionMetier:'ing' },
    { nom: 'arij',compteRendu:'so good',fonctionMetier:'ing' },
];
  constructor(private router:Router) { }

  ngOnInit(): void {}
   
  
  }