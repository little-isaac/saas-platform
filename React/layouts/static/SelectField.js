import React, { Component } from "react";

import { InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectField = ({
  input,
  label,
  displayOptions,
  meta: { touched, error },
  ...custom
}) => (
  <React.Fragment>
    <InputLabel>
      {label}
    </InputLabel>
    <Select {...input} {...custom}>
      {displayOptions.map((displayOption, index) => {
        return (
          <MenuItem key={index} value={displayOption.id}>
            {displayOption.name}
          </MenuItem>
        );
      })}
    </Select>
  </React.Fragment>
);

export default SelectField;
