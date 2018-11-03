import { ADMIN_BASE_URL,BASE_URL } from './Config';
// import { Login, Register } from '../AuthComponents';

import Login from 'layouts/AuthComponents/Login/LoginContainer';
import Register from 'layouts/AuthComponents/Register';
import LoginPage from 'layouts/AuthComponents/LoginPage';

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
	{
		path: BASE_URL + "login_page",
		component: LoginPage	
	},
];