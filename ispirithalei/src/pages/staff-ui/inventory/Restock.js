import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const b_useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Restock() {
  const classes = useStyles();
  const b_classes = b_useStyles();
    return(
        <div className={classes.root}>

        <TextField
          label="Item ID"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText=""
          variant="outlined"
        /> <br/><br/>

        <TextField
          label="Item Name"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText=""
          variant="outlined"
        /><br/><br/>

        <TextField
          label="Quantity"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText=""
          variant="outlined"
        /><br/><br/>

        <TextField
          label="Reorder Level"
          id="outlined-margin-none"
          defaultValue=""
          className={classes.textField}
          helperText=""
          variant="outlined"
        /><br/><br/>

        <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            endIcon={<AddCircleOutlineIcon />}
          >
           Restock
          </Button>

        </div>
    );
}
