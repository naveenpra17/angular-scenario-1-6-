import { Component, OnInit } from '@angular/core';
// import { BridgeService } from '../bridge.service';
import { BridgeServiceService } from '../services/bridge-service.service';


@Component({
  selector: 'app-child71',
  templateUrl: './child71.component.html',
  styleUrls: ['./child71.component.css'],
})
export class Child71Component implements OnInit {
  public gotvalue: string;

  constructor(private bridgeservice: BridgeServiceService) { }
  ngOnInit() {
  }


  valuepush(value) {
    console.log('sss');
    this.bridgeservice.getMethod(value);
  }


}
