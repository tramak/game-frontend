import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Field, useField } from 'react-final-form';
import InputTextField from '../form/InputTextField/InputTextField';
import SelectField from '../form/SelectField/SelectField';
import { roleList, Roles } from '../../intefaces/role';
import { Box, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles/Form.styles';
import { useAppSelector } from '../../redux/hooks';
import { IOptions } from '../form/SelectField/interfaces';
import { IUser } from '../../redux/user/interfaces';

interface IProps {
  user?: IUser
}
const UserEditContent: React.FC<IProps> = ({ user }) => {
  const isEdit = !!user;
  const classes = useStyles();
  const roleField = useField('role');
  const companies = useAppSelector(state => state.company.data);
  const [ data, setData ] = useState<IOptions>([]);

  useEffect(() => {
    const newData: IOptions = [ { label: '', value: '' } ];
    (companies || []).forEach(company => {
      newData.push({
        label: company.name,
        value: String(company.id)
      });
    });

    setData(newData)
  }, [ companies ]);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Field
            required
            name="fio"
            label="ФИО сотрудника"
            autoFocus
            component={InputTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="companyId"
            label="Компания"
            options={data}
            component={SelectField}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            required
            label="Электронная почта"
            name="email"
            component={InputTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="group"
            label="Группа"
            component={InputTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="role"
            label="Роль"
            options={roleList}
            component={SelectField}
          />
        </Grid>
        {roleField.input.value !== Roles.USER && (
          <Grid item xs={12}>
            <Field
              label="Пароль"
              name="password"
              component={InputTextField}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Box className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              {isEdit ? 'Редактировать' : 'Добавить'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserEditContent;
