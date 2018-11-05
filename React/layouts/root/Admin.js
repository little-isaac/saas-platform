import React from "react";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import { ROUTES } from "layouts/static/AdminRoute";
import Navigation from "layouts/static/Admin/Navigation";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "layouts/styles/Admin/RootStyle";
import PropTypes from "prop-types";
class Admin extends React.Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <Navigation />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
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
                </main>
            </div>
        );
    }
}
Admin.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Admin);
