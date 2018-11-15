import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setProducts(data) {
	return {
		type: "SET_ALL_PRODUCTS",
		payload: data
	};
}

export function getProducts() {
	return dispatch => {
		Ajax.call({
			method: "GET",
			url: BASE_URL + "admin/products.json",
			success: function(result) {
				dispatch(setProducts(result));
			}
		});
	};
}

export function removeProduct(index) {
	return {
		type: "REMOVE_PRODUCT",
		index: index
	};
}

export function deleteProduct(data_id, index) {
	return dispatch => {
		var values = {};
		values._token = window.Laravel.csrfToken;
		Ajax.call({
			method: "DELETE",
			data: values,
			url: BASE_URL + "admin/products/" + data_id + ".json",
			success: function(result) {
				if (result.status) {
					dispatch(removeProduct(index));
				}
			}
		});
	};
}
