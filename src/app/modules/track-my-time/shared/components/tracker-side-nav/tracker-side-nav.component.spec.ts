import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerSideNavComponent } from './tracker-side-nav.component';

describe('TrackerSideNavComponent', () => {
  let component: TrackerSideNavComponent;
  let fixture: ComponentFixture<TrackerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
