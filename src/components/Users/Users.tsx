import React, { useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import UserRow from './UserRow';
import { IUsers } from '../../redux/user/interfaces';
import { Roles } from '../../intefaces/role';
import { useActions, useAppSelector } from '../../redux/hooks';

const Users: React.FC = () => {
  const users = useAppSelector(state => state.user.list);
  const roles = useAppSelector(state => state.auth.profile?.roles) || [];
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ФИО</TableCell>
            {roles.includes(Roles.ADMIN) && (
              <TableCell>Компания</TableCell>
            )}
            <TableCell>Email</TableCell>
            <TableCell>Группа</TableCell>
            {roles.includes(Roles.ADMIN) && (
              <TableCell>Права</TableCell>
            )}
            <TableCell>Дата приглашения</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users;
