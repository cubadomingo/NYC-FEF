import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import reducer from '../reducers/index'

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(promise, logger),
)

export default store;
