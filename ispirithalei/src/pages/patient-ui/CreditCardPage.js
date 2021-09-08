import React, { Component } from "react";
import { useState } from "react";
import logo from "../../assets/images/infoPageLogo.svg";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PayCredit from "../../assets/images/PayWithCreditCard.svg";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import DropDown from "../../components/patient-ui/Payments/DropDown";
import paymentCreditService from "../../services/paymentCredit.service";

const styles = (theme) => ({
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

export class CreditCardPage extends Component {
  continue = (e) => {
    e.preventDefault();
    const ranNum = "CPAY" + Math.floor(1000 + Math.random() * 9000);
    const currentDate = new Date().toDateString();

    const tempPrice = 5650.0;
    const data = {
      paymentid: ranNum,
      name: this.props.values.nameOnTheCard,
      email: this.props.values.email,
      date: currentDate,
      amount: tempPrice,
    };
    console.log(this.props.values);

    console.log(data.email);
    paymentCreditService
      .create(data)

      .then((response) => {
        alert("success");
        console.log("inside create" + response.data);

        this.setState({
          name: response.data.nameOnTheCard,
          email: response.data.email,
        });
        console.log("inside then" + response.data);
      })
      .catch((e) => {
        alert(e);
        console.log("this is the error:" + e);
      });

    this.props.nextStep();
  };

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;

    console.log(values.email);
    let data = [{ email: values.email }, { id: 2 }];
    return (
      <div>
        <Grid container direction="row" className={classes.root}>
          <Grid item md={4}>
            <img src={logo} alt="40" className={classes.infoLogo} />
          </Grid>
          <Grid direction="column" md={4} className={classes.text}>
            <Grid item>
              <img src={PayCredit} alt="70" />
            </Grid>

            <form noValidate>
              <p className={classes.label}>email</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("email")}
                defaultValue={values.email}
              />
              <p className={classes.label}>Card Number</p>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("cardNumber")}
                defaultValue={values.cardNumber}
              />
              <Grid item direction="row">
                <Grid item className={classes.TextField1}>
                  <TextField
                    id="outlined-basic"
                    label="Year/Month"
                    variant="outlined"
                    onChange={handleChange("yearMonth")}
                    defaultValue={values.yearMonth}
                  />
                  <TextField
                    id="outlined-basic"
                    label="CVC"
                    variant="outlined"
                    onChange={handleChange("CVC")}
                    defaultValue={values.CVC}
                  />
                </Grid>
              </Grid>
              <p className={classes.label}>Name on the Card</p>
              <TextField
                id="outlined-basic"
                label="Name on the Card"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("nameOnTheCard")}
                defaultValue={values.nameOnTheCard}
              />
              <p className={classes.label}>Country</p>

              <DropDown onChange={handleChange("country")} />
            </form>

            <Button
              variant="contained"
              color="primary"
              className={classes.Paybutton}
              onClick={this.continue}
            >
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreditCardPage);
