import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedetails2Component } from './homedetails2.component';

describe('Homedetails2Component', () => {
  let component: Homedetails2Component;
  let fixture: ComponentFixture<Homedetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homedetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
