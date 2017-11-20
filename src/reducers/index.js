import { combineReducers } from 'redux';

import auth from './auth';
import contacts from './contacts';
import ui from './ui';

export default combineReducers({
  auth,
  contacts,
  ui
});