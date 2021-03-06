import React from 'react';
import { FieldProps } from 'formik';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel } from '@material-ui/core';
import useStyles from './SelectField.styles';
import { IProps } from './interfaces';

const SelectField: React.FC<IProps> = (
  {
    name,
    label,
    required,
    autoFocus,
    input,
    options
  }
) => {
  const classes = useStyles();
  const labelId = `select-label-${input.name}`;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    input.onChange(e.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={labelId} shrink={true}>{label}</InputLabel>
      <Select
        native
        value={input.value}
        onChange={handleChange}
        autoFocus={autoFocus}
        inputProps={{
          name: input.name,
          id: labelId,
        }}
        label={label}
      >
        {(options || []).map(item => (
          <option key={item.value} value={item.value.toString()}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
