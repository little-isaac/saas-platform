import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import AuthRoot from "./layouts/root/Auth";
import AuthStore from "Store/AuthStore";

class Auth extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <AuthRoot />
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById("root")) {
    render(
        <Provider store={AuthStore}>
            <Auth />
        </Provider>,
        document.getElementById("root"));
}
