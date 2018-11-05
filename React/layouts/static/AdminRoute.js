import { ADMIN_BASE_URL } from './Config';

import {Dashboard, Customers, Products, CrudCustomer} from 'layouts/AdminComponents/Components';

import {
    Dashboard as DashboardIcon,
    PeopleOutline as CustomersIcon,
    Payment as PaymentIcon
} from "@material-ui/icons";

export const ROUTES = [
	{
		path: ADMIN_BASE_URL + "dashboard",
		component: Dashboard	
	},
    {
        path: ADMIN_BASE_URL + "customers",
        component: Customers    
    },
    {
        path: ADMIN_BASE_URL + "customers/new",
        component: CrudCustomer    
    },
    {
        path: ADMIN_BASE_URL + "products",
        component: Products    
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