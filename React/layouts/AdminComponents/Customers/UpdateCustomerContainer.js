import { connect } from "react-redux";
import UpdateCustomer from "./UpdateCustomer";

import { UpdateCustomerReducer } from "Reducers/Admin/Customers/UpdateCustomerReducer";
import { 
		checkboxClick, 
		getSingle,
		setSingle,
		updateSingle,
		deleteSingle
		} from "Actions/Admin/Customers/UpdateCustomerActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		initialValues:state.UpdateCustomer.customer,
		Data: state.UpdateCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		getSingle: (id) => {
			dispatch(getSingle(id));
		},
		setSingle: (value) => {
			dispatch(setSingle(value));
		},
		updateSingle: (value) => {
			dispatch(updateSingle(value));
		},
		deleteSingle: (id) => {
			dispatch(deleteSingle(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(UpdateCustomer));
