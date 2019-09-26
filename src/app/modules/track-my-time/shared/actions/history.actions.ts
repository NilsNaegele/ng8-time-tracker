import { Action } from '@ngrx/store';

import { HistoryEntity } from '../reducers/history.reducer';

import {
    UpdateHistoryItemDetailsPayload, UpdateHistoryItemActivityPayload,
    UpdateHistoryItemTimesPayload
} from '../models/history.model';

export const ADD_NEW_HISTORY_ITEM = '[History] Add New History Item';
export class AddNewHistoryItem implements Action {
  readonly type = ADD_NEW_HISTORY_ITEM;
  constructor(public item: HistoryEntity) { }
}

export const LOAD_HISTORY_ITEMS = '[History] Load Items';
export class LoadHistoryItems implements Action {
  readonly type = LOAD_HISTORY_ITEMS;
  constructor(public userId: string) { }
}

export const LOAD_HISTORY_ITEMS_SUCCEEDED = '[History] Load Items Succeeded';
export class LoadHistoryItemsSucceeded implements Action {
  readonly type = LOAD_HISTORY_ITEMS_SUCCEEDED;
  constructor(public items: HistoryEntity[]) { }
}

export const REMOVE_HISTORY_ITEM = '[History] Remove Item';
export class RemoveHistoryItem implements Action {
  readonly type = REMOVE_HISTORY_ITEM;
  constructor(public userId: string, public itemId: string) { }
}

export const REMOVE_HISTORY_ITEM_SUCCEEDED = '[History] Remove Item Succeeded';
export class RemoveHistoryItemSucceeded implements Action {
  readonly type = REMOVE_HISTORY_ITEM_SUCCEEDED;
  constructor(public itemId: string) { }
}

export const UPDATE_DETAILS = '[History] Update Details';
export class UpdateDetails implements Action {
  readonly type = UPDATE_DETAILS;
  constructor(public userId: string, public payload: UpdateHistoryItemDetailsPayload) { }
}

export const UPDATE_DETAILS_SUCCEEDED = '[History] Update Details Succeeded';
export class UpdateDetailsSucceeded implements Action {
  readonly type = UPDATE_DETAILS_SUCCEEDED;
  constructor(public payload: UpdateHistoryItemDetailsPayload) { }
}

export const UPDATE_ACTIVITY = '[History] Update Activity';
export class UpdateActivity implements Action {
  readonly type = UPDATE_ACTIVITY;
  constructor(public userId: string, public payload: UpdateHistoryItemActivityPayload) { }
}

export const UPDATE_ACTIVITY_SUCCEEDED = '[History] Update Platform Succeeded';
export class UpdateActivitySucceeded implements Action {
  readonly type = UPDATE_ACTIVITY_SUCCEEDED;
  constructor(public payload: UpdateHistoryItemActivityPayload) { }
}

export const UPDATE_ELAPSED_TIME = '[History] Update Elapsed Time';
export class UpdateElapsedTime implements Action {
  readonly type = UPDATE_ELAPSED_TIME;
  constructor(public userId: string, public payload: UpdateHistoryItemTimesPayload) { }
}

export const UPDATE_ELAPSED_TIME_SUCCEEDED = '[History] Update Elapsed Time Succeeded';
export class UpdateElapsedTimeSucceeded implements Action {
  readonly type = UPDATE_ELAPSED_TIME_SUCCEEDED;
  constructor(public payload: UpdateHistoryItemTimesPayload) { }
}

export type All = AddNewHistoryItem |
  LoadHistoryItems |
  LoadHistoryItemsSucceeded |
  RemoveHistoryItem |
  RemoveHistoryItemSucceeded |
  UpdateDetails |
  UpdateDetailsSucceeded |
  UpdateActivity |
  UpdateActivitySucceeded |
  UpdateElapsedTime |
  UpdateElapsedTimeSucceeded;
