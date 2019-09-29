import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ElapsedTimeService } from '../../services/elapsed-time.service';

import sharedSelectors, { State as SharedState } from '../../shared/reducers/root.reducer';
import trackerSelectors, { State as TrackerState } from './reducers/root.reducer';

import { HistoryGrouping } from '../../shared/models/history.model';
import { NgSelectValue } from '../../shared/models/shared.model';
import { TimerInfo } from '../../shared/models/timer.model';

import { hasMoreToDisplay, takeFrom } from './utils/display.utils';
import { map } from 'rxjs/operators';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  timerInfo$: Observable<TimerInfo>;
  activitiesOptions$: Observable<string[]>;
  details$: Observable<string | NgSelectValue | null>;
  elapsedTime$: Observable<string>;

  historyGroupings$: Observable<HistoryGrouping[]>;
  showLoadMoreButton$: Observable<boolean>;

  trackedDetails$: Observable<string[]>;
  constructor(private trackerStore: Store<TrackerState>,
              private sharedStore: Store<SharedState>,
              private activitiesService: ActivitiesService,
              private elapsedTimeService: ElapsedTimeService) { }

  ngOnInit() {
    this.timerInfo$ = this.trackerStore.select(trackerSelectors.timerInfo);
    this.details$ = this.timerInfo$.pipe(map(info => info.details ? info.details : null));
    this.elapsedTime$ = this.elapsedTimeService.getElapsedTime('00:00:00');

    const historyGroupings = this.sharedStore.select(sharedSelectors.historyGroupingsByDate);
    const entriesToShow = this.trackerStore.select(trackerSelectors.entriesToShow);
    const filteredGroupings = takeFrom(historyGroupings, entriesToShow);

    this.historyGroupings$ = filteredGroupings;
    this.showLoadMoreButton$ = hasMoreToDisplay(historyGroupings, filteredGroupings);

    this.trackedDetails$ = this.sharedStore.select(sharedSelectors.historyTrackedDetails);
    // this.activitiesOptions$ = this.sharedStore.select(sharedSelectors.activitiesOptions);
    this.activitiesOptions$ = this.activitiesService.getActivitiesOptions();
    // console.log(this.activitiesOptions$);
  }
}
