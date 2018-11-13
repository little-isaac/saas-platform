import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function checkboxClick(target) {
    return {
        type: target
    };
}

export function setsingle(data) {
    return {
        type: "SET_SINGLE",
        payload: data
    };
}

export function getsingle(data_id) {
    debugger;
    return dispatch => {
        Ajax.call({
            method: "GET",
            url: BASE_URL + "admin/products/" + data_id + ".json",
            success: function (result) {
                if (typeof result.errors == 'undefined') {
                    dispatch(setsingle(result.product));
                }
                else{
                    
                }
            }
        });
    };
}

export function updateSingle(data) {
    return dispatch => {
        data._token = window.Laravel.csrfToken;
        Ajax.call({
            method: "PUT",
            data: data,
            url: location.href + ".json",
            success: function (result) {
                if (result.is_new) {
                    location.href = "" + result.data.id;
                } else {
                    location.href = "./";
                }
            }
        });
    };
}

export function deleteSingle() {
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
