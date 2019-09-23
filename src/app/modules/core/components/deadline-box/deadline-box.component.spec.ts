import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineBoxComponent } from './deadline-box.component';

describe('DeadlineBoxComponent', () => {
  let component: DeadlineBoxComponent;
  let fixture: ComponentFixture<DeadlineBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlineBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
