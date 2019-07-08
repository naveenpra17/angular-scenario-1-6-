import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child61Component } from './child61.component';

describe('Child61Component', () => {
  let component: Child61Component;
  let fixture: ComponentFixture<Child61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
