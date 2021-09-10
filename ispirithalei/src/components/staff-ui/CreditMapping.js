import React from "react";
import { Card, CardActionArea, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  actionArea: {
    padding: "20px",
  },
});

export default function CreditMapping(props) {
  const classes = useStyles();
  console.log(props.creditCards);
  return (
    <Grid container spacing={8} justifyContent={"space-evenly"}>
      {props.creditCards.length ? (
        props.creditCards.map((creditCard, index) => (
          <Grid item xl={4} lg={4} key={index}>
            <Card className={classes.root}>
              <CardActionArea className={classes.actionArea} href="">
                <Typography align="center">{creditCard.payment_id}</Typography>
                <Typography align="center">{creditCard.email}</Typography>
                <Typography align="center">{creditCard.name}</Typography>
                <Typography align="center">{creditCard.amount}</Typography>
                <Typography align="center">{creditCard.date}</Typography>
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
