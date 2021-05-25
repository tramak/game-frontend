import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles/Form.styles';
import InputTextField from '../form/InputTextField/InputTextField';
import { useActions, useAppSelector } from '../../redux/hooks';
import TextAreaField from '../form/TextAreaField/TextAreaField';
import { ICompanyAddFormValues } from '../../redux/company/interfaces';

interface IProps {
  id?: string | number;
}

const CompanyEdit: React.FC<IProps> = ({ id }) => {
  const isEdit = !!id;
  const classes = useStyles();
  const { fetchCompanyAdd, fetchCompany, fetchCompanyEdit, clearCompany } = useActions();
  const company = useAppSelector(state => state.company.companyActive);

  useEffect(() => {
    if (id) {
      fetchCompany(id);
    }

    return () => {
      clearCompany();
    }
  }, [ id ]);

  const onSubmit = (values: ICompanyAddFormValues) => {
    if (id) {
      fetchCompanyEdit(id, values);
    } else {
      fetchCompanyAdd(values);
    }
  }

  if (isEdit && !company) {
    return null;
  }

  const initialValues = {
    name: company?.name || '',
    email: company?.email || '',
    url: company?.url || '',
    description: company?.description || '',
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ handleSubmit, valid }) => (
        <form className={classes.layout} onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            {isEdit ? 'Редактировать компанию' : 'Добавить компанию'}
          </Typography>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Field
                  required
                  name="name"
                  label="Название"
                  autoFocus
                  component={InputTextField}
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
                  label="Url (http://)"
                  name="url"
                  component={InputTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Описание"
                  component={TextAreaField}
                />
              </Grid>

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
        </form>
      )}
    />
  );
};

export default CompanyEdit;
