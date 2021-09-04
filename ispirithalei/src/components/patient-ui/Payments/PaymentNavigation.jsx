import React from "react";
import { Breadcrumbs, Typography, Link, Grid } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import PaymentOptionPage from "../../../pages/patient-ui/PaymentOptionPage";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ListIcon from "@material-ui/icons/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DescriptionIcon from "@material-ui/icons/Description";
import UserForm from "./UserForm";
import { Checkout } from "../../../pages/patient-ui/Checkout";
import PaymentInvoice from "../../../pages/patient-ui/PaymentInvoice";

const useStyles = makeStyles((theme) => ({
  navigation: {
    height: "70px",
    borderRadius: "20px",
    placeContent: "center",
    backgroundColor: "#F5F4F4",
    border: "groove",
    marginTop: "100px",
    marginBottom: "100px",
    "&:hover": {
      color: "#D9FAFF",
    },
  },
  link: {
    display: "flex",
  },
  icon: {
    paddingRight: "5px",
  },
}));

const PaymentNavigation = (props) => {
  //   console.log(props);
  //   const { history, location } = props;
  //   const { pathname } = location;
  //   console.log(pathname);
  //   const pathnames = pathname.split("/").filter((x) => x);
  //   console.log(pathnames);
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.navigation}>
        <Breadcrumbs>
          <Link
            className={classes.link}
            color="inherit"
            onClick={() => history.push("/options")}
          >
            <CreditCardIcon className={classes.icon} /> Payment Options
          </Link>
          <Link
            color="inherit"
            className={classes.link}
            onClick={() => history.push("/info")}
          >
            <ListIcon className={classes.icon} />
            Customer Details
          </Link>
          <Link
            className={classes.link}
            color="inherit"
            onClick={() => history.push("/checkout")}
          >
            <ShoppingCartIcon className={classes.icon} />
            Checkout
          </Link>
          <Link
            className={classes.link}
            color="inherit"
            onClick={() => history.push("/invoice")}
          >
            <DescriptionIcon className={classes.icon} /> Invoice
          </Link>
        </Breadcrumbs>
      </Grid>

      <Switch>
        <Route path="/options">
          <PaymentOptionPage />
        </Route>
        <Route path="/info">
          <UserForm />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/invoice">
          <PaymentInvoice />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(PaymentNavigation);
