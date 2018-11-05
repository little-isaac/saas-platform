import React, { Component } from "react";

import {
  Input,
  InputLabel,
} from "@material-ui/core";

const InputField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <React.Fragment>
    <InputLabel>{label}</InputLabel>
    <Input {...input} {...custom} error={touched && error ? true : false} />
    {touched && error && <span>{error}</span>}
  </React.Fragment>
);

export default InputField;