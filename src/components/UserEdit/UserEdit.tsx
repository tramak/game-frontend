import React, { useEffect } from 'react';
import { Form } from 'react-final-form';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles/Form.styles';
import { IUserAddFormValues } from '../../redux/user/interfaces';
import { Roles } from '../../intefaces/role';
import { generate } from 'generate-password';
import UserEditContent from './UserEditContent';
import { useActions, useAppSelector } from '../../redux/hooks';

const getPassword = () => {
  return generate({
    length: 10,
    numbers: true
  })
}

interface IProps {
  id?: string | number;
}

const UserEdit: React.FC<IProps> = ({ id }) => {
  const isEdit = !!id;
  const classes = useStyles();
  const { fetchUserAdd, fetchUserEdit, fetchCompanies, fetchUser, clearUser } = useActions();
  const user = useAppSelector(state => state.user.userActive);

  const onSubmit = (values: IUserAddFormValues) => {
    if (id) {
      fetchUserEdit(id, values);
    } else {
      fetchUserAdd(values);
    }
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    if (id) {
      fetchUser(id);
    }

    return () => {
      clearUser();
    }
  }, [ id ]);

  if (isEdit && !user) {
    return null;
  }

  const role = user?.roles && user?.roles instanceof Array ? user?.roles[0]: undefined;
  const initialValues = {
    fio: user?.fio || '',
    email: user?.email || '',
    companyId: user?.companyId || '',
    group: user?.group || '',
    role: role || Roles.USER,
    password: isEdit ? '' : getPassword()
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ handleSubmit, valid }) => (
        <form className={classes.layout} onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            {isEdit ? 'Редактировать пользователя': 'Добавить пользователя'}
          </Typography>
          <UserEditContent user={user} />
        </form>
      )}
    />
  );
};

export default UserEdit;
