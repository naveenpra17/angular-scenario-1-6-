import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent6',
  templateUrl: './parent6.component.html',
  styleUrls: ['./parent6.component.css']
})
export class Parent6Component implements OnInit {
public loc6var = '' ;
  constructor() { }

  ngOnInit() {
  }
  parent6(val) {
    this.loc6var = val;
  }

}
