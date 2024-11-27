import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  listStatus = [
    { value: 'Tech Lead' },
    { value: 'Project Lead' },
    { value: 'RH/Direction' },
];
selectedCar: string;
  router: any;
  constructor(private route: Router ) {}

  ngOnInit() {
  }

  save(){



    this.route.navigateByUrl("listDecision")
  }

    
    

  }
  
  



