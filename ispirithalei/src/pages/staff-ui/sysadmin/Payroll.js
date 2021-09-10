import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import Payslip from './Payslip';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(firstname, lastname, role, salary) {
  return { firstname, lastname, role, salary };
}

const rows = [
  createData('John', 'Doe','Doctor', '$1500'),
  createData('Anthony', 'Joshua', 'Nurse', '$1200'),
  createData('Emilia', 'clark', 'Pharmasist', '$1000'),
];

function Payroll() {
  const classes = useStyles();
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }

  switch(count){
    case 1:
      return (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Role</TableCell>
                  <TableCell align="left">Salary</TableCell>
                  <TableCell align="left">Generate slip</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.firstname}>
                    <TableCell component="th" scope="row">
                      {row.firstname}
                    </TableCell>
                    <TableCell align="left">{row.lastname}</TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.salary}</TableCell>
                    <TableCell align="left"><Button
                                              variant="contained"
                                              color="primary"
                                              onClick={increase}
                                              startIcon={<CreateIcon />}
                                            >
                                              Generate Slip
                                            </Button>
                                                </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    case 2:
      return(
        <Payslip />
      );
  }
}

export default Payroll;