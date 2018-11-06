import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonLink from "layouts/static/ButtonLink";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink as ReactNavLink } from "react-router-dom";
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

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import blue from "@material-ui/core/colors/blue";
import withStyles from "@material-ui/core/styles/withStyles";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import Main from "layouts/AdminComponents/Main";

class Customers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    const data = this.props.getCustomers();
  }

  render() {
    const { classes, ...other } = this.props;
    return (
      <div>
        <h3>Customers</h3>
        <ButtonLink color="primary" to="customers/new" label="Add customer" />
        <div className={classes.tableResponsive}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {this.props.Customers.CustomersTableHead.map((prop, key) => {
                  return <TableCell key={key}>{prop}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.Customers.CustomersTableData.data.map(
                (customer, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>{customer["first_name"]}</TableCell>
                      <TableCell>{customer["last_name"]}</TableCell>
                      <TableCell>{customer["email"]}</TableCell>
                      <TableCell>
                        <ButtonLink
                          color="primary"
                          to={"customers/" + customer["id"]}
                          label="Edit"
                        />
                        <Button color="danger" onClick={() => this.props.deleteCustomer(customer["id"])}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withStyles(tableStyle)(Customers);
// export default Customers;

