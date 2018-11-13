import { SubmissionError } from "redux-form";
import axios from "axios";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function showHidePassword() {
	return {
		type: "SHOW_HIDE_PASSWORD"
	};
}

export function validateAdminRegister(values) {
	var is_error = false;
	var error = {};
	if (typeof values.error !== "undefined" && values.error == 1) {
		error.store_name = "Store name already in use";
		error.email = "Email already in use";
		is_error = true;
	}
	if (typeof values.store_name == "undefined") {
		error.store_name = "Store name is required";
		is_error = true;
	}
	if (typeof values.email == "undefined") {
		error.email = "Email is required";
		is_error = true;
	}
	if (typeof values.password == "undefined") {
		error.password = "Password is required";
		is_error = true;
	}
	if (is_error) {
		throw new SubmissionError(error);

		return false;
	}
	return true;
}

export function directAdminRegister(values) {
	return dispatch => {
		if (validateAdminRegister(values)) {
			values._token = window.Laravel.csrfToken;

			return axios({
				method: "POST",
				data: values,
				url: BASE_URL + "register.json"
			})
				.then(function(res) {
					var result = res.data;
					if (result.status) {
						location.href =
							"//" +
							values.store_name +
							".saas-platform.com/admin/dashboard";
					} else {
						values.error = result.error;
					 	validateAdminRegister(values);
					}
				})
				.catch(error => {
					if (error instanceof SubmissionError) {
						throw new SubmissionError(error.errors);
					}
				});
		}
	};
}
