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

interface IProps {
  user: IUser
}

const UserRow: React.FC<IProps> = ({ user }) => {
  const [ open, setOpen ] = React.useState(false);
  const classes = useRowStyles();

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
        <TableCell>{user.company}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.group}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>{user.invitationAt}</TableCell>
        <TableCell>{user.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
              >
                Редактировать
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Удалить
              </Button>
            </Box>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                История
              </Typography>
              <div>В разработке...</div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default UserRow;
