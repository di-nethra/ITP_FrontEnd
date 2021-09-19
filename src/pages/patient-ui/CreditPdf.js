import React from "react";
import Pdf from "react-to-pdf";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import invoice from "../../assets/images/invoice.svg";
import IspirithaleBlueLogo from "../../assets/2.png";
import { Payhere, AccountCategory } from "payhere-js-sdk";
import {
  Customer,
  CurrencyType,
  PayhereCheckout,
  CheckoutParams,
} from "payhere-js-sdk";
Payhere.init("1218569", AccountCategory.SANDBOX);
function onPayhereCheckoutError(errorMsg) {}
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
    itemTitle: "ispirithalei",
    currency: CurrencyType.LKR,
    amount: 2000,
  });

  const checkout = new PayhereCheckout(
    customer,
    checkoutData,
    onPayhereCheckoutError
  );

  var win = window.open("/payments", "title");
  checkout.start();
  win();
}

const ref = React.createRef();
const tempPrice = "RS.5650.00";
const currentDate = new Date().toDateString();

const CreditPdf = (props) => {
  return (
    <>
      <Grid container justifyContent="center">
        <div className="Post" ref={ref}>
          <div>
            <Grid container direction="row" justifyContent="center">
              <Grid item md={8} style={{ marginTop: "30px" }}>
                <Card style={{ border: "solid", marginLeft: "30px" }}>
                  <CardContent>
                    <img src={IspirithaleBlueLogo} alt="70" />
                    <h3>
                      Invoice
                      <hr></hr>
                    </h3>
                    <Grid container style={{ marginTop: "30px" }}>
                      <Grid
                        item
                        xs={12}
                        style={{
                          textAlignLast: "justify",
                          marginTop: "50px",
                          marginBottom: "20px",
                        }}
                      >
                        <h4>Email: {props.email}</h4>
                      </Grid>
                      <Grid container>
                        <Grid item xs={6}>
                          <h4>Customer name:</h4>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <h4> {props.name}</h4>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={6} style={{ marginTop: "20px" }}>
                          <h4>Date of payment:</h4>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{ textAlign: "right", marginTop: "20px" }}
                        >
                          <h4> {currentDate}</h4>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Card style={{ marginTop: "250px", border: "solid" }}>
                      <CardContent>
                        <h1>{tempPrice}</h1>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        <Pdf targetRef={ref} filename="CreditPDF.pdf">
          {({ toPdf }) => (
            <div>
              <Grid
                direction="column"
                md={12}
                style={{ textAlign: "center", padding: "0px" }}
              >
                <form noValidate>
                  <img src={invoice} alt="invoiceimage" />

                  <Card>
                    <CardContent>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={toPdf}
                      >
                        Download as PDF
                      </Button>
                      <Button variant="contained" color="primary">
                        Download as JPG
                      </Button>
                    </CardContent>
                  </Card>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={checkout}
                    style={{
                      marginTop: "50px",
                      height: "50px",
                      width: "500px",
                    }}
                  >
                    Pay with PayHere
                  </Button>
                </form>
              </Grid>
            </div>
          )}
        </Pdf>
      </Grid>
    </>
  );
};

export default CreditPdf;
