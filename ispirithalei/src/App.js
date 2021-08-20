import React from 'react';
import Receptionist from "./layouts/Receptionist";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Labasisstant from "./layouts/Labasisstant";
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home"
import About from "./pages/patient-ui/About"
import {ThemeProvider,createTheme} from "@material-ui/core";

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
        <Route path={["/labassistant", "/receptionist"]}>

                <Switch>
                    <Route path="/labassistant" component={Labasisstant} />
                    <Route path="/receptionist" component={Receptionist} />
                </Switch>

        </Route>
        {/* Layout 1 is last because it is used for the root "/" and will be greedy */}
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
        )

export default App
