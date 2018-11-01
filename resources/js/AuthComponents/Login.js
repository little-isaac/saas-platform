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

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    loginDiv() {
        const { classes, ...other } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="danger">
                                <h4 className={classes.cardTitleWhite}>
                                    Log in
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
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
                                                value={this.state.email}
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
                                            <InputLabel>Password</InputLabel>
                                            <Input
                                                id="password"
                                                name="password"
                                                type={
                                                    this.state.showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={this.state.password}
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
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="danger">Let's Go</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }

    render() {
        return this.loginDiv();
    }
}

export default withStyles(dashboardStyle)(Login);
