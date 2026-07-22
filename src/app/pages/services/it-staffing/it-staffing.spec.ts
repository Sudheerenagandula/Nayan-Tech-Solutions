import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffing } from './it-staffing';

describe('ItStaffing', () => {
  let component: ItStaffing;
  let fixture: ComponentFixture<ItStaffing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItStaffing],
    }).compileComponents();

    fixture = TestBed.createComponent(ItStaffing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
