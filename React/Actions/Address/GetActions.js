import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setCountry(data) {
	return {
		type: "SET_COUNTRY",
		payload: data
	};
}

export function setState(data) {
	return {
		type: "SET_STATE",
		payload: data
	};
}

export function getAll() {
	return dispatch => {
		Ajax.call({
			method: "GET",
			url: BASE_URL + "admin/customers.json",
			success: function(result) {
				dispatch(setAll(result));
			}
		});
	};
}