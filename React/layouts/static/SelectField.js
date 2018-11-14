import React, { Component } from "react";

import { InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectField = ({
  input,
  label,
  displayOption,
  meta: { touched, error },
  ...custom
}) => (
  <React.Fragment>
    <InputLabel>
      {label}
    </InputLabel>
    <Select {...input} {...custom}>
      {displayOption.map((prop, key) => {
        return (
          <MenuItem key={key} value={prop}>
            {prop}
          </MenuItem>
        );
      })}
    </Select>
  </React.Fragment>
);

export default SelectField;
