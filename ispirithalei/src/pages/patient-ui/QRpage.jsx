import React from "react";
import QRCode from "qrcode.react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";
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
  const sub = checkout.start();
  win();
}

const useStyles = makeStyles({
  qr: {
    textAlign: "center",
    marginBottom: "100px",
    marginTop: "100px",
  },
  qrcode: {
    color: "#005792",
    marginTop: "110px",
  },
  qrText: {
    color: "#005792",
    paddingBottom: "100px",
  },
  card: {
    width: "500px",
    height: "400px",
    alignSelf: "center",
  },
});

function QRpage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" className={classes.qr}>
        <Grid item xs={12}>
          <Typography className={classes.qrText} variant="h2">
            Scan the QR and Pay
          </Typography>
        </Grid>
        <Card className={classes.card}>
          <Grid item xs={12} className={classes.qrcode}>
            <QRCode value="https://www.paygo.lk/Home/Pay" />,
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default QRpage;
