import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxSelectorComponent } from './timebox-selector.component';

describe('TimeboxSelectorComponent', () => {
  let component: TimeboxSelectorComponent;
  let fixture: ComponentFixture<TimeboxSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
