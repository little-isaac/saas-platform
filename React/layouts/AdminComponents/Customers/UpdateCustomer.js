import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import classNames from "classnames";

import { Field, reduxForm } from "redux-form";
// core components
import {
  Icon,
  IconButton,
  Input,
  InputLabel,
  Checkbox,
  CheckboxLabel,
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
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import blue from "@material-ui/core/colors/blue";

import Main from "layouts/AdminComponents/Main";

import InputField from "layouts/static/InputField";
import CheckboxField from "layouts/static/CheckboxField";
import SelectField from "layouts/static/SelectField";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var customer_id = this.props.match.params.id;
    const customer_data = this.props.getCustomer(customer_id);
    const country_data = this.props.getCountry();
  }

  UpdateCustomerDiv() {
    const { classes, handleSubmit, ...other } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={handleSubmit(this.props.updateCustomer)}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Button type="button">Cancel</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    type="button"
                    color="danger"
                    onClick={this.props.deleteCustomer}
                  >
                    Delete
                  </Button>
                </GridItem>
              </GridContainer>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit customer</h4>
                </CardHeader>
              </Card>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="First Name"
                          name="first_name"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="Last Name"
                          name="last_name"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Email"
                          name="email"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Phone Number"
                          name="phone"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={CheckboxField}
                          label="Customer accepts marketing"
                          color="primary"
                          name="accepts_marketing"
                          value={
                            this.props.CustomerData.accepts_marketing
                              ? new String("on")
                              : new String("off")
                          }
                          checked={this.props.CustomerData.accepts_marketing}
                          onChange={() =>
                            this.props.checkboxClick("ACCEPTS_MARKETING")
                          }
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={CheckboxField}
                          label="Customer is tax exempt"
                          color="primary"
                          name="tax_exempt"
                          value={
                            this.props.CustomerData.tax_exempt
                              ? new String("on")
                              : new String("off")
                          }
                          checked={this.props.CustomerData.tax_exempt}
                          onChange={() =>
                            this.props.checkboxClick("TAX_EXEMPT")
                          }
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="First Name"
                          name="default_address.first_name"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                    >
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="Last Name"
                          name="default_address.last_name"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Company"
                          name="default_address.company"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Address"
                          name="default_address.address1"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Apartment, suite, etc."
                          name="default_address.address2"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="City"
                          name="default_address.city"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl fullWidth>
                        <Field
                          component={SelectField}
                          label="Country"
                          name="default_address.country"
                          displayOptions={this.props.Address.Countries}
                          onChange={(event) => {this.props.getState(event.target.value)}}
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl fullWidth>
                        <Field
                          component={SelectField}
                          label="State"
                          name="default_address.province"
                          displayOptions={this.props.Address.States}
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="Zip code"
                          name="default_address.zip"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Phone"
                          name="default_address.phone"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </form>
          </GridItem>
        </GridContainer>

        <Button onClick={this.props.OpenAddressDialog}>Open dialog</Button>
        <Dialog
          open={this.props.CustomerData.OpenAddressDialog}
          onClose={this.props.CloseAddressDialog}
        >
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Content
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.OpenAddressDialog} color="primary">
              Disagree
            </Button>
            <Button onClick={this.props.CloseAddressDialog} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  render() {
    return this.UpdateCustomerDiv();
  }
}

UpdateCustomer = reduxForm({
  form: "UpdateCustomerForm",
  enableReinitialize: true
})(UpdateCustomer);

export default UpdateCustomer;
