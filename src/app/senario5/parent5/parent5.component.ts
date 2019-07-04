import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {
 @Output() public parent5var = new EventEmitter();
 public name;
  parent5fun(val) {
    this.parent5var.emit(val);
    this.name = val;
  }
  constructor() { }

  ngOnInit() {
  }

}
