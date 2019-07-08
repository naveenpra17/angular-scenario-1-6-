import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child71Component } from '../module7/child71/child71.component';
import { Child72Component} from '../module7/child72/child72.component';
import { Parent71Component} from '../module7/parent71/parent71.component';
import {BridgeServiceService} from './services/bridge-service.service';
@NgModule({
  declarations: [Child71Component, Child72Component, Parent71Component],
  imports: [
    CommonModule
  ],
  exports : [
    
    Parent71Component

  ],
  providers: [
    BridgeServiceService
  ]
})
export class Module7Module { }
