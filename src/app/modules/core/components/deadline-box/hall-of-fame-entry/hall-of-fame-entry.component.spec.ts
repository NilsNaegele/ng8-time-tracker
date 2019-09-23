import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfFameEntryComponent } from './hall-of-fame-entry.component';

describe('HallOfFameEntryComponent', () => {
  let component: HallOfFameEntryComponent;
  let fixture: ComponentFixture<HallOfFameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallOfFameEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfFameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
