import { connect } from "react-redux";
import Register from "./Register";

import { RegisterReducer } from "Reducers/Auth/RegisterReducer";
import { showHidePassword, directAdminRegister } from "Actions/Auth/RegisterActions";
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Register: state.Register
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showHidePassword: () => {
			return dispatch(showHidePassword());
		},
		directAdminRegister: (values) => {
			return dispatch(directAdminRegister(values));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(Register));
