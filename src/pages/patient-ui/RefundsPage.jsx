import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Card, TextareaAutosize } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PayQr from "../../assets/images/refundPage.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  logo: {
    marginBottom: "20px",
    color: "#005792",
    backgroundColor: "#D9FAFF",
  },
  image: {
    width: "500px",
    marginLeft: "100px",
    marginTop: "50px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop: "40px",
    marginBottom: "80px",
    height: "50px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
}));

export default function RefundPage() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={4}>
        <img className={classes.image} src={PayQr} alt="60" />
      </Grid>
      <Grid item xs={4}>
        <Card>
          <div className={classes.paper}>
            <Avatar className={classes.logo}>
              <AccountBalanceIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Refunds Page
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Payment ID"
                name="PaymentID"
                autoFocus
              />
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Refund Request"
                defaultValue="Please enter your reason to to ask for a refund"
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => history.push("/payments")}
              >
                Submit Refund Request
              </Button>
            </form>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}