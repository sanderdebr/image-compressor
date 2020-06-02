/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './StyledInput';

function Input(props) {
  const { type, accept, onChange } = props;

  return <StyledInput type={type} accept={accept} onChange={onChange} />;
}

Input.propTypes = {
  type: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
