import React from "react";
import CreditCard from "../../assets/images/CreditcardLogo.svg";
import MobilePay from "../../assets/images/MobilePayLogo.svg";
import StripePay from "../../assets/images/StripePayLogo.svg";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  logo: {
    marginTop: "100px",
    paddingLeft: "100px",
  },
  option: {
    "&:hover": {
      background: "#D9FAFF",
    },
  },
});

function PaymentOptionPage() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Grid container className={classes.logo}>
        <Grid item xs={12} md={4}>
          <a href="#">
            <img
              src={CreditCard}
              alt="60"
              className={classes.option}
              onClick={() => history.push("/payments/info")}
            />
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href="#">
            <img
              src={MobilePay}
              alt="60"
              className={classes.option}
              onClick={() => history.push("/payments/info")}
            />
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href="#">
            <img
              src={StripePay}
              alt="60"
              className={classes.option}
              onClick={() => history.push("/payments/refund")}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentOptionPage;
