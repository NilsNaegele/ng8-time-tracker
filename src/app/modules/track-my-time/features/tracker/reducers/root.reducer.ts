import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDisplay from './display.reducer';
import * as fromTimer from './timer.reducer';

import { TimerInfo } from '../../../shared/models/timer.model';

export interface TrackerState {
  timer: fromTimer.State;
  display: fromDisplay.State;
}

export interface State {
  tracker: TrackerState;
}

export const reducers: ActionReducerMap<TrackerState, any> = {
  timer: fromTimer.reducer,
  display: fromDisplay.reducer
};

export const selectTrackerState = createFeatureSelector<TrackerState>('tracker');
export const selectTimer = createSelector(selectTrackerState, state => state.timer);
export const selectDisplay = createSelector(selectTrackerState, state => state.display);

export const selectTimerInfo = createSelector(selectTimer, timer => timer as TimerInfo);

export const selectEntriesToShow = createSelector(selectDisplay, display => display.entriesToShow);

const trackerSelectors = {
  timerInfo: selectTimerInfo,
  entriesToShow: selectEntriesToShow
};

export default trackerSelectors;

