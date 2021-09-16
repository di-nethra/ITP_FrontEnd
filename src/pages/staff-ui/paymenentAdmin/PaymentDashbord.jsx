import React from "react";
import CreditCard from "../../../assets/images/CreditDashbord.svg";
import MobilePay from "../../../assets/images/mobileDashbord.svg";
import StripePay from "../../../assets/images/refundDashbord.svg";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    paddingLeft: "100px",
  },
  option: {
    "&:hover": {
      background: "#D9FAFF",
    },
    marginTop: "50px",
  },
});

function PaymentDashbord() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <img
            src={CreditCard}
            alt="60"
            className={classes.option}
            onClick={() => history.push("/staff/PaymentAdmin/creditCard")}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={MobilePay}
            alt="60"
            className={classes.option}
            onClick={() => history.push("/staff/PaymentAdmin/mobilePay")}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={StripePay}
            alt="60"
            className={classes.option}
            onClick={() => history.push("/staff/Paymentadmin/refunds")}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentDashbord;
