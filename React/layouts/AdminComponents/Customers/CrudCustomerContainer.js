import { connect } from "react-redux";
import CrudCustomer from "./CrudCustomer";

import { CrudCustomerReducer } from "Reducers/Admin/CrudCustomerReducer";
import { checkboxClick, newCrudCustomer, getCustomers} from "Actions/Admin/CrudCustomerActions";
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		CrudCustomer: state.CrudCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		newCrudCustomer: (values) => {
			dispatch(newCrudCustomer(values));
		},
		getCustomers: () => {
			dispatch(getCustomers());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(CrudCustomer));
