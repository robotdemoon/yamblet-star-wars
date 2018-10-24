import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesInformacionComponent } from './naves-informacion.component';

describe('NavesInformacionComponent', () => {
  let component: NavesInformacionComponent;
  let fixture: ComponentFixture<NavesInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavesInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
