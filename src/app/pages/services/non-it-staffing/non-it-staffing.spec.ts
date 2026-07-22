import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonItStaffing } from './non-it-staffing';

describe('NonItStaffing', () => {
  let component: NonItStaffing;
  let fixture: ComponentFixture<NonItStaffing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonItStaffing],
    }).compileComponents();

    fixture = TestBed.createComponent(NonItStaffing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
