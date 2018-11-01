import React from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { ROUTES } from "../static/AuthRoute";

class Auth extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {ROUTES.map((route, i) => {
                        return <Route
                            key={i}
                            exact
                            path={route.path}
                            component={route.component}
                        />;
                    })}
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Auth;
