import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementServices } from './management-services';

describe('ManagementServices', () => {
  let component: ManagementServices;
  let fixture: ComponentFixture<ManagementServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementServices],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
