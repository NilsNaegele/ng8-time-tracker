import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as actions from '../actions/history.actions';

import { UpdatePayload } from '../models/history.model';

export interface HistoryEntity {
  id: string;
  details: string;
  activity: string;
  startTime: number;
  endTime: number;
}

export interface State extends EntityState<HistoryEntity> {
  loading: boolean;
}

export const adapter: EntityAdapter<HistoryEntity> = createEntityAdapter<HistoryEntity>();
const initialState: State = adapter.getInitialState({
  loading: false
});

const getUpdatedState = (payload: UpdatePayload, currentState: State): State => {
  const { itemId: id, ...changes } = payload;
  return adapter.updateOne({
    id,
    changes
  }, currentState);
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_NEW_HISTORY_ITEM: {
      return adapter.addOne(action.item, state);
    }
    case actions.LOAD_HISTORY_ITEMS: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.LOAD_HISTORY_ITEMS_SUCCEEDED: {
      const newState = adapter.addAll(action.items, state);
      return {
        ...newState,
        loading: false
      };
    }
    case actions.REMOVE_HISTORY_ITEM_SUCCEEDED: {
      return adapter.removeOne(action.itemId, state);
    }
    case actions.UPDATE_DETAILS_SUCCEEDED: {
      return getUpdatedState(action.payload, state);
    }
    case actions.UPDATE_ACTIVITY_SUCCEEDED: {
      return getUpdatedState(action.payload, state);
    }
    case actions.UPDATE_ELAPSED_TIME_SUCCEEDED: {
      return getUpdatedState(action.payload, state);
    }
    default: {
      return state;
    }
  }
}


