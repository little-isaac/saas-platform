import { ADMIN_BASE_URL,BASE_URL } from './Config';
// import { Login, Register } from '../AuthComponents';

import Login from '../AuthComponents/Login';
import Register from '../AuthComponents/Register';

export const ROUTES = [
	{
		path: ADMIN_BASE_URL + "login",
		component: Login	
	},
	{
		path: BASE_URL + "login",
		component: Login	
	},
	{
		path: BASE_URL + "register",
		component: Register	
	},
];