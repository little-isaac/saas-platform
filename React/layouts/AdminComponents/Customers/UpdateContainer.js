import { connect } from "react-redux";
import UpdateOne from "./UpdateOne";

import { EditCustomerReducer } from "Reducers/Admin/Customers/UpdateReducer";
import { 
		checkboxClick, 
		getsingle,
		setsingle,
		updateSingle,
		deleteSingle
		} from "Actions/Admin/Customers/UpdateActions";

import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Data: state.UpdateCustomer
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkboxClick: (value) => {
			dispatch(checkboxClick(value));
		},
		getsingle: (id) => {
			dispatch(getsingle(id));
		},
		setsingle: (value) => {
			dispatch(setsingle(value));
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
)(withStyles(dashboardStyle)(UpdateOne));
