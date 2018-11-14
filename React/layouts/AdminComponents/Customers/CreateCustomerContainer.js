import { connect } from "react-redux";
import CreateCustomer from "./CreateCustomer";

import { GetAddressReducer } from "Reducers/Address/GetAddressReducer";
import { CreateCustomerReducer } from "Reducers/Admin/Customers/CreateCustomerReducer";
import {
	checkboxClick,
	createSingle
} from "Actions/Admin/Customers/CreateCustomerActions";

import {
	getCountry,
        getState
} from "Actions/Address/GetAddressActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
    console.log(state.GetAddress);
	return {
		Address: state.GetAddress,
		Data: state.CreateCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: value => {
			dispatch(checkboxClick(value));
		},
		createSingle: values => {
			dispatch(createSingle(values));
		},
		getCountry: () => {
			dispatch(getCountry());
		},
		getState: (country_id) => {
			dispatch(getState(country_id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(CreateCustomer));
