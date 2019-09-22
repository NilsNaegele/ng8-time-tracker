import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceTimerComponent } from './sauce-timer.component';

describe('SauceTimerComponent', () => {
  let component: SauceTimerComponent;
  let fixture: ComponentFixture<SauceTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauceTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
