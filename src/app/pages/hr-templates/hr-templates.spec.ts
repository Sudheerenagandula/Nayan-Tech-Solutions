import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTemplates } from './hr-templates';

describe('HrTemplates', () => {
  let component: HrTemplates;
  let fixture: ComponentFixture<HrTemplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrTemplates],
    }).compileComponents();

    fixture = TestBed.createComponent(HrTemplates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
