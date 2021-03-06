import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";

// core components
import {
    Icon,
    IconButton,
    Input,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Grid,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText
} from "@material-ui/core";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";

import { bugs, website, server } from "variables/general.jsx";

// @material-ui/icons
import {
    Person as PersonIcon,
    Add as AddIcon,
    AccountCircle,
    AccessTime,
    Visibility,
    VisibilityOff,
    Store,
    Warning,
    DateRange,
    LocalOffer,
    Update,
    ArrowUpward,
    Accessibility,
    BugReport,
    Code,
    Cloud
} from "@material-ui/icons";

import blue from "@material-ui/core/colors/blue";

import Main from "layouts/AdminComponents/Main";
class Dashboard extends React.Component {
    state = {
        value: 0
    };

    render() {
        const { classes } = this.props;
        return (
            <Main header="Dashboard">
                <Grid container>
                    <GridItem xs={12} sm={12} md={12} />
                </Grid>
            </Main>
        );
    }
}

export default Dashboard;
