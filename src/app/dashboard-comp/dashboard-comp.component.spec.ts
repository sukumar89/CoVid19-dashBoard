import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCompComponent } from './dashboard-comp.component';

describe('DashboardCompComponent', () => {
  let component: DashboardCompComponent;
  let fixture: ComponentFixture<DashboardCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
