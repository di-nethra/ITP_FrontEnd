import React from "react";
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/patient-ui/About";
import Labasisstant from "./layouts/Labasisstant";
import Receptionist from "./layouts/Receptionist";
import Footer from "./components/patient-ui/Footer/Footer";
import Login from "./components/staff-ui/Login";
import Doctor from "./layouts/Doctor";
import Inventory from "./layouts/Inventory";
import SysAdmin from "./layouts/SysAdmin";
import EForm from "./pages/patient-ui/ChanellForm";

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
        <Route
          path={[
            "/staff/inventorymanager",
            "/staff/receptionist",
            "/login",
            "/staff/doctor",
            "/staff/sysadmin",
            "/staff/labassistant",
          ]}
        >
          <Switch>
            <Route path="/staff/inventorymanager" component={Inventory} />
            <Route path="/staff/receptionist" component={Receptionist} />
            <Route path="/login" component={Login} />
            <Route path="/staff/labassistant" component={Labasisstant} />
            <Route path="/staff/doctor" component={Doctor} />
            <Route path="/staff/sysadmin" component={SysAdmin} />
          </Switch>
        </Route>

        <Route path={["/patient/newappointment", "/about", "/"]}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/patient/newappointment" component={EForm} />
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);
export default App;
