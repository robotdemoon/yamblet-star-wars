import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExternoComponent } from './nav-externo.component';

describe('NavExternoComponent', () => {
  let component: NavExternoComponent;
  let fixture: ComponentFixture<NavExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
