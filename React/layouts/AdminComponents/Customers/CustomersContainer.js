import { connect } from "react-redux";
import Customers from "./Customers";

import { GetCustomersReducer } from "Reducers/Admin/Customers/GetCustomersReducer";
import { getAll, deleteSingle } from "Actions/Admin/Customers/GetCustomersActions";

import { withStyles } from "@material-ui/core/styles";

import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

const mapStateToProps = state => {
	return {
		Data: state.GetCustomers
	}; 
};

const mapDispatchToProps = dispatch => {
	return {
		getAll: () => {
			dispatch(getAll());
		},
		deleteSingle: (data_id,index) => {
			dispatch(deleteSingle(data_id,index));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(tableStyle)(Customers));
