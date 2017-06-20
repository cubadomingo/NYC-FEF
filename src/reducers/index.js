import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import scholarshipsReducer from 'reducers/scholarships';
import eventsReducer from 'reducers/events';
import authenticateReducer from 'reducers/authentication';

const rootReducer = combineReducers({
  form: formReducer,
  events: eventsReducer,
  scholarships: scholarshipsReducer,
  authenticate: authenticateReducer,
});

export default rootReducer;
