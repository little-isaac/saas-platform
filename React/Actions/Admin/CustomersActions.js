import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setCustomers(customers){
	return {
		type: "SET_CUSTOMERS",
		payload: customers
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

export function deleteCustomer(data_id) {
	return dispatch => {
		var values = {}; 
		values._token = window.Laravel.csrfToken;
			Ajax.call({
				method: "DELETE",
				data: values,
				url: BASE_URL + "admin/customers/"+data_id+".json",
				success: function(result) {
					dispatch(setCustomers(result));
				}
			});
	};
}
