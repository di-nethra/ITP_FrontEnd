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
    <div style={{marginLeft:80}}>
        <form className={classes.root} noValidate autoComplete="off" style={{ width:'80%'}}>
            <TextField 
            id="patientname" 
            label="Patient Name" 
            variant="outlined"
            placeholder=""
            style={{marginLeft: 40, width: 650 }} />

            <TextField 
            id="diagnosis" 
            label="Diagnosis" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 650}} />

            <TextField 
            id="med1" 
            label="Medicine 1" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="med2" 
            label="Medicine 2" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="dos1" 
            label="Dosage" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="dos2" 
            label="Dosage" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="qunt1" 
            label="Quantity" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="qunt2" 
            label="Quantity" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="price1" 
            label="Price" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <TextField 
            id="price2" 
            label="Price" 
            variant="outlined" 
            placeholder=""
            style={{marginLeft: 40, width: 300}} />

            <div style={{marginLeft:560}}>
                <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{marginTop:30, width: 140}}
                >
                Generate Bill
                </Button>
            </div>

        </form>
    </div>
  );
}