import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteHiring } from './remote-hiring';

describe('RemoteHiring', () => {
  let component: RemoteHiring;
  let fixture: ComponentFixture<RemoteHiring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteHiring],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteHiring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
