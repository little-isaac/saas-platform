import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function checkboxClick(target) {
    return {
        type: target
    };
}

export function OpenAddressDialog() {
    return {
        type: "OPEN_ADDRESS_DIALOG",
    };
}

export function CloseAddressDialog() {
    return {
        type: "CLOSE_ADDRESS_DIALOG",
    };
}
export function setCustomer(data) {
    return {
        type: "SET_CUSTOMER",
        payload: data
    };
}

export function getCustomer(data_id) {
    return dispatch => {
        Ajax.call({
            method: "GET",
            url: BASE_URL + "admin/customers/" + data_id + ".json",
            success: function (result) {
                if (typeof result.errors == 'undefined') {
                    dispatch(setCustomer(result.customer));
                }
                else{
                    
                }
            }
        });
    };
}

export function updateCustomer(data) {
    debugger;
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

export function deleteCustomer() {
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
