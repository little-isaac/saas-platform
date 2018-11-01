import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import AdminRoot from './root/Admin';

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

if (document.getElementById('root')) {
    render(
    	<Admin />,
        document.getElementById('root')
        );
}