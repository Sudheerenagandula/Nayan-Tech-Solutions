import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentTrends } from './recruitment-trends';

describe('RecruitmentTrends', () => {
  let component: RecruitmentTrends;
  let fixture: ComponentFixture<RecruitmentTrends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentTrends],
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitmentTrends);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
