import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child61',
  templateUrl: './child61.component.html',
  styleUrls: ['./child61.component.css']
})
export class Child61Component implements OnInit {

  @Output() public galaxy = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  childmethod(val){
    this.galaxy.emit(val);
  }

}
