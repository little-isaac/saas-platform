import { connect } from "react-redux";
import CreateOne from "./CreateOne";

import { NewCustomerReducer } from "Reducers/Admin/Customers/CreateReducer";
import {
         checkboxClick,
         createSingle
       } from "Actions/Admin/Customers/CreateActions";
       
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Data: state.CreateCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		createSingle: (values) => {
			dispatch(createSingle(values));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(CreateOne));
