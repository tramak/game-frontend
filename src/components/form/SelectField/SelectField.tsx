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

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    form.setFieldValue(name, e.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        native
        value={field.value}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        {(data || []).map(item => (
          <option key={item.value} value={item.value.toString()}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
