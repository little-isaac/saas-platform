import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function checkboxClick(target) {
	return {
		type: target
	};
}

export function newCrudCustomer(values) {
	debugger;
	return dispatch => {
			values._token = window.Laravel.csrfToken;

			Ajax.call({
				method: "POST",
				data: values,
				url: BASE_URL + "admin/customers/create.json",
				success: function(result) {
					if (result.is_new) {
						location.href = ""+result.customer.id;
					} else {
						location.href = "./";
					}
				}
			});
	};
}

export function getCustomers() {
	return dispatch => {
			Ajax.call({
				method: "GET",
				url: BASE_URL + "admin/customers.json",
				success: function(result) {
					
				}
			});
	};
}

export function getCustomer(customer_id) {
	return dispatch => {
			Ajax.call({
				method: "GET",
				url: BASE_URL + "admin/customers/"+ customer_id+".json",
				success: function(result) {
					if (result.is_new) {
						this.setState({ data: data })
					} else {
						location.href = "./";
					}
				}
			});
	};
}

export function updateCustomer(values) {
	return dispatch => {
			Ajax.call({
				method: "PUT",
				data: values,
				url: BASE_URL + "admin/customers/"+ customer_id+".json",
				success: function(result) {
					if (result.is_new) {
						this.setState({ data: data })
					} else {
						location.href = "./";
					}
				}
			});
	};
}

export function deleteCustomer(customer_id) {
	return dispatch => {
			Ajax.call({
				method: "DELETE",
				url: BASE_URL + "admin/customers/"+customer_id+".json",
				success: function(result) {
					if (result.is_new) {
						this.setState({ data: data })
					} else {
						location.href = "./";
					}
				}
			});
	};
}
