import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SummaryBackground from "../../assets/images/SummaryBackground.svg";
import PaymentSummaryText from "../../assets/images/PaymentSummary.svg";
import { Link } from "react-router-dom";
import { Payhere, AccountCategory } from "payhere-js-sdk";
import {
  Customer,
  CurrencyType,
  PayhereCheckout,
  CheckoutParams,
} from "payhere-js-sdk";
Payhere.init("1218569", AccountCategory.SANDBOX);
function onPayhereCheckoutError(errorMsg) {
  alert(errorMsg);
}
function checkout() {
  const customer = new Customer({
    first_name: "Ispirithalei",
    last_name: "WACYAMDA",
    phone: "+94771234567",
    email: "plumberhl@gmail.com",
    address: "No. 50, Highlevel Road",
    city: "Panadura",
    country: "Sri Lanka",
  });

  const checkoutData = new CheckoutParams({
    returnUrl: "http://localhost:3000/return",
    cancelUrl: "http://localhost:3000/cancel",
    notifyUrl: "http://localhost:8080/notify",
    order_id: "112233",
    itemTitle: "Demo Item",
    currency: CurrencyType.LKR,
    amount: 100,
  });

  const checkout = new PayhereCheckout(
    customer,
    checkoutData,
    onPayhereCheckoutError
  );
  var win = window.open("/page", "title");
  checkout.start();
  win();
}

const styles = (theme) => ({
  infoLogo: {
    width: "500px",
    marginLeft: "200px",
  },
  checkbox: {
    textAlign: "right",
  },
  SummaryText: {
    width: "500px",
    marginLeft: "200px",
    marginTop: "15px",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
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

// paymentCreditService.getAll().then((response) => {
//   console.log(response.data[3].name);
// });

export class Checkout extends Component {
  //  paymentCreditService
  //     .create(data)

  //     .then((response) => {
  //       alert("success");
  //       console.log("inside create" + response.data);

  //       this.setState({
  //         name: response.data.nameOnTheCard,
  //         email: response.data.email,
  //       });
  //       console.log("inside then" + response.data);
  //     })
  //     .catch((e) => {
  //       alert(e);
  //       console.log("this is the error:" + e);
  //     });

  render() {
    const { classes } = this.props;

    // console.log(this.props.values);
    return (
      <div>
        <Grid container direction="row">
          <Grid item md={4}>
            <img
              src={PaymentSummaryText}
              alt="70"
              className={classes.infoLogo}
            />
            <img
              src={SummaryBackground}
              alt="40"
              className={classes.SummaryText}
            />
            <Card className={classes.SummaryText}>
              <CardContent>
                <Typography variant="h8" component="h3">
                  I agreed that i am aged 18 or over, have read and accepted the
                  terms and conditions
                  <Checkbox
                    size="medium"
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid direction="column" md={4} className={classes.text}>
            <form noValidate>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth="true"
                value={this.props.values.email}
              />

              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                fullWidth="true"
                className={classes.label}
                value={this.props.values.cardNumber}
              />
              <Grid item direction="row">
                <Grid item className={classes.TextField1}>
                  <TextField
                    id="outlined-basic"
                    label="Year/Month"
                    variant="outlined"
                    className={classes.label}
                    value={this.props.values.yearMonth}
                  />
                  <TextField
                    id="outlined-basic"
                    label="CVC"
                    variant="outlined"
                    className={classes.label}
                    value={this.props.values.CVC}
                  />
                </Grid>
              </Grid>

              <TextField
                id="outlined-basic"
                label="Name on the Card"
                variant="outlined"
                fullWidth="true"
                value={this.props.values.nameOnTheCard}
                className={classes.label}
              />

              <Link to="/payments/invoice">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.Paybutton}
                  onClick={checkout}
                >
                  Pay Rs.0.00
                </Button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Checkout);
