import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDateGraphComponent } from './time-date-graph.component';

describe('TimeDateGraphComponent', () => {
  let component: TimeDateGraphComponent;
  let fixture: ComponentFixture<TimeDateGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDateGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
