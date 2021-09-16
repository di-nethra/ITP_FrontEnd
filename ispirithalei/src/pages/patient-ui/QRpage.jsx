import React from "react";
import QRCode from "qrcode.react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";

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
