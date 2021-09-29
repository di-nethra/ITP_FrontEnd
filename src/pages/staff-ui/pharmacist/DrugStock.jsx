import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { white } from 'material-ui/styles/colors';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import InventoryDataService from '../../../services/inventoryServices';
import { Link, useParams } from "react-router-dom";

const columns = [
  { id: 'item_id', label: 'ID', minWidth: 100 },
  { id: 'item_name', label: 'Item Name', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 100,
    //align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 250,
  },
});

// function createData(id, name, quantity, reoderlevel) {
//   //const density = population / size;
//   return { id, name, quantity, reoderlevel };
// }


export default function AvailableDrugTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    retrieveInventory();
    }, []);

  const retrieveInventory = () => {
  InventoryDataService.getAll()
      .then(response => {
          setInventory(response.data);
      })
      .catch(e => {
          console.log(e);
      });
  };

  let rows = [];
    for (const inventoryy of inventory) {
        rows.push(
            {
                item_id: inventoryy.item_id,
                item_name: inventoryy.item_name,
                quantity: inventoryy.quantity,
                reorder_level: inventoryy.reorder_level
            }
        )
    }


  return (
    <div>
    <h3>Available Drugs</h3>
    <Paper style={{width:'80%', marginLeft:80, marginTop:60}} className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'#005792', color:white }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
    </Paper>

    <div style={{marginLeft:80, marginTop:40, fontWeight:'bold'}} >
        View Request List

        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{width: 100, marginLeft: 20, marginRight:80}}
            component={Link}
            to="/staff/pharmasist/purchaserequest"
            >
            View
        </Button>
    
   
    Send Request for New Stock
    <Link to="/staff/pharmasist/purchaserequest">
    <Tooltip style={{marginLeft:20,}} title="Add request" aria-label="add">
        <Fab color="primary" className={classes.fab}>
        <AddIcon />
        </Fab>
    </Tooltip>
    </Link>
    </div>
    </div>
  );
}



