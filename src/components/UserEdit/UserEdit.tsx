import React, { useEffect } from 'react';
import { Form } from 'react-final-form';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles/Form.styles';
import { IUserAddFormValues } from '../../redux/user/interfaces';
import { Roles } from '../../intefaces/role';
import { generate } from 'generate-password';
import UserEditContent from './UserEditContent';
import { useActions, useAppSelector } from '../../redux/hooks';
import { getFieldErrors } from '../../utils/getFieldErrors';

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
  const companyId = useAppSelector(state => state.auth.profile?.companyId);
  const roles = useAppSelector(state => state.auth.profile?.roles) || [];
  const userActive = useAppSelector(state => state.user.userActive);

  const send = (values: IUserAddFormValues) => {
    return new Promise((resolve) => {
      const meta = {
        promiseActions: {
          resolve: () => resolve(false),
          reject: (data: any) => resolve(getFieldErrors(data?.errors))
        }
      }

      if (id) {
        fetchUserEdit(id, values, meta);
      } else {
        fetchUserAdd(values, meta);
      }
    });
  }

  const onSubmit = async (values: IUserAddFormValues) => {
    return await send(values);
  }

  useEffect(() => {
    if (roles.includes(Roles.ADMIN)) {
      fetchCompanies();
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchUser(id);
    }

    return () => {
      clearUser();
    }
  }, [ id ]);

  if (isEdit && !userActive) {
    return null;
  }

  const role = userActive?.roles && userActive?.roles instanceof Array ? userActive?.roles[0]: undefined;
  const initialValues = {
    fio: userActive?.fio || '',
    email: userActive?.email || '',
    companyId: userActive?.companyId || companyId || '',
    group: userActive?.group || '',
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
            {isEdit ? '?????????????????????????? ????????????????????????': '???????????????? ????????????????????????'}
          </Typography>
          <UserEditContent user={userActive} />
        </form>
      )}
    />
  );
};

export default UserEdit;
