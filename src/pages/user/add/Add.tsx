import React from 'react';
import { Formik, Field, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from './Add.styles';
import InputTextField from '../../../components/form/InputTextField/InputTextField';
import SelectField from '../../../components/form/SelectField/SelectField';
import { IAddUserFormValues } from '../../../redux/user/interfaces';
import { useAppSelector } from '../../../redux/hooks';
import { IOptions } from '../../../components/form/SelectField/interfaces';
import { roleList, Roles } from '../../../intefaces/role';

const initialValues = {
  role: Roles.USER
}

const UserAddPage = () => {
  const classes = useStyles();
  const companies = useAppSelector(state => state.company.data);
  const data: IOptions = [ { label: '', value: '' } ];

  (companies || []).forEach(company => {
    data.push({
      label: company.name,
      value: String(company.id)
    });
  });

  const handlerSubmit = (values: IAddUserFormValues) => {
    console.log({ values });
  }

  return (
    <Formik
      onSubmit={handlerSubmit}
      initialValues={initialValues}
    >
      <Form className={classes.layout} noValidate>
        <Typography variant="h6" gutterBottom>
          Добавить пользователя
        </Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Field
                required
                name="firstName"
                label="Имя"
                autoFocus
                component={InputTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                name="lastName"
                label="Фамилия"
                component={InputTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="middleName"
                label="Отчетсво"
                component={InputTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="company"
                label="Компания"
                data={data}
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
                required
                label="Пароль"
                name="password"
                type="password"
                component={InputTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="role"
                label="Роль"
                data={roleList}
                component={SelectField}
              />
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Добавить
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Form>
    </Formik>
  );
}

export default UserAddPage;
