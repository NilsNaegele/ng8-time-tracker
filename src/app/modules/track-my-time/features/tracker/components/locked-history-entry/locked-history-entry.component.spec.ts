import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedHistoryEntryComponent } from './locked-history-entry.component';

describe('LockedHistoryEntryComponent', () => {
  let component: LockedHistoryEntryComponent;
  let fixture: ComponentFixture<LockedHistoryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedHistoryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedHistoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
