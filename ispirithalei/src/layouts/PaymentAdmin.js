import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css";
import { Switch, Route } from "react-router-dom";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Mobile from "@material-ui/icons/MobileFriendly";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { Typography } from "@material-ui/core";
import CreditCardPayments from "../pages/staff-ui/paymenentAdmin/creditCardPayments";

const PaymentAdmin = () => {
  const user = {
    name: "Anjana Samarakoon",
    role: "Payment Admin",

    list: [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon" />,
        // style={inline-size: max-content;}
        iconlabel: (
          <Typography style={{ inlineSize: "max-content" }}>
            Dashboard
          </Typography>
        ),
        id: 1,
      },
      {
        path: "/creditCard",
        icon: <CreditCardIcon className="sidebarIcon" />,
        iconlabel: (
          <Typography style={{ inlineSize: "max-content" }}>
            Creditcard Payments
          </Typography>
        ),
        id: 2,
      },
      {
        path: "/mobilePay",
        icon: <Mobile className="sidebarIcon" />,
        iconlabel: (
          <Typography style={{ inlineSize: "max-content" }}>
            Mobile-pay Payments
          </Typography>
        ),
        id: 3,
      },
      {
        path: "/refunds",
        icon: <LocalAtmIcon className="sidebarIcon" />,
        iconlabel: (
          <Typography style={{ inlineSize: "max-content" }}>Refunds</Typography>
        ),
        id: 4,
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <Sidebar user={user} />
        <div className="others">
          <Topbar style={{}} page={user.list} />
          <Switch>
            <Route path="/staff/PaymentAdmin/creditCard">
              <CreditCardPayments />
            </Route>
            <Route path="/staff/PaymentAdmin/mobilePay">
              <h1>Hello Mobile</h1>
            </Route>
            <Route path="/staff/PaymentAdmin/refunds">
              <h1>Hello Refunds</h1>
            </Route>
            <Route path="/staff/PaymentAdmin/">
              <h1>Hello kollo</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default PaymentAdmin;
