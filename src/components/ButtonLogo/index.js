import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonLogo = styled.button`
  width: 135px;
  height: 67px;
`;

ButtonLogo.propTypes = {
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default ButtonLogo;
