import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../services/bridge-service.service';

// import { BridgeService } from '../bridge.service';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child72',
  templateUrl: './child72.component.html',
  styleUrls: ['./child72.component.css'],
  // providers: [BridgeService]
})
export class Child72Component implements OnInit {
  public messageFromSubject = '';
  constructor(private second: BridgeServiceService) {

  }

  ngOnInit() {
    this.second.sendMessage().subscribe(
      (messages) => {
        this.messageFromSubject = messages;
      }
    );

  }

}
