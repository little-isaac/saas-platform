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
				url: BASE_URL + "register.json",
				success: function(result) {
					if (result.status) {
						location.href = "//"+values.store_name+".saas-platform.com/admin/customers/"+values.id;
					} else {
					}
				}
			});
	};
}
