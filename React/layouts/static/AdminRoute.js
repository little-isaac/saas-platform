import { ADMIN_BASE_URL } from './Config';

import Dashboard from '../AdminComponents/Dashboard';

import {
    Dashboard as DashboardIcon,
    PeopleOutline as CustomersIcon,
    Payment as PaymentIcon
} from "@material-ui/icons";

export const ROUTES = [
	{
		path: ADMIN_BASE_URL + "dashboard",
		component: Dashboard	
	}
];

export const SIDEBAR_NAV_LINKS = [
    {
        to: ADMIN_BASE_URL + "dashboard",
        primary: "Dashboard",
        icon: DashboardIcon
    },
    {
        to: ADMIN_BASE_URL + "customers",
        primary: "Customers",
        icon: CustomersIcon
    },
    {
        to: ADMIN_BASE_URL + "products",
        primary: "Products",
        icon: PaymentIcon
    },
    {
        is_divider: true
    }
];