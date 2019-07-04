import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child62Component } from './child62.component';

describe('Child62Component', () => {
  let component: Child62Component;
  let fixture: ComponentFixture<Child62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
