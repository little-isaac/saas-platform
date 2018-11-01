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

import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardIcon from "../components/Card/CardIcon.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";

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

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: null,
            password: "",
            showPassword: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch("http://localhost/ravi-react/account/customers/create.json", {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        data: result.data,
                        message: result.message
                    });
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
    }

    inputChange(x, event) {
        var data = Object.assign({}, this.state.data);
        data[x] = event.target.value;
    }

    registerDiv() {
        const { classes, ...other } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <form onSubmit={this.handleSubmit}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>
                                        Create Account
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem className={classes.marginBottom20} xs={12} sm={12} md={12}>
                                            <FormControl
                                                fullWidth
                                                className={classNames(
                                                    classes.margin,
                                                    classes.textField
                                                )}
                                            >
                                                <InputLabel>
                                                    Store Name
                                                </InputLabel>
                                                <Input
                                                    id="store_name"
                                                    type="text"
                                                    name="store_name"
                                                    value={
                                                        "ravi_" +
                                                        Math.floor(Date.now())
                                                    }
                                                    onChange={this.handleChange(
                                                        "store_name"
                                                    )}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem className={classes.marginBottom20} xs={12} sm={12} md={12}>
                                            <FormControl
                                                fullWidth
                                                className={classNames(
                                                    classes.margin,
                                                    classes.textField
                                                )}
                                            >
                                                <InputLabel>Email</InputLabel>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={
                                                        "ravi_" +
                                                        Math.floor(Date.now()) +
                                                        "@gmail.com"
                                                    }
                                                    onChange={this.handleChange(
                                                        "email"
                                                    )}
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
                                                <InputLabel>
                                                    Password
                                                </InputLabel>
                                                <Input
                                                    id="password"
                                                    name="password"
                                                    type={
                                                        this.state.showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={
                                                        "ravi_" +
                                                        Math.floor(Date.now())
                                                    }
                                                    onChange={this.handleChange(
                                                        "password"
                                                    )}
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
                                        <input
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

// export default Register;
export default withStyles(dashboardStyle)(Register);
