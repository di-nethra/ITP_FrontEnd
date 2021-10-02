import React from "react";
import QRCode from "qrcode.react";
import { useRef } from "react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";
import qrVideo from "../../assets/images/qrVideo.mp4";
import Button from "@material-ui/core/Button";
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
    height: "200px",
    marginLeft: "300px",
    paddingTop: "80px",
    textAlign: "center",
  },
  video: {
    height: "400px",
  },
  qrvid: {
    textAlign: "center",
  },
  buttons: {
    marginLeft: "950px",
    paddingRight: "100px",
  },
  videoButton: {
    marginTop: "20px",
    width: "200px",
    marginBottom: "10px",
    background: "#3C4257",
    "&:hover": {
      color: "black",
      backgroundColor: "#D9FAFF",
    },
  },
});

function QRpage() {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  const handlestop = () => {
    vidRef.current.pause();
  };
  const classes = useStyles();
  return (
    <div>
      <Grid xs={12} container justifyContent="center">
        <Typography className={classes.qrText} variant="h2">
          Scan the QR and Pay
        </Typography>
      </Grid>
      <Grid container xs={12} className={classes.qrvid}>
        <Grid item xs={6} className={classes.qrcode}>
          <Card container className={classes.card}>
            <QRCode value="https://www.paygo.lk/Home/Pay" />,
          </Card>
        </Grid>

        <Grid item xs={6}>
          <video
            ref={vidRef}
            className={classes.video}
            style={{ border: "solid" }}
          >
            <source src={qrVideo} type="video/mp4" />
          </video>
        </Grid>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            className={classes.videoButton}
            color="primary"
            onClick={handlePlayVideo}
          >
            PLAY
          </Button>
          <Button
            variant="contained"
            className={classes.videoButton}
            color="primary"
            onClick={handlestop}
          >
            Stop
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default QRpage;
