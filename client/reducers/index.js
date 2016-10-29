import { combineReducers } from 'redux';
import header from './header';
import practice from './practice';

const reducers = combineReducers({
  header,
  practice
});

export default reducers;