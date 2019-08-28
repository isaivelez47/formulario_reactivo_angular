import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItauButtonComponent } from './itau-button.component';

describe('ItauButtonComponent', () => {
  let component: ItauButtonComponent;
  let fixture: ComponentFixture<ItauButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItauButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItauButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
