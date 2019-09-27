import * as actions from '../actions/timer.actions';

export interface State {
  details: string;
  activity: string;
  startTime: number;
}

const initialState: State = {
  details: '',
  activity: '',
  startTime: 0
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.RESET_TIMER: {
      return initialState;
    }
    case actions.SET_DETAILS: {
      return {
        ...state,
        details: action.details
      };
    }
    case actions.SET_ACTIVITY: {
      return {
        ...state,
        activity: action.activity
      };
    }
    case actions.SET_START_TIME: {
      return {
        ...state,
        startTime: action.startTime
      };
    }
    case actions.SET_TIMER_INFO: {
      return {
        ...state,
        ...action.info
      };
    }
    default: {
      return state;
    }
  }
}
