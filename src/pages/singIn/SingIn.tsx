import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Field, Form } from 'react-final-form';
import Copyright from '../../components/Copyright/Copyright';
import InputTextField from '../../components/form/InputTextField/InputTextField';
import { ISingInFormValues } from '../../redux/auth/interfaces';
import { useActions, useAppSelector } from '../../redux/hooks';
import { useStyles } from './SingIn.styles';
import { useHistory } from 'react-router';
import { composeValidators, email, required } from '../../validation';
import { getFieldErrors } from '../../utils/getFieldErrors';

const validateEmail = composeValidators(required(), email());
const validatePassword = required();

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const { fetchSingIn } = useActions();
  const token = useAppSelector(state => state.auth.token?.access);

  React.useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [ token ]);

  const send = (values: ISingInFormValues) => {
    return new Promise((resolve) => {
      fetchSingIn(values, {
        promiseActions: {
          resolve: () => resolve(false),
          reject: (data: any) => resolve(getFieldErrors(data?.errors))
        }
      });
    })
  }

  const onSubmit = async (values: ISingInFormValues) => {
    return await send(values);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className={classes.paper}>
        <img src="/logo.png" alt="Tactise" width={252} height={60} />
        <Form
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
          render={({ handleSubmit, valid }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Field
                required
                label="Электронная почта"
                name="email"
                variant="outlined"
                autoFocus
                component={InputTextField}
                validate={validateEmail}
              />
              <Field
                required
                label="Пароль"
                name="password"
                type="password"
                variant="outlined"
                component={InputTextField}
                validate={validatePassword}
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
            </form>
          )}
        />
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;
