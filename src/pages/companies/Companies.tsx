import React, { useEffect } from 'react';
import useStyles from '../users/Users.styles';
import { useHistory } from 'react-router';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Companies from '../../components/Companies/Companies';
import { useActions } from '../../redux/hooks';

const CompaniesPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { fetchCompanies } = useActions();

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div>
      <Box m={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push('/company/add')}
        >
          Добавить компанию
        </Button>
      </Box>
      <Companies />
    </div>
  );
};

export default CompaniesPage;
