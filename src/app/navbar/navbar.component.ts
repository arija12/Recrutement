import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 @Input() text:any
  @Input() value:any
  @Input() text1:any
  @Input() value1:any

  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  navigate(router: any) {
    let url = '/' + router;
    this.router.navigateByUrl(url);

  }

}
