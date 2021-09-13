import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import empFormService from "../../../services/empForm.service";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ActionBtn(props) {
  const classes = useStyles();

  const deleteDetails = event => {
    console.log("clicked")
    empFormService.remove(event.currentTarget.value)
        .then(response => {
          alert("succefully deleted")
            alert(response.statusText)
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

  return (
    <div className={classes.root}>
      <Button 
      color="secondary"
      aria-label="delete"
      value={props.data}
      onClick={deleteDetails}
      >
        <DeleteIcon />
      </Button>
      <Button color="primary" aria-label="edit">
        <EditIcon />
      </Button>
    </div>
  );
}

export default ActionBtn;