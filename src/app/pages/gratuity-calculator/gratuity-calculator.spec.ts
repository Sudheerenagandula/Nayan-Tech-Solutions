import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratuityCalculator } from './gratuity-calculator';

describe('GratuityCalculator', () => {
  let component: GratuityCalculator;
  let fixture: ComponentFixture<GratuityCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GratuityCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(GratuityCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
