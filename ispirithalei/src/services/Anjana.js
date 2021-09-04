import React from 'react'
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home";
import {createTheme, ThemeProvider} from "@material-ui/core";
import PaymentNavigation from './components/patient-ui/Payments/PaymentNavigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./pages/patient-ui/About";
import Labasisstant from "./layouts/Labasisstant";
import Receptionist from "./layouts/Receptionist";
import PaymentOptionPage from './pages/patient-ui/PaymentOptionPage';
import UserForm from './components/patient-ui/Payments/UserForm';
import Checkout from './pages/patient-ui/Checkout';
import PaymentInvoice from './pages/patient-ui/PaymentInvoice';
const theme = createTheme({
    palette: {
        primary: {
            main: '#005792',
            dark: '#00204A',
            light: '#D9FAFF',
        },
    },

    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    shape : {
        borderRadius: '15px'
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Router>
            
            <Switch>
                    <Route path={["/payments", "/payments/info","/payments/checkout","/payments/invoice"]}>
                    <Header />
                    <PaymentNavigation />
                    <Switch>
                        

        <Route path="/payments/info">
          <UserForm />
        </Route>
        <Route path="/payments/checkout">
          <Checkout />
        </Route>
        <Route path="/payments/invoice">
          <PaymentInvoice />
          
        </Route>
        <Route path="/payments">
          <PaymentOptionPage />
        </Route>
                    </Switch>

                </Route>
                <Route path={["/staff/labassistant", "/staff/receptionist"]}>

                    <Switch>
                        <Route path="/staff/labassistant" component={Labasisstant} />
                        <Route path="/staff/receptionist" component={Receptionist} />
                    </Switch>

                </Route>

                <Route path={["/about", "/"]}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />

                    </Switch>

                </Route>
 
            </Switch>
        </Router>
    </ThemeProvider>
);
export default App