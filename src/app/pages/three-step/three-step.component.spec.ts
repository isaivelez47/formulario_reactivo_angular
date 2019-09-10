import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStepComponent } from './three-step.component';

describe('ThreeStepComponent', () => {
  let component: ThreeStepComponent;
  let fixture: ComponentFixture<ThreeStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
