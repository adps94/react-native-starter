import type { Action } from './types';

export const CHANGE_TAB = 'CHANGE_TAB';

export function changeTab(state:string):Action {
  return {
    type: CHANGE_TAB,
    payload: state,
  };
}
