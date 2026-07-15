import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersTeaser } from './careers-teaser';

describe('CareersTeaser', () => {
  let component: CareersTeaser;
  let fixture: ComponentFixture<CareersTeaser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersTeaser],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersTeaser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
