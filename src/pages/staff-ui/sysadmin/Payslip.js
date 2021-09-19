import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import ISPIRITHALEI from "../../../assets/1.png";
import "../../../components/staff-ui/sidebar/sidebar.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const earnings = [
  { name: "Basic Salary", price: "$9.99" },
  { name: "House Rent Allowence", price: "$3.45" },
  { name: "Gas Allowence", price: "$6.51" },
];

const deductions = [
  { name: "Professional Tax", price: "$9.99" },
  { name: "VAT", price: "$3.45" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Payslip = (props) => {
  const classes = useStyles();

  return (
    <>
      <div ref={ref}>
        <React.Fragment>
          <Card >
            <CardContent>
              <div className="logo">
                <a className="logo1" href="/">
                  <img
                    src={ISPIRITHALEI}
                    alt="brandLogo"
                    className="img-logo"
                  />
                </a>
              </div>
              <Typography variant="h4" gutterBottom>
                Ispirithale
              </Typography>
              <p>No 13 West Cross st, Colombo 1</p>
              <p>Email Ispirithalei@gmail.com</p>
              <p>Phone 0118573636</p>

              <br></br>
              <br></br>
              <p>Payslip for month September</p>

              <br></br>
              <br></br>

              <p>Earnings</p>
              <List disablePadding>
                {earnings.map((earning) => (
                  <ListItem  key={earning.name}>
                    <ListItemText primary={earning.name} />
                    <Typography variant="body2">{earning.price}</Typography>
                  </ListItem>
                ))}
                <br></br>
                <p>Deductions &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; test </p>
                {deductions.map((deduction) => (
                  <ListItem  key={deduction.name}>
                    <ListItemText primary={deduction.name} />
                    <Typography variant="body2">{deduction.price}</Typography>
                  </ListItem>
                ))}
                <br></br>
                <ListItem >
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" >
                    $34.06
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </React.Fragment>
      </div>
      <Pdf targetRef={ref} filename="past.pdf">
        {({ toPdf }) => <button onClick={toPdf}> Download </button>}
      </Pdf>
    </>
  );
};

export default Payslip;
