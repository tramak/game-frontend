import React from 'react';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../../styles/Form.styles';
import { IAddUserFormValues } from '../../../redux/user/interfaces';
import { Roles } from '../../../intefaces/role';
import { generate } from 'generate-password';
import AddContent from './AddContent';
import { useActions } from '../../../redux/hooks';

const UserAddPage = () => {
  const classes = useStyles();
  const { fetchAddUser } = useActions();

  const handlerSubmit = (values: IAddUserFormValues) => {
    fetchAddUser(values);
  }

  const initialValues = {
    role: Roles.USER,
    password: generate({
      length: 10,
      numbers: true
    })
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
        <AddContent />
      </Form>
    </Formik>
  );
}

export default UserAddPage;
