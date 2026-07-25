import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EorVsPeo } from './eor-vs-peo';

describe('EorVsPeo', () => {
  let component: EorVsPeo;
  let fixture: ComponentFixture<EorVsPeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EorVsPeo],
    }).compileComponents();

    fixture = TestBed.createComponent(EorVsPeo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
