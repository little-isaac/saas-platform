import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

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
