import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function checkboxClick(target) {
    return {
        type: target
    };
}

export function createSingle(data) {
    return dispatch => {
        data._token = window.Laravel.csrfToken;

        Ajax.call({
            method: "POST",
            data: data,
            url: BASE_URL + "admin/products/create.json",
            success: function (result) {
                if (result.is_new) {
                    location.href = "" + result.product.id;
                } else {
                    location.href = "./";
                }
            }
        });
    };
}