import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useRowStyles from './UserRow.styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { IUser } from '../../redux/user/interfaces';
import { useHistory, useLocation } from 'react-router';
import { useActions, useAppSelector } from '../../redux/hooks';
import { useConfirm } from 'material-ui-confirm';
import { Roles } from '../../intefaces/role';
import { Link } from '@material-ui/core';

interface IProps {
  user: IUser
}

const UserRow: React.FC<IProps> = ({ user }) => {
  const [ open, setOpen ] = React.useState(false);
  const classes = useRowStyles();
  const history = useHistory();
  const roles = useAppSelector(state => state.auth.profile?.roles) || [];
  const { fetchUserDelete } = useActions();
  const confirm = useConfirm();

  const deleteUser = () => {
    confirm({
      title: 'Вы уверенны что хотите удалить пользователя?',
      cancellationText: 'Отмена'
    })
      .then(() => {
        fetchUserDelete(user.id);
      });
  }

  const completed = !!user.status;
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell className={classes.arrow}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.fio}
        </TableCell>
        {roles.includes(Roles.ADMIN) && (
          <TableCell>{user.company}</TableCell>
        )}
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.group}</TableCell>
        {roles.includes(Roles.ADMIN) && (
          <TableCell>{user.roles?.join(', ')}</TableCell>
        )}
        <TableCell>{user.invitationAt}</TableCell>
        <TableCell>
          {user.token && (
            <Link href={`${window.location.origin}/game/${user.token}`}>ссылка</Link>
          )}
        </TableCell>
        <TableCell>
          {completed && <Box className={classes.statusCompleted}>Пройдено</Box>}
          {!completed && <Box className={classes.statusNoCompleted}>Не пройдено</Box>}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={roles.includes(Roles.ADMIN) ? 9 : 7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={() => history.push(`/user/edit/${user.id}`)}
              >
                Редактировать
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={deleteUser}
              >
                Удалить
              </Button>
            </Box>
            {/*<Box margin={2}>*/}
            {/*  <Typography variant="h6" gutterBottom component="div">*/}
            {/*    История*/}
            {/*  </Typography>*/}
            {/*  <div>В разработке...</div>*/}
            {/*</Box>*/}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default UserRow;
