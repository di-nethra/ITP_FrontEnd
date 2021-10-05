import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import empFormService from "../../../services/empForm.service";
import Swal from "sweetalert2";
import { useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ActionBtn(props) {
  const theme = useTheme();
  const classes = useStyles();

  //delete employee function
  const deleteDetails = (event) => {
    let id = event.currentTarget.value;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: theme.palette.secondary.main,
      cancelButtonColor: theme.palette.primary.main,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        empFormService
          .remove(id)
          .then(() => {
            Swal.fire("Deleted!", "Your session has been deleted.", "success");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

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

      <Link to={"/staff/sysadmin/empedit/" + props.data}>
        <Button color="primary" aria-label="edit">
          <EditIcon />
        </Button>
      </Link>
    </div>
  );
}

export default ActionBtn;
