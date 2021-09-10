import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  infoLogo: {
    width: "500px",
    marginLeft: "200px",
    marginBottom: "1000px",
  },
  text: {
    textAlign: "center",
    paddingLeft: "350px",
  },
  label: {
    textAlign: "left",
    marginTop: "20px",
  },

  TextField: {
    marginTop: "20px",
    textAlign: "right",
  },
  TextField1: {
    marginTop: "20px",
    textAlign: "left",
  },
  Paybutton: {
    marginTop: "20px",
    width: "400px",
    height: "50px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
});

function Refunds() {
  const classes = useStyles();
  return (
    <div>
      <form noValidate>
        <p className={classes.label}>email</p>
        <TextField id="outlined-basic" variant="outlined" fullWidth="true" />
        <p className={classes.label}>Card Number</p>
        <TextField
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          fullWidth="true"
        />
        <Grid item direction="row">
          <Grid item className={classes.TextField1}>
            <TextField
              id="outlined-basic"
              label="Year/Month"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="CVC" variant="outlined" />
          </Grid>
        </Grid>
        <p className={classes.label}>Name on the Card</p>
        <TextField
          id="outlined-basic"
          label="Name on the Card"
          variant="outlined"
          fullWidth="true"
        />
        <p className={classes.label}>Country</p>
      </form>
    </div>
  );
}

export default Refunds;
