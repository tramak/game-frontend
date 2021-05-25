import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Box, InputLabel, TextareaAutosize } from '@material-ui/core';
import useStyles from './TextAreaField.styles';

interface IProps extends FieldRenderProps<string, any> {
  name: string;
  label: string;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  required: boolean;
  autoFocus: boolean
}

const TextAreaField: React.FC<IProps> = (
  {
    label,
    required,
    autoFocus,
    input,
  }
) => {
  const classes = useStyles();

  return (
    <Box style={{ marginTop: '20px' }}>
      <InputLabel>{label}</InputLabel>
      <TextareaAutosize
        {...input}
        value={input.value || ''}
        aria-label="empty textarea"
        placeholder=""
        autoFocus={autoFocus}
        required={required}
        name={input.name}
        className={classes.textarea}
      />
    </Box>
  );
};

export default TextAreaField;
