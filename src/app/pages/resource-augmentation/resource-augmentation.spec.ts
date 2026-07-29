import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAugmentation } from './resource-augmentation';

describe('ResourceAugmentation', () => {
  let component: ResourceAugmentation;
  let fixture: ComponentFixture<ResourceAugmentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceAugmentation],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceAugmentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
