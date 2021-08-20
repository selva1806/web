import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinkComponent } from './clink.component';

describe('ClinkComponent', () => {
  let component: ClinkComponent;
  let fixture: ComponentFixture<ClinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
