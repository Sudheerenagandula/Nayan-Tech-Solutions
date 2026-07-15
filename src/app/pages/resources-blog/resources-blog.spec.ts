import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesBlog } from './resources-blog';

describe('ResourcesBlog', () => {
  let component: ResourcesBlog;
  let fixture: ComponentFixture<ResourcesBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
