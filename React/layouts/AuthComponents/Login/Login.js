import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import classNames from "classnames";

import { Field, reduxForm } from "redux-form";
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
    }
    loginDiv() {
        const { classes, handleSubmit, ...other } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <form onSubmit={handleSubmit(this.props.directAdminLogin)}>
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
                                                        this.props.Login.showHidePassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={
                                                                    this.props.showHidePassword
                                                                }
                                                            >
                                                                {this.props.Login.showHidePassword ? (
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

export default Login;
