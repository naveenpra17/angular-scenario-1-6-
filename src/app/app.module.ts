import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { from } from 'rxjs';
import { Component1Component as Scenario3Component1 } from './scenario3/component1/component1.component';
import { Component2Component as Scenario3Component2 } from './scenario3/component1/component2/component2.component';
import { Component1Component } from './senario4/component1/component1.component';
import { Component2Component } from './senario4/component2/component2.component';
import { Parent5Component } from './senario5/parent5/parent5.component';
import { Child5Component } from './senario5/child5/child5.component';
import { Grandparent5Component } from './senario5/grandparent5/grandparent5.component';
import { Parent6Component } from './senario6/parent6/parent6.component';
import { Child61Component } from './senario6/child61/child61.component';
import { Child62Component } from './senario6/child62/child62.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component1,
    Scenario3Component2,
    Component1Component,
    Component2Component,
    Parent5Component,
    Child5Component,
    Grandparent5Component,
    Parent6Component,
    Child61Component,
    Child62Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
