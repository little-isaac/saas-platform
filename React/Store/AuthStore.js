import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import Login from 'Reducers/Auth/LoginReducer';
import Register from 'Reducers/Auth/RegisterReducer';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const logger = createLogger({
  // ...options
});

const rootReducer = combineReducers({
  Login,
  Register,
  form
});

export default createStore(rootReducer,{},applyMiddleware(logger,thunk));