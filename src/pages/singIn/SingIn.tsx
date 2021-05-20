import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form } from 'formik';
import Copyright from '../../components/Copyright/Copyright';
import InputTextField from '../../components/form/InputTextField/InputTextField';
import { ISingInFormValues } from '../../redux/auth/interfaces';
import { useActions } from '../../redux/hooks';
import { useStyles } from './SingIn.styles';

const SignIn = () => {
  const classes = useStyles();
  const { fetchSingIn } = useActions();

  // const handlerSubmit = (values: ISingInForm, { setSubmitting }: FormikHelpers<FormValues>) => {
  const handlerSubmit = (values: ISingInFormValues) => {
    fetchSingIn(values);
    console.log({ values });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src="/tactise_black_logo.png" alt="Tactise" width={252} height={60} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handlerSubmit}
        >
          <Form className={classes.form} noValidate>
            <Field
              required
              label="Электронная почта"
              name="email"
              variant="outlined"
              autoFocus
              component={InputTextField}
            />
            <Field
              required
              label="Пароль"
              name="password"
              type="password"
              variant="outlined"
              autoFocus
              component={InputTextField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Войти
            </Button>
          </Form>
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;
