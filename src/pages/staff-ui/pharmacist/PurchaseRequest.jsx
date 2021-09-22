import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 180,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 180,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 120,
      editable: true,
    },
    {
        field: 'action',
        headerName: 'Action',
        type: 'number',
        width: 140,
        editable: true,
      },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  ];

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div style={{marginLeft:120}}>
     
        <form className={classes.root} noValidate autoComplete="off" style={{marginTop:0}}>
            <TextField 
            id="drug_id" 
            label="Medicine ID" 
            variant="outlined"
            placeholder="Input Medicine ID"
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="medicine_name" 
            label="Medicine Name" 
            variant="outlined" 
            placeholder="Input Medicine Name"
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="mqty" 
            label="Quantity" 
            variant="outlined" 
            placeholder="Input Quantity"
            style={{marginLeft: 40, width: 600}} />

            <div style={{marginLeft:540}}>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{marginTop:15, width: 100}}
                >
                Send
                </Button>
            </div>


            <div style={{ height: 200, width: '80%', marginTop:40 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={4}
                   // checkboxSelection
                    //disableSelectionOnClick
                />
            </div>

        </form>
    </div>
  );
}