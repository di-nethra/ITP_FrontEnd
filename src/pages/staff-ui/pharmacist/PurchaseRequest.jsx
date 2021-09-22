import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div style={{marginLeft:120}}>
     
        <form className={classes.root} noValidate autoComplete="off" style={{marginTop:20}}>
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
                style={{marginTop:30, width: 100}}
                >
                Send
                </Button>
            </div>

        </form>
    </div>
  );
}