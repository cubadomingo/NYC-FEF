import { combineReducers } from 'redux';
import activityReducer from './activity';
import appReducer from './app';

const rootReducer = combineReducers({
  app: appReducer,
  activity: activityReducer,
});

export default rootReducer;
