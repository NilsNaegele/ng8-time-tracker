import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, combineLatest  } from 'rxjs';

import trackerSelectors, { TrackerState } from '../features/tracker/reducers/root.reducer';

import { TimerInfo } from '../shared/models/timer.model';

import { formatElapsedTime } from '../shared/utils/date.utils';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElapsedTimeService {

  currentTime$: Observable<number>;
  constructor(private trackerStore: Store<TrackerState>) { }

  getCurrentTime(): Observable<number> {
    if (!this.currentTime$) {
      this.currentTime$ = interval(1000).pipe(map(() => new Date().getTime()));
    }
    return this.currentTime$;
  }

  getElapsedTime(inactiveValue: string): Observable<string> {
    const timerInfo$ = this.trackerStore.select(trackerSelectors.timerInfo);
    const currentTime$ = this.getCurrentTime();

    return combineLatest(currentTime$, timerInfo$, (currentTime: number, timerInfo: TimerInfo) => {
      return formatElapsedTime(timerInfo.startTime, currentTime, inactiveValue);
    });
  }
}
