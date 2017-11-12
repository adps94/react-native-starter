
import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import user from './user';
import list from './list';
import tab from './tabs';

export default combineReducers({

  tab,
  drawer,
  route,
  user,
  list,

});
