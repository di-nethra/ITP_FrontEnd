import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ActionBtn from "./ActionBtn";
import empFormService from "../../../services/empForm.service";
import { useEffect, useState } from "react";
import PDF from "../../../components/PDF";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  search: {
    marginTop: 10,
    marginBottom: 20,
    height: 30,
    width: 200,
    borderRadius: 15,
    borderColor: "#1976d2",
    borderWidth: 3
  },
});

function EmpList() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const headers = [
    "ID",
    "Role",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Address",
  ];

  return (
    <div>
      <input
        type="text"
        placeholder=" Search"
        className={classes.search}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Mobile</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((val) => {
                let newVal;
                if (searchTerm === "") {
                  newVal = val;
                } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  newVal = val;
                }
                return newVal
              })
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.role}
                  </TableCell>
                  <TableCell align="left">{row.firstName}</TableCell>
                  <TableCell align="left">{row.lastName}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.mobile}</TableCell>
                  <TableCell align="left">
                    <ActionBtn data={row.id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ float: "right", marginTop: 20, marginBottom: 10 }}>
        <PDF data={rows} headers={headers} title="Employee Report" />
      </div>
    </div>
  );
}

export default EmpList;
