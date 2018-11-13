import { ADMIN_BASE_URL } from './Config';

import { 
         ViewCustomers,
         CreateCustomer,
         UpdateCustomer,
         ViewProducts,
         CreateProduct,
         UpdateProduct,
         Dashboard,
         Products 
        } from 'layouts/AdminComponents/Components';

import {
    Dashboard as DashboardIcon,
    PeopleOutline as CustomersIcon,
    Payment as PaymentIcon
} from "@material-ui/icons";

export const ROUTES = [
    {
        path: ADMIN_BASE_URL + "customers",
        component: ViewCustomers    
    },
    {
        path: ADMIN_BASE_URL + "customers/new",
        component: CreateCustomer    
    },
    {
        path: ADMIN_BASE_URL + "customers/:id",
        component: UpdateCustomer    
    },
    {
        path: ADMIN_BASE_URL + "products",
        component: ViewProducts    
    },
    {
        path: ADMIN_BASE_URL + "products/new",
        component: CreateProduct    
    },
    {
        path: ADMIN_BASE_URL + "products/:id",
        component: UpdateProduct    
    },
    {
	path: ADMIN_BASE_URL + "dashboard",
	component: Dashboard	
    },
    
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