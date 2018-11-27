import { connect } from "react-redux";
import CreateProduct from "./CreateProduct";

import { CreateProductReducer } from "Reducers/Admin/Products/CreateProductReducer";
import {
        checkboxClick,
        createProduct,
        OpenDialog,
        AddOption
       } from "Actions/Admin/Products/CreateProductActions";
       
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	debugger;
	return {
		ProductData: state.CreateProduct
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		OpenDialog: (value) => {
			dispatch(OpenDialog(value));
		},
		createProduct: (values) => {
			dispatch(createProduct(values));
		},
		AddOption: () => {
			dispatch(AddOption());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(CreateProduct));
