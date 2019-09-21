import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSauceTimerComponent } from './about-sauce-timer.component';

describe('AboutSauceTimerComponent', () => {
  let component: AboutSauceTimerComponent;
  let fixture: ComponentFixture<AboutSauceTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSauceTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSauceTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
