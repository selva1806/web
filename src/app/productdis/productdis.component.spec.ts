import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdisComponent } from './productdis.component';

describe('ProductdisComponent', () => {
  let component: ProductdisComponent;
  let fixture: ComponentFixture<ProductdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
