import { SubmissionError } from "redux-form";
import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "layouts/static/Config";

export function setCountry(data) {
    return {
        type: "SET_COUNTRIES",
        payload: data
    };
}
export function setCurrentCountry(data) {
    return {
        type: "SET_CURRENT_COUNTRY",
        payload: data
    };
}

export function setState(data) {
    return {
        type: "SET_STATES",
        payload: data
    };
}

export function getCountry() {
    return dispatch => {
        Ajax.call({
            method: "GET",
            url: BASE_URL + "address/country.json",
            success: function (result) {
                dispatch(setCountry(result.countries));
            }
        });
    };
}

export function getState(country_id) {
    return dispatch => {
        dispatch(setCurrentCountry(country_id));
        Ajax.call({
            method: "GET",
            url: BASE_URL + "address/" + country_id + "/state.json",
            success: function (result) {
                dispatch(setState(result.states));
            }
        });
    };
}