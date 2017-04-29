import { combineReducers } from 'redux';
import activityReducer from './activity';
import appReducer from './app';
import authenticateReducer from './authentication';

const rootReducer = combineReducers({
  app: appReducer,
  activity: activityReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
