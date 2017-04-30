import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activityReducer from './activity';
import appReducer from './app';
import authenticateReducer from './authentication';

const rootReducer = combineReducers({
  app: appReducer,
  activity: activityReducer,
  form: formReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
