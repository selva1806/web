import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloginComponent } from './calogin.component';

describe('CaloginComponent', () => {
  let component: CaloginComponent;
  let fixture: ComponentFixture<CaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
