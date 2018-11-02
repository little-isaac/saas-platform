import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";

import { Ajax } from "layouts/Ajax";

import { BASE_URL } from "layouts/static/Config";
import GridItem from "components/Grid/GridItem.jsx";
import {IsNull} from 'layouts/static/IsNull';
import {styles} from 'layouts/styles/AdminStyle';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    componentDidMount() {
        var that = this;
        Ajax.call({
            url: BASE_URL + "shop.json",
            method: "get",
            success: function(data) {
                if (data.error == -1) {
                    if (location.pathname == "/payment") {
                    } else {
                        that.setState({
                            redirect: true
                        });
                    }
                    return false;
                }
                if (data.user.is_paid == 0) {
                }
                //            that.themes = data.themes;
            },
            error: function(error) {}
        });
    }
    handleCloseSnackbar = () => {
        this.props.snackbar.onClose();
    };
    render() {
        const {
            classes,
            theme,
            loading,
            header,
            subheader,
            rightSide,
            snackbar
        } = this.props;
        const { redirect } = this.state;

        let { msg, notify, onClose, duration } = IsNull(this.props.snackbar)
            ? {
                  msg: "",
                  notify: false,
                  onClose: () => {},
                  duration: 0
              }
            : this.props.snackbar;
        if (redirect) {
            return <Redirect to={BASE_URL + "payment"} />;
        }
        if (loading) {
            return <Loading />;
        }
        return (
            <React.Fragment>
                <Grid container>
                    <GridItem xs={6} md={6} sm={6}>
                        <Typography variant="headline">{header}</Typography>
                    </GridItem>
                    <GridItem xs={6} md={6} sm={6}>
                        <div
                            style={{
                                display: "flex",
                                marginLeft: "auto",
                                justifyContent: "flex-end"
                            }}
                        >
                            {rightSide}
                        </div>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={12}>
                        <Typography
                            variant="subheading"
                            gutterBottom
                            color="textSecondary"
                        >
                            {subheader}
                        </Typography>
                    </GridItem>
                </Grid>
                {this.props.children}
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    open={notify}
                    onClose={this.handleCloseSnackbar}
                    autoHideDuration={duration}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={msg}
                />
            </React.Fragment>
        );
    }
}
// Main.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired
// };

export default withStyles(styles, { withTheme: true })(Main);
// export default Main;