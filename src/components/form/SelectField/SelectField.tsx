import React from 'react';
import { FieldProps } from 'formik';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel } from '@material-ui/core';
import useStyles from './SelectField.styles';
import { IProps } from './interfaces';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

const SelectField: React.FC<IProps & FieldProps> = (
  {
    name,
    label,
    required,
    autoFocus,
    field,
    form,
    data
  }
) => {
  const classes = useStyles();
  const labelId = `select-label-${name}`;

  const handlerChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    console.log({ value: e.target.value });
    form.setFieldValue(name, e.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        name={name}
        autoFocus={autoFocus}
        labelId={labelId}
        fullWidth
        id={name}
        value={field.value || ''}
        onChange={handlerChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {(data || []).map(item => (
          <MenuItem key={item.value} value={item.value.toString()}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
