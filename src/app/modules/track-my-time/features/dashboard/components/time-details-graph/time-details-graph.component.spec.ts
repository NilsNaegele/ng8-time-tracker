import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDetailsGraphComponent } from './time-details-graph.component';

describe('TimeDetailsGraphComponent', () => {
  let component: TimeDetailsGraphComponent;
  let fixture: ComponentFixture<TimeDetailsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDetailsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDetailsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
