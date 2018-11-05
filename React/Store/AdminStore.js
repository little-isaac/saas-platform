import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import CrudCustomer from 'Reducers/Admin/CrudCustomerReducer';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const logger = createLogger({
  // ...options
});

const rootReducer = combineReducers({
  CrudCustomer,
  form
});

export default createStore(rootReducer,{},applyMiddleware(logger,thunk));