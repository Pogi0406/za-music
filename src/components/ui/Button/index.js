import { PropTypes } from "prop-types";
import React from "react";
import { StyledButton } from "./styled";

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
