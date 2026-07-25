import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCompliance } from './payroll-compliance';

describe('PayrollCompliance', () => {
  let component: PayrollCompliance;
  let fixture: ComponentFixture<PayrollCompliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollCompliance],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollCompliance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
