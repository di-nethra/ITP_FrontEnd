import React, { Component } from "react";
import logo from "../../assets/images/infoPageLogo.svg";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PayCredit from "../../assets/images/PayWithCreditCard.svg";
import Button from "@material-ui/core/Button";
import DropDown from "../../components/patient-ui/Payments/DropDown";
import paymentCreditService from "../../services/paymentCredit.service";
import Swal from "sweetalert2";
const styles = (theme) => ({
  infoLogo: {
    width: "500px",
    marginLeft: "200px",
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
    textAlign: "right",
  },
  TextField1: {
    marginTop: "20px",
    textAlign: "left",
  },
  Paybutton: {
    marginTop: "40px",
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
  // Demo = () => {
  //   this.props.demo();
  // };

  continue = (e) => {
    e.preventDefault();
    const ranNum = "CPAY" + Math.floor(1000 + Math.random() * 9000);
    const currentDate = new Date().toDateString();

    const tempPrice = "RS.2500.00";
    const data = {
      paymentid: ranNum,
      name: this.props.values.nameOnTheCard,
      email: this.props.values.email,
      date: currentDate,
      amount: tempPrice,
    };
    if (data.email.includes("@", 0) && data.email.includes(".com")) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must be in valid format",
      });

      return null;
    }

    const temp = data.name;

    if (temp[0] === temp[0].toUpperCase() || temp === undefined) {
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name on Card must be start with a capital letter",
      });
      return null;
    }

    // console.log(" data meka" + data.email);
    paymentCreditService
      .create(data)

      .then((response) => {
        // console.log("inside create" + response.data);

        this.setState({
          name: response.data.nameOnTheCard,
          email: response.data.email,
        });
        // console.log("inside then" + response.data);
      })
      .catch((e) => {
        alert(e);
        console.log("this is the error:" + e);
      });
    Swal.fire(
      "Success",
      "Your data is successfully saved for future use",
      "success"
    );
    this.props.nextStep();
  };

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;

    // console.log("meka2" + values.email);

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

            <form Validate>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("email")}
                defaultValue={values.email}
                className={classes.TextField1}
              />

              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("cardNumber")}
                defaultValue={values.cardNumber}
                className={classes.TextField1}
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
                    className={classes.TextField1}
                  />
                </Grid>
              </Grid>

              <TextField
                id="outlined-basic"
                label="Name on the Card"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange("nameOnTheCard")}
                defaultValue={values.nameOnTheCard}
                className={classes.TextField1}
              />

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
            {/* <Button
              variant="contained"
              color="primary"
              className={classes.Paybutton}
              onClick={this.Demo}
            >
              Demo
            </Button> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreditCardPage);
