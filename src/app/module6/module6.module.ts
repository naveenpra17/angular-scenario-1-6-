import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child61Component} from '../module6/child61/child61.component';
import { Child62Component } from '../module6/child62/child62.component';
import { Parent6Component } from '../module6/parent6/parent6.component';
@NgModule({
  declarations: [Child61Component , Child62Component , Parent6Component],
  imports: [
    CommonModule
  ],
  exports : [
    Child61Component , Child62Component , Parent6Component
  ]
})
export class Module6Module { }
