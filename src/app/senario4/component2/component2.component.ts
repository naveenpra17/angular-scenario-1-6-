import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

   @Output() public c2p = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
   onfire() {
     this. c2p.emit('naveen emitter');
   }
}
