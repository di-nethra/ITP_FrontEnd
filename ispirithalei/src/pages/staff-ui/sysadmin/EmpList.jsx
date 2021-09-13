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
import empFormService from "../../../services/empForm.service";
import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(firstname, lastname, email, mobile, address) {
  return { firstname, lastname, email, mobile, address };
}

const rows = [
  createData('John', 'Doe', 'john32@gmail.com', '0767644126', 'doctor'),
  createData('Anthony', 'Joshua', 'john32@gmail.com', '0767644126', 'doctor'),
  createData('Emilia', 'clark', 'john32@gmail.com','0767644126', 'doctor'),
];

function EmpList() {
  const classes = useStyles();

  const [details, setDetails] = useState([]);
  let {id} = useParams();
  useEffect(() => {
      getDetailsByID(id);
  }, [id]);

  const getDetailsByID = (id) => {
    empFormService.get(id)
          .then(response => {
            setDetails(response.data)
              console.log(response.data)
          })
          .catch(err => {
                  console.log(err);
              }
          )
  }

  const row = [];
  for (const detail of details) {
    rows.push(
          {
            role: detail.role,
            firstname:detail.firstname, 
            lastname:detail.lastname, 
            email:detail.email,
            mobile:detail.mobile, 
            address:detail.address,
          }
      )
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Mobile</TableCell>
            <TableCell align="left">Role</TableCell>
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