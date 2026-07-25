import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingChecklist } from './onboarding-checklist';

describe('OnboardingChecklist', () => {
  let component: OnboardingChecklist;
  let fixture: ComponentFixture<OnboardingChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingChecklist],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingChecklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
