import { BASE_URL } from './Config';

import Dashboard from '../AdminComponents/Dashboard';

export const ROUTES = [
	{
		path: BASE_URL + "/dashboard",
		component: Dashboard	
	}
];