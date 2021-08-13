import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BthomeComponent } from './bthome.component';

describe('BthomeComponent', () => {
  let component: BthomeComponent;
  let fixture: ComponentFixture<BthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
