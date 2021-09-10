import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import invoice from "../../assets/images/invoice.svg";
import IspirithaleBlueLogo from "../../assets/2.png";

const useStyles = makeStyles({
  infoLogo: {
    width: "500px",
    marginLeft: "200px",
  },
  price: {
    marginLeft: "300px",
  },
  invoiceText: {
    paddingBottom: "500px",
  },
  blueispirithale: {
    width: "150px",
    paddingLeft: "300px",
  },
  card: {
    width: "500px",
    marginLeft: "200px",
    marginTop: "15px",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
    marginBottom: "100px",
  },

  text: {
    textAlign: "center",
    paddingLeft: "350px",
  },
  label: {
    textAlign: "left",
    marginTop: "40px",
  },

  TextField: {
    marginTop: "20px",
    textAlign: "right",
  },
  TextField1: {
    marginTop: "10px",
    textAlign: "left",
  },
  Paybutton: {
    marginTop: "40px",
    // marginBottom: "1000px",
    width: "400px",
    height: "50px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
});

function PaymentInvoice() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row">
        <Grid item md={4}>
          <Card className={classes.card}>
            <CardContent>
              <img
                src={IspirithaleBlueLogo}
                alt="70"
                className={classes.blueispirithale}
              />
              <h3 className={classes.invoiceText}>
                Invoice
                <hr></hr>
              </h3>
              <Card>
                <CardContent>
                  <h1 className={classes.price}>Rs.0.00</h1>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid direction="column" md={4} className={classes.text}>
          <form noValidate>
            <img src={invoice} alt="invoiceimage" />

            <Card>
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.Paybutton}
                >
                  Download as PDF
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.Paybutton}
                >
                  Download as JPG
                </Button>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentInvoice;
