import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { createData } from './utils';
import UserRow from './UserRow';

const rows = [
  createData('Калаев', 'kalaev-viktor@mail.ru', 'Tactise', 'admin'),
  createData('Калаев Виктор', 'kalaev-viktor@mail.ru', 'Tactise', 'admin'),
  createData('Калаев', 'kalaev-viktor@mail.ru', 'Tactise', 'admin'),
];

const Users = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Имя</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Компания</TableCell>
            <TableCell>Права</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <UserRow key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users;
