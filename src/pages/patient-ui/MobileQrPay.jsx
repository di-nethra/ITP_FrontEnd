import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PayQr from "../../assets/images/MobileQr.svg";
import MobileServices from "../../services/MobilePay.service";

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

    height: "50px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
  demo: {
    marginBottom: "80px",
    height: "50px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
}));

export default function MobileQrPay() {
  function Demo() {
    setPhoneNumber("0765851400");
    setName("Anjana Samarakoon");
  }

  function mobilePayCreate(e) {
    e.preventDefault();

    const data = {
      name: Name,
      phonenumber: PhoneNumber,
    };

    MobileServices.create(data)
      .then(() => {})
      .catch((e) => {
        alert("mobile error" + e);
      });

    Swal.fire(
      "Success",
      "Your data is successfully saved for future use",
      "success"
    );

    history.push("/payments/qrcode");
  }

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");

  function handleName(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }
  function handleNumber(e) {
    // console.log(e.target.value);
    setPhoneNumber(e.target.value);
  }

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
              <MobileFriendlyIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Mobile Qr Pay
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={Name}
                onChange={handleName}
                label="Full name"
                name="full name"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={PhoneNumber}
                onChange={handleNumber}
                name="PhoneNumber"
                label="Phone Number"
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={mobilePayCreate}
              >
                Proceed to checkout
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.demo}
                onClick={Demo}
              >
                Demo
              </Button>
            </form>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
