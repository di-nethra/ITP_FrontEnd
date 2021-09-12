import React, { useEffect, useState } from "react";
import paymentCreditService from "../../services/paymentCredit.service";
import { useParams } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { Grid, useTheme } from "@material-ui/core";
import CreditMapping from "./CreditMapping";

const DisplayCredit = () => {
  const theme = useTheme();

  const [creditCards, setcreditCards] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    getCreditCardByID(id);
  }, [id]);

  const getCreditCardByID = () => {
    paymentCreditService
      .getAll()
      .then((response) => {
        setcreditCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  return loading ? (
    <Grid container justifyContent="space-evenly">
      <Grid item xl={4} lg={4}>
        <Skeleton
          style={{ borderRadius: theme.shape.borderRadius }}
          variant="rect"
          width={1000}
          height={88}
        />
      </Grid>
      <Grid item xl={4} lg={4}>
        <Skeleton
          style={{ borderRadius: theme.shape.borderRadius }}
          variant="rect"
          width={320}
          height={88}
        />
      </Grid>
    </Grid>
  ) : (
    <CreditMapping creditCards={creditCards} />
  );
};

export default DisplayCredit;
