import React from "react";
import { Button, Grid, Slide, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stethoscope from "./Stethescope";
import styles from "../patientUI.module.css";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    marginBottom: "10rem",
    overflow: "hidden",
    overflowX: "hidden",
  },

  heading: {
    padding: "20px 0 10px 0",
    fontWeight: 700,
  },

  text: {
    padding: "10px 0 20px 0",
  },

  button: {
    fontSize: "16px",
    padding: "12px 36px",
  },
});

function WelcomeMessage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Slide direction="up" in={true} timeout={1000}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography className={classes.heading} variant="h4">
              CHANNEL THE BEST IN THE COUNTRY
            </Typography>
            <Typography className={classes.text}>
              we are changing the way you see your doctor. channel your doctor
              and meet your doctor with almost no waiting time. make an
              appointment now and get yourself ahead of the queue
            </Typography>

            <Link to="patient" style={{ textDecoration: "none" }} >
              <Button
                className={classes.button}
                variant={"contained"}
                size={"large"}
                color="primary"
              >
                Channel Now
              </Button>
            </Link>

          </Grid>
        </Slide>
        <Slide in={true} direction="up" timeout={1000}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={styles.stethoscope}
          >
            <Stethoscope />
          </Grid>
        </Slide>
      </Grid>
    </div>
  );
}

export default WelcomeMessage;
