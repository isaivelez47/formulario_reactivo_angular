import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTreeComponent } from './step-tree.component';

describe('StepTreeComponent', () => {
  let component: StepTreeComponent;
  let fixture: ComponentFixture<StepTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
