import { connect } from "react-redux";
import Dashboard from "./Dashboard";

import { LoginReducer } from "Reducers/Auth/LoginReducer";
import { showHidePassword, directAdminLogin } from "Actions/Auth/LoginActions";
import { withStyles } from "@material-ui/core/styles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const mapStateToProps = state => {
	return {
		Login: state.Login
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showHidePassword: () => {
			dispatch(showHidePassword());
		},
		directAdminLogin: (values) => {
			dispatch(directAdminLogin(values));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(dashboardStyle)(Dashboard));
