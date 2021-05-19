import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldProps } from 'formik';

interface IProps {
  name: string;
  label: string;
  type?: string;
  required: boolean;
  autoFocus: boolean
}

const InputTextField: React.FC<IProps & FieldProps> = (
  {
    name,
    label,
    required,
    autoFocus,
    field,
    type = 'text'
  }
) => {
  return (
    <TextField
      {...field}
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth
      id={name}
      label={label}
      type={type}
      autoFocus={autoFocus}
    />
  )
}

export default InputTextField;
