import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import classNames from "classnames";
import { Ajax } from "../Ajax";
import { ADMIN_BASE_URL, BASE_URL } from "../static/Config";
import { withStyles } from "@material-ui/core/styles";

import { Field, reduxForm, SubmissionError } from "redux-form";
// core components
import {
    Icon,
    IconButton,
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
import Input from "@material-ui/core/Input";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// icon components
import {
    Person as PersonIcon,
    Add as AddIcon,
    AccountCircle,
    AccessTime,
    Visibility,
    VisibilityOff
} from "@material-ui/icons";

import blue from "@material-ui/core/colors/blue";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const InputField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <React.Fragment>
        <InputLabel>{label}</InputLabel>
        <Input {...input} {...custom} error={touched && error ? true : false} />
        {touched && error && <span>{error}</span>}
    </React.Fragment>
);

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: null,
            password: "",
            showPassword: false
        };
    }
    handleSubmit = values => {
        console.log(values);
        var is_error = false;
        var error = {};
        if (typeof values.email == "undefined") {
            error.email = "email is required";
            is_error =  true;
        } 
        if (typeof values.password == "undefined") {
            error.password = "password is required";
            is_error =  true;
        }
        if (is_error) {
            throw new SubmissionError(error);
            return false;
        }
        var data = values;
        data._token = window.Laravel.csrfToken;
        Ajax.call({
            method: "POST",
            data: data,
            url: BASE_URL + "login.json",

            success: function(result) {
                if (result.status) {
                    location.href = "/admin/dashboard";
                } else {
                }
            }
        });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    loginDiv() {
        const { classes, handleSubmit, ...other } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <Card>
                                <CardHeader color="danger">
                                    <h4 className={classes.cardTitleWhite}>
                                        Log In
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <FormControl fullWidth>
                                                <Field
                                                    component={InputField}
                                                    label="Email"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <FormControl fullWidth>
                                                <Field
                                                    component={InputField}
                                                    label="Password"
                                                    id="password"
                                                    name="password"
                                                    type={
                                                        this.state.showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={
                                                                    this
                                                                        .handleClickShowPassword
                                                                }
                                                            >
                                                                {this.state
                                                                    .showPassword ? (
                                                                    <Visibility />
                                                                ) : (
                                                                    <VisibilityOff />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                    <Button color="danger" type="submit">
                                        Let's Go
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }

    render() {
        return this.loginDiv();
    }
}

Login = reduxForm({
    form: "LoginForm"
})(Login);

export default withStyles(dashboardStyle)(Login);
