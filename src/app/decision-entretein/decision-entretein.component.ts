import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decision-entretein',
  templateUrl: './decision-entretein.component.html',
  styleUrls: ['./decision-entretein.component.css']
})

export class DecisionEntreteinComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }
  navigate(){}

}
