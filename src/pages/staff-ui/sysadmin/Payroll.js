import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import empFormService from "../../../services/empForm.service";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Payroll(props) {
  const classes = useStyles();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    empFormService
      .getAll()
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let rows = [];
  for (const detail of details) {
    rows.push({
      id: detail._id,
      role: detail.role,
      firstName: detail.firstName,
      lastName: detail.lastName,
      email: detail.email,
      mobile: detail.mobile,
      address: detail.address,
    });
  }

 
  const checkRole = (rows) => {
    let salary ="default";

    if(rows.role == "Doctor"){
       salary = "$2500"
    }
    else if(rows.role == "InventoryManager"){
       salary = "$800"
    }
    else if(rows.role == "Labassistant"){
       salary = "$600"
    }
    else if(rows.role == "Pharmasist"){
       salary = "$1000"
    }
    else if(rows.role == "PaymentAdmin"){
       salary = "$700"
    }
    else if(rows.role == "Receptionist"){
      salary = "$300"
   }
   else if(rows.role == "SysAdmin"){
    salary = "$1100"
 }
    return salary;
  };

  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Salary</TableCell>
            <TableCell align="left">Generate slip</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.role}
              </TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{checkRole(row)}</TableCell>
              <TableCell align="left">
                <Link to={"/staff/sysadmin/payslip/" + props.data}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CreateIcon />}
                  >
                    Generate Slip
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Payroll;
