import React from "react";
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import PaymentNavigation from "./components/patient-ui/Payments/PaymentNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/patient-ui/About";
import LabReport from "./pages/patient-ui/LabReport";
import Labasisstant from "./layouts/Labasisstant";
import Receptionist from "./layouts/Receptionist";
import Footer from "./components/patient-ui/Footer/Footer";
import Login from "./components/staff-ui/Login";
import Doctor from "./layouts/Doctor";
import Inventory from "./layouts/Inventory";
import SysAdmin from "./layouts/SysAdmin";
import PaymentAdmin from "./layouts/PaymentAdmin";
import UserForm from "./components/patient-ui/Payments/UserForm";
import Checkout from "./pages/patient-ui/Checkout";
import PaymentInvoice from "./pages/patient-ui/PaymentInvoice";
import PaymentOptionPage from "./pages/patient-ui/PaymentOptionPage";
import MobileQrPay from "./pages/patient-ui/MobileQrPay";
import QRpage from "./pages/patient-ui/QRpage";
import RefundPage from "./pages/patient-ui/RefundsPage";
import PageNotFound from "./pages/PageNotFound";
import PatientAppointment from "./layouts/PatientAppointment";
import PrivateRoute from "./PrivateRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005792",
      dark: "#00204A",
      light: "#D9FAFF",
    },
  },

  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: "15px",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/staff/">
        <Route
          path={[
            "/staff/inventorymanager",
            "/staff/receptionist",
            "/staff/doctor",
            "/staff/sysadmin",
            "/staff/labassistant",
            "/staff/paymentadmin",
          ]}
        >
          <Switch>
            <Route path="/staff/inventorymanager" component={Inventory} />
            <Route path="/staff/receptionist" component={Receptionist} />
            <Route path="/staff/labassistant" component={Labasisstant} />
            <Route path="/staff/doctor" component={Doctor} />
            <Route path="/staff/sysadmin" component={SysAdmin} />
            <Route path="/staff/paymentadmin" component={PaymentAdmin} />
          </Switch>
        </Route>
        </PrivateRoute>
        <Route path={["/payments", "/patient", "/about", "/labreports"]}>
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/labreports" component={LabReport} />
            <Route path="/patient" component={PatientAppointment} />
            <Route path="/payments">
              <PaymentNavigation />
              <Switch>
                <Route path="/payments/info">
                  <UserForm />
                </Route>
                <Route path="/payments/refund">
                  <RefundPage />
                </Route>
                <Route path="/payments/checkout">
                  <Checkout />
                </Route>
                <Route path="/payments/mobileqr">
                  <MobileQrPay />
                </Route>
                <Route path="/payments/qrcode">
                  <QRpage />
                </Route>
                <Route path="/payments/invoice">
                  <PaymentInvoice />
                </Route>
                <Route path="/payments">
                  <PaymentOptionPage />
                </Route>
              </Switch>
            </Route>
          </Switch>
          <Footer />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);
export default App;
