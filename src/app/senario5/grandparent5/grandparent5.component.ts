import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent5',
  templateUrl: './grandparent5.component.html',
  styleUrls: ['./grandparent5.component.css']
})
export class Grandparent5Component implements OnInit {
   public recieved = "";
    grand5fun(val) {
      console.log(val);
      this.recieved = val;
    }

  constructor() { }

  ngOnInit() {
  }

}
