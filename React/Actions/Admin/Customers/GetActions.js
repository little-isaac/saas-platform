import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setAll(data) {
	return {
		type: "SET_ALL",
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

export function removeSingle(index) {
	return {
		type: "REMOVE_SINGLE",
		index: index
	};
}

export function deleteSingle(data_id, index) {
	return dispatch => {
		var values = {};
		values._token = window.Laravel.csrfToken;
		Ajax.call({
			method: "DELETE",
			data: values,
			url: BASE_URL + "admin/customers/" + data_id + ".json",
			success: function(result) {
				if (result.status) {
					dispatch(removeSingle(index));
				}
			}
		});
	};
}
