import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function showHidePassword() {
	return {
		type: "SHOW_HIDE_PASSWORD"
	};
}

export function validateAdminLogin(values) {
	var is_error = false;
	var error = {};
	if (typeof values.email == "undefined") {
		error.email = "email is required";
		is_error = true;
	}
	if (typeof values.password == "undefined") {
		error.password = "password is required";
		is_error = true;
	}
	if (is_error) {
		throw new SubmissionError(error);
		return false;
	}
	return true;
}

export function directAdminLogin(values) {
	return dispatch => {
		if (validateAdminLogin(values)) {
			values._token = window.Laravel.csrfToken;
			Ajax.call({
				method: "POST",
				data: values,
				url: BASE_URL + "login.json",
				success: function(result) {
					if (result.status) {
						location.href = "/admin/dashboard";
					} else {
					}
				}
			});
		}
	};
}
