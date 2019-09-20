import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersDisplayComponent } from './timers-display.component';

describe('TimersDisplayComponent', () => {
  let component: TimersDisplayComponent;
  let fixture: ComponentFixture<TimersDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
