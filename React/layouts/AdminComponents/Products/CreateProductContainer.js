import { connect } from "react-redux";
import CreateProduct from "./CreateProduct";

import { CreateProductReducer } from "Reducers/Admin/Products/CreateProductReducer";
import {
        checkboxClick,
         createProduct
       } from "Actions/Admin/Products/CreateProductActions";
       
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	debugger;
	return {
		ProductData: state.createProduct
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createProduct: (values) => {
			dispatch(createProduct(values));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(CreateProduct));
