import { combineReducers } from 'redux';
import categoryReducer from './category';

const rootReducer = combineReducers({
  fuckface: categoryReducer,
});

export default rootReducer;
