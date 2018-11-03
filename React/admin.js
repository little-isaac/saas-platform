import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AdminRoot from './layouts/root/Admin';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

const store = createStore(rootReducer);

class Admin extends React.Component {
    render() {
        return (
        	<div>
	        	<BrowserRouter> 
					<AdminRoot/>
				</BrowserRouter>
            </div>
            
        );
    }
}

if (document.getElementById("root")) {
    render(
        <Provider store={store}>
            <Admin />
        </Provider>,
        document.getElementById("root"));
}