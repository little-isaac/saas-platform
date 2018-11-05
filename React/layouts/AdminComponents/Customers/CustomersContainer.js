import { connect } from "react-redux";
import Customers from "./Customers";

import { CustomersReducer } from "Reducers/Admin/CustomersReducer";
import { getCustomers } from "Actions/Admin/CustomersActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Customer: state.Customer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCustomers: () => {
			dispatch(getCustomers());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(Customers));
