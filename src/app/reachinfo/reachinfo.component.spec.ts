import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachinfoComponent } from './reachinfo.component';

describe('ReachinfoComponent', () => {
  let component: ReachinfoComponent;
  let fixture: ComponentFixture<ReachinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
