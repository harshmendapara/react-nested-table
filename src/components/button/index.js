import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

// eslint-disable-next-line
const Button = ({ type = 'primary', children, disabled, onClick }) => (
  <button className={`btn btn-${type}`} onClick={() => onClick()} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
