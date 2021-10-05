import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import PrivateRoute from "./PrivateRoute";
import Header from "./components/patient-ui/Header/Header";
const PaymentNavigation = lazy(() => import("./components/patient-ui/Payments/PaymentNavigation"));
const LabReport = lazy(() => import("./pages/patient-ui/LabReport"));
const ClientLabReport = lazy(() => import("./pages/patient-ui/ClientLabReport"));
const Footer = lazy(() => import("./components/patient-ui/Footer/Footer"));
const Login = lazy(() => import("./components/staff-ui/Login"));
const PaymentAdmin = lazy(() => import("./layouts/PaymentAdmin"));
const UserForm = lazy(() => import("./components/patient-ui/Payments/UserForm"));
const PaymentOptionPage = lazy(() => import("./pages/patient-ui/PaymentOptionPage"));
const MobileQrPay = lazy(() => import("./pages/patient-ui/MobileQrPay"));
const QRpage = lazy(() => import("./pages/patient-ui/QRpage"));
const RefundPage = lazy(() => import("./pages/patient-ui/RefundsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PatientAppointment = lazy(() => import("./layouts/PatientAppointment"));
const Doctor = lazy(() => import("./layouts/Doctor"));
const Inventory = lazy(() => import("./layouts/Inventory"));
const SysAdmin = lazy(() => import("./layouts/SysAdmin"));
const Pharmasist = lazy(() => import("./layouts/Pharmasist"));
const Home = lazy(() => import("./pages/patient-ui/Home"));
const Labasisstant = lazy(() => import("./layouts/Labasisstant"));
const Receptionist = lazy(() => import("./layouts/Receptionist"));
const About = lazy(() => import("./pages/patient-ui/About"));

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
        <Suspense fallback={<CircularProgress style={{position:"absolute",left:"50%",top:"50%"}}/>}>
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
                    "/staff/pharmasist",
                  ]}
              >
                <Switch>
                  <Route path="/staff/inventorymanager" component={Inventory} />
                  <Route path="/staff/receptionist" component={Receptionist} />
                  <Route path="/staff/labassistant" component={Labasisstant} />
                  <Route path="/staff/doctor" component={Doctor} />
                  <Route path="/staff/sysadmin" component={SysAdmin} />
                  <Route path="/staff/paymentadmin" component={PaymentAdmin} />
                  <Route path="/staff/pharmasist" component={Pharmasist} />
                </Switch>
              </Route>
            </PrivateRoute>
            <Route path={["/payments", "/patient", "/about", "/labreports","/labreport/download/:id"]}>
              <Header />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/labreports" component={LabReport} />
                <Route path="/labreport/download/:id" component={ClientLabReport} />
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
                      <UserForm />
                    </Route>
                    <Route path="/payments/mobileqr">
                      <MobileQrPay />
                    </Route>
                    <Route path="/payments/qrcode">
                      <QRpage />
                    </Route>
                    <Route path="/payments/invoice">
                      <UserForm />
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
        </Suspense>
      </Router>
    </ThemeProvider>
);
export default App;

