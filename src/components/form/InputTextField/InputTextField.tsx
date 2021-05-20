import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldProps, FieldRenderProps } from 'react-final-form';

interface IProps {
  name: string;
  label: string;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  required: boolean;
  autoFocus: boolean
}

const InputTextField: React.FC<FieldRenderProps<IProps>> = (
  {
    name,
    label,
    required,
    autoFocus,
    field,
    variant,
    type = 'text'
  }
) => {
  return (
    <TextField
      {...field}
      margin="normal"
      required={required}
      variant={variant}
      fullWidth
      id={name}
      label={label}
      type={type}
      autoFocus={autoFocus}
    />
  )
}

export default InputTextField;
