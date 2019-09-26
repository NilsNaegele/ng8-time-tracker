import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHistory from './history.reducer';
import * as fromActivities from './activities.reducer';
import * as fromProgress from './progress.reducer';
import * as fromTimer from './timer.reducer';

import { HistoryListItem } from '../models/history.model';
import { TimerInfo } from '../models/timer.model';
import { ProgressItem } from '../models/progress.model';

import { formatDate } from '../utils/date.utils';
import { getUniqueFrom } from '../utils/history-filter.utils';
import { getHistoryGroupingList, getHistoryListItemsMap } from '../utils/history.utils';

export interface SharedState {
  history: fromHistory.State;
  platforms: fromActivities.State;
  progress: fromProgress.State;
  timer: fromTimer.State;
}

export interface State {
  shared: SharedState;
}

export const reducers: ActionReducerMap<SharedState, any> = {
  history: fromHistory.reducer,
  platforms: fromActivities.reducer,
  progress: fromProgress.reducer,
  timer: fromTimer.reducer
};

export const selectSharedState = createFeatureSelector<SharedState>('shared');
export const selectHistory = createSelector(selectSharedState, state => state.history);
export const selectActivities = createSelector(selectSharedState, state => state.platforms);
export const selectProgress = createSelector(selectSharedState, state => state.progress);
export const selectTimer = createSelector(selectSharedState, state => state.timer);

export const { selectAll: selectAllProgress } = fromProgress.adapter.getSelectors(selectProgress);
export const selectDetailsProgress = createSelector(selectAllProgress,
  entities => entities.filter(entity => entity.endEntryId === '')
    .map(entity => entity as ProgressItem));
export const selectCompletedProgress = createSelector(selectAllProgress,
  entities => entities.filter(entity => entity.endEntryId !== '')
    .map(entity => entity as ProgressItem));

export const { selectAll: selectAllHistory } = fromHistory.adapter.getSelectors(selectHistory);
export const selectHistoryItems = createSelector(selectAllHistory, selectAllProgress,
  (historyEntries, progress) => historyEntries.map(
    historyEntry => <HistoryListItem>{
      ...historyEntry,
      dateRange: [
        new Date(historyEntry.startTime),
        new Date(historyEntry.endTime),
      ],
      locked: progress.some(x => x.startEntryId === historyEntry.id || x.endEntryId === historyEntry.id)
    }));
export const selectSortedHistoryItems = createSelector(selectHistoryItems, items => items.sort((a, b) => b.startTime - a.startTime));
export const selectHistoryGroupingsByDate = createSelector(selectSortedHistoryItems, items => {
  const historyListItemsMap = getHistoryListItemsMap(items, item => formatDate(item.dateRange[0]));
  return getHistoryGroupingList(historyListItemsMap);
});
export const selectHistoryGroupingsByPlatform = createSelector(selectSortedHistoryItems, items => {
  const historyListItemsMap = getHistoryListItemsMap(items, item => item.activity);
  return getHistoryGroupingList(historyListItemsMap);
});
export const selectHistoryGroupingsByGame = createSelector(selectSortedHistoryItems, items => {
  const historyListItemsMap = getHistoryListItemsMap(items, item => item.details);
  return getHistoryGroupingList(historyListItemsMap);
});
export const selectHistoryLoading = createSelector(selectHistory, history => history.loading);
export const selectTrackedDetails = createSelector(selectSortedHistoryItems, items => getUniqueFrom(items, item => item.game));

export const selectActivitiesOptions = createSelector(selectActivities, platforms => platforms.options);
export const selectActivitiesLoaded = createSelector(selectActivitiesOptions, platformOptions => platformOptions.length !== 0);

export const selectTimerInfo = createSelector(selectTimer, timer => timer as TimerInfo);

export const selectUserDataLoaded = createSelector(selectHistory, selectProgress, selectActivitiesLoaded,
  (history, progress, activitiesLoaded) => !history.loading && !progress.loading && activitiesLoaded);

const sharedSelectors = {
  historyGroupingsByDate: selectHistoryGroupingsByDate,
  historyGroupingsByPlatform: selectHistoryGroupingsByPlatform,
  historyGroupingsByGame: selectHistoryGroupingsByGame,
  historyLoading: selectHistoryLoading,
  historyTrackedDetails: selectTrackedDetails,
  activitiesOptions: selectActivitiesOptions,
  progressDetails: selectDetailsProgress,
  progressCompleted: selectCompletedProgress,
  timerInfo: selectTimerInfo,
  userDataLoaded: selectUserDataLoaded
};

export default sharedSelectors;
