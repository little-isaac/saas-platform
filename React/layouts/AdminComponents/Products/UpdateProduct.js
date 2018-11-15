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

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var product_id = this.props.match.params.id;
    const product_data = this.props.getProduct(product_id);
  }

  UpdateProductDiv() {
    const { classes, handleSubmit, ...other } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={handleSubmit(this.props.updateProduct)}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit product</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field 
                          component={InputField}
                          type="text"
                          label="Title"
                          name="title"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          type="text"
                          label="Description"
                          name="body_html"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Product type"
                          name="product_type"
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
                          label="Vendor"
                          name="vendor"
                          type="text"
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
    return this.UpdateProductDiv();
  }
}

UpdateProduct = reduxForm({
  form: "UpdateProductForm",
  enableReinitialize: true
})(UpdateProduct);

export default UpdateProduct;
