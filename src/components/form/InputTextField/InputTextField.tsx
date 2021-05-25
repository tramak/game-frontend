import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldRenderProps } from 'react-final-form';
import { useStyles } from './InputTextField.styles';
import { Box } from '@material-ui/core';

interface IProps extends FieldRenderProps<string, any> {
  name: string;
  label: string;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  required: boolean;
  autoFocus: boolean
}

const InputTextField: React.FC<IProps> = (
  {
    name,
    label,
    required,
    autoFocus,
    input,
    meta,
    variant
  }
) => {
  const classes = useStyles();
  const error = meta.error || meta.submitError;
  const isError = error && meta.touched;

  return (
    <>
      <TextField
        {...input}
        value={input.value || ''}
        margin="normal"
        required={required}
        variant={variant}
        fullWidth
        id={name}
        label={label}
        autoFocus={autoFocus}
        error={isError}
      />
      {isError && <Box className={classes.error}>{error}</Box>}
    </>
  )
}

export default InputTextField;
