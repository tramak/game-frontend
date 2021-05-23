import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Users from '../../components/Users/Users';
import useStyles from './Users.styles';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';

const UsersPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Box m={3} className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push('/user/add')}
        >
          Добавить пользователя
        </Button>

        <Box className={classes.buttonsRight}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<GetAppIcon />}
            onClick={() => alert('В разработке')}
          >
            Скачать шаблон
          </Button>

          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={() => alert('В разработке')}
          >
            Импорт
          </Button>
        </Box>
      </Box>
      <Users />
    </div>
  );
}

export default UsersPage;

