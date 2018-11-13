import { connect } from "react-redux";
import View from "./View";

import { GetReducer } from "Reducers/Admin/Products/GetReducer";
import { getAll, deleteSingle } from "Actions/Admin/Products/GetActions";

import { withStyles } from "@material-ui/core/styles";

import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

const mapStateToProps = state => {
	return {
		Data: state.GetProducts
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
)(withStyles(tableStyle)(View));
