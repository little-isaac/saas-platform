import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AuthRoot from "./layouts/root/Auth";

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
    render(<Auth />, document.getElementById("root"));
}
