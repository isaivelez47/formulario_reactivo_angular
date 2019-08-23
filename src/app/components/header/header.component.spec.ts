import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  /*
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */

  it('el tabActivo debe estar definido', () => {
    const header = new HeaderComponent();
    var tab = header.tabActivo;
    expect(tab).toBeDefined();
  });

  it('Cambiar al  segundo tab', () => {
    const header = new HeaderComponent();
    header.cambiarTab(1);
    var tab = header.tabActivo;
    expect(tab).toEqual(1);
  });

});
