import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from 'reducers/app';
import authenticateReducer from 'reducers/authentication';

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
