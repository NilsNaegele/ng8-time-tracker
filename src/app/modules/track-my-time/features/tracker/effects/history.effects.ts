import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HistoryService } from '../services/history.service';

import * as appActions from '../../../actions/app.actions';
import * as historyActions from '../../../shared/actions/history.actions';
import * as timerActions from '../../../shared/actions/timer.actions';

@Injectable({
  providedIn: 'root'
})
export class HistoryEffects {

  constructor(private actions$: Actions, private historyService: HistoryService) { }

  @Effect() loadHistoryItems$ =
    this.actions$
      .pipe(
        ofType(historyActions.LOAD_HISTORY_ITEMS),
        map(action => action as historyActions.LoadHistoryItems),
        switchMap(action => this.historyService.getHistoryList(action.userId)
          .pipe(
            map(data => new historyActions.LoadHistoryItemsSucceeded(data)),
            catchError(err => of(new appActions.Error(historyActions.LOAD_HISTORY_ITEMS, err.message))))));

  @Effect() saveTimerInfoSucceeded$ =
    this.actions$
      .pipe(
        ofType(timerActions.SAVE_TIMER_INFO_SUCCEEDED),
        map(action => action as timerActions.SaveTimerInfoSucceeded),
        map(action => new historyActions.AddNewHistoryItem(action.item)));

  @Effect() removeHistoryItem$ =
    this.actions$
      .pipe(
        ofType(historyActions.REMOVE_HISTORY_ITEM),
        map(action => action as historyActions.RemoveHistoryItem),
        switchMap(action => this.historyService.deleteHistoryItem(action.userId, action.itemId)
          .pipe(
            map(itemId => new historyActions.RemoveHistoryItemSucceeded(itemId)),
            catchError(err => of(new appActions.Error(historyActions.REMOVE_HISTORY_ITEM, err.message))))));

  @Effect() updateGame$ =
    this.actions$
      .pipe(
        ofType(historyActions.UPDATE_DETAILS),
        map(action => action as historyActions.UpdateDetails),
        switchMap(action => this.historyService.updateGame(action.userId, action.payload)
          .pipe(
            map(payload => new historyActions.UpdateDetailsSucceeded(payload)),
            catchError(err => of(new appActions.Error(historyActions.UPDATE_DETAILS, err.message))))));

  @Effect() updatePlatform$ =
    this.actions$
      .pipe(
        ofType(historyActions.UPDATE_ACTIVITY),
        map(action => action as historyActions.UpdateActivity),
        switchMap(action => this.historyService.updatePlatform(action.userId, action.payload)
          .pipe(
            map(payload => new historyActions.UpdateActivitySucceeded(payload)),
            catchError(err => of(new appActions.Error(historyActions.UPDATE_ACTIVITY, err.message))))));

  @Effect() updateElapsedTime$ =
    this.actions$
      .pipe(
        ofType(historyActions.UPDATE_ELAPSED_TIME),
        map(action => action as historyActions.UpdateElapsedTime),
        switchMap(action => this.historyService.updateElapsedTime(action.userId, action.payload)
          .pipe(
            map(payload => new historyActions.UpdateElapsedTimeSucceeded(payload)),
            catchError(err => of(new appActions.Error(historyActions.UPDATE_ELAPSED_TIME, err.message))))));
}
