import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { TimePipe } from './pipes/time.pipe';

import { reducers1 } from './reducers/root.reducer';
import { TrackerSideNavComponent } from './components/tracker-side-nav/tracker-side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    StoreModule.forFeature('shared', reducers1),
  ],
  declarations: [
    ElapsedTimePipe,
    TimePipe,
    PluralizePipe,
    TrackerSideNavComponent
  ],
  exports: [
    ElapsedTimePipe,
    TimePipe,
    PluralizePipe,
    TrackerSideNavComponent
  ]
})
export class SharedTrackerModule { }
