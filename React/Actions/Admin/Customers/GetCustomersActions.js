import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setCustomers(data) {
	return {
		type: "SET_ALL_CUSTOMERS",
		payload: data
	};
}

export function getCustomers() {
	return dispatch => {
		Ajax.call({
			method: "GET",
			url: BASE_URL + "admin/customers.json",
			success: function(result) {
				dispatch(setCustomers(result));
			}
		});
	};
}

export function removeCustomer(index) {
	return {
		type: "REMOVE_CUSTOMER",
		index: index
	};
}

export function deleteCustomer(data_id, index) {
	return dispatch => {
		var values = {};
		values._token = window.Laravel.csrfToken;
		Ajax.call({
			method: "DELETE",
			data: values,
			url: BASE_URL + "admin/customers/" + data_id + ".json",
			success: function(result) {
				if (result.status) {
					dispatch(removeCustomer(index));
				}
			}
		});
	};
}
