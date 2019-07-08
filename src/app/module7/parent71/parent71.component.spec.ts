import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent71Component } from './parent71.component';

describe('Parent71Component', () => {
  let component: Parent71Component;
  let fixture: ComponentFixture<Parent71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
