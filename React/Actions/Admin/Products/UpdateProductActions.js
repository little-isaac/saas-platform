import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setProduct(data) {
    return {
        type: "SET_PRODUCT",
        payload: data
    };
}

export function getProduct(data_id) {
    debugger;
    return dispatch => {
        Ajax.call({
            method: "GET",
            url: BASE_URL + "admin/products/" + data_id + ".json",
            success: function (result) {
                if (typeof result.errors == 'undefined') {
                    dispatch(setProduct(result.product));
                } else {

                }
            }
        });
    };
}

export function updateProduct(data) {
    return dispatch => {
        data._token = window.Laravel.csrfToken;
        Ajax.call({
            method: "PUT",
            data: data,
            url: location.href + ".json",
            success: function (result) {
                location.href = "" + result.data.id;
            }
        });
    };
}

export function deleteProduct() {
    return dispatch => {
        var data = {};
        data._token = window.Laravel.csrfToken;
        Ajax.call({
            method: "DELETE",
            data: data,
            url: location.href + ".json",
            success: function (result) {
                if (result.status) {
                    location.href = "./";
                }
            }
        });
    };
}
