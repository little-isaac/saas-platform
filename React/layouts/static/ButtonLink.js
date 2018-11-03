import { NavLink as ReactNavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";

class ButtonLink extends React.Component {
  render() {
    const { label, to, ...itemProps } = this.props;
    return (
      <Button {...itemProps}>
        <ReactNavLink to={to}>{label}</ReactNavLink>
      </Button>
    );
  }
}

export default ButtonLink;
