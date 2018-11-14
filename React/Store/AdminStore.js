import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

import GetAddress from 'Reducers/Address/GetAddressReducer';

import GetCustomers from 'Reducers/Admin/Customers/GetCustomersReducer';
import CreateCustomer from 'Reducers/Admin/Customers/CreateCustomerReducer';
import UpdateCustomer from 'Reducers/Admin/Customers/UpdateCustomerReducer';

import GetProducts from 'Reducers/Admin/Products/GetProductsReducer';
import CreateProduct from 'Reducers/Admin/Products/CreateProductReducer';
import UpdateProduct from 'Reducers/Admin/Products/UpdateProductReducer';

import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const logger = createLogger({
    // ...options
});

const rootReducer = combineReducers({
    form,
    GetAddress,
    GetCustomers,
    CreateCustomer,
    UpdateCustomer,
    GetProducts,
    CreateProduct,
    UpdateProduct
});

export default createStore(rootReducer, {}, applyMiddleware(logger, thunk));