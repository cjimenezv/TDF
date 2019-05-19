import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myboot1Component } from './myboot1.component';

describe('Myboot1Component', () => {
  let component: Myboot1Component;
  let fixture: ComponentFixture<Myboot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myboot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myboot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
