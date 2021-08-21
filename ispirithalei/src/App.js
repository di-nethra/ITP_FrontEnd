import React from 'react'
import Header from "./components/patient-ui/Header/Header";
import Home from "./pages/patient-ui/Home";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./pages/patient-ui/About";
import Labasisstant from "./layouts/Labasisstant";
import Receptionist from "./layouts/Receptionist";

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
)
export default App