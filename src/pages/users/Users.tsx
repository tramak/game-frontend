import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import Users from '../../components/Users/Users';
import useStyles from './Users.styles';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';

const UsersPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Box m={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push('/user/add')}
        >
          Добавить пользователя
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<GetAppIcon />}
          onClick={() => history.push('/user/add')}
        >
          Скачать шаблон
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<FontDownloadOutlinedIcon />}
          onClick={() => alert('В разработке')}
        >
          Импорт
        </Button>
      </Box>
      <Users />
    </div>
  );
}

export default UsersPage;

