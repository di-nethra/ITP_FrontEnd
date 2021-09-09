import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ActionBtn from './ActionBtn';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(firstname, lastname, email, mobile, address) {
  return { firstname, lastname, email, mobile, address };
}

const rows = [
  createData('John', 'Doe', 'john32@gmail.com', '0767644126', 'No 10 west coast, california'),
  createData('Anthony', 'Joshua', 'john32@gmail.com', '0767644126', 'No 10 west coast, california'),
  createData('Emilia', 'clark', 'john32@gmail.com','0767644126', 'No 10 west coast, california'),
];

function EmpList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Mobile</TableCell>
            <TableCell align="left">Adress</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstname}>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.mobile}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left"><ActionBtn /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmpList;