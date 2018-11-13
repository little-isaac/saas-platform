import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import GetCustomers from 'Reducers/Admin/Customers/GetReducer';
import CreateCustomer from 'Reducers/Admin/Customers/CreateReducer';
import UpdateCustomer from 'Reducers/Admin/Customers/UpdateReducer';

import GetProducts from 'Reducers/Admin/Products/GetReducer';
import CreateProduct from 'Reducers/Admin/Products/CreateReducer';
import UpdateProduct from 'Reducers/Admin/Products/UpdateReducer';

import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const logger = createLogger({
  // ...options
});

const rootReducer = combineReducers({
  form,
  GetCustomers,
  CreateCustomer,
  UpdateCustomer,
  GetProducts,
  CreateProduct,
  UpdateProduct
});

export default createStore(rootReducer,{},applyMiddleware(logger,thunk));