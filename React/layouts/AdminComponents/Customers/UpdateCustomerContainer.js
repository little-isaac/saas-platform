import { connect } from "react-redux";
import UpdateCustomer from "./UpdateCustomer";

import { GetAddressReducer } from "Reducers/Address/GetAddressReducer";
import { UpdateCustomerReducer } from "Reducers/Admin/Customers/UpdateCustomerReducer";
import { 
		checkboxClick, 
		getCustomer,
		setCustomer,
		updateCustomer,
		deleteCustomer,
		OpenDialog
		} from "Actions/Admin/Customers/UpdateCustomerActions";

import { getCountry, getState } from "Actions/Address/GetAddressActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Address: state.GetAddress,
		initialValues:state.UpdateCustomer.customer,
		CustomerData: state.UpdateCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		getCustomer: (id) => {
			dispatch(getCustomer(id));
		},
		setCustomer: (value) => {
			dispatch(setCustomer(value));
		},
		updateCustomer: (value) => {
			dispatch(updateCustomer(value));
		},
		deleteCustomer: (id) => {
			dispatch(deleteCustomer(id));
		},
		getCountry: () => {
			dispatch(getCountry());
		},
		getState: country_id => {
			dispatch(getState(country_id));
		},
		OpenDialog: (value) => {
			dispatch(OpenDialog(value));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(UpdateCustomer));
