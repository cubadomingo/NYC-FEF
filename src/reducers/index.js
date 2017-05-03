import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app';
import authenticateReducer from './authentication';

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
