import { connect } from "react-redux";
import Customers from "./Customers";

import { CustomersReducer } from "Reducers/Admin/CustomersReducer";
import { getCustomers, deleteCustomer } from "Actions/Admin/CustomersActions";

import { withStyles } from "@material-ui/core/styles";

import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

const mapStateToProps = state => {
	return {
		Customers: state.Customers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCustomers: () => {
			dispatch(getCustomers());
		},
		deleteCustomer: (data_id) => {
			dispatch(deleteCustomer(data_id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(tableStyle)(Customers));
