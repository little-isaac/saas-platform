import { connect } from "react-redux";
import UpdateProduct from "./UpdateProduct";

import { UpdateProductReducer } from "Reducers/Admin/Products/UpdateProductReducer";
import { 
		getProduct,
		setProduct,
		updateProduct,
		deleteProduct
		} from "Actions/Admin/Products/UpdateProductActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
                initialValues:state.UpdateProduct.product,
		Data: state.UpdateProduct
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProduct: (id) => {
			dispatch(getProduct(id));
		},
		setProduct: (value) => {
			dispatch(setProduct(value));
		},
		updateProduct: (value) => {
			dispatch(updateProduct(value));
		},
		deleteProduct: (id) => {
			dispatch(deleteProduct(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(UpdateProduct));
