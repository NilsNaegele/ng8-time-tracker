import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeActivityGraphComponent } from './time-activity-graph.component';

describe('TimeActivityGraphComponent', () => {
  let component: TimeActivityGraphComponent;
  let fixture: ComponentFixture<TimeActivityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeActivityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeActivityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
