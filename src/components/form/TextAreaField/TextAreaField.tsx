import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FieldProps, FieldRenderProps } from 'react-final-form';
import { Box, InputLabel, TextareaAutosize } from '@material-ui/core';

interface IProps {
  name: string;
  label: string;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  required: boolean;
  autoFocus: boolean
}

const TextAreaField: React.FC<FieldRenderProps<IProps>> = (
  {
    label,
    required,
    autoFocus,
    field,
  }
) => {
  return (
    <Box style={{ marginTop: '20px' }}>
      <InputLabel>{label}</InputLabel>
      <TextareaAutosize
        style={{ width: '100%', minHeight: '160px', marginTop: '10px' }}
        {...field}
        value={field.value || ''}
        aria-label="empty textarea"
        placeholder=""
        autoFocus={autoFocus}
        required={required}
        name={field.name}
      />
    </Box>
  );
}

export default TextAreaField;
