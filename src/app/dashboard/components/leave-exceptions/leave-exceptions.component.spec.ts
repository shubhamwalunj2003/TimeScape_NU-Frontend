import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveExceptionsComponent } from './leave-exceptions.component';

describe('LeaveExceptionsComponent', () => {
  let component: LeaveExceptionsComponent;
  let fixture: ComponentFixture<LeaveExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveExceptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
