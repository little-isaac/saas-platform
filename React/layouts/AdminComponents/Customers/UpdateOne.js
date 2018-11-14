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

class UpdateOne extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var data_id = this.props.match.params.id;
    const data = this.props.getsingle(data_id);
  }

  UpdateDiv() {
    const { classes, handleSubmit, ...other } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={handleSubmit(this.props.updateSingle)}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit customer</h4>
                </CardHeader>
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
                      className={classes.marginBottom20}
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
                          name="phone_number"
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
                            this.props.Data.accepts_marketing
                              ? new String("on")
                              : new String("off")
                          }
                          checked={this.props.Data.accepts_marketing}
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
                            this.props.Data.tax_exempt
                              ? new String("on")
                              : new String("off")
                          }
                          checked={this.props.Data.tax_exempt}
                          onChange={() =>
                            this.props.checkboxClick("TAX_EXEMPT")
                          }
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button type="button">
                        Cancel
                      </Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button type="submit" color="primary">
                        Save
                      </Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button type="button" color="danger" onClick={this.props.deleteSingle}>
                        Delete
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }

  render() {
    return this.UpdateDiv();
  }
}

UpdateOne = reduxForm({
  form: "UpdateOneForm",
  enableReinitialize: true
})(UpdateOne);

export default UpdateOne;
