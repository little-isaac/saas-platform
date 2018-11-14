import React, { Component } from "react";

import { FormControlLabel,Checkbox } from "@material-ui/core";

const CheckboxField = ({
	input,
	label,
	value,
	meta: { touched, error },
	...custom
}) => (
	<React.Fragment>
		<FormControlLabel
			control={<Checkbox type="checkbox" {...input} {...custom} value={value}/>}
			label={label}
		/>
	</React.Fragment>
);

export default CheckboxField;
