import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {
  @Output() public child5var = new EventEmitter();
  clicking(val) {
   this.child5var.emit(val);
  }
  constructor() { }

  ngOnInit() {
  }

}
