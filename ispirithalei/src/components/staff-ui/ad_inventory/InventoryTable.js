import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { Link } from "react-router-dom";

const columns = [
  { id: 'item_id', label: 'ID', minWidth: 170 },
  { id: 'item_name', label: 'Item Name', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'r_level',
    label: 'Reorder-Level',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(item_name, item_id, quantity) {
  const r_level = quantity * 0.10;
  return { item_name, item_id, quantity, r_level };
}

const rows = [
  createData('Panadol', 'IN001', 10000, ),
  createData('Piriton', 'IN002', 5000),
  createData('Brufen', 'IN003', 7500),
  createData('Vitamin C', 'IN004', 3000),
  createData('Voltaren', 'IN005', 4000),
  createData('Candid B', 'IN006', 2000),
  createData('Zaart', 'IN007', 6000),
  createData('Roparc', 'IN008', 7000),
  createData('Penicilin', 'IN009', 12000),
  createData('Pfizer', 'IN010', 50000),
  createData('Sinopharm', 'IN011', 60000),
  createData('Sputnik-V', 'IN012', 70000),
  createData('Moderna', 'IN013', 40000),
  createData('CoviShield', 'IN014', 50000),
  createData('DSyrup', 'IN015', 80000),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 250,
  },
});


export default function InventoryTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const b_classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,backgroundColor: "#005792",color: "#fff" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Paper> <br /><br />
    <Link to={"/staff/inventorymanager/inventoryreport/"}>       
      <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            endIcon={<AssignmentOutlinedIcon />}
          >
           Generate Report
          </Button>
    </Link>
    </div>
          
  );
}