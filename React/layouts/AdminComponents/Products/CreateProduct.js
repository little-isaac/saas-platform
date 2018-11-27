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

class CreateProduct extends Component {
  constructor(props) {
    super(props);
  }

  CreateProductDiv() {
    const { classes, handleSubmit, ...other } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form onSubmit={handleSubmit(this.props.createProduct)}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Button type="button" color="danger">
                    Cancel
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Add product</h4>
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
              </Card>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl fullWidth>
                        <input
                          type="file"
                          accept=".jpg, .png, .jpeg"
                          name="image"
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
                          label="Price"
                          name="price"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Compare at price"
                          name="compare_at_price"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="SKU (stock keeping unit)"
                          name="sku"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Barcode (ISBN, UPC, GTIN, etc.)"
                          name="barcode"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Quantity"
                          name="quantity"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Weight"
                          name="weight"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      Variants
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button
                        onClick={() =>
                          this.props.OpenDialog("OPEN_OPTIONS_DIALOG")
                        }
                      >
                        Add options
                      </Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button>Add variant</Button>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Size"
                          name="variant.1.size"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Inventory"
                          name="variant.1.inventory"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Price"
                          name="variant.1.price"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="SKU"
                          name="variant.1.sku"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Size"
                          name="variant.2.size"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Inventory"
                          name="variant.2.inventory"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="Price"
                          name="variant.2.price"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <FormControl fullWidth>
                        <Field
                          component={InputField}
                          label="SKU"
                          name="variant.2.sku"
                          type="text"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </form>
            <Dialog
              open={this.props.ProductData.OpenOptionsDialog}
              onClose={() => this.props.OpenDialog("OPEN_OPTIONS_DIALOG")}
            >
              <DialogTitle>Add options</DialogTitle>
              <DialogContent>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      Option name
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      Option value
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button color="primary" onClick={this.props.AddOption}>
                        Add option
                      </Button>
                    </GridItem>
                  </GridContainer>
                  
                  {this.props.ProductData.Option.map((prop, key) => {
                    return (
                      <GridContainer key={key}>
                        <GridItem xs={12} sm={12} md={4}>
                          <FormControl fullWidth>
                            <Field
                              component={InputField}
                              name={"option."+ key+".name"}
                              type="text"
                            />
                          </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <FormControl fullWidth>
                            <Field
                              component={InputField}
                              name={"option."+ key+".value"}
                              type="text"
                            />
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    );
                  })}

              </DialogContent>
              <DialogActions>
                <Button
                  color="primary"
                  onClose={() => this.props.OpenDialog("OPEN_OPTIONS_DIALOG")}
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </GridItem>
        </GridContainer>
      </div>
    );
  }

  render() {
    return this.CreateProductDiv();
  }
}

CreateProduct = reduxForm({
  form: "CreateProductForm"
})(CreateProduct);

export default CreateProduct;
