import type { Action } from '../actions/types';
import { CHANGE_TAB } from '../actions/tab';

export type State = {
    tabState: string
}

const initialState = {
  tabState: 'tab1',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === CHANGE_TAB) {
    return {
      ...state,
      tabState: action.payload,
    };
  }

  return state;
}
