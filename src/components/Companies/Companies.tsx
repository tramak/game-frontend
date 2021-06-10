import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { useAppSelector } from '../../redux/hooks';
import CompanyRow from './CompanyRow';

const Companies: React.FC = () => {
  const companies = useAppSelector(state => state.company.data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Название</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Сотрудников</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies && companies.map((row) => (
            <CompanyRow key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Companies;
