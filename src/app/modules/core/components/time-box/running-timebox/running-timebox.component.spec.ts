import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningTimeboxComponent } from './running-timebox.component';

describe('RunningTimeboxComponent', () => {
  let component: RunningTimeboxComponent;
  let fixture: ComponentFixture<RunningTimeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningTimeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningTimeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
