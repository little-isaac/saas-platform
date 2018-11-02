import React from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { ROUTES } from "../static/AdminRoute";
import Navigation from 'layouts/static/Admin/Navigation';
class Admin extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    {ROUTES.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        );
                    })}
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Admin;
