import PropTypes from "prop-types";
import { StyledButton } from "./styled";

function IconButton({ withBackground, ...props }) {
  return (
    <StyledButton bg={withBackground ? 1 : 0} {...props}>
      {props.children}
    </StyledButton>
  );
}

IconButton.propTypes = {
  children: PropTypes.element,
  withBackground: PropTypes.bool,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconButton;
