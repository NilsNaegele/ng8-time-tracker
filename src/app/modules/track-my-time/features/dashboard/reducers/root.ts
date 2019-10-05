import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { eachDayOfInterval } from 'date-fns';

import * as fromDateRange from './date-range';

export interface DashboardState {
  dateRange: fromDateRange.State;
}

export interface State {
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<DashboardState, any> = {
  dateRange: fromDateRange.reducer
};

export const selectDashboardFeature = createFeatureSelector<DashboardState>('dashboard');
export const selectDateRange = createSelector(selectDashboardFeature, state => state.dateRange);

export const selectDateList = createSelector(selectDateRange, dateRange => {
  return eachDayOfInterval({start: dateRange.startDay, end: dateRange.endDay});
});
export const selectRangeType = createSelector(selectDateRange, dateRange => dateRange.type);

const dashboardSelectors = {
  dateList: selectDateList,
  rangeType: selectRangeType
};

export default dashboardSelectors;
