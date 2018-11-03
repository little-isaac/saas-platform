import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Field, reduxForm, SubmissionError } from "redux-form";

import { Ajax } from "layouts/Ajax";
import { ADMIN_BASE_URL,BASE_URL } from "layouts/static/Config";

import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";

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

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _token: document.querySelector('meta[name="csrf-token"]').content,
            data: [],
            message: null,
            password: "",
            showPassword: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        if (typeof values.name == "undefined") {
            throw new SubmissionError({
                name: "store name is required"
            });
            return false;
        } else if (typeof values.email == "undefined") {
            throw new SubmissionError({
                email: "eamil is required"
            });
            return false;
        } else if (typeof values.password == "undefined") {
            throw new SubmissionError({
                password: "password is required"
            });
            return false;
        }

        var data = values;
        data._token = this.state._token;
        Ajax.call({
            method: "POST",
            data: data,
            url: BASE_URL + "register.json",

            success: function(result) {
                if (result.status) {
                } else {
                }
            }
        });
    }

    registerDiv() {
        const { classes, handleSubmit, ...other } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>
                                        Create Account
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem
                                            className={classes.marginBottom20}
                                            xs={12}
                                            sm={12}
                                            md={12}
                                        >
                                            <FormControl
                                                fullWidth
                                                className={classNames(
                                                    classes.margin,
                                                    classes.textField
                                                )}
                                            >
                                                <Field
                                                    component={InputField}
                                                    label="Store Name"
                                                    type="text"
                                                    name="name"
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem
                                            className={classes.marginBottom20}
                                            xs={12}
                                            sm={12}
                                            md={12}
                                        >
                                            <FormControl
                                                fullWidth
                                                className={classNames(
                                                    classes.margin,
                                                    classes.textField
                                                )}
                                            >
                                                <Field
                                                    component={InputField}
                                                    label="Email"
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
                                            <FormControl
                                                fullWidth
                                                className={classNames(
                                                    classes.margin,
                                                    classes.textField
                                                )}
                                            >
                                                <Field
                                                    component={InputField}
                                                    name="password"
                                                    label="Password"
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
                                        <Field
                                            component={InputField}
                                            type="hidden"
                                            name="_token"
                                            value={
                                                document.querySelector(
                                                    'meta[name="csrf-token"]'
                                                ).content
                                            }
                                        />
                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" color="primary">
                                        Create
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
        return this.registerDiv();
    }
}

Register = reduxForm({
    form: "RegisterForm"
})(Register);

// export default Register;
export default withStyles(dashboardStyle)(Register);
