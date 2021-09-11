import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Alert } from "@material-ui/lab";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import paymentCreditService from "../../services/paymentCredit.service";
const useStyles = makeStyles({
  root: {
    width: "1150px",
  },
  actionArea: {
    padding: "20px",
  },
  layout: {
    maxWidth: "fit-content",
  },
  rows: {
    paddingLeft: "10px",
  },
  icons: {
    paddingLeft: "0px",
  },
  deleteIcon: {
    color: "red",
  },
  editIcon: {
    color: "#005792",
  },
  Headings: {
    color: "#005792",
    paddingBottom: "10px",
  },
  hover: {
    "&:hover": {
      background: "#D9FAFF",
    },
  },
});

export default function CreditMapping(props) {
  function deleteRecord(event) {
    var paymentid = event.currentTarget.value;
    paymentCreditService
      .remove(paymentid)
      .then(() => {
        alert("succuess delete");
      })
      .catch(() => {
        alert("error Delete");
      });
    alert("Hello " + event.currentTarget.value);
    console.log(event.target.value);
  }
  const classes = useStyles();
  console.log(props.creditCards);
  return (
    <Grid container spacing={1}>
      {props.creditCards.length ? (
        props.creditCards.map((creditCard, index) => (
          <Grid className={classes.layout} item xl={12} lg={12} key={index}>
            <Card className={classes.root}>
              <CardActionArea className={classes.actionArea} href="">
                <Grid container justifyContent="space-between">
                  <Grid item xs={1.5}>
                    <Typography className={classes.Headings}>
                      Payment ID
                    </Typography>
                    <Typography align="center">
                      {creditCard.payment_id}
                    </Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Email
                    </Typography>
                    <Typography align="center">{creditCard.email}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Client Name
                    </Typography>
                    <Typography align="center">{creditCard.name}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Amount
                    </Typography>
                    <Typography align="center">{creditCard.amount}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Date of Payment
                    </Typography>
                    <Typography align="center">{creditCard.date}</Typography>
                  </Grid>
                  <Grid container item xs={2} className={classes.rows}>
                    <Grid item>
                      <Button className={classes.hover}>
                        <EditIcon className={classes.editIcon} />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.hover}
                        value={creditCard.payment_id}
                        onClick={deleteRecord}
                      >
                        <DeleteIcon className={classes.deleteIcon} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <h1>No creditCard found</h1>
      )}
    </Grid>
  );
}
