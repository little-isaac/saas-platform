import { connect } from "react-redux";
import CreateProduct from "./CreateProduct";

import { CreateProductReducer } from "Reducers/Admin/Products/CreateProductReducer";
import {
         checkboxClick,
         createSingle
       } from "Actions/Admin/Products/CreateProductActions";
       
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
)(withStyles(dashboardStyle)(CreateProduct));
