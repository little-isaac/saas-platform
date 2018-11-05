import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import AdminRoot from './layouts/root/Admin';
import AdminStore from "Store/AdminStore";

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
        <Provider store={AdminStore}>
            <Admin />
        </Provider>,
        document.getElementById("root"));
}