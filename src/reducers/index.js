import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticateReducer from 'reducers/authentication';

const rootReducer = combineReducers({
  form: formReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
