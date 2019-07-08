import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child5Component } from '../module5/child5/child5.component';
import {Grandparent5Component} from '../module5/grandparent5/grandparent5.component';
import { Parent5Component } from '../module5/parent5/parent5.component';
@NgModule({
  declarations: [Child5Component , Grandparent5Component , Parent5Component],
  imports: [
    CommonModule
  ],
  exports :[
    Child5Component , 
    Grandparent5Component , 
    Parent5Component
  ]
})
export class Module5Module { }
