import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../services/user.service';

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

  constructor(private router: Router,
    public userService: userService) { }

  ngOnInit() {
  }
  decision() {
    this.save();

    this.router.navigateByUrl("/list-decision");

  }

}
