import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styled";

function Input({ startIcon, ...props }) {
  return <StyledInput icon={startIcon} {...props} />;
}

Input.propTypes = {
  startIcon: PropTypes.string,
};

export default Input;
