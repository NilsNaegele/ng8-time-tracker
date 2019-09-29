import { NgModule } from '@angular/core';
import { TrackerComponent } from './tracker.component';
import { TimerTrackerComponent } from './components/timer/timer.component';
import { HistoryEntryComponent } from './components/history-entry/history-entry.component';
import { HistoryComponent } from './components/history/history.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { LockedHistoryEntryComponent } from './components/locked-history-entry/locked-history-entry.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TrackerRoutingModule } from './tracker-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TimerEffects } from './effects/timer.effects';
import { HistoryEffects } from './effects/history.effects';
import { ActivitiesEffects } from './effects/activities.effects';
import { SharedTrackerModule } from '../../shared/shared-tracker.module';



@NgModule({
  declarations: [
      TrackerComponent,
      TimerTrackerComponent,
      HistoryEntryComponent,
      HistoryComponent,
      LoadMoreComponent,
      LockedHistoryEntryComponent
    ],
  imports: [
    SharedModule,
    SharedTrackerModule,
    TrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers),
    EffectsModule.forFeature([
      TimerEffects,
      HistoryEffects,
      ActivitiesEffects
    ]),
  ]
})
export class TrackerModule { }
