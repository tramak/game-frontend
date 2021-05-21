import React from 'react';
import { FieldProps } from 'formik';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel } from '@material-ui/core';
import useStyles from './SelectField.styles';
import { IProps } from './interfaces';

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
  const labelId = `select-label-${field.name}`;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    form.setFieldValue(field.name, e.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={labelId}>{label}</InputLabel>
      <Select
        native
        value={field.value}
        onChange={handleChange}
        inputProps={{
          name: field.name,
          id: labelId,
        }}
      >
        {(data || []).map(item => (
          <option key={item.value} value={item.value.toString()}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
