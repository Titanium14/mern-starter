import React from 'react';
import { TextField, Grid, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  id,
  name,
  label,
  value,
  variant,
  type,
  autoComplete,
  errorMsg,
  helperText,
  onChange,
  required,
  fullWidth,
  autoFocus,
}) => (
  <Grid item xs={12}>
    <TextField
      id={id}
      name={name}
      label={label}
      value={value}
      variant={variant}
      type={type}
      autoComplete={autoComplete}
      helperText={helperText}
      onChange={onChange}
      required={required}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      error={errorMsg ? true : false}
    />
    {errorMsg ? <FormHelperText error>{errorMsg}</FormHelperText> : <></>}
  </Grid>
);

TextFieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  required: false,
  fullWidth: false,
  autoFocus: false,
};

export default TextFieldGroup;
