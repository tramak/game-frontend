import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useRowStyles from './CompanyRow.styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { ICompany } from '../../redux/company/interfaces';
import { useHistory } from 'react-router';
import { useConfirm } from 'material-ui-confirm';
import { useActions } from '../../redux/hooks';

interface IProps {
  row: ICompany
}

const UserRow: React.FC<IProps> = ({ row }) => {
  const [ open, setOpen ] = React.useState(false);
  const { fetchCompanyDelete } = useActions();
  const classes = useRowStyles();
  const history = useHistory();
  const confirm = useConfirm();

  const deleteCompany = () => {
    confirm({
      title: 'Вы уверенны что хотите удалить компанию?',
      cancellationText: 'Отмена'
    })
      .then(() => {
        fetchCompanyDelete(row.id);
      });
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell className={classes.arrow}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.url}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon />}
                onClick={() => history.push(`/company/edit/${row.id}`)}
              >
                Редактировать
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={deleteCompany}
              >
                Удалить
              </Button>
            </Box>
            <Box margin={2}>
              <Typography variant="h6" gutterBottom component="div">
                О компании
              </Typography>
              <div>{row.description}</div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default UserRow;
