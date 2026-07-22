import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSecuritySolutions } from './enterprise-security-solutions';

describe('EnterpriseSecuritySolutions', () => {
  let component: EnterpriseSecuritySolutions;
  let fixture: ComponentFixture<EnterpriseSecuritySolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseSecuritySolutions],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterpriseSecuritySolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
