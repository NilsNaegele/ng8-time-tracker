import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { HistoryService } from '../services/history.service';
import { TimerService } from '../services/timer.service';

import * as appActions from '../../../actions/app.actions';
import * as timerActions from '../../../shared/actions/timer.actions';

@Injectable({
  providedIn: 'root'
})
export class TimerEffects {

  constructor(private actions$: Actions, private historyService: HistoryService, private timerService: TimerService) { }

  @Effect() saveTimerInfo$ =
    this.actions$
      .pipe(
        ofType(timerActions.SAVE_TIMER_INFO),
        map(action => action as timerActions.SaveTimerInfo),
        map(action => action.info),
        switchMap(addTimerInfo => this.historyService.saveTimerInfo(addTimerInfo)
          .pipe(
            mergeMap(item => [
              new timerActions.SaveTimerInfoSucceeded(item),
              new timerActions.ResetTimer()
            ]),
            catchError(err => of(new appActions.Error(timerActions.SAVE_TIMER_INFO, err.message))))));

  @Effect() cancelTimer$ =
    this.actions$
      .pipe(
        ofType(timerActions.CANCEL_TIMER),
        map(() => new timerActions.ResetTimer()));

  @Effect() loadTimerInfo$ =
    this.actions$
      .pipe(
        ofType(timerActions.LOAD_TIMER_INFO),
        map(action => action as timerActions.LoadTimerInfo),
        map(action => action.userId),
        switchMap(userId => this.timerService.getTimerInfo(userId)
          .pipe(
            map(data => new timerActions.SetTimerInfo(data)),
            catchError(err => of(new appActions.Error(timerActions.LOAD_TIMER_INFO, err.message))))));
}
