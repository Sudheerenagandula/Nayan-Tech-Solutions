import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItNonItStaffing } from './it-non-it-staffing';

describe('ItNonItStaffing', () => {
  let component: ItNonItStaffing;
  let fixture: ComponentFixture<ItNonItStaffing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItNonItStaffing],
    }).compileComponents();

    fixture = TestBed.createComponent(ItNonItStaffing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
